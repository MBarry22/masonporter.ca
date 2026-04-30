import Link from "next/link";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedForHome } from "@/data/projects";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import MobileContactDock from "@/components/MobileContactDock";

export default function Home() {
  const timeline = [
    {
      title: "Founder at MP Developments",
      period: "2024 to Present",
      points: [
        "astryx.ca: ITSM platform with tickets, custom forms, assets, roles, and team workflows.",
        "Stripe subscriptions, Auth0 login, multi tenant MySQL, automated inbound and outbound email.",
        "favotools.com: SEO multi tool SaaS with usage limits, billing, email sending, and admin analytics.",
      ],
    },
    {
      title: "Lead Developer at Island Westcoast Developments LTD",
      period: "December 2022 to Present",
      points: [
        "Built internal Construction Management System used by 125+ employees; supports $100M+ annual project volume.",
        "Modules: change orders, subcontractor management, estimates, and approvals. Result: reduced processing from hours to minutes.",
        "Internal apps: email automation, financial calculations, reporting, leadership dashboards.",
        "Managed identity, authentication, cloud services, integrations, and infrastructure across two offices.",
      ],
    },
    {
      title: "Software Developer at Flavrite",
      period: "September 2022 to May 2023",
      points: [
        "Migrated mobile app from React Native CLI to Expo.",
        "Improved camera system and image search functions.",
      ],
    },
    {
      title: "Community Management and Software Developer at Wealth Empire",
      period: "Apr 2023 to May 2024",
      points: [
        "Community operations and support across channels.",
        "Delivered small tools/integrations to streamline workflows.",
        "Supported a 17,000 member community (as of 2025).",
      ],
    },
    {
      title: "Developer and Administration at Arctic Gaming Network",
      period: "Mar 2019 to Jan 2024 (Administration through Oct 2023)",
      points: [
        "Built and maintained community tooling and automation.",
        "Integrated bots and services; supported events and moderation workflows.",
        "Served a user base of 500k+ players over the network’s lifespan.",
        "Led operations for community servers and staff coordination; policy and partner/vendor liaison.",
      ],
    },
  ];

  return (
    <Layout>
      <Hero />

      <Section id="about" title="About Me" eyebrow="Introduction">
        <div className="max-w-3xl space-y-5 text-neutral-700">
          <div className="space-y-4 text-[15px] leading-relaxed sm:text-base">
            <p>
              I’m Mason Barry, also known professionally as Mason Porter — a
              full-stack developer and IT systems specialist based in Calgary,
              Alberta.
            </p>
            <p>
              I design and build production-ready software for businesses that
              need reliable internal systems, SaaS platforms, automation tools,
              and operational workflows. I built the Construction Management
              System used across a $100M+ construction company, and I’ve launched
              my own platforms including ASTRYX, an IT service management
              system, and 100PlusTools, a multi-tool SaaS product. I also ship
              portfolio-grade builds like Flowwright 2.0 and VaultLens to
              explore automation architecture, document intelligence, and
              permission-aware patterns.
            </p>
            <p>
              My work combines Next.js, TypeScript, Node.js, databases,
              authentication, billing, cloud services, and integrations to
              create systems that are clean, scalable, and useful in real
              business environments.
            </p>
            <p>
              I’m especially interested in building tools that help teams move
              faster, reduce manual work, and make better use of their data and
              processes.
            </p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 sm:pl-6">
            <li>Technology Specialist &amp; Lead Developer at Island Westcoast Developments</li>
            <li>Built a custom Construction Management System for a $100M+ construction company</li>
            <li>Creator of ASTRYX and 100PlusTools</li>
            <li>Experienced with identity, permissions, billing, APIs, cloud services, and internal systems</li>
            <li>Focused on SaaS platforms, automation tools, enterprise workflows, and practical business software</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Internal Systems",
              "SaaS Platforms",
              "Automation Tools",
              "IT Operations",
              "Document Intelligence",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" eyebrow="Capabilities">
        <BentoGrid>
          <BentoCard className="lg:col-span-3">
            <h3 className="font-semibold">Core Development</h3>
            <p className="mt-2 text-sm text-neutral-700">Next.js, React, Node.js, Express, TypeScript, Tailwind, REST, SQL</p>
          </BentoCard>
          <BentoCard className="lg:col-span-3">
            <h3 className="font-semibold">Backend & Infrastructure</h3>
            <p className="mt-2 text-sm text-neutral-700">MySQL, AWS, Azure, Vercel, Docker, CI/CD, Auth0, Stripe</p>
          </BentoCard>
          <BentoCard className="lg:col-span-2">
            <h3 className="font-semibold">Architecture & Systems</h3>
            <p className="mt-2 text-sm text-neutral-700">
              IT management, networking, MDM, automations, workflow design
            </p>
          </BentoCard>
          <BentoCard className="lg:col-span-2">
            <h3 className="font-semibold">SaaS Engineering</h3>
            <p className="mt-2 text-sm text-neutral-700">
              RBAC, billing, form builders, dashboards, automation engines
            </p>
          </BentoCard>
          <BentoCard className="lg:col-span-2">
            <h3 className="font-semibold">Tooling</h3>
            <p className="mt-2 text-sm text-neutral-700">Git, SendGrid, GitHub, Docker, PostgreSQL basics, Python, PowerShell, Bash</p>
          </BentoCard>
        </BentoGrid>
      </Section>

      <Section id="projects" title="Featured Projects" eyebrow="Work">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
          {getFeaturedForHome().map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              tagline={p.subtitle}
              summary={p.summary}
              bullets={p.bullets}
              tech={p.tags}
              href={p.href}
              primaryLabel={p.primaryLabel}
              secondaryHref={p.secondaryHref}
              secondaryLabel={p.secondaryLabel}
              badge={p.badge}
              badges={p.badges}
              featured={p.featured}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-neutral-600">
          <Link
            href="/projects"
            className="font-medium text-brand-800 underline decoration-brand-200 underline-offset-2 hover:text-brand-900"
          >
            View all projects
          </Link>
        </p>
      </Section>

      <Section id="experience" title="Experience" eyebrow="Timeline">
        <Timeline items={timeline} />
      </Section>

      <Section id="education" title="Education" eyebrow="Background">
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>Procore Machine Learning and Artificial Intelligence, Data in Construction Series, 2025</li>
          <li>IBM Full Stack Software Developer Professional Certificate, 2024</li>
          <li>Procore Admin Certification, 2024</li>
          <li>British Columbia Institute of Technology, Software Systems Development (With Distinction), 2021 to 2023</li>
          <li>British Columbia Institute of Technology, Introduction to Programming with Python, 2021</li>
        </ul>
      </Section>

      <Section id="now" title="What I’m Building Now" eyebrow="Now">
        <ul className="list-disc pl-6 text-neutral-700 space-y-2">
          <li>ReleasePilot — release and incident control dashboard demo</li>
          <li>ASTRYX automation engine and ML routing</li>
          <li>IWCD CMS estimating and reporting improvements</li>
          <li>Procedural hero graphic (L‑system)</li>
          <li>RBAC and audit logging libraries</li>
        </ul>
      </Section>

      {null}

      <Section id="contact" title="Let’s work together" eyebrow="Contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-4">
            <Socials
              links={[
                { type: "github", href: process.env.NEXT_PUBLIC_GITHUB_URL || "" },
                { type: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/masonporter12" },
                { type: "instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
                { type: "email", href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_TO || "mason@mpdevelopments.ca"}` },
                { type: "site", href: process.env.NEXT_PUBLIC_SITE_URL || "https://mpdevelopments.ca" },
              ]}
            />
            <a
              href="https://cal.com/masonbarry/"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
            >
              Schedule a Call
            </a>
            <a
              href="tel:+12507390870"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
            >
              Call 250‑739‑0870
            </a>
            <a
              href="/api/resume?inline=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
            >
              View Résumé (PDF)
            </a>
            <a
              href="mailto:mason@mpdevelopments.ca"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/masonporter12"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://mpdevelopments.ca"
              className="block rounded-md border border-neutral-200 p-4 hover:bg-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              mpdevelopments.ca
            </a>
          </div>
        </div>
      </Section>
      <MobileContactDock />
    </Layout>
  );
}
