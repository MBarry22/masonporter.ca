/**
 * Project catalog — use on the homepage and later on /projects.
 * homepageOrder: lower comes first in Featured Projects (max 4 on home).
 */

const MAX_HOME = 4;

export const projects = [
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
    homeOrder: 0,
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
    homeOrder: 1,
  },
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
    homeOrder: 2,
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
    visibleOnHome: true,
    homeOrder: 3,
  },
];

export function getFeaturedForHome() {
  return projects
    .filter((p) => p.visibleOnHome)
    .sort((a, b) => a.homeOrder - b.homeOrder)
    .slice(0, MAX_HOME);
}
