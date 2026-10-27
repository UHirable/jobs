// =========================================================
//  Job Sites around the world
//  To add a site: copy one { ... } block (with the comma), paste it,
//  and change the text between the quotes.
//  region: one of the regions below (shown in "Browse by region")
//  countries: shown in "Search by country". Use ["Worldwide"] for global sites.
//  remote: true if the site is focused on (or strong for) remote jobs
//  link: plain link, or an affiliate link when we have one
// =========================================================
const SITES = [
  // ---------- Worldwide ----------
  { name: "LinkedIn Jobs", region: "Worldwide", countries: ["Worldwide"], remote: true,
    desc: "The world's largest professional network, with jobs in almost every country.", tags: ["All fields"], link: "https://www.linkedin.com/jobs/" },
  { name: "Indeed", region: "Worldwide", countries: ["Worldwide"], remote: true,
    desc: "One of the biggest job search engines, with local sites in many countries.", tags: ["All fields"], link: "https://www.indeed.com" },
  { name: "Glassdoor", region: "Worldwide", countries: ["Worldwide"], remote: false,
    desc: "Jobs together with company reviews and salary insights.", tags: ["All fields", "Salaries"], link: "https://www.glassdoor.com" },

  // ---------- Remote ----------
  { name: "Jobgether", region: "Remote", countries: ["Worldwide"], remote: true,
    desc: "Remote jobs worldwide, in Europe and in the US and Canada.", tags: ["Tech", "Sales", "Support"], link: "https://jobgether.com" },
  { name: "We Work Remotely", region: "Remote", countries: ["Worldwide"], remote: true,
    desc: "A long-running board dedicated to fully remote jobs.", tags: ["Tech", "Design", "Marketing"], link: "https://weworkremotely.com" },
  { name: "Remote OK", region: "Remote", countries: ["Worldwide"], remote: true,
    desc: "Remote jobs that you can filter by role and time zone.", tags: ["Tech", "All fields"], link: "https://remoteok.com" },
  { name: "Remotive", region: "Remote", countries: ["Worldwide"], remote: true,
    desc: "Hand-picked remote jobs at tech companies.", tags: ["Tech", "Support", "Marketing"], link: "https://remotive.com" },
  { name: "FlexJobs", region: "Remote", countries: ["Worldwide"], remote: true,
    desc: "Screened remote, hybrid and flexible jobs (paid membership).", tags: ["All fields", "Flexible"], link: "https://www.flexjobs.com" },

  // ---------- Middle East & Gulf ----------
  { name: "Bayt", region: "Middle East & Gulf", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Lebanon", "Egypt"], remote: false,
    desc: "One of the largest job sites in the Arab world.", tags: ["All fields"], link: "https://www.bayt.com" },
  { name: "GulfTalent", region: "Middle East & Gulf", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"], remote: false,
    desc: "Professional and management jobs across the Gulf.", tags: ["Professional", "Management"], link: "https://www.gulftalent.com" },
  { name: "Naukrigulf", region: "Middle East & Gulf", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"], remote: false,
    desc: "Gulf jobs from a large network of employers and recruiters.", tags: ["All fields"], link: "https://www.naukrigulf.com" },

  // ---------- North Africa ----------
  { name: "Wuzzuf", region: "North Africa", countries: ["Egypt"], remote: true,
    desc: "A leading job site for jobs in Egypt.", tags: ["All fields"], link: "https://wuzzuf.net" },
  { name: "Forasna", region: "North Africa", countries: ["Egypt"], remote: false,
    desc: "Jobs in Egypt for many fields, including entry-level roles.", tags: ["All fields", "Entry level"], link: "https://forasna.com" },
  { name: "ReKrute", region: "North Africa", countries: ["Morocco"], remote: false,
    desc: "A popular job site for jobs in Morocco.", tags: ["All fields"], link: "https://www.rekrute.com" },
  { name: "Emploitic", region: "North Africa", countries: ["Algeria"], remote: false,
    desc: "A leading job site for jobs in Algeria.", tags: ["All fields"], link: "https://emploitic.com" },
  { name: "Tanitjobs", region: "North Africa", countries: ["Tunisia"], remote: false,
    desc: "A well-known job site for jobs in Tunisia.", tags: ["All fields"], link: "https://www.tanitjobs.com" },

  // ---------- Africa ----------
  { name: "Jobberman", region: "Africa", countries: ["Nigeria", "Ghana"], remote: false,
    desc: "A leading job site in Nigeria and Ghana.", tags: ["All fields"], link: "https://www.jobberman.com" },
  { name: "BrighterMonday", region: "Africa", countries: ["Kenya", "Uganda", "Tanzania"], remote: false,
    desc: "Jobs and career advice across East Africa.", tags: ["All fields"], link: "https://www.brightermonday.co.ke" },
  { name: "Fuzu", region: "Africa", countries: ["Kenya", "Uganda", "Nigeria"], remote: false,
    desc: "Jobs and careers across East and West Africa.", tags: ["All fields"], link: "https://www.fuzu.com" },
  { name: "Careers24", region: "Africa", countries: ["South Africa"], remote: false,
    desc: "A popular job site for jobs in South Africa.", tags: ["All fields"], link: "https://www.careers24.com" },

  // ---------- Europe ----------
  { name: "EURES", region: "Europe", countries: ["Germany", "France", "Netherlands", "Spain", "Ireland", "Portugal", "Poland", "Italy"], remote: false,
    desc: "The official European Union job portal, with jobs across EU countries.", tags: ["All fields"], link: "https://eures.europa.eu" },
  { name: "StepStone", region: "Europe", countries: ["Germany", "Belgium", "Netherlands", "Austria"], remote: false,
    desc: "A leading job board in Germany and Europe.", tags: ["All fields"], link: "https://www.stepstone.de" },
  { name: "Welcome to the Jungle", region: "Europe", countries: ["France", "Spain", "United Kingdom"], remote: true,
    desc: "Jobs at startups and modern companies, with a look inside each team.", tags: ["Startups", "Tech"], link: "https://www.welcometothejungle.com" },

  // ---------- United Kingdom ----------
  { name: "Reed", region: "United Kingdom", countries: ["United Kingdom"], remote: false,
    desc: "One of the UK's best-known job sites.", tags: ["All fields"], link: "https://www.reed.co.uk" },
  { name: "Totaljobs", region: "United Kingdom", countries: ["United Kingdom"], remote: false,
    desc: "A large UK job board for all industries.", tags: ["All fields"], link: "https://www.totaljobs.com" },

  // ---------- US & Canada ----------
  { name: "Wellfound", region: "US & Canada", countries: ["United States", "Canada"], remote: true,
    desc: "Startup jobs, many of them remote-friendly.", tags: ["Startups", "Tech"], link: "https://wellfound.com" },
  { name: "Dice", region: "US & Canada", countries: ["United States"], remote: true,
    desc: "A job site focused on tech and IT roles in the US.", tags: ["Tech", "IT"], link: "https://www.dice.com" },
  { name: "Job Bank", region: "US & Canada", countries: ["Canada"], remote: false,
    desc: "The Government of Canada's official job site.", tags: ["All fields"], link: "https://www.jobbank.gc.ca" }
];
