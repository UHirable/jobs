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

// ---------- Jobs list + country filter (jobs.html) ----------
const list = document.getElementById("jobs-list");
if (list && typeof JOBS !== "undefined") {
  const countrySelect = document.getElementById("country-filter");
  const searchBox = document.getElementById("search-box");
  const countEl = document.getElementById("jobs-count");

  const arr = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const locs = (j) => arr(j.countries || j.locations || j.country);

  // Build the country dropdown from the jobs' candidate locations
  const countries = [...new Set(JOBS.flatMap(locs))].sort();
  countries.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    countrySelect.appendChild(opt);
  });

  const escape = (s = "") =>
    String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  const formLink = typeof APPLY_FORM !== "undefined" ? APPLY_FORM : "";
  const applyHref = (j) => j.applyLink || formLink;

  const isClosed = (j) => j.deadline && new Date(j.deadline) < new Date();
  const fmtDeadline = (d) => {
    const dt = new Date(d);
    if (isNaN(dt)) return d;
    return dt.toLocaleString("en-GB", {
      weekday: "short", day: "numeric", month: "short",
      hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Africa/Cairo"
    }) + " (Cairo)";
  };

  list.addEventListener("click", (e) => {
    const a = e.target.closest(".apply-btn");
    if (a && (a.classList.contains("closed") || !a.getAttribute("href"))) {
      e.preventDefault();
      alert(a.classList.contains("closed") ? "Applications for this role are closed." : "Applications open soon — please check back!");
    }
  });

  function render() {
    const country = countrySelect.value;
    const q = searchBox.value.trim().toLowerCase();

    const filtered = JOBS.filter((j) => {
      const l = locs(j);
      const matchCountry = country === "all" || l.includes(country);
      const text = [j.title, j.company, j.industry, j.brief, j.description, ...arr(j.tags), ...l].join(" ").toLowerCase();
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
      .map((j, i) => {
        const closed = isClosed(j);
        const l = locs(j);
        const chips = [
          ...arr(j.tags).map((t) => `<span class="chip">${escape(t)}</span>`),
          ...l.map((c) => `<span class="chip gold">📍 ${escape(c)}</span>`),
          j.deadline ? `<span class="chip ${closed ? "closed" : "deadline"}">⏰ ${closed ? "Closed" : "Apply by " + escape(fmtDeadline(j.deadline))}</span>` : ""
        ].join("");
        return `
        <article class="job-card ${closed ? "is-closed" : ""}">
          <div class="job-head">
            <div class="icon3d ${i % 2 ? "gold" : ""}">${escape(j.title.charAt(0))}</div>
            <div>
              <h3>${escape(j.title)}</h3>
              <p class="meta">${escape(j.company || "")}${j.industry ? " · " + escape(j.industry) : ""}</p>
            </div>
          </div>
          <div class="chips">${chips}</div>
          <p class="desc">${escape(j.brief || j.description || "")}</p>
          <a class="btn btn-primary btn-sm apply-btn ${closed ? "closed" : ""}" href="${escape(applyHref(j))}" target="_blank" rel="noopener">${closed ? "Applications closed" : "Apply now →"}</a>
        </article>`;
      })
      .join("");
  }

  countrySelect.addEventListener("change", render);
  searchBox.addEventListener("input", render);
  render();
}
