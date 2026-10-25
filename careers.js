// =========================================================
//  Career Boost – tools for job seekers
//  To add a tool: copy one { ... } block (with the comma after it),
//  paste it, and change the text between the quotes.
//  logo: image file name, or leave "" and set logoText (e.g. "GR")
//  deal: big highlighted perk   dealLabel: small label above it   perk: perk details
//  steps: optional 3 short steps   cta: button text
//  Only show real perks offered by the company (no made-up discounts).
// =========================================================
const CAREER_TOOLS = [
  {
    name: "Taplio",
    logo: "logo-taplio.png",
    tag: "LinkedIn Growth",
    tagline: "Grow your LinkedIn presence with AI: write better posts, schedule content and see what works.",
    deal: "7 DAYS FREE",
    dealLabel: "Free trial",
    perk: "Full Pro access free for 7 days + 30-day money-back guarantee",
    cta: "Try Taplio Free",
    roles: ["AI Post Writer", "Content Ideas", "Post Scheduling", "LinkedIn Analytics", "Profile Growth", "Networking Tools"],
    link: "https://taplio.com/?via=uhirable"
  },
  {
    name: "Got Resume Builder",
    logo: "",
    logoText: "GR",
    tag: "Resume Builder & ATS",
    tagline: "Build an ATS-friendly resume with AI and check how well it matches the job, in minutes.",
    deal: "FREE ATS CHECK",
    dealLabel: "Free to start",
    perk: "Free ATS resume check, keyword scanner and a free plan to start",
    steps: ["Write your resume with AI", "Pick a design and font", "Download and email it"],
    cta: "Check My Resume Free",
    roles: ["AI Resume Assistant", "ATS Resume Checker", "Keyword Scanner", "AI Cover Letter", "Job Application Tracker", "Professional Templates"],
    link: "https://www.gotresumebuilder.com/?via=uhirable"
  }
];
