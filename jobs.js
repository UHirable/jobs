// =========================================================
//  ✏️  THIS IS THE ONLY FILE YOU EDIT TO ADD / REMOVE JOBS
//
//  1) Paste your Google Form (or Notion form) link below.
//     Every "Apply now" button opens it.
//  2) To ADD a job: copy one { ... } block (with its comma),
//     paste it, and change the details.
//  3) To REMOVE a job: delete its whole { ... } block.
//  The country dropdown fills itself from the jobs below.
// =========================================================

const APPLY_FORM = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";

const JOBS = [
  {
    title: "Customer Experience Manager",
    company: "Confidential",
    country: "Egypt",
    city: "Cairo",
    type: "Full-time · On-site",
    description: "Lead the customer support team and improve customer satisfaction."
  },
  {
    title: "Product Manager",
    company: "Confidential",
    country: "Nigeria",
    city: "Lagos",
    type: "Full-time · Hybrid",
    description: "Own the roadmap for banking and payment products."
  },
  {
    title: "Project Manager",
    company: "Confidential",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Full-time · Remote",
    description: "Plan and deliver cross-team projects on time and on budget."
  }
];

// Optional: give one job its own form by adding  applyLink: "https://..."  inside its block.
