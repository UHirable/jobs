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

// Paraform Connector referral link (Apply button for Paraform roles).
// Candidates who submit through it are credited to Amel automatically.
const PARAFORM_LINK = "https://www.paraform.com/connectors/refer/cmvl2n90r001e0hjj7722k3jt";

const JOBS = [
  {
    id: "patterniq-senior-data-ml-engineer",
    page: "job-patterniq-senior-data-ml-engineer.html",
    title: "Senior Data & Machine Learning Engineer",
    company: "PatternIQ",
    logo: "logo-co-patterniq.png",
    industry: "AI · AdTech",
    countries: ["United States"],
    location: "New York, NY",
    tags: ["Hybrid", "Full-time", "$200K – $300K", "US citizens / Green Card"],
    brief: "Own the ad-to-recipient matching stack end to end at a seed-stage AI startup: retrieval, ranking, embeddings and the serving path.",
    eligibility: "US citizens or Green Card holders living in the US only. Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "PatternIQ is building an AI-powered consumer world model that predicts what people want, engage with and buy. Its first product, InboxMatch, is an ML-driven ad network that places personalized ads inside publishers' email newsletters. As Senior Data & ML Engineer you'll independently own the matching stack end to end, working directly with the CTO and CEO, with a path to building and leading an ML team.",
    responsibilities: [
      "Build retrieval, ranking and re-ranking for ad-to-recipient matching.",
      "Own the embedding and vector-search infrastructure behind real-time ad selection.",
      "Balance CTR lift, advertiser ROAS, publisher revenue and subscriber relevance in one ranking stack.",
      "Own the feature store and serving path, from offline training to online inference.",
      "Apply LLMs and foundation models to subscriber tagging, content understanding and user modeling.",
      "Lead 0-to-1 initiatives, ETL/ELT pipelines, the dbt layer and performance dashboards."
    ],
    requirements: [
      "5–16 years of experience in production ML or data engineering.",
      "Strong SQL, Postgres, columnar analytical databases, dbt and ETL/ELT pipelines.",
      "Thinks like a scientist and builds like an engineer; comfortable with high autonomy.",
      "US citizen or Green Card holder (no visa sponsorship).",
      "Hybrid in New York City, with travel once per quarter."
    ],
    compensation: "$200K – $300K base + 0.1% – 1% equity. Full-time, hybrid in New York City."
  },
  {
    id: "orderful-senior-staff-data-engineer",
    page: "job-orderful-senior-staff-data-engineer.html",
    title: "Sr/Staff Data Engineer",
    company: "Orderful",
    logo: "logo-co-orderful.png",
    industry: "Supply Chain · AI",
    countries: ["United States", "Canada"],
    location: "US or Canada",
    tags: ["Remote", "Full-time", "$190K – $260K", "US / Canada work authorization"],
    brief: "Join as the second data hire at an a16z-backed AI EDI platform and help own the entire data function, from infrastructure to customer-facing analytics.",
    eligibility: "Must live in the US or Canada with work authorization there. Please don't apply from outside the US or Canada.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Orderful is the modern, AI-powered EDI platform used by 400+ companies, including Koch Industries and Liquid Death, to trade supply chain data. Backed by Andreessen Horowitz, it's the fastest growing supply chain technology company in North America. You'll be the second data hire, partnering with the data lead to build data products and extend a modern data platform.",
    responsibilities: [
      "Own large parts of the data function end to end, from pipelines to analytics and governance.",
      "Build an agentic semantic layer, event-driven data products and customer-facing analytics.",
      "Design and operate data infrastructure on AWS, Snowflake and Databricks, including on-call.",
      "Drive zero-to-one work across streaming, data governance and knowledge management.",
      "Evaluate and select tools to keep the platform flexible as AI evolves."
    ],
    requirements: [
      "5+ years building and operating data platforms.",
      "SQL, Python, AWS, Snowflake, Databricks, dbt, Airflow or Dagster, Fivetran, Kafka or Kinesis.",
      "Thrives in ambiguity and thinks in systems.",
      "US citizen or Green Card holder, or authorized to work in Canada (no visa sponsorship).",
      "Based in the US or Canada."
    ],
    compensation: "$190K – $225K base, up to $260K+ for staff-level or outstanding candidates, plus competitive equity. Full-time, remote in the US or Canada."
  },
  {
    id: "petra-security-quantitative-researcher",
    page: "job-petra-security-quantitative-researcher.html",
    title: "Quantitative Researcher",
    company: "Petra Security",
    logo: "logo-co-petra-security.png",
    industry: "Cybersecurity · AI",
    countries: ["United States"],
    location: "San Francisco, CA",
    tags: ["On-site", "Full-time", "$210K – $270K", "Visa sponsorship available"],
    brief: "Build the ML models that catch attackers in real time at a fast-growing YC cybersecurity startup.",
    eligibility: "On-site 5 days a week in San Francisco. Visa sponsorship available (new H1B, TN or transfers).",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Petra Security is an AI-powered platform that protects small and mid-sized businesses from account takeovers in Microsoft 365. Founded by YC W24 alumni from Abnormal Security, Palo Alto Networks and Bridgewater, Petra protects 2.5M+ users across 10,000+ businesses. You'll own detection and forensics models, which are core to the product.",
    responsibilities: [
      "Build and improve ML models for account-compromise detection, targeting 100% recall and near-100% precision.",
      "Separate attacker activity from real-user activity across the full activity timeline.",
      "Own the full research pipeline: pull and clean data, engineer features and model.",
      "Choose model architectures with production latency in mind, then ship and maintain your code.",
      "Own specific modeling goals and their results in a small, elite team."
    ],
    requirements: [
      "4+ years of experience as a quantitative researcher.",
      "Deep statistical rigor and comfort with messy alternative data.",
      "Python, SQL, machine learning, time series modeling, anomaly detection and feature engineering.",
      "Able to work on-site 5 days a week in San Francisco."
    ],
    compensation: "$210K – $270K base + competitive equity. Full-time, on-site in San Francisco. Visa sponsorship available."
  },
  {
    id: "apartment-list-senior-data-engineer-ii",
    page: "job-apartment-list-senior-data-engineer-ii.html",
    title: "Senior Data Engineer II",
    company: "Apartment List",
    logo: "logo-co-apartment-list.png",
    industry: "PropTech · Rentals",
    countries: ["United States"],
    location: "United States",
    tags: ["Remote", "Full-time", "$155K – $221K", "US citizens / Green Card"],
    brief: "Own the data platform architecture at Apartment List, from pipeline design to cost, reliability and AI tooling.",
    eligibility: "US citizens or Green Card holders living in the US only. Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Apartment List matches renters to curated apartments across 6M+ rental units. As Senior Data Engineer II (IC4) you'll own the architecture of a growing data platform: end-to-end pipeline design, platform investment tradeoffs and the technical calls that keep it reliable as it scales, while staying hands-on.",
    responsibilities: [
      "Own and evolve pipeline architecture across ingestion, transformation, modeling and serving.",
      "Lead platform improvements in warehouse cost, compute efficiency and access control.",
      "Drive large, cross-team projects and own their outcomes.",
      "Lead monitoring and testing strategy and handle the hardest production issues.",
      "Mentor data and analytics engineers and integrate AI into data engineering workflows."
    ],
    requirements: [
      "6–9 years of experience as a data engineer or data platform engineer.",
      "Apache Airflow, BigQuery, containers, CI/CD, Kubernetes and Datadog.",
      "US citizen or Green Card holder (no visa sponsorship).",
      "Based in the US, with company onsites up to 4 times a year."
    ],
    compensation: "$155K – $221K base (based on location) + competitive equity. Full-time, remote in the US."
  },
  {
    id: "sparrow-partner-data-analyst",
    page: "job-sparrow-partner-data-analyst.html",
    title: "Partner Data Analyst",
    company: "Sparrow",
    logo: "logo-co-sparrow.png",
    industry: "Fintech · Credit Unions",
    countries: ["United States"],
    location: "New York, NY",
    tags: ["On-site", "Full-time", "$100K – $135K", "US citizens / Green Card"],
    brief: "Own how credit union partners' data gets into Sparrow's Crest platform at a profitable, fast-growing fintech in NYC.",
    eligibility: "US citizens or Green Card holders living in the US only. Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Sparrow powers 180+ credit unions with Crest, a marketing and engagement platform built for credit unions. It has been profitable for 24+ months with triple-digit revenue growth. You'll take full ownership of partner data mapping and troubleshooting, working with the CPO and CTO, with a path into data leadership and governance.",
    responsibilities: [
      "Map each new credit union's core banking data into the Crest platform.",
      "Fix live data issues fast, from field mapping to campaign logic.",
      "Explain technical findings simply to Partner Success Managers.",
      "Document and structure the data mapping process with the CPO and CTO.",
      "Build reusable SQL, Python or JavaScript checks, automation and governance standards."
    ],
    requirements: [
      "2–4 years as a data analyst, solutions engineer or data ops/integration analyst.",
      "SQL, Python, JavaScript, Excel and relational databases.",
      "Curious, pragmatic and patient with non-technical teammates.",
      "US citizen or Green Card holder (no visa sponsorship).",
      "5 days a week in the New York office."
    ],
    compensation: "$100K – $135K base + 0.05% – 0.15% equity. Full-time, on-site in New York City."
  },
  {
    id: "systemzero-senior-data-engineer",
    page: "job-systemzero-senior-data-engineer.html",
    title: "Senior Data Engineer (AI & Data Products)",
    company: "systemzero",
    logo: "logo-co-systemzero.png",
    industry: "Fintech · AI",
    countries: ["United Kingdom", "Netherlands"],
    location: "London or Amsterdam",
    tags: ["Remote", "Full-time", "£90K – £110K", "London or Amsterdam based"],
    brief: "Own the Python data pipelines and data ontology behind an AI-native operating system for CFOs, and grow into a tech lead.",
    eligibility: "Must live in London or Amsterdam and work UK/CET hours. Please don't apply from outside the UK or the Netherlands.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "systemzero is building an AI-native operating system for CFOs: autonomous agents that turn finance from backward-looking reporting into strategic intelligence. It's backed by HG Capital, Apax Partners, Silver Lake and Anthropic angels. You'll be a hands-on IC reporting to the CTO and will guide a core data team of four.",
    responsibilities: [
      "Build and own production Python pipelines into a graph and vector store (SurrealDB).",
      "Add data providers and connectors such as Snowflake, ERP, accounting and billing systems.",
      "Design the data ontology so AI retrieval and agent reasoning stay accurate.",
      "Own your work end to end across data, DevOps and infrastructure.",
      "Move toward a 60/40 split between IC work and mentoring the data team."
    ],
    requirements: [
      "6–10 years in data engineering, ML systems or backend-heavy engineering.",
      "Python, TypeScript, SQL, PostgreSQL, Snowflake, GCP, graph databases, vector stores and RAG.",
      "Based in London or Amsterdam and working UK/CET hours.",
      "Able to meet the team on-site about every 2 months in New York, London or Amsterdam."
    ],
    compensation: "£90K – £110K base, possibly higher for exceptional candidates, plus competitive equity and benefits. Full-time, remote from London or Amsterdam."
  },
  {
    id: "palantir-forward-deployed-software-engineer-us-government",
    page: "job-palantir-forward-deployed-software-engineer-us-government.html",
    title: "Forward Deployed Software Engineer, US Government",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United States"],
    location: "Washington, DC or New York, NY",
    tags: ["On-site", "Full-time", "$135K – $200K", "US citizens / Green Card"],
    brief: "Work directly with US Government customers on Palantir's top initiatives, with the direct attention of the CTO, building data solutions to their hardest problems.",
    eligibility: "US citizens or Green Card holders living in the US only. Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. Forward Deployed Software Engineers work directly with customers to understand their biggest problems, then design and build solutions that use data against them, on projects followed directly by Palantir's CTO.",
    responsibilities: [
      "Work directly with customers to understand their problems and implement data-driven solutions.",
      "Design and implement technical solutions and code custom web applications.",
      "Work in small teams with minimal supervision and own high-stakes projects end to end.",
      "Discuss architecture with fellow engineers and interact with customer executives.",
      "Help set strategy for the team."
    ],
    requirements: [
      "1+ years of experience with a strong computer science or software engineering background.",
      "US citizen or Green Card holder (no visa sponsorship).",
      "Able to work on-site in Washington, DC or New York City."
    ],
    compensation: "$135K – $200K base. Full-time, on-site in Washington, DC or New York City."
  },
  {
    id: "palantir-senior-software-engineer-autonomous-systems",
    page: "job-palantir-senior-software-engineer-autonomous-systems.html",
    title: "Senior Software Engineer, Autonomous Systems",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United States"],
    location: "Seattle, New York, Washington DC or Palo Alto",
    tags: ["Hybrid", "Full-time", "$145K – $275K", "US citizens / Green Card"],
    brief: "Build command and control and agentic AI software for drones and autonomous systems, using LLMs and real-time sensor data, at Palantir.",
    eligibility: "US citizens or Green Card holders living in the US only. Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. This customer-facing product team builds Command and Control (C2) and agentic autonomy software that lets users manage robotic and autonomous systems, combining sensors, unmanned vehicles, LLMs and real-time decision making.",
    responsibilities: [
      "Design, build and optimize software for mission-critical autonomous systems.",
      "Develop algorithms that process data from many sensors for real-time state estimation and threat detection.",
      "Build LLM and AI-driven systems that assess threats and make fast decisions.",
      "Integrate with sensors, effectors and autonomous platforms.",
      "Engineer scalable, reliable and fail-safe systems for high-stakes environments."
    ],
    requirements: [
      "4–10 years of backend or service-layer software engineering, currently hands-on.",
      "Experience with Rust, Python, C++ or Java.",
      "US citizen or Green Card holder (no visa sponsorship).",
      "Hybrid, with travel to client sites."
    ],
    compensation: "$145K – $275K base + RSUs. Hybrid in Seattle, New York, Washington DC or Palo Alto."
  },
  {
    id: "palantir-forward-deployed-software-engineer-edge-autonomous-systems",
    page: "job-palantir-forward-deployed-software-engineer-edge-autonomous-systems.html",
    title: "Forward Deployed Software Engineer, Edge Autonomous Systems",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United States"],
    location: "Washington, DC",
    tags: ["Hybrid", "Full-time", "$135K – $200K", "US clearance eligible"],
    brief: "Join a new Palantir team building and deploying software that runs drones and autonomous systems in the field, from edge devices to control systems.",
    eligibility: "US citizens living in the US only (US security clearance required). Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. This newly formed team builds software that runs on compute-constrained, intermittently connected systems such as drones and other unmanned vehicles, and connects it to Palantir's platform, AI and data fusion services.",
    responsibilities: [
      "Build, test, integrate and deploy mission-critical autonomy software for autonomous systems.",
      "Connect autonomy solutions to Palantir's platform, AI, sensor and data fusion services.",
      "Make things work in the field: deployment, integration, security, testing and flight testing.",
      "Partner with experts in sensing, AI, systems engineering, hardware and robotics."
    ],
    requirements: [
      "2+ years of professional software development experience.",
      "2+ years integrating and deploying software to edge or autonomous systems (drones, self-driving, edge servers).",
      "Strong skills in Rust, Python, Go or similar, plus Linux, CI, networking and security.",
      "Active US security clearance, or eligible and willing to obtain one.",
      "Able to travel 25–75%."
    ],
    compensation: "$135K – $200K base + RSUs. Hybrid in Washington, DC."
  },
  {
    id: "palantir-front-end-engineer-defense",
    page: "job-palantir-front-end-engineer-defense.html",
    title: "Front-End Engineer, Defense",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United States"],
    location: "Washington, DC",
    tags: ["On-site", "Full-time", "$135K – $200K", "Clearance sponsored"],
    brief: "Build the TypeScript and React applications behind Gotham, Palantir's defense platform, used daily in command centers around the world.",
    eligibility: "US citizens living in the US only (US security clearance required). Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. You'll join Gotham, Palantir's defense product, building data-intensive interfaces such as geospatial workflows and real-time collaboration tools that make complex work simple for non-technical users.",
    responsibilities: [
      "Build high-scale, collaborative geospatial workflows.",
      "Design frameworks that power complex workflows across applications in one workspace.",
      "Develop real-time collaborative tooling and data-analysis solutions.",
      "Own the APIs and schemas behind your frontend code, working with backend engineers."
    ],
    requirements: [
      "2–5 years of frontend or full-stack engineering experience.",
      "Strong JavaScript, TypeScript and React skills.",
      "Bachelor's in Computer Science or equivalent understanding of algorithms and systems design.",
      "Eligible and willing to obtain a US security clearance (Palantir sponsors the process)."
    ],
    compensation: "$135K – $200K base + RSUs, plus relocation assistance. On-site 4–5 days a week in Washington, DC."
  },
  {
    id: "palantir-forward-deployed-infrastructure-engineer-uk-government",
    page: "job-palantir-forward-deployed-infrastructure-engineer-uk-government.html",
    title: "Forward Deployed Infrastructure Engineer, UK Government",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United Kingdom"],
    location: "London, UK",
    tags: ["Hybrid", "Full-time", "£90K – £105K", "Active UK DV clearance"],
    brief: "Run and automate the production infrastructure behind Palantir's UK Government deployments, using Kubernetes, Foundry, Apollo and AI tools.",
    eligibility: "Must live in the UK and hold active UK DV clearance. Please don't apply from outside the UK.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. On the UK Government team, you'll build, operate and maintain the high-performance services behind Palantir's platforms, and lead automation using Palantir's own Foundry and Apollo platforms and LLM tools.",
    responsibilities: [
      "Build, operate and maintain reliable, scalable services for UK Government deployments.",
      "Own production reliability: monitoring, alerting, configuration management and upgrades.",
      "Deploy new Palantir products and migrate to the latest infrastructure.",
      "Lead automation to reduce manual operations, using Foundry, Apollo and AI tools.",
      "Join an on-call rotation about every 5–6 weeks."
    ],
    requirements: [
      "1–5 years in infrastructure engineering, SRE or a related field.",
      "Hands-on experience running large-scale production systems; Kubernetes is a plus.",
      "Active UK DV clearance already held, and sole British nationality.",
      "Hybrid in London, with in-office work for classified tasks."
    ],
    compensation: "£90K – £105K base + RSUs, plus relocation assistance. Hybrid in London."
  },
  {
    id: "palantir-forward-deployed-infrastructure-engineer-us-government",
    page: "job-palantir-forward-deployed-infrastructure-engineer-us-government.html",
    title: "Forward Deployed Infrastructure Engineer, US Government",
    company: "Palantir",
    logo: "logo-co-palantir.png",
    industry: "Data & AI Platforms · Defense & Government",
    countries: ["United States"],
    location: "Honolulu, HI",
    tags: ["Hybrid", "Full-time", "$135K – $200K", "Active Top Secret clearance"],
    brief: "Join Palantir's global Baseline team in Honolulu, keeping Palantir's software running across US Government networks, with relocation available.",
    eligibility: "US citizens living in the US only (US security clearance required). Please don't apply from outside the US.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Palantir (NYSE: PLTR) builds the data and AI platforms that governments, defense organizations and the world's largest companies rely on for their most critical work. Baseline is Palantir's forward deployed infrastructure team of about 90 engineers worldwide, keeping operations seamless across every environment, from on-prem to cloud and from commercial to government networks.",
    responsibilities: [
      "Support and operate Palantir software: monitoring, alerting, configuration and upgrades.",
      "Deploy new Palantir products and migrate to the latest infrastructure.",
      "Debug and optimize services for long-term reliability and scale.",
      "Automate workflows and runbooks, including with LLM and AI tools.",
      "Join the support on-call schedule."
    ],
    requirements: [
      "1–3 years in infrastructure engineering, SRE or a related field.",
      "Experience with Java, Kubernetes, Terraform, Ansible, Linux and cloud (AWS, Azure, GCP).",
      "US citizen or permanent resident with an active Top Secret clearance.",
      "Based in Honolulu, with travel up to 50%."
    ],
    compensation: "$135K – $200K base + equity, with relocation sponsored. Hybrid in Honolulu."
  },
  // ================= Paraform roles – batch 3 (GTM, 26 Oct 2026) =================
  {
    id: "ancep-founding-gtm",
    page: "job-ancep-founding-gtm.html",
    title: "Founding GTM",
    company: "Ancep",
    industry: "AI for Commercial Insurance",
    countries: ["United Kingdom"],
    location: "London, UK",
    tags: ["On-site", "Full-time", "£70K – £140K", "Visa sponsorship"],
    brief: "Be the first commercial hire at a stealth AI startup already working with 3 of the top 10 global insurance brokers, with visa sponsorship and relocation to London.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Ancep is building the AI agent layer for the $3T commercial insurance market, automating submission intake, data extraction, insurer outreach and quote comparison for brokers. Still in stealth, it already works with 3 of the top 10 global brokers and is backed by top European and American investors. As Founding GTM you'll be the first commercial hire, selling hands-on while building the go-to-market motion from scratch alongside the founders.",
    responsibilities: [
      "Own the full sales cycle, from outbound prospecting to closing deals with insurance brokers.",
      "Build the go-to-market motion and sales playbook from scratch.",
      "Work directly with the founders to shape how the product goes to market.",
      "Act as a player-coach: carry a quota now and build the sales team as the company grows."
    ],
    requirements: [
      "1–5 years of full-cycle sales experience at an early-stage company, selling to large enterprises.",
      "Proven track record of building real revenue with high ownership.",
      "Excited to build from scratch without a playbook; insurance knowledge is not required.",
      "Able to work 5 days a week in the London office (visa sponsorship and relocation available)."
    ],
    compensation: "£70K – £140K base + commission + meaningful equity + relocation. On-site 5 days a week in London. Open to visa sponsorship."
  },
  {
    id: "fireworks-ai-enterprise-account-executive",
    page: "job-fireworks-ai-enterprise-account-executive.html",
    title: "Enterprise Account Executive",
    company: "Fireworks AI",
    industry: "Generative AI Infrastructure",
    countries: ["United States"],
    location: "Remote · United States",
    tags: ["Remote", "Full-time", "$155K – $175K", "US citizens / Green Card"],
    brief: "Sell the AI inference platform behind Uber, DoorDash, Notion and Cursor, fully remote anywhere in the US, with uncapped commission and equity in a $4B company.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Fireworks AI is building the future of generative AI infrastructure, independently benchmarked as the fastest LLM inference platform. Founded by veterans of Meta PyTorch and Google Vertex AI, it's a $4B Series C company backed by Benchmark, Sequoia and Lightspeed. As Enterprise Account Executive you'll drive new business with large enterprises and technical buyers.",
    responsibilities: [
      "Develop and execute a sales strategy within targeted enterprise accounts.",
      "Own the full sales cycle, from prospecting to procurement.",
      "Generate pipeline and work with channel and alliance partners to close deals.",
      "Forecast accurately and keep a high level of customer satisfaction.",
      "Travel for client visits and presentations as needed."
    ],
    requirements: [
      "6+ years of SaaS sales, including 3+ years selling to technical audiences.",
      "Track record of closing six-figure deals in large, complex enterprise accounts.",
      "Experience selling technical or infrastructure products (APIs, SDKs, DevOps) is a strong plus.",
      "Based in the US; US citizen or Green Card holder (no visa sponsorship)."
    ],
    compensation: "$155K – $175K base, $310K – $350K OTE (50/50 split) with no commission cap, plus meaningful equity. Fully remote anywhere in the US."
  },
  {
    id: "elise-ai-senior-enterprise-sales-manager",
    page: "job-elise-ai-senior-enterprise-sales-manager.html",
    title: "Senior Enterprise Sales Manager, Housing",
    company: "EliseAI",
    industry: "Agentic AI for Housing & Healthcare",
    countries: ["United States"],
    location: "Austin, TX",
    tags: ["On-site", "Full-time", "$210K – $240K", "Visa transfers"],
    brief: "Build and lead EliseAI's new Texas office as a player-coach at an a16z-backed AI unicorn that powers 1 in 6 US apartments.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "EliseAI builds agentic AI for housing and healthcare and powers 1 in 6 apartments in the US. Backed by a $250M Series E led by Andreessen Horowitz, its ARR has grown to $200M. You'll build and lead the new Texas office from the ground up, closing enterprise deals yourself while hiring and developing a team, with a clear path to second-line leadership within 12 months.",
    responsibilities: [
      "Personally close enterprise deals with regional and national property management companies.",
      "Stand up the new Texas office: help find the space, hire AEs and grow the regional presence.",
      "Lead, mentor and manage enterprise AEs across the full sales cycle.",
      "Partner with Customer Success, Product and Marketing on new business and expansion.",
      "Run pipeline reviews and forecasting, and represent EliseAI at industry conferences."
    ],
    requirements: [
      "7+ years of B2B SaaS enterprise sales, including 3+ years as an enterprise AE.",
      "2–3+ years managing AEs at companies with fewer than 1,000 employees.",
      "Experience with challenger-style, full-cycle enterprise selling.",
      "Able to work on-site in Austin 4 days a week (open to visa transfers)."
    ],
    compensation: "$210K – $240K base, $350K – $400K OTE (60/40 split) + competitive equity. On-site 4 days a week in Austin, Texas."
  },
  {
    id: "candex-head-of-product-marketing",
    page: "job-candex-head-of-product-marketing.html",
    title: "Head of Product Marketing",
    company: "Candex",
    industry: "B2B Fintech · Procurement",
    countries: ["United States"],
    location: "Remote · Miami, Boston or New York",
    tags: ["Remote", "Full-time", "$210K – $250K", "Visa sponsorship"],
    brief: "Build the product marketing function from scratch, reporting to the CEO of a Goldman Sachs and JP Morgan-backed fintech operating in 50 countries.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Candex is a fast-growing global B2B fintech that makes enterprise purchasing fast and simple, serving Global 2,000 companies in almost 50 countries. It has raised $130M+ from investors including Goldman Sachs, JP Morgan and American Express. As the first Product Marketing hire, reporting directly to the CEO, you'll build the entire function from scratch.",
    responsibilities: [
      "Build the product marketing function: processes, launch frameworks and operating cadence.",
      "Develop clear positioning and messaging that turns complex fintech into simple value propositions.",
      "Own go-to-market for new products, partnerships and country launches.",
      "Equip sales and customer success with battle cards, pitch decks and competitive intel.",
      "Run customer interviews and win/loss analysis, and set KPIs that tie marketing to business impact."
    ],
    requirements: [
      "5–15 years of experience in product marketing or product management.",
      "Experience building marketing functions or launch frameworks.",
      "Able to tailor messaging by segment, industry, region and buyer persona.",
      "Based in or near Miami, Boston or New York; travel 4–5 times a year (visa sponsorship available)."
    ],
    compensation: "$210K – $250K base + annual bonus + equity, with medical, dental, vision, 401K and unlimited PTO. Remote on East Coast hours."
  },
  {
    id: "pointr-senior-enterprise-account-executive",
    page: "job-pointr-senior-enterprise-account-executive.html",
    title: "Sr. Enterprise Account Executive",
    company: "Pointr",
    industry: "Indoor Location Technology · Healthcare",
    countries: ["United States"],
    location: "Boston, MA",
    tags: ["Hybrid", "Full-time", "$115K – $140K", "US citizens / Green Card"],
    brief: "Drive new business into hospitals and health systems for a global leader in indoor location technology, hybrid in Boston.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Pointr is a global leader in indoor location technology, live in thousands of venues and powering geolocation for 25 million people, with customers like UCHealth and the U.S. Department of Homeland Security. You'll join the growing healthcare vertical to drive new-business growth into hospitals and health systems, owning complex, multi-stakeholder sales cycles.",
    responsibilities: [
      "Run complex enterprise sales cycles into hospitals, from discovery through RFP, negotiation and close.",
      "Manage existing enterprise health system accounts to drive renewals and expansions.",
      "Generate new pipeline through outbound, your network, partners and industry conferences.",
      "Navigate large buying committees across IT, facilities, clinical leadership and the C-suite.",
      "Work closely with Sales Engineering, Customer Success, Marketing and partners."
    ],
    requirements: [
      "5+ years of complex B2B enterprise sales with a record of closing large deals.",
      "Healthcare or healthcare IT sales experience strongly preferred.",
      "Experience with competitive RFPs and methodologies like MEDDIC or MEDDPICC.",
      "Based in Boston (in office 2 days a week); US citizen or Green Card holder."
    ],
    compensation: "$115K – $140K base, $230K – $280K OTE + stock options, uncapped renewal commission, 401(k), 18 days PTO and paid parental leave."
  },
  {
    id: "govdash-account-executive",
    page: "job-govdash-account-executive.html",
    title: "Account Executive",
    company: "GovDash",
    industry: "AI for Government Contracting",
    countries: ["United States"],
    location: "Washington, DC",
    tags: ["Hybrid", "Full-time", "$120K – $150K", "US citizens / Green Card"],
    brief: "Sell the AI platform that helped customers win $5B+ in government contracts, at a fast-growing $42M-funded startup.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "GovDash helps businesses win and deliver government contracts with a secure AI platform covering the full contracting lifecycle. In 2025 alone its customers won more than $5B in contracts, and the company has raised $42M. They're hiring 2–3 Account Executives to round out a sales team of seven.",
    responsibilities: [
      "Run the full sales cycle from discovery calls to closing deals with government contractors.",
      "Become an expert on the GovDash platform and deliver compelling demos.",
      "Build relationships with C-level executives and heads of growth.",
      "Work with the engagement team to onboard new customers.",
      "Share customer feedback to help shape the product."
    ],
    requirements: [
      "3–5 years in full-cycle B2B software sales (minimum 2 years as an AE).",
      "Experience demoing a complex product.",
      "Curious and quick to learn the government procurement space.",
      "4 days in office in Arlington, VA or New York; US citizen or Green Card holder."
    ],
    compensation: "$120K – $150K base, $240K – $300K OTE + competitive equity. Relocation support available."
  },
  {
    id: "timescapes-account-executive",
    page: "job-timescapes-account-executive.html",
    title: "Account Executive",
    company: "Timescapes",
    industry: "Construction Tech",
    countries: ["United States"],
    location: "Dallas, TX",
    tags: ["Hybrid", "Full-time", "$125K – $140K", "US citizens / Green Card"],
    brief: "Own a greenfield Texas territory selling visual progress tracking to top construction contractors, with logos like NASA already on board.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Timescapes provides construction cameras and software for real-time visual progress tracking, used on 400+ projects across Australia, Canada, New Zealand and the US, with customers like NASA and Hensel Phelps. You'll own and build the greenfield Texas territory, helping scale US revenue from ~$600K to $2–3M+ within a year.",
    responsibilities: [
      "Run full-cycle sales: self-source, prospect and close new logos among top general contractors.",
      "Build relationships in the field through job site visits, associations and lunch-and-learns.",
      "Make 50–100 outbound calls a day, supported by a BDR and marketing team.",
      "Manage pipeline in HubSpot and drive 5–7 closed deals a month.",
      "Work with Marketing and Customer Success to grow accounts over time."
    ],
    requirements: [
      "4–8 years of full-cycle B2B SaaS sales.",
      "Experience selling into construction (Tier 1 and Tier 2 general contractors).",
      "An existing network in the construction industry is a strong plus.",
      "Hybrid in Plano/Dallas, TX; US citizen or Green Card holder."
    ],
    compensation: "$125K – $140K base, $250K – $280K OTE (50/50 split) + competitive equity. Top performers are exceeding 150% attainment."
  },
  {
    id: "garage-account-executive",
    page: "job-garage-account-executive.html",
    title: "Account Executive",
    company: "Garage",
    industry: "AI Marketplace · Y Combinator",
    countries: ["United States"],
    location: "Remote · Philadelphia, NYC, Miami & more",
    tags: ["Remote", "Full-time", "$93K – $118K", "US citizens / Green Card"],
    brief: "Join a Y Combinator-backed AI marketplace that grew revenue 10x in under a year, remote from Philadelphia, NYC, Miami, Nashville, Charlotte, St. Louis or Houston.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "Garage is the AI-powered marketplace transforming how America's essential assets, like fire trucks and specialty vehicles, are bought and sold. Backed by Y Combinator and $18M in funding, it has expanded to all 50 states and grown revenue more than 10x in under a year. They're hiring multiple Account Executives.",
    responsibilities: [
      "Own the full sales cycle, from sourcing and discovery to closing new logos.",
      "Balance inbound and outbound to build your own pipeline.",
      "Travel to meet customers in person and build strong relationships.",
      "Represent Garage at conferences and with customers like fire chiefs and fleet managers.",
      "Manage a growing book of business with discipline in your CRM."
    ],
    requirements: [
      "2–6 years as a full-cycle Account Executive, ideally at an early-stage startup.",
      "Competitive, self-driven and comfortable with ambiguity.",
      "Experience selling to government municipalities is a strong plus.",
      "Based in Philadelphia, Houston, St. Louis, Nashville, NYC, Charlotte or Miami; US citizen or Green Card holder."
    ],
    compensation: "$93K – $118K base, $186K – $236K OTE + competitive equity. Fully remote within the listed cities."
  },
  {
    id: "first-resonance-senior-account-executive",
    page: "job-first-resonance-senior-account-executive.html",
    title: "Senior Account Executive",
    company: "First Resonance",
    industry: "Manufacturing Software · Factory OS",
    countries: ["United States"],
    location: "Los Angeles, CA",
    tags: ["Hybrid", "Full-time", "$100K – $140K", "US citizens / Green Card"],
    brief: "Sell the factory operating system used by companies building rockets, nuclear reactors and eVTOLs, in a small high-impact team reporting to the COO.",
    applyLink: PARAFORM_LINK,
    matchNote: true,
    overview: "First Resonance builds ION Factory OS, the leading operating system for modern manufacturers, used by teams building NASA's lunar lander, eVTOLs, micro nuclear reactors and more. The Series A company has raised $34M+. You'll join a small sales team selling to the most ambitious hardware companies, in a hunting role reporting directly to the COO.",
    responsibilities: [
      "Own the full sales cycle for enterprise deals from $50K to several hundred thousand in ACV.",
      "Hunt for new business, mainly through outbound.",
      "Sell a technical, AI-native product to engineers, operators and manufacturing leaders.",
      "Translate MES/PLM/ERP value into business outcomes for C-suite stakeholders.",
      "Share market insights with product and engineering."
    ],
    requirements: [
      "5+ years of closing experience in B2B sales.",
      "Direct experience selling MES, PLM or ERP software, ideally to manufacturers.",
      "Comfortable in a ~50-person startup with ambiguity and a fast pace.",
      "Based in Los Angeles, in office 3–4 days a week; US citizen or Green Card holder."
    ],
    compensation: "$100K – $140K base, $200K – $280K OTE + competitive equity. Hybrid in El Segundo, Los Angeles."
  },
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
