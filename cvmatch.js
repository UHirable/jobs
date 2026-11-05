// CV vs Job Match Checker — runs 100% in the browser. Nothing is uploaded.
(() => {
  const $ = (s) => document.querySelector(s);
  const fileIn = $("#cm-file"), drop = $("#cm-drop"), fileOut = $("#cm-filestat"), cvText = $("#cm-cvtext"), jobTa = $("#cm-job"), go = $("#cm-go"), res = $("#cm-result"), err = $("#cm-err");
  const STOP = new Set(("the and for with that this from your you are our will have has not but can all any more than into over per via each new who their they them its was were been being also such as of to in on at by an a or is it be we us i we're you'll you're we'll about across after along among around because before between both during either every here how if may might must need other out own same should so some still then there these those through under until up very what when where which while why within without work working role team company looking join experience experienced years year strong ability able across including include etc plus required require requirements preferred bonus nice responsibilities responsible day days week weeks month months remote hybrid onsite on-site full-time part-time position candidate candidates ideal opportunity benefits salary apply application job jobs description skills skill knowledge understanding excellent good great best well high level senior junior lead mid build building develop developing drive driving help helping support supporting ensure ensuring manage managing own owning deliver delivering grow growing create creating make making use using used get got take takes").split(" "));
  const SYN = [["machine learning","ml"],["artificial intelligence","ai"],["javascript","js"],["typescript","ts"],["postgresql","postgres"],["kubernetes","k8s"],["google cloud","gcp"],["amazon web services","aws"],["microsoft azure","azure"],["power bi","powerbi"],["node.js","node","nodejs"],["react.js","react","reactjs"],["vue.js","vue"],["next.js","nextjs"],["c sharp","c#"],["golang","go"],["large language models","llm","llms"],["natural language processing","nlp"],["customer relationship management","crm"],["search engine optimization","seo"],["user experience","ux"],["user interface","ui"],["business development","bd","bdr"],["sales development","sdr"],["account executive","ae"],["profit and loss","p&l"],["financial planning and analysis","fp&a"],["key performance indicators","kpis","kpi"],["quality assurance","qa"],["continuous integration","ci/cd","ci"],["human resources","hr"],["bachelor's degree","bachelor","bachelors","bsc","ba"],["master's degree","master","masters","msc","mba"],["doctorate","phd"],["microsoft excel","excel"],["google sheets","sheets"],["microsoft office","ms office"],["project management","pm"],["product management","product manager"],["a/b testing","a/b tests","ab testing","experimentation"],["data visualization","dashboards","dashboard"],["communication skills","communication"],["problem solving","problem-solving"],["english","fluent english"],["arabic","fluent arabic"]];
  const SKILLS = ["python","sql","java","javascript","typescript","react","node","angular","vue","next.js","django","flask","spring","aws","gcp","azure","snowflake","databricks","dbt","airflow","kafka","spark","hadoop","bigquery","redshift","excel","powerpoint","word","tableau","power bi","looker","metabase","salesforce","hubspot","zendesk","intercom","jira","confluence","notion","figma","sketch","adobe","photoshop","illustrator","canva","product","design","marketing","sales","account executive","sdr","bdr","gtm","partnerships","finance","accounting","controller","cpa","fp&a","quickbooks","netsuite","xero","sap","oracle","machine learning","ml","ai","llm","nlp","deep learning","pytorch","tensorflow","scikit-learn","pandas","numpy","data engineer","data scientist","data analyst","analyst","analytics","statistics","a/b testing","devops","kubernetes","docker","terraform","linux","git","ci/cd","security","cybersecurity","recruiter","recruiting","sourcing","talent","hr","payroll","operations","project manager","product manager","program manager","engineering manager","scrum","agile","full stack","backend","frontend","mobile","ios","android","swift","kotlin","go","rust","c++","c#",".net","php","laravel","ruby","rails","scala","r","matlab","real estate","private equity","investment banking","consulting","law","legal","nurse","teacher","teaching","customer support","customer service","customer success","supply chain","logistics","procurement","fintech","mortgage","healthcare","saas","b2b","b2c","e-commerce","shopify","seo","sem","google ads","meta ads","content","copywriting","social media","email marketing","crm","ux","ui","research","qa","testing","selenium","cypress","api","rest","graphql","microservices","sql server","mysql","postgresql","mongodb","redis","elasticsearch","english","arabic","french","german","spanish","communication","leadership","negotiation","presentation","stakeholder","reporting","budget","forecasting","modeling","valuation","audit","tax","compliance","risk","kyc","aml","underwriting","credit","lending","banking","insurance","claims","clinical","pharma","biotech","lab","mechanical","electrical","civil","autocad","solidworks","plc","scada","hvac","maintenance","safety","warehouse","inventory","erp","wms","dispatch","fleet","driver","hospitality","chef","barista","retail","cashier","merchandising","inside sales","cold calling","lead generation","outbound","inbound","pipeline","quota","closing","enterprise","smb","mid-market","onboarding","training","coaching","mentoring","writing","editing","video","premiere","after effects","3d","blender","unity","unreal","game","animation","motion"];
  // Phrase-level synonyms: things people write that imply a skill/keyword.
  const PHRASES = [[/\b(led|lead|managed|manage|supervised|supervise|mentored|coached|headed)\b[^.]{0,40}\b(team|people|engineers|analysts|staff|reports|members)\b/, "leadership"],[/\b(built|build|created|designed|developed|maintained)\b[^.]{0,30}\b(dashboards?|reports?|visuali[sz]ations?)\b/, "data visualization"],[/\b(a\/b|ab) ?test/, "a/b testing"],[/\bpresent(ed|ing)?\b[^.]{0,30}\b(stakeholders?|leadership|executives?|clients?)\b/, "presentation"],[/\b(stakeholder|cross[- ]functional)\b/, "stakeholder"],[/\b(hired|hiring|recruit(ed|ing)?|sourc(ed|ing))\b/, "recruiting"],[/\b(forecast|forecasting|budget(ing)?)\b/, "forecasting"],[/\b(negotiat(ed|ing|ion))\b/, "negotiation"],[/\b(wrote|writing|authored|copy)\b/, "writing"],[/\b(trained|training|onboard(ed|ing)?)\b/, "training"],[/\b(automat(ed|ion|ing))\b/, "automation"],[/\b(scal(ed|ing)|high[- ]traffic|distributed systems?)\b/, "scalability"],[/\b(unit|integration|e2e|end[- ]to[- ]end) test(s|ing)\b/, "qa"],[/\b(pipeline|etl|elt)\b/, "data pipelines"],[/\b(rest(ful)?|api)s?\b/, "api"],[/\b(agile|scrum|sprint|kanban)\b/, "agile"],[/\b(okr|kpi)s?\b/, "kpis"],[/\b(cold[- ]call|outreach|prospect(ed|ing))\b/, "outbound"],[/\b(closed|closing|quota|pipeline)\b/, "sales"],[/\b(churn|retention|nps|csat)\b/, "customer success"],[/\b(figma|wireframe|prototype|mockup)s?\b/, "ux"],[/\b(seo|organic traffic|backlinks?)\b/, "seo"],[/\b(campaign|paid (ads|media)|ppc|google ads|meta ads)\b/, "marketing"],[/\b(p&l|profit and loss|gross margin|ebitda)\b/, "finance"],[/\b(reconcil(ed|iation)|month[- ]end|general ledger|gl)\b/, "accounting"],[/\b(fine[- ]tun(ed|ing)|rag|prompt|llm|gpt|transformer)s?\b/, "llm"],[/\b(docker|kubernetes|k8s|terraform|ci\/cd)\b/, "devops"],[/\b(aws|gcp|azure|cloud)\b/, "cloud"],[/\b(remote|distributed) (team|work)/, "remote collaboration"],[/\b(bilingual|fluent|native)\b[^.]{0,15}\b(arabic|english|french|german|spanish)\b/, "languages"]];
  const SOFT = new Set(["leadership","communication","presentation","stakeholder","negotiation","training","coaching","mentoring","writing","agile","remote collaboration","languages","problem solving","teamwork","collaboration","time management","adaptability","attention to detail","critical thinking","creativity","organization","customer service"]);
  const BAD = [["responsible for","Start with a verb: \"Led\", \"Built\", \"Grew\"."],["hard worker","Show it with a result instead."],["hardworking","Show it with a result instead."],["team player","Give an example of cross-team work."],["references available","Remove; recruiters ask when needed."],["detail-oriented","Prove it: \"zero reporting errors in 2 years\"."],["go-getter","Replace with a measurable win."],["think outside the box","Replace with a concrete idea you shipped."],["results-driven","Replace with the actual results."],["synergy","Plain language works better."],["duties included","Start with a verb instead."],["self-motivated","Show it with an initiative you started."],["excellent communication skills","Give an example: presented to 50+ stakeholders."],["objective:","Replace with a 2-line summary targeted at this role."],["curriculum vitae","Remove the title; your name is the title."]];
  const SUGGEST = { default: (k) => `Add a line where you used ${k}, e.g. "Used ${k} to …" with a number.` };
  function suggestion(k, soft) {
    const NAMES = { dbt: "dbt", "power bi": "Power BI", sql: "SQL", aws: "AWS", gcp: "GCP", "ci/cd": "CI/CD", llm: "LLM", nlp: "NLP", ml: "ML", ai: "AI", api: "API", seo: "SEO", crm: "CRM", hr: "HR", ux: "UX", ui: "UI", kpis: "KPIs", "fp&a": "FP&A", php: "PHP", ios: "iOS", "c++": "C++", "c#": "C#", ".net": ".NET", javascript: "JavaScript", typescript: "TypeScript", bigquery: "BigQuery", hubspot: "HubSpot", quickbooks: "QuickBooks", netsuite: "NetSuite", powerpoint: "PowerPoint", mongodb: "MongoDB", postgresql: "PostgreSQL", mysql: "MySQL", "scikit-learn": "scikit-learn", pytorch: "PyTorch", tensorflow: "TensorFlow", "node.js": "Node.js", "next.js": "Next.js" };
    const K = NAMES[k] || k.replace(/\b\w/g, (m) => m.toUpperCase());
    if (soft) return `Add one bullet that shows ${k}, e.g. "Led a cross-team project that …".`;
    if (/\b(sql|python|r|java|typescript|javascript|go|rust|c\+\+|c#|php|ruby|scala|kotlin|swift)\b/.test(k)) return `Add to Skills and to one bullet: "Wrote ${K} to …".`;
    if (/\b(tableau|power bi|looker|excel|dbt|airflow|snowflake|bigquery|redshift|databricks|spark|kafka|salesforce|hubspot|figma|jira|sap|netsuite|quickbooks)\b/.test(k)) return `Add to Tools and to one bullet: "Built … in ${K}".`;
    if (/\b(aws|gcp|azure|docker|kubernetes|terraform|ci\/cd|devops|cloud)\b/.test(k)) return `Add to Skills and one bullet: "Deployed … on ${K}".`;
    return SUGGEST.default(k);
  }
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (t) => { let x = " " + t.toLowerCase().replace(/[‘’]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ") + " "; for (const g of SYN) { const canon = g[0]; for (const a of g) { if (a === canon) continue; x = x.split(" " + a + " ").join(" " + canon + " ").split(" " + a + ",").join(" " + canon + ",").split(" " + a + ".").join(" " + canon + "."); } } return x; };
  const tokens = (t) => (t.match(/[a-z][a-z0-9+#.\-\/&]{1,}/g) || []).map((w) => w.replace(/[.\-\/]+$/, "")).filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w));
  const has = (text, k) => new RegExp("(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&") + "($|[^a-z0-9])").test(text);
  function years(t) { let m = 0; for (const x of t.matchAll(/(\d{1,2})\s*\+?\s*(?:years|yrs|year)/g)) m = Math.max(m, +x[1]); const yrs = [...t.matchAll(/\b(20\d\d|19\d\d)\b/g)].map((x) => +x[1]); if (yrs.length >= 2) m = Math.max(m, Math.min(40, Math.max(...yrs) - Math.min(...yrs))); if (/present|current/.test(t) && yrs.length) m = Math.max(m, Math.min(40, new Date().getFullYear() - Math.min(...yrs))); return m; }
  function jobYears(t) { const m = t.match(/(\d{1,2})\s*\+?\s*(?:-|to)?\s*(\d{1,2})?\s*\+?\s*(?:years|yrs)/); return m ? +m[1] : 0; }
  const GENERIC = new Set("small large big testing test tests present current previous data team teams tools tool insights insight business customer customers client clients product products service services platform platforms solution solutions process processes projects project systems system technical technology environment environments people person results result performance quality time global world international local based location office english emea apac latam north america europe".split(" "));
  function distinctive(jobN, jSkills) {
    const freq = {}; for (const w of tokens(jobN)) freq[w] = (freq[w] || 0) + 1;
    const part = (w) => jSkills.some((k) => k !== w && k.split(/[\s\/&.-]+/).includes(w));
    return Object.keys(freq).filter((w) => w.length > 3 && !SKILLS.includes(w) && !GENERIC.has(w) && !part(w)).sort((a, b) => freq[b] - freq[a]).slice(0, 40);
  }
  function phraseHits(text) { const out = new Set(); for (const [re, k] of PHRASES) if (re.test(text)) out.add(k); return out; }
  function analyse(cv, job) {
    const c = norm(cv), j = norm(job);
    const cPh = phraseHits(c), jPh = phraseHits(j);
    const hasC = (k) => has(c, k) || cPh.has(k);
    const jSkills = [...new Set([...SKILLS.filter((k) => has(j, k)), ...jPh])];
    const hit = jSkills.filter(hasC), miss = jSkills.filter((k) => !hasC(k));
    const dist = distinctive(j, jSkills); const dHit = dist.filter((w) => has(c, w)); const dMiss = dist.filter((w) => !has(c, w)).slice(0, 8);
    const sk = jSkills.length ? hit.length / jSkills.length : (dist.length ? dHit.length / dist.length : 0.5);
    const kw = dist.length ? dHit.length / dist.length : sk;
    const need = jobYears(j), have = years(c);
    let ex = need ? Math.min(1, have / need) : 0.85; if (!need && !have) ex = 0.7;
    const titleLine = (job.split("\n").find((l) => l.trim().length > 3) || "").toLowerCase(); const tTok = tokens(norm(titleLine)).slice(0, 6); const tHit = tTok.filter((w) => has(c, w)).length; const tb = tTok.length ? tHit / tTok.length : 0.5;
    const overall = Math.round(100 * (0.45 * sk + 0.25 * kw + 0.2 * ex + 0.1 * tb));
    // summary / headline check: do the first ~300 chars of the CV contain the job title words?
    const top = norm(cv.slice(0, 400)); const titleInTop = tTok.length ? tTok.filter((w) => has(top, w)).length / tTok.length : 0;
    // bad phrases
    const bad = BAD.filter(([p]) => c.includes(" " + p) || c.includes(p + " ")).map(([p, tip]) => ({ p, tip }));
    const hardMiss = miss.filter((k) => !SOFT.has(k)), softMiss = miss.filter((k) => SOFT.has(k));
    const hardHit = hit.filter((k) => !SOFT.has(k)), softHit = hit.filter((k) => SOFT.has(k));
    return { overall: Math.max(5, Math.min(98, overall)), sk: Math.round(sk * 100), kw: Math.round(kw * 100), ex: Math.round(ex * 100), hit, miss, hardHit, softHit, hardMiss, softMiss, dHit: dHit.slice(0, 10), dMiss, need, have, titleInTop, titleWords: tTok, bad };
  }
  function formatCheck(meta, text) {
    const issues = [], good = [];
    if (!meta) { if (text) good.push("Text file: readable by any ATS."); return { issues, good }; }
    if (meta.pages > 2) issues.push({ t: `${meta.pages} pages`, d: "Recruiters spend 7 seconds on a CV. Aim for 1 page (under 10 years) or 2 pages max." }); else good.push(`${meta.pages} page${meta.pages > 1 ? "s" : ""}: good length.`);
    if (meta.images > 0) issues.push({ t: `${meta.images} image${meta.images > 1 ? "s" : ""} or graphic${meta.images > 1 ? "s" : ""}`, d: "ATS can't read text inside images, photos, icons or skill bars. Use plain text." }); else good.push("No images or graphics: ATS-safe.");
    if (meta.cols) issues.push({ t: "Multi-column layout", d: "Many ATS read columns left-to-right across the page and scramble your text. Use a single column." }); else good.push("Single column: reads in order.");
    const odd = (meta.fonts || []).filter((f) => !/arial|helvetica|calibri|times|georgia|verdana|cambria|garamond|roboto|open ?sans|lato|inter|segoe|tahoma|trebuchet|sans-serif|serif|liberation|dejavu|noto|carlito|symbol/i.test(f));
    if (odd.length) issues.push({ t: "Unusual fonts", d: "Stick to Arial, Calibri, Helvetica or Georgia so every ATS and reader renders it." }); else good.push("Standard fonts.");
    if ((meta.chars || 0) < 300) issues.push({ t: "Very little selectable text", d: "If your CV is a scanned image or exported as a picture, ATS reads nothing. Export from Word/Google Docs as a text PDF." });
    return { issues, good };
  }
  function verdict(p) {
    if (p >= 75) return ["🎯 STRONG MATCH", "Apply now.", "Your CV already speaks the job's language. Tailor the summary line to this role and send it today.", "g"];
    if (p >= 55) return ["👍 GOOD MATCH", `Add ${"{n}"} keywords, then apply.`, "Your CV covers most of the must-haves. Recruiters and ATS filters look for the exact words in the ad, so add the missing ones where they're true for you.", "g"];
    if (p >= 35) return ["🤔 PARTIAL MATCH", "Fix the gaps before you apply.", "You match some requirements but important ones are missing. Add real experience with the missing keywords, or target a closer role.", "y"];
    return ["⚠️ WEAK MATCH", "This one is a stretch.", "Most of the must-haves aren't on your CV. Apply only if you can honestly add the missing skills, or use Lilo to find roles closer to your profile.", "r"];
  }
  let cv = "", lastResult = null;
  async function loadFile(f) {
    if (!f) return; fileOut.hidden = false; fileOut.className = "cm-file"; fileOut.textContent = "📄 " + f.name + " · reading…";
    try {
      const t = await Promise.race([window.UA_readFile(f), new Promise((_, j) => setTimeout(() => j(new Error("timeout")), 20000))]);
      if (!t || t.trim().length < 80) throw new Error("empty");
      cv = t; cvText.value = ""; fileOut.textContent = "📄 " + f.name + " · read ✓ (" + Math.round(t.split(/\s+/).length) + " words)";
    } catch (e) { cv = ""; fileOut.className = "cm-file bad"; fileOut.textContent = "Couldn't read " + f.name + ". Try a PDF or Word file with selectable text, or paste your CV text below."; }
  }
  fileIn.addEventListener("change", () => loadFile(fileIn.files[0]));
  try { const t = sessionStorage.getItem("uh-cv-text"); if (t && location.hash === "#from-builder") { cv = t; fileOut.hidden = false; fileOut.className = "cm-file"; fileOut.textContent = "📄 CV from the builder · loaded ✓"; sessionStorage.removeItem("uh-cv-text"); $("#cm-job").focus(); } } catch (e) {}
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", (e) => loadFile(e.dataTransfer.files[0]));
  async function jobFromLink(u) {
    const m = u.match(/job-([a-z0-9-]+)\.html/); if (!m) return null;
    if (!window.JOBS) { const r = await fetch("jobs.js?v=40").then((x) => x.text()); window.JOBS = new Function(r + ";return JOBS;")(); }
    const j = window.JOBS.find((x) => x.id === m[1]); if (!j) return null;
    return [j.title, j.company, j.brief, j.overview, ...(j.requirements || []), ...(j.responsibilities || []), j.compensation].filter(Boolean).join("\n");
  }
  go.addEventListener("click", async () => {
    err.hidden = true; const cvIn = cv || cvText.value.trim(); let job = jobTa.value.trim();
    if (cvIn.length < 80) { err.hidden = false; err.textContent = "Add your CV first: upload a PDF/Word file or paste the text."; return; }
    if (/^https?:\/\/\S+$/.test(job)) {
      if (/uhirable\.github\.io\/jobs\/job-/.test(job)) { job = await jobFromLink(job); }
      else { err.hidden = false; err.innerHTML = "I can't open links from other sites. Open the job page, select the description (Ctrl+A), copy it (Ctrl+C) and paste it here."; return; }
    }
    if (!job || job.length < 60) { err.hidden = false; err.textContent = "Paste the full job description (at least a few lines) so I can compare it properly."; return; }
    const r = analyse(cvIn, job); const [badge, head, body, cls] = verdict(r.overall);
    const n = r.miss.length + r.dMiss.length;
    lastResult = { pct: r.overall, badge, head };
    $("#cm-ring").style.setProperty("--p", r.overall); $("#cm-pct").textContent = r.overall + "%";
    $("#cm-badge").textContent = badge; $("#cm-badge").className = "cm-badge " + cls;
    $("#cm-head").textContent = head.replace("{n}", n); $("#cm-body").textContent = body;
    $("#cm-b1").style.setProperty("--w", r.sk + "%"); $("#cm-v1").textContent = r.sk + "%";
    $("#cm-b2").style.setProperty("--w", r.ex + "%"); $("#cm-v2").textContent = r.ex + "%";
    $("#cm-b3").style.setProperty("--w", r.kw + "%"); $("#cm-v3").textContent = r.kw + "%";
    const found = [...r.hardHit, ...r.softHit, ...r.dHit].slice(0, 16), missing = [...r.hardMiss, ...r.softMiss, ...r.dMiss].slice(0, 12);
    $("#cm-found-n").textContent = found.length; $("#cm-miss-n").textContent = missing.length;
    const pill = (k, soft) => `<span class="${soft ? "soft" : ""}">${esc(k)}</span>`;
    $("#cm-found").innerHTML = found.length ? found.map((k) => pill(k, SOFT.has(k))).join("") : "<span>No clear keyword matches</span>";
    $("#cm-miss").innerHTML = missing.length ? missing.map((k) => pill(k, SOFT.has(k))).join("") : "<span>Nothing important missing 🎉</span>";
    $("#cm-exp").textContent = r.need ? (r.have >= r.need ? `The ad asks for ${r.need}+ years; your CV shows about ${r.have}. ✓` : `The ad asks for ${r.need}+ years; your CV shows about ${r.have || "0"}. Make your years of experience explicit.`) : (r.have ? `Your CV shows about ${r.have} years of experience.` : "Add your years of experience clearly (e.g. \"4+ years in sales\").");
    // suggestions: one ready line per missing keyword
    const sug = [...r.hardMiss, ...r.softMiss].slice(0, 6);
    $("#cm-sug").innerHTML = sug.length ? sug.map((k) => `<li><b>${esc(k)}</b><span>${esc(suggestion(k, SOFT.has(k)))}</span></li>`).join("") : "<li><b>Nothing to add</b><span>Your CV already covers the must-haves. Tailor the summary and apply.</span></li>";
    // headline check
    const hl = $("#cm-headline");
    if (r.titleWords.length) { hl.className = "cm-note " + (r.titleInTop >= 0.5 ? "ok" : "warn"); hl.innerHTML = r.titleInTop >= 0.5 ? `<b>✓ Headline matches.</b> The top of your CV already mentions "${esc(r.titleWords.slice(0, 3).join(" "))}".` : `<b>✗ Headline doesn't match.</b> Put the job title (${esc(r.titleWords.slice(0, 3).join(" "))}) in your first 2 lines: that's the first thing ATS and recruiters look at.`; hl.hidden = false; } else hl.hidden = true;
    // bad phrases
    const bp = $("#cm-bad");
    if (r.bad.length) { bp.hidden = false; $("#cm-bad-list").innerHTML = r.bad.map((x) => `<li><b>"${esc(x.p)}"</b><span>${esc(x.tip)}</span></li>`).join(""); } else bp.hidden = true;
    // format check
    const fc = formatCheck(window.UA_lastMeta, !window.UA_lastMeta && cv === "" ? cvIn : null);
    const fmt = $("#cm-format");
    if (fc.issues.length || fc.good.length) { fmt.hidden = false; $("#cm-fmt-list").innerHTML = fc.issues.map((x) => `<li class="bad"><b>✗ ${esc(x.t)}</b><span>${esc(x.d)}</span></li>`).join("") + fc.good.map((g) => `<li class="ok"><b>✓ ${esc(g)}</b></li>`).join(""); $("#cm-fmt-h").textContent = fc.issues.length ? `ATS format check: ${fc.issues.length} issue${fc.issues.length > 1 ? "s" : ""}` : "ATS format check: all clear"; } else fmt.hidden = true;
    res.hidden = false; res.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.goatcounter && goatcounter.count) try { goatcounter.count({ path: "cv-match/check", title: "CV match check", event: true }); } catch (e) {}
  });
  // ---- Share my score (image generated in the browser, no personal data) ----
  async function shareImage() {
    if (!lastResult) return;
    const W = 1080, H = 1080, cv2 = document.createElement("canvas"); cv2.width = W; cv2.height = H; const x = cv2.getContext("2d");
    const g = x.createRadialGradient(W * .3, H * .2, 50, W * .5, H * .5, 900); g.addColorStop(0, "#2f3cff"); g.addColorStop(.5, "#0112ff"); g.addColorStop(1, "#070a4a"); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.textAlign = "center"; x.fillStyle = "#fff"; x.font = "800 64px Plus Jakarta Sans, Arial, sans-serif"; x.fillText("My CV vs the job", W / 2, 150);
    x.fillStyle = "#ffd23f"; x.font = "700 30px Plus Jakarta Sans, Arial, sans-serif"; x.fillText("checked in 30 seconds, free", W / 2, 205);
    const cx = W / 2, cy = 520, R = 230; x.lineWidth = 48; x.strokeStyle = "rgba(255,255,255,.14)"; x.beginPath(); x.arc(cx, cy, R, 0, Math.PI * 2); x.stroke();
    const grd = x.createLinearGradient(cx - R, cy, cx + R, cy); grd.addColorStop(0, "#ffe27a"); grd.addColorStop(1, "#f5b70a"); x.strokeStyle = grd; x.lineCap = "round"; x.beginPath(); x.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * lastResult.pct / 100); x.stroke();
    x.fillStyle = "#fff"; x.beginPath(); x.arc(cx, cy, R - 40, 0, Math.PI * 2); x.fill();
    x.fillStyle = "#141a52"; x.font = "800 150px Plus Jakarta Sans, Arial, sans-serif"; x.fillText(lastResult.pct + "%", cx, cy + 50);
    x.font = "800 28px Plus Jakarta Sans, Arial, sans-serif"; x.fillStyle = "#1a7a3c"; x.fillText(lastResult.badge.replace(/^\S+\s/, ""), cx, cy + 115);
    x.fillStyle = "#fff"; x.font = "700 34px Plus Jakarta Sans, Arial, sans-serif"; x.fillText(lastResult.head.replace("{n}", "a few"), W / 2, 830);
    x.fillStyle = "#ffd23f"; x.font = "800 30px Plus Jakarta Sans, Arial, sans-serif"; x.fillText("Check yours free, no sign-up", W / 2, 930);
    x.fillStyle = "#fff"; x.font = "700 26px Plus Jakarta Sans, Arial, sans-serif"; x.fillText("uhirable.github.io/jobs/cv-match", W / 2, 975);
    x.font = "800 24px Plus Jakarta Sans, Arial, sans-serif"; x.fillStyle = "rgba(255,255,255,.7)"; x.fillText("U HIRABLE", W / 2, 1030);
    const blob = await new Promise((r) => cv2.toBlob(r, "image/png")); const file = new File([blob], "my-cv-match-score.png", { type: "image/png" });
    const text = `My CV scored ${lastResult.pct}% against the job I'm applying to. Free check, no sign-up: https://uhirable.github.io/jobs/cv-match.html`;
    if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text, title: "My CV match score" }); return; } catch (e) { if (e.name === "AbortError") return; } }
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "my-cv-match-score.png"; a.click();
    const li = $("#cm-share-li"); if (li) { li.hidden = false; li.href = "https://www.linkedin.com/feed/?shareActive=true&text=" + encodeURIComponent(text); }
    if (window.goatcounter && goatcounter.count) try { goatcounter.count({ path: "cv-match/share", title: "CV match share", event: true }); } catch (e) {}
  }
  const sb = $("#cm-share"); if (sb) sb.addEventListener("click", shareImage);
  // ---- Compare against up to 3 jobs ----
  const cmpBtn = $("#cm-cmp"), cmpBox = $("#cm-cmp-box");
  if (cmpBtn) cmpBtn.addEventListener("click", () => { cmpBox.hidden = !cmpBox.hidden; cmpBtn.textContent = cmpBox.hidden ? "Compare 2–3 jobs at once" : "Hide compare"; });
  const cmpGo = $("#cm-cmp-go"); if (cmpGo) cmpGo.addEventListener("click", () => {
    const cvIn = cv || cvText.value.trim(); if (cvIn.length < 80) { err.hidden = false; err.textContent = "Add your CV first."; return; }
    const jobs = [$("#cm-job"), $("#cm-job2"), $("#cm-job3")].map((t) => t.value.trim()).filter((v) => v.length > 60);
    if (jobs.length < 2) { err.hidden = false; err.textContent = "Paste at least 2 job descriptions to compare."; return; }
    err.hidden = true;
    const rows = jobs.map((jb, i) => { const r = analyse(cvIn, jb); const title = (jb.split("\n").find((l) => l.trim().length > 3) || "Job " + (i + 1)).trim().slice(0, 60); return { title, r }; }).sort((a, b) => b.r.overall - a.r.overall);
    $("#cm-cmp-out").innerHTML = rows.map((x, i) => `<div class="cm-cmp-row ${i === 0 ? "best" : ""}"><b>${x.r.overall}%</b><div><strong>${esc(x.title)}</strong><span>${i === 0 ? "Best match. Apply here first." : "Missing: " + esc([...x.r.hardMiss, ...x.r.dMiss].slice(0, 4).join(", ") || "nothing major")}</span></div></div>`).join("");
    $("#cm-cmp-out").hidden = false; $("#cm-cmp-out").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  const lilo = $("#cm-lilo"); if (lilo) lilo.addEventListener("click", (e) => { const b = document.getElementById("ua-btn"); if (b) { e.preventDefault(); b.click(); } });
})();
