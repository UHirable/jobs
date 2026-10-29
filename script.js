// ---------- Footer year (all pages) ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- 3D tilt effect (cards follow the mouse) ----------
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function bindTilt(root = document) {
  if (!canHover || reduceMotion) return;
  root.querySelectorAll("[data-tilt]").forEach((el) => {
    if (el.dataset.tiltBound) return;
    el.dataset.tiltBound = "1";
    const max = parseFloat(el.dataset.tiltMax || 12);

    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.transition = "transform .08s linear";
      el.style.transform =
        `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateY(-6px)`;
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
    });
    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform .5s ease";
      el.style.transform = "";
    });
  });
}
bindTilt();

// ---------- Hero typing bubble ----------
const typedEl = window.__cloud ? null : document.getElementById("typed");
if (typedEl) {
  const lines = [
    "Hi, I'm Amel 👋",
    "I've always believed the right job changes more than a career…",
    "…it can change the life of an entire family.",
    "As a Global Talent Acquisition Partner, I see it every day.",
    "That's why I built U Hirable…",
    "…to help job seekers get hired, companies hire great talent, and everyone grow their careers."
  ];
  if (reduceMotion) {
    typedEl.textContent = lines.join(" ");
  } else {
    let li = 0, ci = 0, deleting = false;
    const tick = () => {
      const full = lines[li];
      const chars = Array.from(full);
      ci += deleting ? -1 : 1;
      typedEl.textContent = chars.slice(0, ci).join("");
      let wait = deleting ? 28 : 55;
      if (!deleting && ci === chars.length) { deleting = true; wait = 1700; }
      else if (deleting && ci === 0) { deleting = false; li = (li + 1) % lines.length; wait = 350; }
      setTimeout(tick, wait);
    };
    typedEl.textContent = "";
    setTimeout(tick, 500);
  }
}

// ---------- Intro video modal ----------
const introBtn = document.getElementById("play-intro");
const introModal = document.getElementById("intro-modal");
const introVideo = document.getElementById("intro-video");
if (introBtn && introModal && introVideo) {
  const close = () => { introVideo.pause(); introModal.hidden = true; };
  introBtn.addEventListener("click", () => {
    introModal.hidden = false;
    introVideo.currentTime = 0;
    introVideo.play().catch(() => {});
  });
  document.getElementById("close-intro").addEventListener("click", close);
  introModal.addEventListener("click", (e) => { if (e.target === introModal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !introModal.hidden) close(); });
}

// ---------- Reveal on scroll ----------
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 })
  : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// ---------- Employer form (employer.html) ----------
const form = document.getElementById("employer-form");
if (form) {
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("YOUR_FORM_ID")) {
      status.textContent = "Form isn't connected yet — add your Formspree ID in employer.html.";
      status.className = "form-status error";
      return;
    }

    const button = form.querySelector("button");
    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = "Thank you! We received your request and will contact you soon.";
      status.className = "form-status success";
    } catch {
      status.textContent = "Something went wrong. Please try again.";
      status.className = "form-status error";
    } finally {
      button.disabled = false;
      button.textContent = "Send request";
    }
  });
}

