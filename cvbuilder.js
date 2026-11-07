// Free CV Builder — everything runs in the browser. Nothing is uploaded or stored on any server.
(() => {
  const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
  const esc = (t) => String(t || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const state = { tpl: "classic", name: "", title: "", city: "", email: "", phone: "", linkedin: "", summary: "", skills: "", langs: "", certs: "", exp: [], edu: [], proj: [] };
  const KEY = "uh-cv-builder";
  try { const saved = JSON.parse(localStorage.getItem(KEY) || "null"); if (saved && typeof saved === "object") Object.assign(state, saved); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  // ---------- form ----------
  const F = ["name", "title", "city", "email", "phone", "linkedin", "summary", "skills", "langs", "certs"];
  F.forEach((k) => { const el = $("#f-" + k); if (!el) return; el.value = state[k] || ""; el.addEventListener("input", () => { state[k] = el.value; save(); render(); }); });
  function rowHTML(kind, i, r) {
    if (kind === "exp") return `<div class="cb-row" data-k="exp" data-i="${i}"><div class="cb-2"><input placeholder="Job title" data-f="role" value="${esc(r.role)}"><input placeholder="Company, City" data-f="org" value="${esc(r.org)}"></div><div class="cb-2"><input placeholder="Start (e.g. Jan 2023)" data-f="from" value="${esc(r.from)}"><input placeholder="End (or Present)" data-f="to" value="${esc(r.to)}"></div><textarea rows="3" placeholder="One achievement per line. Start with a verb, add a number:&#10;Led a team of 4 to launch X, growing revenue 25%" data-f="bul">${esc(r.bul)}</textarea><button type="button" class="cb-del" aria-label="Remove">✕</button></div>`;
    if (kind === "edu") return `<div class="cb-row" data-k="edu" data-i="${i}"><div class="cb-2"><input placeholder="Degree (e.g. BSc Computer Science)" data-f="deg" value="${esc(r.deg)}"><input placeholder="University" data-f="org" value="${esc(r.org)}"></div><div class="cb-2"><input placeholder="Years (e.g. 2019 – 2023)" data-f="yr" value="${esc(r.yr)}"><input placeholder="GPA / honours (optional)" data-f="note" value="${esc(r.note)}"></div><button type="button" class="cb-del" aria-label="Remove">✕</button></div>`;
    return `<div class="cb-row" data-k="proj" data-i="${i}"><div class="cb-2"><input placeholder="Project name" data-f="name" value="${esc(r.name)}"><input placeholder="Tech / link" data-f="tech" value="${esc(r.tech)}"></div><textarea rows="2" placeholder="What you built and the result" data-f="bul">${esc(r.bul)}</textarea><button type="button" class="cb-del" aria-label="Remove">✕</button></div>`;
  }
  function renderRows(kind) { const box = $("#rows-" + kind); box.innerHTML = state[kind].map((r, i) => rowHTML(kind, i, r)).join(""); }
  ["exp", "edu", "proj"].forEach((kind) => {
    renderRows(kind);
    $("#add-" + kind).addEventListener("click", () => { state[kind].push(kind === "exp" ? { role: "", org: "", from: "", to: "", bul: "" } : kind === "edu" ? { deg: "", org: "", yr: "", note: "" } : { name: "", tech: "", bul: "" }); renderRows(kind); save(); render(); $("#rows-" + kind).lastElementChild.querySelector("input").focus(); });
    $("#rows-" + kind).addEventListener("input", (e) => { const row = e.target.closest(".cb-row"); if (!row) return; state[kind][+row.dataset.i][e.target.dataset.f] = e.target.value; save(); render(); });
    $("#rows-" + kind).addEventListener("click", (e) => { if (!e.target.classList.contains("cb-del")) return; const row = e.target.closest(".cb-row"); state[kind].splice(+row.dataset.i, 1); renderRows(kind); save(); render(); });
  });
  if (!state.exp.length && !state.edu.length) { state.exp.push({ role: "", org: "", from: "", to: "", bul: "" }); state.edu.push({ deg: "", org: "", yr: "", note: "" }); renderRows("exp"); renderRows("edu"); }
  $$(".cb-tpl button").forEach((b) => { b.classList.toggle("on", b.dataset.t === state.tpl); b.addEventListener("click", () => { state.tpl = b.dataset.t; $$(".cb-tpl button").forEach((x) => x.classList.toggle("on", x === b)); save(); render(); }); });
  $("#cb-clear").addEventListener("click", () => { if (!confirm("Clear everything?")) return; localStorage.removeItem(KEY); location.reload(); });

  // ---------- preview ----------
  const lines = (t) => String(t || "").split(/\n/).map((x) => x.replace(/^[-•*]\s*/, "").trim()).filter(Boolean);
  const list = (t) => String(t || "").split(/[,\n·]/).map((x) => x.trim()).filter(Boolean);
  function sections() {
    const grad = state.tpl === "grad"; const S = [];
    const expS = state.exp.filter((r) => r.role || r.org).length ? { h: grad ? "Internships & Experience" : "Experience", items: state.exp.filter((r) => r.role || r.org).map((r) => ({ t: [r.role, r.org].filter(Boolean).join("  —  "), d: [r.from, r.to].filter(Boolean).join(" – "), b: lines(r.bul) })) } : null;
    const eduS = state.edu.filter((r) => r.deg || r.org).length ? { h: "Education", items: state.edu.filter((r) => r.deg || r.org).map((r) => ({ t: [r.deg, r.org].filter(Boolean).join("  —  "), d: r.yr, b: r.note ? [r.note] : [] })) } : null;
    const projS = state.proj.filter((r) => r.name).length ? { h: "Projects", items: state.proj.filter((r) => r.name).map((r) => ({ t: [r.name, r.tech].filter(Boolean).join("  —  "), d: "", b: lines(r.bul) })) } : null;
    const skS = list(state.skills).length ? { h: "Skills", text: list(state.skills).join("  ·  ") } : null;
    const lgS = list(state.langs).length ? { h: "Languages", text: list(state.langs).join("  ·  ") } : null;
    const ctS = lines(state.certs).length ? { h: "Certificates", items: [{ t: "", d: "", b: lines(state.certs) }] } : null;
    const sumS = state.summary.trim() ? { h: "Summary", text: state.summary.trim() } : null;
    if (grad) [sumS, eduS, projS, expS, skS, lgS, ctS].forEach((x) => x && S.push(x)); else [sumS, expS, skS, eduS, projS, lgS, ctS].forEach((x) => x && S.push(x));
    return S;
  }
  function render() {
    const pv = $("#cb-pv"); pv.className = "cb-page " + state.tpl;
    const contact = [state.title, state.city, state.email, state.phone, state.linkedin].filter(Boolean).join("  ·  ");
    let h = `<div class="n">${esc(state.name) || '<span class="ph">Your Name</span>'}</div><div class="c">${esc(contact) || '<span class="ph">Job title · City · Email · Phone · LinkedIn</span>'}</div>`;
    const S = sections();
    if (!S.length) h += `<p class="ph" style="margin-top:30px">Start typing on the left. Your CV appears here as you go.</p>`;
    for (const s of S) { h += `<h3>${esc(s.h)}</h3>`; if (s.text) h += `<p>${esc(s.text)}</p>`; if (s.items) for (const it of s.items) { if (it.t) h += `<div class="it"><b>${esc(it.t)}</b>${it.d ? `<span>${esc(it.d)}</span>` : ""}</div>`; if (it.b.length) h += `<ul>${it.b.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`; } }
    pv.innerHTML = h;
    const words = pv.innerText.trim().split(/\s+/).filter(Boolean).length; $("#cb-words").textContent = words + " words · " + (words > 650 ? "likely 2 pages" : "about 1 page");
  }
  render();

  // ---------- exports ----------
  function plainText() { const S = sections(); let t = `${state.name}\n${[state.title, state.city, state.email, state.phone, state.linkedin].filter(Boolean).join(" · ")}\n`; for (const s of S) { t += `\n${s.h.toUpperCase()}\n`; if (s.text) t += s.text + "\n"; if (s.items) for (const it of s.items) { if (it.t) t += it.t + (it.d ? " | " + it.d : "") + "\n"; it.b.forEach((b) => t += "- " + b + "\n"); } } return t; }
  const dl = (blob, name) => { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 5000); if (window.UHNextStep) window.UHNextStep("builder"); };
  const fname = () => ((state.name || "my-cv").trim().replace(/[^a-z0-9]+/gi, "-").toLowerCase() || "my-cv") + "-cv";
  async function ensureDocx() { if (window.docx) return; await new Promise((r, j) => { const s = document.createElement("script"); s.src = "lib-docx.js?v=1"; s.onload = r; s.onerror = j; document.head.appendChild(s); }); }
  async function exportDocx() {
    const btns = [$("#cb-docx"), $("#cb-docx2")]; btns.forEach((b) => { b.disabled = true; b.textContent = "Building…"; });
    try {
      await ensureDocx(); const D = window.docx; const accent = state.tpl === "modern" ? "141A52" : state.tpl === "grad" ? "1A7A3C" : null; const gold = state.tpl === "modern";
      const P = [], run = (t, o = {}) => new D.TextRun({ text: t, font: "Calibri", size: 21, ...o });
      P.push(new D.Paragraph({ children: [run(state.name || "Your Name", { bold: true, size: 40, color: accent || "000000" })], spacing: { after: 0 } }));
      P.push(new D.Paragraph({ children: [run([state.title, state.city, state.email, state.phone, state.linkedin].filter(Boolean).join("  ·  "), { size: 20, color: "444444" })], spacing: { after: 120 } }));
      const H = (t) => new D.Paragraph({ children: [run(t.toUpperCase(), { bold: true, size: 22, color: accent || "000000" })], spacing: { before: 200, after: 40 }, border: gold ? { bottom: { style: D.BorderStyle.SINGLE, size: 8, color: "F5B70A", space: 1 } } : undefined });
      for (const s of sections()) {
        P.push(H(s.h));
        if (s.text) P.push(new D.Paragraph({ children: [run(s.text)], spacing: { after: 40 } }));
        if (s.items) for (const it of s.items) {
          if (it.t) P.push(new D.Paragraph({ children: [run(it.t, { bold: true }), ...(it.d ? [run("  |  " + it.d, { color: "555555" })] : [])], spacing: { after: 20 } }));
          for (const b of it.b) P.push(new D.Paragraph({ children: [run(b)], bullet: { level: 0 }, spacing: { after: 20 } }));
        }
      }
      const doc = new D.Document({ sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1150, right: 1150 } } }, children: P }] });
      const blob = await D.Packer.toBlob(doc); dl(blob, fname() + ".docx"); track("docx");
    } catch (e) { alert("Couldn't build the Word file. Try the PDF button instead."); }
    btns.forEach((b, i) => { b.disabled = false; b.textContent = i ? "⬇ Download Word" : "Download Word"; });
  }
  function exportPdf() { track("pdf"); window.print(); }
  function track(k) { if (window.goatcounter && goatcounter.count) try { goatcounter.count({ path: "cv-builder/" + k, title: "CV builder " + k, event: true }); } catch (e) {} }
  $("#cb-docx").addEventListener("click", exportDocx); $("#cb-docx2").addEventListener("click", exportDocx);
  $("#cb-pdf").addEventListener("click", exportPdf); $("#cb-pdf2").addEventListener("click", exportPdf);
  $("#cb-match").addEventListener("click", () => { try { sessionStorage.setItem("uh-cv-text", plainText()); } catch (e) {} location.href = "cv-match.html#from-builder"; });
})();
