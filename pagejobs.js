// Live jobs for "X jobs in <country>" pages. Reads data-q / data-cc from #pj-list and loads from our Cloudflare worker.
(() => {
  const API = "https://uhirable-jobs.amel-moussa10.workers.dev/";
  const list = document.getElementById("pj-list"); if (!list) return;
  const q = list.dataset.q || "", cc = list.dataset.cc || "ae", country = list.dataset.country || "";
  const status = document.getElementById("pj-status"), more = document.getElementById("pj-more"), next = document.getElementById("pj-next"), countEls = document.querySelectorAll(".pj-count");
  const esc = (t) => String(t || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clean = (h) => String(h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  const ago = (d) => { const t = Date.parse(d); if (!t) return ""; const days = Math.floor((Date.now() - t) / 864e5); return days <= 0 ? "Today" : days === 1 ? "Yesterday" : days < 30 ? days + " days ago" : ""; };
  const card = (j, i) => { const desc = clean(j.snippet).slice(0, 170); const chips = [j.location && `<span class="chip">📍 ${esc(j.location)}</span>`, j.type && `<span class="chip pc">${esc(j.type)}</span>`, j.salary && `<span class="chip gold">${esc(j.salary)}</span>`, ago(j.updated) && `<span class="chip">${ago(j.updated)}</span>`].filter(Boolean).join("");
    return `<article class="job-card live-card"><span class="promo-badge live">Live</span><div class="job-head"><div class="icon3d ${i % 2 ? "gold" : ""} js-ini">${esc((j.company || "?").trim().charAt(0).toUpperCase())}</div><div><h3>${esc(j.title)}</h3><p class="meta">${esc(j.company || "Company not listed")}${j.source && j.source !== "jooble" ? " · via " + esc(j.source) : ""}</p></div></div><div class="chips">${chips}</div><p class="desc">${esc(desc)}${desc.length >= 170 ? "…" : ""}</p><div class="job-actions"><a class="btn btn-primary btn-sm apply-btn" href="${esc(j.link)}" target="_blank" rel="noopener nofollow">View &amp; apply →</a><a class="btn btn-sm btn-soft" href="../cv-match.html">Check my CV fit</a></div></article>`; };
  let page = 1, shown = 0, total = 0;
  async function load() {
    status.className = "js-bar"; status.textContent = "Loading live " + q + " jobs in " + country + "…"; more.hidden = true;
    try {
      const r = await fetch(API + "?src=jooble&cc=" + cc + "&q=" + encodeURIComponent(q) + "&page=" + page);
      if (!r.ok) throw new Error("HTTP " + r.status);
      const d = await r.json(); const jobs = d.jobs || []; total = d.totalCount || jobs.length;
      list.insertAdjacentHTML("beforeend", jobs.map((j, i) => card(j, shown + i)).join("")); shown += jobs.length;
      countEls.forEach((e) => { e.textContent = total.toLocaleString(); });
      status.innerHTML = shown ? `<b>${total.toLocaleString()}</b> live ${esc(q)} jobs in ${esc(country)} · from hundreds of job sites · updated daily` : `No live ${esc(q)} jobs in ${esc(country)} right now. Check back tomorrow or <a href="../jobs.html">search all jobs</a>.`;
      if (!shown) status.className = "js-bar empty";
      more.hidden = !(jobs.length >= 20 && shown < total);
      try { if (window.goatcounter && goatcounter.count) goatcounter.count({ path: "live-pages/" + cc + "/" + q, title: "Live page " + q, event: true }); } catch (e) {}
    } catch (e) { status.className = "js-bar empty"; status.innerHTML = `Couldn't load live jobs right now. <a href="../jobs.html?country=${encodeURIComponent(country)}&q=${encodeURIComponent(q)}">Open the job search</a> instead.`; }
  }
  next.addEventListener("click", () => { page++; load(); });
  load();
})();