// ---------- Shared job helpers ----------
const arr = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const escapeHTML = (s = "") =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const WORLDWIDE = "Worldwide";
const jobCountries = (j) => arr(j.countries || j.locations || j.country);
const jobId = (j) => j.id || String(j.title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const jobPage = (j) => j.page || `job.html?id=${encodeURIComponent(jobId(j))}`;
const jobApply = (j) => {
  const link = j.applyLink || (typeof APPLY_FORM !== "undefined" ? APPLY_FORM : "");
  // Tally forms: pass the job name into the hidden "job" field
  if (/^https:\/\/tally\.so\//.test(link)) {
    return link + (link.includes("?") ? "&" : "?") + "job=" + encodeURIComponent(`${j.title} – ${j.company}`);
  }
  return link;
};
const FLAG_CODES = {
  "United States": "us", "Canada": "ca", "United Kingdom": "gb", "Germany": "de", "Egypt": "eg",
  "Saudi Arabia": "sa", "UAE": "ae", "United Arab Emirates": "ae", "Jordan": "jo", "Lebanon": "lb",
  "Qatar": "qa", "Kuwait": "kw", "Bahrain": "bh", "Oman": "om", "France": "fr", "Netherlands": "nl",
  "Spain": "es", "Portugal": "pt", "Poland": "pl", "Ireland": "ie", "India": "in", "Singapore": "sg", "Australia": "au", "Brazil": "br", "Mexico": "mx"
};
// real flag images (emoji flags don't render on Windows)
const flagOf = (c) =>
  c === WORLDWIDE ? "🌍"
  : FLAG_CODES[c] ? `<img class="flag" src="https://flagcdn.com/w40/${FLAG_CODES[c]}.png" alt="${escapeHTML(c)}" width="20" height="15" loading="lazy">`
  : "📍";
const MATCH_NOTE = "Apply through U Hirable and get matched with this role and 1,000+ top companies.";
const jobChips = (j) =>
  [
    j.location
      ? `<span class="chip gold">📍 ${escapeHTML(j.location)}</span>`
      : "",
    ...arr(j.tags).map((t) => `<span class="chip">${escapeHTML(t)}</span>`),
    ...(j.location ? [] : jobCountries(j).map((c) => `<span class="chip gold">${c === WORLDWIDE ? "🌍" : "📍"} ${escapeHTML(c)}</span>`))
  ].join("");

document.addEventListener("click", (e) => {
  const a = e.target.closest(".apply-btn");
  if (a && (!a.getAttribute("href") || a.getAttribute("href") === "#")) {
    e.preventDefault();
    alert("Applications open soon — please check back!");
  }
});

// Job icons: AI engineer → computer + AI, software/tech engineer → laptop, everything else → briefcase
const ICON_SVG = (p) => `<svg class="ji" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const JOB_ICONS = {
  ai: ICON_SVG('<rect x="2.5" y="3.5" width="19" height="13" rx="2"/><path d="M8 20.5h8M12 16.5v4"/><path d="M7.6 13l1.9-6 1.9 6M8.2 11.2h2.6M14.6 7v6" stroke-width="1.8"/>'),
  tech: ICON_SVG('<rect x="4" y="4.5" width="16" height="11" rx="1.6"/><path d="M2 19.5h20"/><path d="M10 9l-2 1.5 2 1.5M14 9l2 1.5-2 1.5" stroke-width="1.7"/>'),
  job: ICON_SVG('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18M12 12v2"/>')
};
const jobIcon = (j) => {
  const t = j.title || "";
  if (/tooling engineer/i.test(t)) return JOB_ICONS.job;
  if (/\b(AI|ML)\b|machine learning/i.test(t) && /engineer|research|technical staff|scientist/i.test(t)) return JOB_ICONS.ai;
  if (/engineer|developer|software|technical staff|programmer/i.test(t)) return JOB_ICONS.tech;
  return JOB_ICONS.job;
};

// ---------- Jobs list + country filter (jobs.html) ----------
const list = document.getElementById("jobs-list");
if (list && typeof JOBS !== "undefined") {
  const countrySelect = document.getElementById("country-filter");
  const searchBox = document.getElementById("search-box");
  const countEl = document.getElementById("jobs-count");

  const all = JOBS.flatMap(jobCountries);
  const opts = [...new Set(all.filter((c) => c !== WORLDWIDE))].sort();
  if (all.includes(WORLDWIDE)) opts.unshift(WORLDWIDE);
  opts.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c === WORLDWIDE ? "🌍 Worldwide (remote, any country)" : c;
    countrySelect.appendChild(opt);
  });

  // Promo cards (Paraform + Remotive) shown first; Paraform only for its countries
  const PF_COUNTRIES = ["United States","United Kingdom","Canada","Austria","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland"];
  const REMOTIVE_LINK = "https://remotive.com/join?via=uhirable";
  function promoCards(country, q) {
    if (q) return "";
    const pf = (country === "all" || PF_COUNTRIES.includes(country)) ? `
        <article class="job-card promo-card pf-card">
          <span class="promo-badge">Get matched</span>
          <div class="job-head">
            <img class="promo-logo pf-logo" src="logo-paraform.svg" width="52" height="52" alt="Paraform">
            <div>
              <h3>Get matched with 1,000+ top companies</h3>
              <p class="meta">Paraform · AI, Tech, Sales &amp; GTM roles</p>
            </div>
          </div>
          <div class="chips"><span class="chip pc">📍 United States</span><span class="chip pc">📍 United Kingdom</span><span class="chip pc">📍 Canada</span><span class="chip pc">📍 Europe</span><span class="chip">Remote</span><span class="chip">Hybrid</span><span class="chip">On-site</span></div>
          <p class="desc">Didn't find your role? Share your profile once and get matched with open roles at top startups and tech companies.</p>
          <div class="job-actions"><a class="btn btn-sm promo-btn" href="${PARAFORM_LINK}" target="_blank" rel="noopener">Get matched →</a></div>
        </article>` : "";
    const rm = `
        <article class="job-card promo-card rm-card">
          <span class="promo-badge">More remote jobs</span>
          <div class="job-head">
            <img class="promo-logo" src="logo-remotive.svg" width="52" height="52" alt="Remotive">
            <div>
              <h3>Browse more remote jobs on Remotive</h3>
              <p class="meta">Remotive · Remote job board</p>
            </div>
          </div>
          <div class="chips"><span class="chip pc">🌍 Worldwide</span><span class="chip pc">100% Remote</span><span class="chip">Tech</span><span class="chip">Marketing</span><span class="chip">Sales</span><span class="chip">Customer Support</span></div>
          <p class="desc">Hand-picked remote jobs at tech companies, updated every day. Work from anywhere.</p>
          <div class="job-actions"><a class="btn btn-sm promo-btn" href="${REMOTIVE_LINK}" target="_blank" rel="noopener sponsored">Browse remote jobs →</a></div>
        </article>`;
    return pf + rm;
  }

  function render() {
    const country = countrySelect.value;
    const q = searchBox.value.trim().toLowerCase();

    const filtered = JOBS.filter((j) => {
      const matchCountry = country === "all" || jobCountries(j).includes(country) || jobCountries(j).includes(WORLDWIDE);
      const text = [j.title, j.company, j.industry, j.brief, ...arr(j.tags), ...jobCountries(j)].join(" ").toLowerCase();
      return matchCountry && (!q || text.includes(q));
    });

    countEl.textContent = `${filtered.length} open position${filtered.length === 1 ? "" : "s"}`;

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="empty">
          <div class="icon3d"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></div>
          No jobs match your filters right now. Check back soon!
        </div>`;
      return;
    }

    list.innerHTML = promoCards(country, q) + filtered
      .map((j, i) => `
        <article class="job-card">
          <div class="job-head">
            <div class="icon3d ${i % 2 ? "gold" : ""}">${jobIcon(j)}</div>
            <div>
              <h3>${escapeHTML(j.title)}</h3>
              <p class="meta">${escapeHTML(j.company || "")}${j.industry ? " · " + escapeHTML(j.industry) : ""}</p>
            </div>
          </div>
          <div class="chips">${jobChips(j)}</div>
          <p class="desc">${escapeHTML(j.brief || "")}</p>
          <div class="job-actions">
            <a class="btn btn-primary btn-sm apply-btn" href="${escapeHTML(jobApply(j))}" target="_blank" rel="noopener">Apply now →</a>
            <a class="btn btn-sm btn-soft" href="${jobPage(j)}">More details</a>
          </div>
        </article>`)
      .join("");
  }

  countrySelect.addEventListener("change", render);
  searchBox.addEventListener("input", render);
  render();
}

