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

// Paraform roles: candidates apply through the U Hirable Tally form.
// The job name is filled in automatically (hidden field "job").
// Amel reviews each applicant and refers strong ones from her Paraform Connectors account.
const PARAFORM_LINK = "https://tally.so/r/X554AY";

const JOBS = [
  // ================= Paraform roles – batch 2 (AI/ML, 26 Oct 2026) =================
  {
    id: "ifs-senior-applied-ai-engineer",
    page: "job-ifs-senior-applied-ai-engineer.html",
    title: "Senior Applied AI Engineer",
    company: "IFS",
    industry: "Industrial AI · Enterprise Software",
    countries: ["United Kingdom", "UAE"],
    location: "UK or Dubai",
    tags: ["Hybrid", "Full-time", "€100K – €160K", "No visa sponsorship"],
    brief: "Join IFS's new AI Software Factory moonshot team and own the architecture of an agentic AI product built on top of enterprise data, hybrid in the UK or Dubai.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "IFS is a global leader in Industrial AI software with 7,000+ employees in 80 countries. It is building a small moonshot team inside R&D, the AI Software Factory, to change how software gets built. The first project is an intelligence layer on top of IFS's enterprise databases, not a chatbot bolted on. As the senior engineer, you set the engineering rigor for the team and own the architecture and evaluation approach.",
    responsibilities: [
      "Ship the first product: build the AI intelligence layer on IFS's enterprise data with a small, flat team.",
      "Own the architecture: decide how work is split across agents, how concurrent changes are isolated and merged, and how results are verified.",
      "Design the evals, regression tests and drift checks that show whether an agentic workflow is safe to expand.",
      "Stay hands-on: write orchestration, evaluation and codebase-analysis components and wire them into real codebases and CI.",
      "Review hard technical calls and guide engineers building on your architecture (no direct reports)."
    ],
    requirements: [
      "8+ years of production software engineering experience.",
      "Hands-on experience building with LLM agents or tool-using systems.",
      "Strong background in distributed systems, CI/CD and system evaluation.",
      "Tech stack: Agentic AI Systems, Distributed Systems, DAG Scheduling, Static Analysis, CI/CD.",
      "Must already have the right to work in the UK or the UAE (no visa sponsorship)."
    ],
    compensation: "€100K – €160K base, based on experience and qualifications. Hybrid role based in the UK or Dubai."
  },
  {
    id: "dwelly-ai-applied-engineer",
    page: "job-dwelly-ai-applied-engineer.html",
    title: "AI Applied Engineer",
    company: "Dwelly",
    industry: "PropTech · AI-First Property Management",
    countries: ["United Kingdom", "Spain", "Portugal", "Poland", "Germany", "Netherlands"],
    location: "Remote · UK or Europe",
    tags: ["Remote", "Full-time", "€100K – €150K", "UK working hours"],
    brief: "Fully remote from the UK or Europe: scale the AI engine behind a $263M-funded property platform that automates tenant finding, property management and finance.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Dwelly is a UK-based, AI-first lettings and property management platform that grows by acquiring traditional letting agencies and moving them onto its technology within two months. Backed by $263M in funding, it aims to lead the £100 billion UK lettings market. As AI Applied Engineer you'll unify existing AI flows, build a robust evaluation layer and scale the agentic infrastructure for future acquisitions.",
    responsibilities: [
      "Scale Dwelly's AI engine that automates tenant finding, property management and finance.",
      "Unify existing AI flows into one consistent, reliable system.",
      "Build a robust evaluation layer for AI and agentic workflows.",
      "Scale the agentic infrastructure to support new agency acquisitions.",
      "Work in a small cross-functional squad with high autonomy and ownership."
    ],
    requirements: [
      "3+ years of software engineering experience.",
      "Experience with LLM orchestration and agentic workflows.",
      "Tech stack: TypeScript, Node.js, PostgreSQL, Python.",
      "Based in the UK or Europe and able to work UK hours (preferred: London, Spain, Portugal, Poland).",
      "Must already have the right to work in your country (no visa sponsorship)."
    ],
    compensation: "€100K – €150K base + competitive equity. Fully remote across UK and European time zones, with occasional in-person team gatherings."
  },
  {
    id: "altas-ai-engineer",
    page: "job-altas-ai-engineer.html",
    title: "AI Engineer",
    company: "Altas Partners",
    industry: "Private Equity · Applied AI",
    countries: ["Canada"],
    location: "Toronto, ON",
    tags: ["On-site", "Full-time", "CA$100K – CA$150K", "Early-career friendly"],
    brief: "A rare early-career AI role (1–5 years) at a $10B+ private equity firm: build AI agents and tools for investors and portfolio companies in Toronto.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Altas Partners is a North American private equity firm managing more than $10 billion, with offices in Toronto and New York. The AI Engineer will build AI tools, apps and systems for the investment team and portfolio companies, working directly with senior investors and the AI & Advanced Analytics team. It's an ideal role for a recent graduate or early-career engineer who combines strong technical skills with business judgment.",
    responsibilities: [
      "Build and ship AI agents, apps and systems that help the investment team source and diligence companies.",
      "Partner with portfolio company teams to deliver AI solutions that improve how those businesses operate.",
      "Take work from prototype to production: write, test, deploy and support it.",
      "Build AI search over the firm's knowledge base, plus the data pipelines behind it.",
      "Build evaluation infrastructure to keep AI systems accurate, reliable and cost-effective."
    ],
    requirements: [
      "1–5 years of hands-on software engineering or applied AI experience.",
      "Degree in Computer Science, Engineering, Mathematics, Statistics or a related field.",
      "Experience building on LLM APIs: agents, tool use, retrieval and evaluations.",
      "Strong Python and SQL; TypeScript, React, AWS/GCP or Snowflake are a plus.",
      "Able to work in Toronto 4 days a week (open to visa transfers, e.g. OPT or H-1B transfers)."
    ],
    compensation: "CA$100K – CA$150K base + discretionary bonus. On-site in Toronto Monday to Thursday, remote Fridays."
  },
  {
    id: "protege-forward-deployed-ml-engineer",
    page: "job-protege-forward-deployed-ml-engineer.html",
    title: "Forward Deployed ML Engineer",
    company: "Protege",
    industry: "AI Training Data Infrastructure",
    countries: ["United States"],
    location: "Remote · United States",
    tags: ["Remote", "Full-time", "$170K – $270K", "US citizens / Green Card"],
    brief: "Be the first ML engineer on Protege's Benchmarks & Evaluations team at an a16z-backed AI data company that hit its 2026 goals by June.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Protege is building the infrastructure layer for AI training data, connecting data holders with vetted AI companies. Backed by $65M from Andreessen Horowitz, CRV and others, it hit its entire 2026 goal by June. As the first Forward Deployed ML Engineer on the Benchmarks & Evaluations team, you'll work with the GM, researchers and frontier AI customers to build the technical foundation for AI model evaluation.",
    responsibilities: [
      "Partner with the GM and early customers to design and build benchmarks and evals across domains and modalities.",
      "Build and own backend infrastructure: data pipelines, execution environments, storage and orchestration.",
      "Stand up sandboxed environments for agentic evals with tools, code execution and multi-step tasks.",
      "Own the engineering side of customer engagements end to end.",
      "Spot repeatable eval patterns and infrastructure gaps that become product opportunities."
    ],
    requirements: [
      "4–8 years of engineering experience with hands-on ML model evaluation work.",
      "Ownership of backend and infrastructure (data pipelines, execution environments).",
      "Experience building benchmarks, evals or human data pipelines for LLMs.",
      "Strong written communication for customer-facing work.",
      "Must be US-based and a US citizen or Green Card holder (no visa sponsorship)."
    ],
    compensation: "$170K – $270K base + competitive equity. Fully remote within the United States."
  },
  // ================= Paraform roles – batch 1 =================
  {
    id: "blacksmith-staff-product-engineer",
    page: "job-blacksmith-staff-product-engineer.html",
    title: "Staff Product Engineer",
    company: "Blacksmith",
    industry: "Developer Tools · AI-Native CI Infrastructure",
    countries: ["United States"],
    location: "New York, NY",
    tags: ["On-site", "Full-time", "$280K – $380K", "Visa transfers only"],
    brief: "Set the technical direction for brand-new AI-native developer tools and drive them from 0 to 1 at a fast-growing, GV-backed infrastructure startup.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Blacksmith runs GitHub Actions faster and cheaper on its own global fleet of bare-metal machines, serving 3,000+ companies and growing fast (~$10M ARR in under 2 years, $58.5M raised from GV and Peak XV). As Staff Product Engineer you will own the architecture of new products that don't exist in the industry yet, the next generation of AI-native developer tooling, as a hands-on technical leader.",
    responsibilities: [
      "Own and drive the architectural direction for new AI-native developer tooling products.",
      "Translate business and product strategy into long-term technical roadmaps and execution plans.",
      "Drive new products from 0 to 1 and own production outcomes: reliability, performance and operational excellence.",
      "Mentor senior engineers and act as a force multiplier across the team.",
      "Operate in ambiguous problem spaces where both the problem and the solution need to be defined."
    ],
    requirements: [
      "7–20 years of experience as a full-stack engineer owning 0-to-1 product builds end to end.",
      "Track record of leading the technical direction of a product from an early stage to an industry-recognized customer experience.",
      "Power user of coding agents and agentic development workflows.",
      "Strong communication skills with engineers, leadership and non-technical stakeholders.",
      "Tech stack: TypeScript, React."
    ],
    compensation: "$280K – $380K base + significant early-stage equity. In-person 5 days a week in New York City (Flatiron). Open to visa transfers (e.g. H-1B, OPT); no new visas."
  },
  {
    id: "castelion-tooling-engineer",
    page: "job-castelion-tooling-engineer.html",
    title: "Tooling Engineer",
    company: "Castelion",
    industry: "Aerospace & Defense Manufacturing",
    countries: ["United States"],
    location: "Torrance, CA",
    tags: ["On-site", "Full-time", "$140K – $200K", "US citizens / Green Card"],
    brief: "Design large-scale, safety-critical tooling for solid rocket motor production at a fast-growing aerospace and defense company backed by a16z and Lightspeed.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Castelion is a modern aerospace and defense production company, backed by Andreessen Horowitz, Lightspeed and General Catalyst, scaling from prototypes to production. As a Tooling Engineer you will design the jigs, fixtures, molds and handling assemblies that safely move and process large batches of energetic materials for solid rocket motor production.",
    responsibilities: [
      "Design and develop large-scale tooling (jigs, fixtures, molds and handling assemblies) for heavy, hazardous materials.",
      "Engineer solutions for temperature control and safe material movement between buildings.",
      "Collaborate with manufacturing, design and production teams to meet cost, quality and delivery targets.",
      "Lead tooling projects end to end, from concept to production floor, including FEA validation, tolerance stack-ups and DFM.",
      "Mentor junior tooling engineers and technicians while meeting aerospace and defense standards."
    ],
    requirements: [
      "3–10 years of experience in tooling design for large-scale, heavy or hazardous hardware.",
      "Strong engineering fundamentals and hands-on, high-stakes production experience.",
      "Tools: CAD (SolidWorks / NX / CATIA), FEA, GD&T, tolerance stack-up analysis.",
      "Must be a US citizen or Green Card holder (no visa sponsorship)."
    ],
    compensation: "$140K – $200K base + competitive equity (may flex higher for exceptional candidates). 5 days on-site in Torrance, CA."
  },
  {
    id: "retell-ai-full-stack-software-engineer",
    page: "job-retell-ai-full-stack-software-engineer.html",
    title: "Full-Stack Software Engineer",
    company: "Retell AI",
    industry: "Voice AI · Y Combinator",
    countries: ["United States"],
    location: "Redwood City, CA",
    tags: ["On-site", "Full-time", "$215K – $290K", "Visa sponsorship + relocation"],
    brief: "Build the core of one of the fastest-growing voice AI platforms ($5M → $80M ARR in a year). Visa sponsorship and relocation available.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Retell AI is reimagining the call center with voice AI agents used by thousands of companies, including CBS and Lenovo. Backed by Y Combinator and growing from $5M to $80M ARR with a ~50-person team. As a Senior Full-Stack Engineer you'll work across React, TypeScript and Node.js, from prompt orchestration and telephony integrations to dashboards and analytics.",
    responsibilities: [
      "Develop core features such as prompt orchestration, dashboards, analytics and telephony integrations.",
      "Build scalable full-stack systems, from polished UIs to robust APIs and DevOps workflows.",
      "Lead projects from architecture to production, owning coding, deployment and iteration.",
      "Create intuitive interfaces and APIs that let customers activate in hours.",
      "Support customer onboarding and turn feedback into product improvements."
    ],
    requirements: [
      "5+ years as a balanced (50:50) full-stack engineer at start-ups or in big tech.",
      "Strong skills in React, Node.js, JavaScript/TypeScript, Python and AWS.",
      "Comfortable in a fast, high-ownership, in-office startup environment."
    ],
    compensation: "$215K – $290K + very competitive equity. In person 5 days a week in Redwood City, CA. Open to visa transfers and new sponsorships (H-1B, TN); can support visa and relocation for the US, Canada, Australia or Singapore."
  },
  {
    id: "apollo-senior-software-engineer",
    page: "job-apollo-senior-software-engineer.html",
    title: "Senior Software Engineer",
    company: "Apollo.io",
    industry: "AI-Powered Go-to-Market Platform",
    countries: ["United States"],
    location: "San Francisco, CA",
    tags: ["Hybrid", "Full-time", "$170K – $311K + bonus", "Visa transfers"],
    brief: "Design and scale large distributed systems and AI-native agents at a profitable platform used by 500,000+ companies.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Apollo.io is the AI-powered go-to-market platform trusted by 500,000+ companies, combining the largest B2B contact database with agentic sales and marketing tools. The company is profitable and rebuilding its product around AI and agents. You'll own significant systems end to end with a high-bar, AI-native engineering team.",
    responsibilities: [
      "Own significant systems and features end to end, from design through production and operation.",
      "Build and operate large-scale distributed systems, combining the right technologies (Kafka, databases, etc.).",
      "Break down hard, ambiguous problems and ship them with clear accountability for reliability, performance and cost.",
      "Build AI-native agent systems used by hundreds of thousands of people worldwide."
    ],
    requirements: [
      "5–8 years in backend / full-stack engineering building large-scale distributed systems.",
      "Experience operating systems at scale and choosing the right tools for the job.",
      "Comfortable with AI-assisted development as a core part of your workflow.",
      "Tech stack: React, Ruby on Rails, Python, MongoDB, Elasticsearch, Kubernetes, Docker, Terraform, GCP."
    ],
    compensation: "$170K – $311K base (San Francisco) + 15% target bonus + competitive equity. Hybrid, 3 days in office. Open to visa transfers (e.g. H-1B, OPT)."
  },
  {
    id: "genesis-computing-head-of-marketing",
    page: "job-genesis-computing-head-of-marketing.html",
    title: "Head of Marketing",
    company: "Genesis Computing",
    industry: "Enterprise AI Data Agents",
    countries: ["United States"],
    location: "New York, NY",
    tags: ["Hybrid", "Full-time", "$190K – $220K", "US citizens / Green Card"],
    brief: "Build and lead marketing at an enterprise AI startup founded by early Snowflake leaders, owning positioning, launches, content and demand generation.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Genesis Computing builds autonomous AI data agents for enterprise data engineering teams, founded by early Snowflake employees. As Head of Marketing you'll own positioning, product launches, content, sales enablement and demand generation, using AI tools to scale a lean, high-impact marketing function.",
    responsibilities: [
      "Build and lead the marketing function and hire the team as the company grows.",
      "Own a clear, differentiated positioning and messaging for technical and executive buyers.",
      "Lead product marketing: launches, competitive analysis, customer research and use cases.",
      "Enable enterprise sales with presentations, solution briefs, battlecards and demo narratives.",
      "Lead content, customer proof and demand generation across email, webinars, partners and events.",
      "Build AI-powered marketing workflows (e.g. Claude) and own the marketing plan, budget and results."
    ],
    requirements: [
      "6+ years in product marketing for a technical B2B company.",
      "Hands-on leader who sets strategy and stays close to execution.",
      "Practical experience using AI to improve marketing execution.",
      "Based in or near New York City; must be a US citizen or Green Card holder."
    ],
    compensation: "$190K – $220K. Hybrid in New York City (2–3 days in office). No visa sponsorship."
  },
  {
    id: "workos-solutions-engineer",
    page: "job-workos-solutions-engineer.html",
    title: "Solutions Engineer",
    company: "WorkOS",
    industry: "Developer Tools · Identity & Auth",
    countries: ["United States"],
    location: "San Francisco, CA",
    tags: ["Hybrid", "Full-time", "$160K – $200K (OTE $250K)", "Visa transfers"],
    brief: "Work with customers like OpenAI, Cursor and Perplexity to design and build enterprise-ready auth solutions at a $2B developer-tools company.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "WorkOS builds developer tools and APIs that make companies enterprise ready: authentication, identity and access control, powering OpenAI, Cursor, Perplexity, Vercel and Plaid. Recently raised a $100M Series C at a $2B valuation. As a Solutions Engineer you'll sit between engineering, product and sales, and build prototypes, integrations and demos that unblock adoption.",
    responsibilities: [
      "Work directly with customers to design and implement solutions using WorkOS products.",
      "Own technical outcomes end to end: discovery, architecture, implementation and handoff.",
      "Lead demos and proof-of-concepts, and partner with Account Executives on evaluations.",
      "Identify blockers early and drive momentum without waiting for instructions.",
      "Share structured feedback with Engineering and Product."
    ],
    requirements: [
      "3–6 years in pre-sales / solutions engineering at B2B SaaS startups (under 500 employees).",
      "Strong engineering fundamentals and excellent communication.",
      "Familiar with APIs, web stacks, SAML, SCIM, OAuth, SSO and AI coding tools."
    ],
    compensation: "$160K – $200K base (OTE $200K – $250K, 80/20 split) + competitive equity. Hybrid, 2–3 days in office. Visa transfers case by case (no new H-1Bs)."
  },
  {
    id: "rippling-product-design-lead-design-systems",
    page: "job-rippling-product-design-lead-design-systems.html",
    title: "Product Design Lead, Design Systems",
    company: "Rippling",
    industry: "HR, IT & Finance Platform",
    countries: ["United States", "Canada", "United Kingdom"],
    location: "Remote · US, Canada or UK",
    tags: ["Remote", "Full-time", "$200K – $280K", "Visa transfers"],
    brief: "Lead design systems that make 40+ products feel like one platform, with ~18 dedicated engineers and AI-driven design tooling.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Rippling brings HR, IT and Finance into one unified platform and has raised $1.2B from top investors. As a Staff/Principal-level Product Design Lead for Design Systems, you'll make 40+ products feel like one seamless experience, including a growing mobile design system, with one of the strongest engineering investments in systems work in the industry.",
    responsibilities: [
      "Design repeatable, scalable UX patterns and flows across all product verticals, including mobile.",
      "Build AI-driven systems that define and measure good design.",
      "Create AI prototyping tools and code-based checks for design standards.",
      "Own platform-wide initiatives from strategy to hands-on prototyping (Codex, Cursor, Claude Code).",
      "Partner with engineers, PMs and designers to raise the bar on craft."
    ],
    requirements: [
      "8+ years as a product designer or design systems designer.",
      "AI-native systems thinker with excellent visual and mobile craft.",
      "Comfortable setting vision and building the work yourself.",
      "Based in the US, Canada or UK (in-office 3 days a week if near a Rippling office)."
    ],
    compensation: "$200K – $280K base + equity (RSUs) and benefits; final base depends on location tier and level. Location priority: NYC, Toronto, US East Coast remote, London, SF / Seattle, US remote. Open to visa transfers."
  },
  {
    id: "rippling-product-design-lead",
    page: "job-rippling-product-design-lead.html",
    title: "Product Design Lead",
    company: "Rippling",
    industry: "HR, IT & Finance Platform",
    countries: ["United States"],
    location: "Remote · United States",
    tags: ["Remote", "Full-time", "$165K – $289K", "Visa sponsorship available"],
    brief: "Own a critical product vertical (Spend Management or Platform) from 0-to-1 concept to shipped reality at Rippling.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Rippling gives businesses one place to run HR, IT and Finance. As a Product Design Lead you'll own a critical product vertical, such as Spend Management (cards, bill pay, expenses, travel) or Platform (permissions, data visualization, shared surfaces), turning deep administrative complexity into simple, elegant workflows.",
    responsibilities: [
      "Define the long-term roadmap and short-term tactics for your product area with cross-functional leaders.",
      "Lead end-to-end design from research and wireframes to high-fidelity prototypes and QA.",
      "Develop scalable design frameworks and primitives across the unified platform.",
      "Partner with UX Research to turn user insights into product decisions.",
      "Mentor designers and champion a consumer-grade quality bar for enterprise software."
    ],
    requirements: [
      "8+ years of product design experience shipping complex products (e.g. Fintech, SaaS, Enterprise).",
      "Mix of high-calibre big tech and growth-stage (Series C+) startup experience.",
      "Proven ability to simplify messy, ambiguous problems into build-ready specs.",
      "Strong technical fluency, storytelling and communication."
    ],
    compensation: "$165K – $289K + very competitive equity. Remote in the US, or hybrid in NY / SF / Seattle. Visa transfers are straightforward; most visas can be sponsored (adds 5–8 weeks to start)."
  },
  {
    id: "airbnb-engineering-manager",
    page: "job-airbnb-engineering-manager.html",
    title: "Engineering Manager",
    company: "Airbnb",
    industry: "Travel & Marketplace Technology",
    countries: ["United States"],
    location: "Remote · United States",
    tags: ["Remote", "Full-time", "$230K – $240K", "Visa sponsorship (incl. H-1B)"],
    brief: "Lead, grow and coach an engineering team delivering high-impact product and platform features. Visa sponsorship available.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Airbnb is the global marketplace for unique stays and experiences. As an Engineering Manager you'll support the growth and scaling of the engineering organization, raise the technical quality and maturity of the platform, and coach engineers at all levels in a fast-paced, startup-like environment.",
    responsibilities: [
      "Support the growth and scale of the engineering team.",
      "Own the technical quality and maturity of the technology to deliver high-impact features.",
      "Work closely with product and design to shape engineering roadmaps.",
      "Hire, onboard, develop and retain engineers, fostering psychological safety and inclusion.",
      "Partner with the head of engineering on technical best practices."
    ],
    requirements: [
      "4+ years of engineering leadership and 4+ years as a hands-on individual contributor.",
      "Track record of delivering high-impact product features.",
      "Comfortable in fast-paced, sometimes ambiguous environments; FinTech experience is a plus.",
      "Tech stack: TypeScript, React, SQL, Python, LangChain."
    ],
    compensation: "$230K – $240K + equity (0.1–0.5). Fully remote, with optional co-working in SF, Seattle, DC or NYC. Visa sponsorship available, including H-1B."
  },
  {
    id: "general-analysis-member-of-technical-staff-research",
    page: "job-general-analysis-member-of-technical-staff-research.html",
    title: "Member of Technical Staff – Research (AI Security)",
    company: "General Analysis",
    industry: "AI Safety & Security Research",
    countries: ["United States"],
    location: "San Francisco, CA",
    tags: ["On-site", "Full-time", "$250K – $450K", "Visa transfers"],
    brief: "Post-train models with reinforcement learning for AI security research at a San Francisco AI safety lab. 0–5 years of experience welcome.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "General Analysis is an AI safety and security research lab building guardrails, red-teaming frameworks, evaluations and runtime protection for AI and coding agents. As a Research Engineer you'll own the training pipeline, from data generation and environment design to evaluations, using reinforcement learning on distributed systems.",
    responsibilities: [
      "Post-train models using reinforcement learning, across the full training pipeline.",
      "Design data generation, RL environments and evaluations.",
      "Solve engineering challenges in distributed systems and low signal-to-noise settings.",
      "Make algorithmic improvements and apply research to real-world AI security problems."
    ],
    requirements: [
      "0–5 years as a researcher or software engineer in AI security, benchmarking or RL.",
      "Comfortable with PyTorch and RL / post-training infrastructure (e.g. Tinker, verl).",
      "Academic or industry ML/RL experience; publications at NeurIPS, ICML, ICLR or similar are a plus.",
      "High agency, strong technical acumen and clear thinking."
    ],
    compensation: "$250K – $450K + 0.5–1.5% equity. 5 days in office in San Francisco. Open to H-1B transfer, TN and STEM OPT."
  },
  {
    id: "compound-law-senior-partner",
    page: "job-compound-law-senior-partner.html",
    title: "Senior Partner",
    company: "Compound Law",
    industry: "AI-Native Legal Services",
    countries: ["Germany"],
    location: "Berlin, Germany",
    tags: ["Hybrid", "Full-time", "€200K – €300K (OTE €700K)", "Germany-based"],
    brief: "Join Germany's first AI-native law firm as a founding Senior Partner with founding equity in the technology company.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Compound Law is an AI-native law firm focused on commercial and compliance work, with lawyers from Gleiss Lutz, Latham & Watkins and Freshfields. As a founding Senior Partner you'll bring your portable book of business onto a proprietary agentic platform, act as the face of the firm and help shape its growth toward Series A.",
    responsibilities: [
      "Bring your portable book of business onto the platform and keep serving your clients.",
      "Act as the market-facing face of the firm through your PE/VC and mid-market network.",
      "Cross-sell commercial and compliance services into your client base.",
      "Work with the founders to move recurring matters onto the AI agent platform."
    ],
    requirements: [
      "12–20 years of German legal practice; German-qualified Volljurist.",
      "Personally held, portable book of business of €1M+ (commercial, IT & data, corporate/VC, regulatory).",
      "Strong network into private equity, VC or mid-market companies.",
      "Native-level German and professional English; Germany-based."
    ],
    compensation: "€200K – €300K base + share of personal book revenue (OTE €400K – €700K) + 1–5% founding equity. In person in Berlin preferred."
  },
  {
    id: "fonoa-solutions-engineer-london",
    page: "job-fonoa-solutions-engineer-london.html",
    title: "Solutions Engineer",
    company: "Fonoa",
    industry: "Tax Technology · E-Invoicing",
    countries: ["United Kingdom"],
    location: "London, UK",
    tags: ["Hybrid", "Full-time", "£90K – £120K (OTE £171K)", "UK work authorization"],
    brief: "Be the technical bridge between Fonoa's tax automation platform and enterprise customers like Zoom, Uber and Booking.com.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Fonoa is the AI-first tax operating system covering the full indirect tax lifecycle (tax ID validation, tax determination, e-invoicing and returns) across 120+ countries, trusted by Canva, Netflix, Spotify, Uber and Zoom. As a Solutions Engineer you'll partner with sales to lead technical discovery and design high-value solutions for global enterprises.",
    responsibilities: [
      "Lead technical discovery, scoping and solution design for enterprise prospects with Sales.",
      "Deliver compelling product demos and technical presentations.",
      "Drive discussions on API integration, gap analysis and implementation planning.",
      "Become a deep expert in Fonoa's API suite (Lookup, Tax, Returns, E-Invoicing).",
      "Support customers and ensure a smooth handoff from pre-sales to implementation."
    ],
    requirements: [
      "4–8 years as a solutions engineer or pre-sales engineer.",
      "Strong with REST APIs, JSON, API documentation and SQL.",
      "Able to work hybrid in London (UK work authorization; visa transfers only)."
    ],
    compensation: "£90K – £120K base + commission (OTE £128K – £171K) + equity + benefits. Hybrid, 2 days a week in London."
  },
  {
    id: "distyl-ai-engineer-london",
    page: "job-distyl-ai-engineer-london.html",
    title: "AI Engineer",
    company: "Distyl",
    industry: "Enterprise AI",
    countries: ["United Kingdom"],
    location: "London, UK",
    tags: ["Hybrid", "Full-time", "£150K – £200K", "Relocation support"],
    brief: "Design and ship production-grade LLM systems for Fortune 500 companies as Distyl opens its London office.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Distyl partners with the world's most ambitious enterprises to design and run their AI transformations, backed by Lightspeed, Khosla Ventures and Coatue. As an AI Engineer in the new London office you'll work directly with Fortune 500 customers to build and ship real-world AI applications, from intelligent agents to full-stack AI products.",
    responsibilities: [
      "Build production AI systems with LLMs: prompt engineering, agent workflows, tool use and full-stack products.",
      "Work directly with enterprise stakeholders to translate complex problems into AI solutions.",
      "Design scalable architectures balancing performance, reliability, cost and maintainability.",
      "Contribute to Distillery, Distyl's internal LLM application platform.",
      "Build rigorous evaluation frameworks for accuracy, latency, cost, reliability and safety."
    ],
    requirements: [
      "5–15 years in software engineering, building production AI/LLM systems in Python.",
      "Experience with LLMs, agents, RAG, prompt engineering, APIs and evaluation frameworks.",
      "Able to work hybrid in London (visa transfers only)."
    ],
    compensation: "£150K – £200K base + meaningful equity + relocation up to $5K + comprehensive benefits. Hybrid, 3 days a week (Tue–Thu) in London."
  },
  {
    id: "canadavisa-head-of-partnerships",
    page: "job-canadavisa-head-of-partnerships.html",
    title: "Head of Partnerships",
    company: "CanadaVisa",
    industry: "Legal Tech · Immigration",
    countries: ["Canada"],
    location: "Toronto, Canada",
    tags: ["Hybrid", "Full-time", "CA$170K – CA$190K (OTE CA$250K)", "Canada work authorization"],
    brief: "Lead and grow partnerships at an AI-native legal tech company serving millions of newcomers to Canada, reporting to the CEO.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "CanadaVisa, together with Cohen Immigration Law, has helped newcomers from around the world come to Canada since 1994, and is becoming an AI-native legal technology company. As Head of Partnerships, reporting to the CEO, you'll grow the partnerships business, integrate partners into AI platforms used by millions and build the team that delivers it.",
    responsibilities: [
      "Double partnership revenue in 3 years by deepening existing partnerships and landing new ones.",
      "Integrate partner services into CanadaVisa's AI-native portals and tools, and own their adoption.",
      "Build partner-sourced legal services revenue to a $1M run rate within 2 years.",
      "Hire and lead a team of A-players with clear scorecards.",
      "Keep existing partners happy and contractual commitments on track."
    ],
    requirements: [
      "3–7 years of partnerships experience with strong product intuition (integrating partners into a product).",
      "Strong commercial judgment on partner economics.",
      "Experience managing senior stakeholders at large institutions while moving fast in a startup-style team.",
      "Based in Toronto with Canada work authorization (no visa sponsorship)."
    ],
    compensation: "CA$170K – CA$190K base + performance bonus (OTE CA$230K – CA$250K). Hybrid, about 3 days a week in Toronto."
  },

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
