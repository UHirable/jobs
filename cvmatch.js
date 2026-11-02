// CV vs Job Match Checker — runs 100% in the browser. Nothing is uploaded.
(() => {
  const $ = (s) => document.querySelector(s);
  const fileIn = $("#cm-file"), drop = $("#cm-drop"), fileOut = $("#cm-filestat"), cvText = $("#cm-cvtext"), jobTa = $("#cm-job"), go = $("#cm-go"), res = $("#cm-result"), err = $("#cm-err");
  const STOP = new Set(("the and for with that this from your you are our will have has not but can all any more than into over per via each new who their they them its was were been being also such as of to in on at by an a or is it be we us i we're you'll you're we'll about across after along among around because before between both during either every here how if may might must need other out own same should so some still then there these those through under until up very what when where which while why within without work working role team company looking join experience experienced years year strong ability able across including include etc plus required require requirements preferred bonus nice responsibilities responsible day days week weeks month months remote hybrid onsite on-site full-time part-time position candidate candidates ideal opportunity benefits salary apply application job jobs description skills skill knowledge understanding excellent good great best well high level senior junior lead mid build building develop developing drive driving help helping support supporting ensure ensuring manage managing own owning deliver delivering grow growing create creating make making use using used get got take takes").split(" "));
  const SYN = [["machine learning","ml"],["artificial intelligence","ai"],["javascript","js"],["typescript","ts"],["postgresql","postgres"],["kubernetes","k8s"],["google cloud","gcp"],["amazon web services","aws"],["microsoft azure","azure"],["power bi","powerbi"],["node.js","node","nodejs"],["react.js","react","reactjs"],["vue.js","vue"],["next.js","nextjs"],["c sharp","c#"],["golang","go"],["large language models","llm","llms"],["natural language processing","nlp"],["customer relationship management","crm"],["search engine optimization","seo"],["user experience","ux"],["user interface","ui"],["business development","bd","bdr"],["sales development","sdr"],["account executive","ae"],["profit and loss","p&l"],["financial planning and analysis","fp&a"],["key performance indicators","kpis","kpi"],["quality assurance","qa"],["continuous integration","ci/cd","ci"],["human resources","hr"],["bachelor's degree","bachelor","bachelors","bsc","ba"],["master's degree","master","masters","msc","mba"],["doctorate","phd"],["microsoft excel","excel"],["google sheets","sheets"],["microsoft office","ms office"],["project management","pm"],["product management","product manager"],["a/b testing","a/b tests","ab testing","experimentation"],["data visualization","dashboards","dashboard"],["communication skills","communication"],["problem solving","problem-solving"],["english","fluent english"],["arabic","fluent arabic"]];
  const SKILLS = ["python","sql","java","javascript","typescript","react","node","angular","vue","next.js","django","flask","spring","aws","gcp","azure","snowflake","databricks","dbt","airflow","kafka","spark","hadoop","bigquery","redshift","excel","powerpoint","word","tableau","power bi","looker","metabase","salesforce","hubspot","zendesk","intercom","jira","confluence","notion","figma","sketch","adobe","photoshop","illustrator","canva","product","design","marketing","sales","account executive","sdr","bdr","gtm","partnerships","finance","accounting","controller","cpa","fp&a","quickbooks","netsuite","xero","sap","oracle","machine learning","ml","ai","llm","nlp","deep learning","pytorch","tensorflow","scikit-learn","pandas","numpy","data engineer","data scientist","data analyst","analyst","analytics","statistics","a/b testing","devops","kubernetes","docker","terraform","linux","git","ci/cd","security","cybersecurity","recruiter","recruiting","sourcing","talent","hr","payroll","operations","project manager","product manager","program manager","engineering manager","scrum","agile","full stack","backend","frontend","mobile","ios","android","swift","kotlin","go","rust","c++","c#",".net","php","laravel","ruby","rails","scala","r","matlab","real estate","private equity","investment banking","consulting","law","legal","nurse","teacher","teaching","customer support","customer service","customer success","supply chain","logistics","procurement","fintech","mortgage","healthcare","saas","b2b","b2c","e-commerce","shopify","seo","sem","google ads","meta ads","content","copywriting","social media","email marketing","crm","ux","ui","research","qa","testing","selenium","cypress","api","rest","graphql","microservices","sql server","mysql","postgresql","mongodb","redis","elasticsearch","english","arabic","french","german","spanish","communication","leadership","negotiation","presentation","stakeholder","reporting","budget","forecasting","modeling","valuation","audit","tax","compliance","risk","kyc","aml","underwriting","credit","lending","banking","insurance","claims","clinical","pharma","biotech","lab","mechanical","electrical","civil","autocad","solidworks","plc","scada","hvac","maintenance","safety","warehouse","inventory","erp","wms","dispatch","fleet","driver","hospitality","chef","barista","retail","cashier","merchandising","inside sales","cold calling","lead generation","outbound","inbound","pipeline","quota","closing","enterprise","smb","mid-market","onboarding","training","coaching","mentoring","writing","editing","video","premiere","after effects","3d","blender","unity","unreal","game","animation","motion"];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (t) => { let x = " " + t.toLowerCase().replace(/[‘’]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ") + " "; for (const g of SYN) { const canon = g[0]; for (const a of g) { if (a === canon) continue; x = x.split(" " + a + " ").join(" " + canon + " ").split(" " + a + ",").join(" " + canon + ",").split(" " + a + ".").join(" " + canon + "."); } } return x; };
  const tokens = (t) => (t.match(/[a-z][a-z0-9+#.\-\/&]{1,}/g) || []).map((w) => w.replace(/[.\-\/]+$/, "")).filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w));
  const has = (text, k) => new RegExp("(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&") + "($|[^a-z0-9])").test(text);
  function years(t) { let m = 0; for (const x of t.matchAll(/(\d{1,2})\s*\+?\s*(?:years|yrs|year)/g)) m = Math.max(m, +x[1]); const yrs = [...t.matchAll(/\b(20\d\d|19\d\d)\b/g)].map((x) => +x[1]); if (yrs.length >= 2) m = Math.max(m, Math.min(40, Math.max(...yrs) - Math.min(...yrs))); if (/present|current/.test(t) && yrs.length) m = Math.max(m, Math.min(40, new Date().getFullYear() - Math.min(...yrs))); return m; }
  function jobYears(t) { const m = t.match(/(\d{1,2})\s*\+?\s*(?:-|to)?\s*(\d{1,2})?\s*\+?\s*(?:years|yrs)/); return m ? +m[1] : 0; }
  const GENERIC = new Set("present current previous data team teams tools tool insights insight business customer customers client clients product products service services platform platforms solution solutions process processes projects project systems system technical technology environment environments people person results result performance quality time global world international local based location office english emea apac latam north america europe".split(" "));
  function distinctive(jobN, jSkills) {
    const freq = {}; for (const w of tokens(jobN)) freq[w] = (freq[w] || 0) + 1;
    const part = (w) => jSkills.some((k) => k !== w && k.split(/[\s\/&.-]+/).includes(w));
    return Object.keys(freq).filter((w) => w.length > 3 && !SKILLS.includes(w) && !GENERIC.has(w) && !part(w)).sort((a, b) => freq[b] - freq[a]).slice(0, 40);
  }
  function analyse(cv, job) {
    const c = norm(cv), j = norm(job);
    const jSkills = SKILLS.filter((k) => has(j, k));
    const hit = jSkills.filter((k) => has(c, k)), miss = jSkills.filter((k) => !has(c, k));
    const dist = distinctive(j, jSkills); const dHit = dist.filter((w) => has(c, w)); const dMiss = dist.filter((w) => !has(c, w)).slice(0, 8);
    const sk = jSkills.length ? hit.length / jSkills.length : (dist.length ? dHit.length / dist.length : 0.5);
    const kw = dist.length ? dHit.length / dist.length : sk;
    const need = jobYears(j), have = years(c);
    let ex = need ? Math.min(1, have / need) : 0.85; if (!need && !have) ex = 0.7;
    const titleLine = (job.split("\n").find((l) => l.trim().length > 3) || "").toLowerCase(); const tTok = tokens(norm(titleLine)).slice(0, 6); const tHit = tTok.filter((w) => has(c, w)).length; const tb = tTok.length ? tHit / tTok.length : 0.5;
    const overall = Math.round(100 * (0.45 * sk + 0.25 * kw + 0.2 * ex + 0.1 * tb));
    return { overall: Math.max(5, Math.min(98, overall)), sk: Math.round(sk * 100), kw: Math.round(kw * 100), ex: Math.round(ex * 100), hit, miss, dHit: dHit.slice(0, 10), dMiss, need, have };
  }
  function verdict(p) {
    if (p >= 75) return ["🎯 STRONG MATCH", "Apply now.", "Your CV already speaks the job's language. Tailor the summary line to this role and send it today.", "g"];
    if (p >= 55) return ["👍 GOOD MATCH", `Add ${"{n}"} keywords, then apply.`, "Your CV covers most of the must-haves. Recruiters and ATS filters look for the exact words in the ad, so add the missing ones where they're true for you.", "g"];
    if (p >= 35) return ["🤔 PARTIAL MATCH", "Fix the gaps before you apply.", "You match some requirements but important ones are missing. Add real experience with the missing keywords, or target a closer role.", "y"];
    return ["⚠️ WEAK MATCH", "This one is a stretch.", "Most of the must-haves aren't on your CV. Apply only if you can honestly add the missing skills, or use Lilo to find roles closer to your profile.", "r"];
  }
  let cv = "";
  async function loadFile(f) {
    if (!f) return; fileOut.hidden = false; fileOut.className = "cm-file"; fileOut.textContent = "📄 " + f.name + " · reading…";
    try {
      const t = await Promise.race([window.UA_readFile(f), new Promise((_, j) => setTimeout(() => j(new Error("timeout")), 20000))]);
      if (!t || t.trim().length < 80) throw new Error("empty");
      cv = t; cvText.value = ""; fileOut.textContent = "📄 " + f.name + " · read ✓ (" + Math.round(t.split(/\s+/).length) + " words)";
    } catch (e) { cv = ""; fileOut.className = "cm-file bad"; fileOut.textContent = "Couldn't read " + f.name + ". Try a PDF or Word file with selectable text, or paste your CV text below."; }
  }
  fileIn.addEventListener("change", () => loadFile(fileIn.files[0]));
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", (e) => loadFile(e.dataTransfer.files[0]));
  async function jobFromLink(u) {
    const m = u.match(/job-([a-z0-9-]+)\.html/); if (!m) return null;
    if (!window.JOBS) { const r = await fetch("jobs.js?v=38").then((x) => x.text()); window.JOBS = new Function(r + ";return JOBS;")(); }
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
    $("#cm-ring").style.setProperty("--p", r.overall); $("#cm-pct").textContent = r.overall + "%";
    $("#cm-badge").textContent = badge; $("#cm-badge").className = "cm-badge " + cls;
    $("#cm-head").textContent = head.replace("{n}", n); $("#cm-body").textContent = body;
    $("#cm-b1").style.setProperty("--w", r.sk + "%"); $("#cm-v1").textContent = r.sk + "%";
    $("#cm-b2").style.setProperty("--w", r.ex + "%"); $("#cm-v2").textContent = r.ex + "%";
    $("#cm-b3").style.setProperty("--w", r.kw + "%"); $("#cm-v3").textContent = r.kw + "%";
    const found = [...r.hit, ...r.dHit].slice(0, 14), missing = [...r.miss, ...r.dMiss].slice(0, 12);
    $("#cm-found-n").textContent = found.length; $("#cm-miss-n").textContent = missing.length;
    $("#cm-found").innerHTML = found.length ? found.map((k) => `<span>${esc(k)}</span>`).join("") : "<span>No clear keyword matches</span>";
    $("#cm-miss").innerHTML = missing.length ? missing.map((k) => `<span>${esc(k)}</span>`).join("") : "<span>Nothing important missing 🎉</span>";
    $("#cm-exp").textContent = r.need ? (r.have >= r.need ? `The ad asks for ${r.need}+ years; your CV shows about ${r.have}. ✓` : `The ad asks for ${r.need}+ years; your CV shows about ${r.have || "0"}. Make your years of experience explicit.`) : (r.have ? `Your CV shows about ${r.have} years of experience.` : "Add your years of experience clearly (e.g. \"4+ years in sales\").");
    res.hidden = false; res.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.goatcounter && goatcounter.count) try { goatcounter.count({ path: "cv-match/check", title: "CV match check", event: true }); } catch (e) {}
  });
  const lilo = $("#cm-lilo"); if (lilo) lilo.addEventListener("click", (e) => { const b = document.getElementById("ua-btn"); if (b) { e.preventDefault(); b.click(); } });
})();
