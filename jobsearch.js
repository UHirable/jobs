// Live jobs on the Search Jobs page. Our own jobs render first (script.js); this adds live results below via our Cloudflare worker.
(() => {
  const API = "https://uhirable-jobs.amel-moussa10.workers.dev/";
  const CC = { "United States": "us", "Egypt": "eg", "Bahrain": "bh", "Kuwait": "kw", "Qatar": "qa", "Saudi Arabia": "sa", "United Arab Emirates": "ae" };
  const ORDER = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Egypt"];
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sel = $("#country-filter"), box = $("#search-box"), wrap = $("#live-wrap"), list = $("#live-list"), status = $("#live-status"), more = $("#live-more"), ownList = $("#jobs-list"), countEl = $("#jobs-count");
  if (!sel || !wrap) return;

  // add live-search countries to the dropdown (after our own countries)
  const have = new Set([...sel.options].map((o) => o.value));
  const grp = document.createElement("optgroup"); grp.label = "Live search · Gulf & Egypt";
  ORDER.forEach((c) => { if (!have.has(c)) { const o = document.createElement("option"); o.value = c; o.textContent = c; grp.appendChild(o); } });
  if (grp.children.length) sel.appendChild(grp);

  let page = 1, shown = 0, total = 0, seq = 0;
  const clean = (h) => String(h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  const ago = (d) => { const t = Date.parse(d); if (!t) return ""; const days = Math.floor((Date.now() - t) / 864e5); return days <= 0 ? "Today" : days === 1 ? "Yesterday" : days < 30 ? days + " days ago" : ""; };
  const card = (j, i) => { const desc = clean(j.snippet).slice(0, 170); const chips = [j.location && `<span class="chip">📍 ${esc(j.location)}</span>`, j.type && `<span class="chip pc">${esc(j.type)}</span>`, j.salary && `<span class="chip gold">${esc(j.salary)}</span>`, ago(j.updated) && `<span class="chip">${ago(j.updated)}</span>`].filter(Boolean).join("");
    return `<article class="job-card live-card"><span class="promo-badge live">Live</span><div class="job-head"><div class="icon3d ${i % 2 ? "gold" : ""} js-ini">${esc((j.company || "?").trim().charAt(0).toUpperCase())}</div><div><h3>${esc(j.title)}</h3><p class="meta">${esc(j.company || "Company not listed")}${j.source && j.source !== "jooble" ? " · via " + esc(j.source) : ""}</p></div></div><div class="chips">${chips}</div><p class="desc">${esc(desc)}${desc.length >= 170 ? "…" : ""}</p><div class="job-actions"><a class="btn btn-primary btn-sm apply-btn" href="${esc(j.link)}" target="_blank" rel="noopener nofollow">View &amp; apply →</a><a class="btn btn-sm btn-soft" href="cv-match.html">Check my CV fit</a></div></article>`; };

  async function live(reset) {
    const country = sel.value, kw = box.value.trim();
    const liveCountry = CC[country] && country !== "United States";
    const wantLive = liveCountry || (kw && (country === "United States" || country === "all"));
    if (!wantLive) { wrap.hidden = true; return; }
    const cc = CC[country] || "us";
    if (reset) { page = 1; shown = 0; list.innerHTML = ""; }
    const my = ++seq; wrap.hidden = false; status.className = "js-bar"; status.textContent = "Loading live jobs in " + (country === "all" ? "the United States" : country) + "…"; more.hidden = true;
    if (liveCountry && ownList.querySelector(".empty")) { ownList.innerHTML = ""; if (countEl) countEl.textContent = ""; }
    try {
      const r = await fetch(API + "?src=jooble&cc=" + cc + "&q=" + encodeURIComponent(kw) + "&page=" + page);
      if (my !== seq) return; if (!r.ok) throw new Error("HTTP " + r.status);
      const d = await r.json(); const jobs = d.jobs || []; total = d.totalCount || jobs.length;
      list.insertAdjacentHTML("beforeend", jobs.map((j, i) => card(j, shown + i)).join("")); shown += jobs.length;
      const where = country === "all" ? "the United States" : country;
      status.innerHTML = shown ? `<b>${total.toLocaleString()}</b> live jobs${kw ? ` for <b>${esc(kw)}</b>` : ""} in ${esc(where)} · from hundreds of job sites` : `No live jobs${kw ? ` for <b>${esc(kw)}</b>` : ""} in ${esc(where)} right now. Try a shorter keyword.`;
      if (!shown) status.className = "js-bar empty";
      more.hidden = !(jobs.length >= 20 && shown < total);
      try { if (window.goatcounter && goatcounter.count) goatcounter.count({ path: "live-jobs/" + cc, title: "Live jobs " + cc, event: true }); } catch (e) {}
    } catch (e) { if (my === seq) { status.className = "js-bar empty"; status.textContent = "Couldn't load live jobs right now. Please try again in a moment."; } }
  }
  let t; const kick = () => { clearTimeout(t); t = setTimeout(() => live(true), 450); };
  sel.addEventListener("change", () => live(true)); box.addEventListener("input", kick);
  $("#live-next").addEventListener("click", () => { page++; live(false); });
  const u = new URLSearchParams(location.search); if (u.get("country") && [...sel.options].some((o) => o.value === u.get("country"))) { sel.value = u.get("country"); sel.dispatchEvent(new Event("change")); }
  if (u.get("q")) { box.value = u.get("q"); box.dispatchEvent(new Event("input", { bubbles: true })); }
})();
