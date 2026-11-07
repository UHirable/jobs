// CV templates page: count downloads per template + suggest the next step by region.
(() => {
  const count = (path, title) => { try { if (window.goatcounter && goatcounter.count) goatcounter.count({ path, title, event: true }); } catch (e) {} };

  // Region from the device time zone (no location permission, nothing sent anywhere)
  let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
  const MENA = {
    "Africa/Cairo": ["Egypt", "egypt.html"],
    "Asia/Riyadh": ["Saudi Arabia", "saudi-arabia.html"],
    "Asia/Dubai": ["the UAE", "uae.html"],
    "Asia/Qatar": ["Qatar", "qatar.html"],
    "Asia/Kuwait": ["Kuwait", "kuwait.html"],
    "Asia/Bahrain": ["Bahrain", "bahrain.html"],
  };
  const US = /^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|Indiana\/.+|Kentucky\/.+|North_Dakota\/.+)$|^Pacific\/Honolulu$/;
  let region, text, href;
  if (MENA[tz]) { region = "mena-" + MENA[tz][1].replace(".html", ""); text = `<b>Your CV is ready!</b> See open jobs in ${MENA[tz][0]} →`; href = MENA[tz][1]; }
  else if (US.test(tz)) { region = "us"; text = "<b>Your CV is ready!</b> Check how it matches our open roles →"; href = "jobs.html"; }
  else { region = "other"; text = "<b>Your CV is ready!</b> Browse open jobs →"; href = "jobs.html"; }

  let shown = false;
  function showNext() {
    if (shown) return; shown = true;
    const st = document.createElement("style");
    st.textContent = ".uh-next{position:fixed;left:50%;bottom:max(18px,env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:9998;width:min(560px,calc(100% - 32px));display:flex;align-items:center;gap:10px;background:#fff;color:#141a52;border:1.5px solid #e6e9ff;border-radius:18px;padding:12px 12px 12px 18px;box-shadow:0 20px 40px -14px rgba(5,11,63,.45);animation:uhNextIn .35s ease-out}" +
      ".uh-next a{flex:1;color:#0112ff;font-weight:700;text-decoration:none;font-size:.95rem;line-height:1.35}.uh-next a b{color:#141a52}" +
      ".uh-next button{flex:none;width:34px;height:34px;border:0;border-radius:50%;background:#eef1ff;color:#141a52;font-size:1.1rem;font-weight:800;cursor:pointer}" +
      "@keyframes uhNextIn{from{opacity:0;transform:translate(-50%,16px)}to{opacity:1;transform:translate(-50%,0)}}" +
      "@media (prefers-reduced-motion:reduce){.uh-next{animation:none}}" +
      "@media (max-width:720px){.uh-next{bottom:calc(max(18px,env(safe-area-inset-bottom,0px)) + 72px)}}";
    document.head.appendChild(st);
    const bar = document.createElement("div"); bar.className = "uh-next"; bar.setAttribute("role", "status");
    bar.innerHTML = `<a href="${href}">${text}</a><button type="button" aria-label="Close">×</button>`;
    bar.querySelector("button").addEventListener("click", () => bar.remove());
    bar.querySelector("a").addEventListener("click", () => count("cv-templates/next-" + region, "CV templates → jobs (" + region + ")"));
    document.body.appendChild(bar);
  }

  // Download clicks: Word file, or Google Docs button in the same card
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a"); if (!a) return;
    const href = a.getAttribute("href") || "";
    let tpl = (href.match(/cv-template-([a-z0-9-]+)\.docx/) || [])[1], fmt = "word";
    if (!tpl && /docs\.google\.com/.test(href)) {
      let box = a.parentElement;
      for (let i = 0; i < 5 && box && !box.querySelector('a[href*="cv-template-"]'); i++) box = box.parentElement;
      const w = box && box.querySelector('a[href*="cv-template-"]');
      tpl = w ? (w.getAttribute("href").match(/cv-template-([a-z0-9-]+)\.docx/) || [])[1] : "unknown"; fmt = "google-docs";
    }
    if (!tpl) return;
    count(`download/${tpl}-${fmt}`, `Download CV template: ${tpl} (${fmt === "word" ? "Word" : "Google Docs"})`);
    setTimeout(showNext, 600);
  });
})();
