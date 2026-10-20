// =========================================================
//  ✏️  THIS IS THE ONLY FILE YOU EDIT TO ADD / REMOVE JOBS
//
//  • To ADD a job: copy one whole { ... } block (with its comma),
//    paste it, and change the text between the quotes " ".
//  • To REMOVE a job: delete its whole { ... } block.
//  • countries = shown as tags AND added to the country dropdown.
//  • deadline format: "YYYY-MM-DDTHH:MM+03:00" (leave "" for none).
//    After the deadline the job shows "Closed" automatically.
// =========================================================

const APPLY_FORM = ""; // default form for jobs without their own applyLink

const JOBS = [
  {
    title: "Full-Cycle Sales Executive",
    company: "Confidential",
    industry: "Accounting, Auditing & Financial Services",
    countries: ["Saudi Arabia"],
    tags: ["Fully Remote"],
    deadline: "2026-10-21T16:00+03:00",
    brief: "B2B sales role selling accounting, audit, tax and financial services to Saudi clients, owning the full cycle from prospecting to closing.",
    applyLink: "https://tally.so/r/PRdRR0"
  },
  {
    title: "Sales Development Representative (SDR)",
    company: "Confidential",
    industry: "ERP, SaaS, AI & Technology Services",
    countries: ["Lebanon", "Jordan", "Egypt", "UAE", "Saudi Arabia"],
    tags: ["Fully Remote"],
    deadline: "2026-10-21T16:00+03:00",
    brief: "Outbound B2B role prospecting and booking meetings with decision-makers for ERP, SaaS and AI solutions across the UAE and KSA.",
    applyLink: "https://tally.so/r/xVXXE5"
  }
];
