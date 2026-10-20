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
const jobCountries = (j) => arr(j.countries || j.locations || j.country);
const jobId = (j) => j.id || String(j.title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const jobPage = (j) => j.page || `job.html?id=${encodeURIComponent(jobId(j))}`;
const jobApply = (j) => j.applyLink || (typeof APPLY_FORM !== "undefined" ? APPLY_FORM : "");
const jobChips = (j) =>
  [
    ...arr(j.tags).map((t) => `<span class="chip">${escapeHTML(t)}</span>`),
    ...jobCountries(j).map((c) => `<span class="chip gold">📍 ${escapeHTML(c)}</span>`)
  ].join("");

document.addEventListener("click", (e) => {
  const a = e.target.closest(".apply-btn");
  if (a && (!a.getAttribute("href") || a.getAttribute("href") === "#")) {
    e.preventDefault();
    alert("Applications open soon — please check back!");
  }
});

// ---------- Jobs list + country filter (jobs.html) ----------
const list = document.getElementById("jobs-list");
if (list && typeof JOBS !== "undefined") {
  const countrySelect = document.getElementById("country-filter");
  const searchBox = document.getElementById("search-box");
  const countEl = document.getElementById("jobs-count");

  [...new Set(JOBS.flatMap(jobCountries))].sort().forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    countrySelect.appendChild(opt);
  });

  function render() {
    const country = countrySelect.value;
    const q = searchBox.value.trim().toLowerCase();

    const filtered = JOBS.filter((j) => {
      const matchCountry = country === "all" || jobCountries(j).includes(country);
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

    list.innerHTML = filtered
      .map((j, i) => `
        <article class="job-card">
          <div class="job-head">
            <div class="icon3d ${i % 2 ? "gold" : ""}">${escapeHTML(j.title.charAt(0))}</div>
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
    document.getElementById("job-title").textContent = "Job not found";
    document.getElementById("job-meta").textContent = "This position may have been filled or removed.";
    document.getElementById("job-body").innerHTML =
      `<div class="panel" style="text-align:center"><a class="btn btn-primary" href="jobs.html">See all open jobs</a></div>`;
  } else {
    document.title = `${j.title} – U Hirable`;
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
      list("Key responsibilities", j.responsibilities) +
      list("Requirements", j.requirements) +
      list("Nice to have", j.preferred) +
      list("What to submit", j.submissions) +
      `<div class="detail-apply"><a class="btn btn-primary apply-btn" href="${escapeHTML(jobApply(j) || "#")}" target="_blank" rel="noopener">Apply now →</a></div>`;
  }
}