// ---------- Single job page (job.html) ----------
const jobContent = document.getElementById("job-content");
if (jobContent && typeof JOBS !== "undefined") {
  const id = window.JOB_ID || new URLSearchParams(location.search).get("id");
  const j = JOBS.find((x) => jobId(x) === id);

  if (!j) {
    document.getElementById("job-title").textContent = "This position has been filled";
    document.getElementById("job-meta").textContent = "Thanks for your interest! Browse our other open roles.";
    document.getElementById("job-body").innerHTML =
      `<div class="panel" style="text-align:center"><a class="btn btn-primary" href="jobs.html">See all open jobs</a></div>`;
  } else {
    if (!window.JOB_ID) document.title = `${j.title} – U Hirable`;
    document.getElementById("job-title").textContent = j.title;
    document.getElementById("job-meta").textContent = [j.company, j.industry].filter(Boolean).join(" · ");
    document.getElementById("job-chips").innerHTML = jobChips(j);
    document.getElementById("job-apply").href = jobApply(j) || "#";

    const list = (title, items) =>
      arr(items).length ? `<h2>${title}</h2><ul>${arr(items).map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>` : "";
    // Share buttons
    const url = new URL(jobPage(j), location.href).href;
    const msg = `${j.title} – we're hiring! Apply here:`;
    document.getElementById("share-li").href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
    document.getElementById("share-wa").href = "https://wa.me/?text=" + encodeURIComponent(msg + " " + url);
    document.getElementById("share-copy").addEventListener("click", async () => {
      const status = document.getElementById("copy-status");
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        const t = document.createElement("textarea");
        t.value = url; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove();
      }
      status.textContent = "Link copied ✓";
      setTimeout(() => (status.textContent = ""), 2500);
    });

    jobContent.innerHTML =
      `<h2>Role overview</h2><p>${escapeHTML(j.overview || j.brief || "")}</p>` +
      (j.compensation ? `<h2>Compensation</h2><p>${escapeHTML(j.compensation)}</p>` : "") +
      list("Key responsibilities", j.responsibilities) +
      (arr(j.responsibilityGroups).length
        ? `<h2>Key responsibilities</h2>` + j.responsibilityGroups.map(([g, items]) =>
            `<h3>${escapeHTML(g)}</h3><ul>${arr(items).map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>`).join("")
        : "") +
      list("Requirements", j.requirements) +
      list("Nice to have", j.preferred) +
      list("What to submit", j.submissions) +
      (j.matchNote ? `<p class="match-note big">✨ ${MATCH_NOTE}</p>` : "") +
      `<div class="detail-apply"><a class="btn btn-primary apply-btn" href="${escapeHTML(jobApply(j) || "#")}" target="_blank" rel="noopener">Apply now →</a></div>`;
    if (j.matchNote) {
      const p = document.querySelector(".apply-card > p");
      if (p) p.textContent = MATCH_NOTE;
    }
  }
}

