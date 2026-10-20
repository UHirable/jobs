// =========================================================
//  ✏️  THIS IS THE ONLY FILE YOU EDIT TO ADD / REMOVE JOBS
//
//  • To ADD a job: copy one whole { ... } block (with its comma),
//    paste it, and change the text between the quotes " ".
//  • To REMOVE a job: delete its whole { ... } block.
//  • id: short unique name, English letters and dashes only.
//  • countries: shown as tags AND added to the country dropdown.
//  • brief: 1–2 lines shown on the card.
//  • The lists (responsibilities, requirements...) show on the
//    "More details" page. Leave a list empty [] to hide it.
// =========================================================

const APPLY_FORM = ""; // default form for jobs without their own applyLink

const JOBS = [
  {
    id: "full-cycle-sales-executive",
    title: "Full-Cycle Sales Executive",
    company: "Confidential",
    industry: "Accounting, Auditing & Financial Services",
    countries: ["Saudi Arabia", "Egypt"],
    tags: ["Fully Remote"],
    brief: "B2B sales role selling accounting, audit, tax and financial services, owning the full cycle from prospecting to closing.",
    applyLink: "https://tally.so/r/PRdRR0",

    overview: "We are looking for an experienced B2B Sales Executive with a strong background in selling accounting, auditing, tax, bookkeeping, or financial advisory services. The candidate must be capable of managing the entire sales cycle, from prospecting and lead generation to negotiation and closing deals.",
    responsibilities: [
      "Identify and approach potential B2B clients in Saudi Arabia.",
      "Generate leads through cold calling, LinkedIn, email, and other outbound channels.",
      "Conduct discovery calls and understand clients' financial and accounting needs.",
      "Present services, handle objections, and negotiate proposals.",
      "Independently manage follow-ups and close deals.",
      "Maintain accurate sales pipeline records and report progress."
    ],
    requirements: [
      "Minimum 2 years of B2B sales experience.",
      "Direct experience selling accounting, auditing, tax, bookkeeping, or financial services.",
      "Proven experience closing deals independently.",
      "Strong cold-calling, negotiation, and objection-handling skills.",
      "Excellent Arabic communication skills.",
      "Understanding of the Saudi business market is preferred."
    ],
    preferred: [],
    submissions: [
      "Updated CV",
      "English voice introduction",
      "Relevant sales experience and services previously sold",
      "Recruiter's screening feedback",
      "Availability to join and notice period",
      "Salary expectations"
    ]
  },
  {
    id: "sales-development-representative",
    title: "Sales Development Representative (SDR)",
    company: "Confidential",
    industry: "ERP, SaaS, AI & Technology Services",
    countries: ["Lebanon", "Jordan", "Egypt", "UAE", "Saudi Arabia"],
    tags: ["Fully Remote"],
    brief: "Outbound B2B role prospecting and booking meetings with decision-makers for ERP, SaaS and AI solutions across the UAE and KSA.",
    applyLink: "https://tally.so/r/xVXXE5",

    overview: "We are looking for experienced B2B Sales Development Representatives with a proven background in selling ERP systems, SaaS platforms, AI solutions, or IT services. The ideal candidate must be confident in cold calling, identifying decision-makers, qualifying prospects, and booking meetings with potential clients.",
    responsibilities: [
      "Conduct outbound cold calls to potential B2B clients.",
      "Prospect through LinkedIn, email, and other outreach channels.",
      "Identify and engage decision-makers, including CEOs, CFOs, IT Managers, and Operations Managers.",
      "Understand prospects' business challenges and identify opportunities for technology solutions.",
      "Qualify leads and book discovery meetings for the sales team.",
      "Maintain accurate CRM records and daily activity reports.",
      "Achieve assigned outreach and meeting-booking targets."
    ],
    requirements: [
      "2–3 years of relevant B2B outbound sales or cold-calling experience.",
      "Previous experience selling ERP, SaaS, AI, or IT solutions/services.",
      "Strong English communication skills.",
      "Proven experience generating leads and booking qualified B2B meetings.",
      "Confidence communicating with senior decision-makers.",
      "Familiarity with CRM systems, LinkedIn Sales Navigator, and prospecting tools.",
      "Ability to work independently in a remote environment."
    ],
    preferred: [
      "Selling ERP solutions such as SAP, Odoo, Oracle, or similar platforms.",
      "Selling AI automation, enterprise software, CRM, or cloud-based services.",
      "Previous exposure to the UAE or Saudi Arabian markets.",
      "Arabic communication skills."
    ],
    submissions: []
  }
];
