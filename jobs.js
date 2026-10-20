// =========================================================
//  ✏️  THIS IS THE ONLY FILE YOU EDIT TO ADD / REMOVE JOBS
//
//  • To ADD a job: copy one whole { ... } block (with its comma),
//    paste it, and change the text between the quotes " ".
//  • To REMOVE a job: delete its whole { ... } block.
//  • id: short unique name, English letters and dashes only.
//  • page: the job's own share page (Claude makes it for you).
//  • countries: shown as tags AND added to the country dropdown.
//    Use ["Worldwide"] for a job open to every country.
//  • brief: 1–2 lines shown on the card.
//  • The lists (responsibilities, requirements...) show on the
//    "More details" page. Leave a list empty [] to hide it.
// =========================================================

const APPLY_FORM = ""; // default form for jobs without their own applyLink

const JOBS = [
  {
    id: "full-cycle-sales-executive",
    page: "job-full-cycle-sales-executive.html",
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
    page: "job-sales-development-representative.html",
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
  },
  {
    id: "sdr-e-invoicing",
    page: "job-sdr-e-invoicing.html",
    title: "Sales Development Representative – E-Invoicing",
    company: "Confidential",
    industry: "E-Invoicing & Tax Technology",
    countries: ["Egypt", "Jordan", "Lebanon"],
    tags: ["Fully Remote", "$250 base + $150 commission"],
    brief: "Outbound B2B role selling e-invoicing solutions: prospecting, qualifying leads and booking meetings with finance decision-makers.",
    applyLink: "https://tally.so/r/Yj5Pdv",

    overview: "We are looking for a Sales Development Representative with a proven background in selling e-invoicing services. You will generate and qualify B2B leads, reach finance and business decision-makers, and book meetings for the sales team. Fluency in both English and Arabic is a must.",
    responsibilities: [
      "Prospect and reach out to B2B companies through cold calling, LinkedIn and email.",
      "Explain e-invoicing compliance requirements and how our solution helps businesses meet them.",
      "Engage decision-makers such as CFOs, Finance Managers, Accountants and Business Owners.",
      "Qualify leads and book discovery meetings and demos for the sales team.",
      "Keep accurate CRM records and daily activity reports.",
      "Meet weekly outreach and meeting-booking targets."
    ],
    requirements: [
      "Proven experience selling e-invoicing services or solutions.",
      "B2B outbound sales or cold-calling experience.",
      "Fluent English and Arabic (spoken and written) — a must.",
      "Confidence speaking with finance and senior decision-makers.",
      "Ability to work independently in a remote environment."
    ],
    preferred: [
      "Knowledge of e-invoicing regulations such as ZATCA (KSA) or ETA (Egypt).",
      "Experience with CRM systems and LinkedIn Sales Navigator.",
      "Background in SaaS, ERP, accounting or tax technology."
    ],
    compensation: "$250 monthly base salary + $150 commission",
    submissions: [
      "Updated CV",
      "English voice introduction (1–2 minutes)",
      "E-invoicing sales experience and services previously sold",
      "Availability to join and notice period"
    ]
  },
  {
    id: "lead-generation-specialist",
    page: "job-lead-generation-specialist.html",
    title: "Lead Generation Specialist",
    company: "Confidential",
    industry: "Lead Generation, Data & Outreach Automation",
    countries: ["Worldwide"],
    tags: ["Fully Remote", "Full-time"],
    brief: "Source and verify B2B leads using Python scraping and tools like Apollo and Lusha, and run LinkedIn and email outreach campaigns.",
    applyLink: "https://tally.so/r/WJO2Pe",

    overview: "We are seeking a detail-oriented and technically skilled Lead Generation Specialist with experience in web scraping, data extraction, data quality assurance, and outreach automation. The ideal candidate will source and verify leads, use Python scripts to extract data, manage outreach campaigns, and support sales and operations teams in improving lead generation processes.",
    responsibilityGroups: [
      ["Lead generation & data extraction", [
        "Identify and extract potential leads from websites, directories, and other online sources.",
        "Use Python scripts and web scraping techniques to collect data efficiently.",
        "Develop, maintain, and optimize scripts to automate lead collection and data extraction.",
        "Research companies, decision-makers, contact information, and other prospect details.",
        "Use lead generation and data enrichment tools such as Apollo, Lusha, and ContactOut to source and verify prospect information.",
        "Ensure lead lists meet the targeting criteria and requirements of sales campaigns."
      ]],
      ["Data cleaning & quality assurance", [
        "Verify the accuracy, completeness, and relevance of extracted data.",
        "Clean, format, and organize datasets by removing duplicates and correcting inconsistencies.",
        "Perform regular data quality checks to maintain reliable lead databases.",
        "Document data extraction, cleaning, and validation processes."
      ]],
      ["Python scripting & technical skills", [
        "Write and maintain Python scripts to automate data extraction and repetitive tasks.",
        "Use relevant libraries and tools to scrape websites and process large datasets.",
        "Troubleshoot scripts and improve their speed, reliability, and efficiency.",
        "Work with structured data formats such as CSV, Excel, and JSON.",
        "Follow website terms, access restrictions, and applicable data protection requirements."
      ]],
      ["Outreach campaign management", [
        "Monitor LinkedIn and email automation campaigns.",
        "Prepare, upload, and verify prospect lists for outreach campaigns.",
        "Monitor campaign activity and identify issues affecting data accuracy or campaign execution.",
        "Help maintain organized and up-to-date prospect databases."
      ]],
      ["Email infrastructure setup", [
        "Set up domains and email accounts for outreach automation.",
        "Assist with email configuration, authentication, and deliverability monitoring.",
        "Troubleshoot technical issues related to domains, inboxes, and email automation tools."
      ]],
      ["Reporting & client communication", [
        "Prepare and send weekly reports to clients.",
        "Track and report lead generation progress, data quality, and campaign performance.",
        "Communicate with clients through email, WhatsApp, and phone calls.",
        "Provide timely updates and address client questions professionally."
      ]],
      ["Team collaboration", [
        "Work with sales and operations teams to understand lead requirements and campaign objectives.",
        "Coordinate with relevant teams to deliver accurate, qualified, and targeted leads.",
        "Gather feedback from sales teams to improve lead quality and targeting.",
        "Identify opportunities to automate and streamline workflows."
      ]]
    ],
    requirements: [
      "Proven experience in lead generation, web scraping, or data extraction.",
      "Practical knowledge of Python scripting for automated data collection.",
      "Experience with data cleaning, validation, deduplication, and database management.",
      "Familiarity with Apollo, Lusha, ContactOut, LinkedIn, and email automation tools.",
      "Knowledge of domain setup, email configuration, and email deliverability.",
      "Strong analytical, troubleshooting, and problem-solving skills.",
      "Excellent attention to detail and organizational abilities.",
      "Strong communication skills and the ability to collaborate across teams."
    ],
    preferred: [
      "Experience with Python libraries such as BeautifulSoup, Requests, Selenium, or Playwright.",
      "Familiarity with Excel, Google Sheets, CSV files, and basic database operations.",
      "Experience working with large prospecting datasets and automated lead generation workflows.",
      "Understanding of lead qualification, prospect targeting, and outbound sales processes."
    ],
    submissions: [
      "Updated CV",
      "English voice introduction (1–2 minutes)",
      "Sample of your scraping or lead generation work (link)",
      "Availability to join and notice period",
      "Salary expectations"
    ]
  }
];
