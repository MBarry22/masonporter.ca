/**
 * Project catalog — homepage (max 4 featured) and /projects (full list).
 * homeOrder: lower comes first among visibleOnHome projects.
 */

const MAX_HOME = 4;

/** Full catalog order on /projects */
const LIST_ORDER = [
  "iwcd-cms",
  "releasepilot",
  "astryx",
  "flowwright-2",
  "vaultlens",
  "favotools",
];

export const projects = [
  {
    id: "iwcd-cms",
    title: "IWCD Construction Management System",
    subtitle: "Custom enterprise platform — roles, SCOs, estimating, Procore",
    bullets: [
      "Replaced $200k+ software need",
      "100k+ LOC across multiple modules",
      "Azure AD SSO, RBAC",
    ],
    tags: ["Next.js", "Node", "MySQL", "Azure AD", "Procore"],
    href: "https://iwcdcoms.ca",
    primaryLabel: "View site",
    category: ["Featured", "Business Systems", "SaaS"],
    visibleOnHome: true,
    homeOrder: 0,
  },
  {
    id: "releasepilot",
    title: "ReleasePilot",
    subtitle: "Release & Incident Control Center",
    summary:
      "Portfolio flagship demo for safer software delivery — release planning, risk scoring, deployment simulation, rollback workflows, incidents, postmortems, and audit-ready timelines. Demonstrates release-control architecture, incident-response UX, rollback readiness, and auditability using synthetic demo data.",
    bullets: [
      "Release risk scoring and readiness checks",
      "Deployment simulator with rollback states",
      "Incident timeline and structured status updates",
      "Postmortem and audit-log workflow",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Operational UX",
      "Risk Scoring",
      "Incident Response",
    ],
    href: "https://releasepilot.vercel.app/",
    primaryLabel: "View Live Demo",
    secondaryHref: "https://releasepilot.vercel.app/case-study",
    secondaryLabel: "Case Study",
    badges: ["Portfolio Flagship", "Synthetic Data", "Release Ops"],
    featured: true,
    category: ["Featured", "SaaS", "DevOps", "Dashboard", "Operations"],
    visibleOnHome: true,
    homeOrder: 1,
  },
  {
    id: "astryx",
    title: "ASTRYX (ITSM & Asset Management)",
    subtitle: "Multi‑tenant SaaS with dynamic forms and ML routing",
    bullets: [
      "RBAC, Teams, Subscriptions",
      "Stripe billing portal",
      "Inventory + asset assignment",
    ],
    tags: ["Next.js", "Node", "Postgres", "Stripe", "Auth0"],
    href: "https://astryxapp.vercel.app/",
    primaryLabel: "View site",
    category: ["Featured", "SaaS", "Web Tools", "Business Systems"],
    visibleOnHome: true,
    homeOrder: 2,
  },
  {
    id: "flowwright-2",
    title: "Flowwright 2.0",
    subtitle:
      "AI browser automation studio that turns plain-English tasks into structured workflow plans, simulated worker playback, logs, and exportable results.",
    bullets: [
      "Natural-language prompt → typed automation plan",
      "Visual worker preview, run logs, and step inspector",
      "Controlled demo targets with JSON/CSV export",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "AI Automation",
      "Developer Tools",
      "Workflow UX",
    ],
    href: "https://flowright-2-0.vercel.app/",
    primaryLabel: "View Live Demo",
    secondaryHref: "https://flowright-2-0.vercel.app/case-study",
    secondaryLabel: "Read Case Study",
    badge: "Featured",
    featured: true,
    category: ["Featured", "Automation", "Developer Tools", "SaaS"],
    visibleOnHome: true,
    homeOrder: 3,
  },
  {
    id: "vaultlens",
    title: "VaultLens",
    subtitle:
      "Permission-aware document intelligence demo showing the trust layer behind enterprise AI/RAG systems.",
    bullets: [
      "Role-based answers across synthetic company documents",
      "Citations, restricted-access handling, and audit logs",
      "Evaluation dashboard for trust and permission behavior",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "RAG Architecture",
      "RBAC",
      "Document Intelligence",
    ],
    href: "https://vaultlens.vercel.app/",
    primaryLabel: "View Live Demo",
    secondaryHref: "https://vaultlens.vercel.app/case-study",
    secondaryLabel: "Read Case Study",
    badge: "Featured",
    featured: true,
    category: ["Featured", "Developer Tools", "SaaS", "Business Systems"],
    visibleOnHome: false,
    homeOrder: 6,
  },
  {
    id: "favotools",
    title: "favotools.com",
    subtitle: "SEO‑optimized multi‑tool SaaS with subscriptions",
    bullets: [
      "Categories & dynamic routing",
      "Ad + subscription monetization",
      "Fast search & filtering",
    ],
    tags: ["Next.js", "Node", "Stripe", "SEO", "SaaS"],
    href: "https://favotools.com",
    primaryLabel: "View site",
    category: ["SaaS", "Web Tools", "Featured"],
    visibleOnHome: false,
    homeOrder: 4,
  },
];

export function getFeaturedForHome() {
  return projects
    .filter((p) => p.visibleOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder)
    .slice(0, MAX_HOME);
}

/** Full list for /projects — stable product order */
export function getAllProjects() {
  const idx = (id) => LIST_ORDER.indexOf(id);
  return [...projects].sort((a, b) => idx(a.id) - idx(b.id));
}