// Nav dropdown (For Job Seekers): click to open on touch screens
document.querySelectorAll(".dd-t").forEach((b) => {
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    const d = b.parentElement;
    document.querySelectorAll(".dd.open").forEach((x) => { if (x !== d) x.classList.remove("open"); });
    d.classList.toggle("open");
    b.setAttribute("aria-expanded", d.classList.contains("open"));
  });
});
document.addEventListener("click", () => document.querySelectorAll(".dd.open").forEach((d) => d.classList.remove("open")));

// ---------- Site search (header) ----------
(function(){
  const q=document.getElementById("hs-q"),res=document.getElementById("hs-res");
  if(!q)return;
  let loading=null;
  const load=()=>loading||(loading=new Promise(r=>{if(window.SEARCH_INDEX)return r();const s=document.createElement("script");s.src="search-index.js?v=6";s.onload=r;s.onerror=r;document.head.appendChild(s);}));
  const esc=(s="")=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const norm=s=>String(s).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"");
  const ORDER={"Page":0,"Job":1,"CV Tool":2,"Career Tool":3,"Hiring Partner":4,"Job Site":5,"Event":6};
  function run(){
    const v=norm(q.value.trim());
    if(v.length<2||!window.SEARCH_INDEX){res.hidden=true;return;}
    const words=v.split(/\s+/);
    const hits=window.SEARCH_INDEX.map(e=>{const t=norm(e.t),all=t+" "+norm(e.d)+" "+norm(e.k);
      if(!words.every(w=>all.includes(w)))return null;
      let s=0;if(t.startsWith(v))s+=6;if(t.includes(v))s+=3;words.forEach(w=>{if(t.includes(w))s+=2;});
      return {e,s};}).filter(Boolean).sort((a,b)=>b.s-a.s||ORDER[a.e.k]-ORDER[b.e.k]).slice(0,8);
    res.innerHTML=hits.length?hits.map(({e})=>`<a href="${esc(e.u)}"${e.x?' target="_blank" rel="noopener"':""}><span class="hs-k k-${esc(e.k.replace(/\s+/g,"-").toLowerCase())}">${esc(e.k)}</span><span class="hs-t"><b>${esc(e.t)}</b><small>${esc(e.d)}</small></span>${e.x?"<i>↗</i>":""}</a>`).join("")
      :`<div class="hs-none">No results for “${esc(q.value.trim())}”</div>`;
    res.hidden=false;
  }
  q.addEventListener("focus",()=>load().then(run));
  q.addEventListener("input",()=>load().then(run));
  q.addEventListener("keydown",e=>{
    const links=[...res.querySelectorAll("a")];const i=links.indexOf(document.activeElement);
    if(e.key==="Enter"&&links[0]){e.preventDefault();links[0].click();}
    if(e.key==="ArrowDown"&&links[0]){e.preventDefault();links[0].focus();}
    if(e.key==="Escape"){res.hidden=true;q.blur();}
  });
  res.addEventListener("keydown",e=>{const links=[...res.querySelectorAll("a")];const i=links.indexOf(document.activeElement);
    if(e.key==="ArrowDown"){e.preventDefault();(links[i+1]||links[i]).focus();}
    if(e.key==="ArrowUp"){e.preventDefault();i>0?links[i-1].focus():q.focus();}});
  document.addEventListener("click",e=>{if(!e.target.closest(".hsearch"))res.hidden=true;});
})();
