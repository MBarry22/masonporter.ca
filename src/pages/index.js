import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import ProjectCard from "@/components/ProjectCard";
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
        "ASTRYX: ITSM platform with tickets, custom forms, assets, roles, and team workflows.",
        "Stripe subscriptions, Auth0 login, multi tenant MySQL, automated inbound and outbound email.",
        "100PlusTools: SEO multi tool SaaS with usage limits, billing, email sending, and admin analytics.",
      ],
    },
    {
      title: "Technology Specialist and Lead Developer at Island Westcoast Developments LTD",
      period: "2022 to Present",
      points: [
        "Built internal Construction Management System used by 125+ employees; supports $100M+ annual project volume.",
        "Modules: change orders, subcontractor management, estimates, and approvals. Result: reduced processing from hours to minutes.",
        "Internal apps: email automation, financial calculations, reporting, leadership dashboards.",
        "Managed identity, authentication, cloud services, integrations, and infrastructure across two offices.",
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
    {
      title: "Software Developer at Flavrite",
      period: "2022",
      points: [
        "Migrated mobile app from React Native CLI to Expo.",
        "Improved camera system and image search functions.",
      ],
    },
  ];

  return (
    <Layout>
      <Hero />

      <Section id="about" title="About Me" eyebrow="Introduction">
        <div className="prose max-w-none">
          <p>
            I am Mason Barry, also known as Mason Porter. I am a full stack
            developer and IT systems specialist based in Nanaimo, BC. I designed
            and built the Construction Management System used across a one
            hundred million dollar construction company, and I have launched two
            software platforms of my own. I work with Next.js, Node.js,
            TypeScript, MySQL, and authentication and billing systems such as
            Auth0 and Stripe. I focus on shipping clean, reliable systems that
            help teams move faster and operate more efficiently.
          </p>
          <ul>
            <li>Technology Specialist and Lead Developer at Island Westcoast Developments (2022 to Present)</li>
            <li>Creator of ASTRYX (ITSM) and 100PlusTools (multi tool SaaS)</li>
            <li>Hands on with identity, cloud services, integrations, and infrastructure</li>
            <li>More than four years building production systems at enterprise scale</li>
          </ul>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="IWCD Construction Management System"
            tagline="Custom enterprise platform — roles, SCOs, estimating, Procore"
            bullets={[
              "Replaced $200k+ software need",
              "~100k+ LOC across multiple modules",
              "Azure AD SSO, RBAC",
            ]}
            tech={["Next.js", "Node", "MySQL", "Azure AD", "Procore"]}
            href="https://iwcdcoms.ca"
          />
          <ProjectCard
            title="ASTRYX (ITSM & Asset Management)"
            tagline="Multi‑tenant SaaS with dynamic forms and ML routing"
            bullets={[
              "RBAC, Teams, Subscriptions",
              "Stripe billing portal",
              "Inventory + asset assignment",
            ]}
            tech={["Next.js", "Node", "Postgres", "Stripe", "Auth0"]}
            href="https://astryx.ca"
          />
          <ProjectCard
            title="Flowwright AI Browser Automation Assistant"
            tagline="Natural‑language browser automation using AI + Playwright"
            bullets={[
              "AI interprets instructions and generates an execution plan",
              "Automates navigation, clicks, waits, and extraction with Playwright",
              "Next.js APIs with orchestration and result logs; demo runs plan generation",
            ]}
            tech={["Next.js", "Node", "TypeScript", "Playwright", "LLM"]}
            href="https://mp-ai-auto-browser.vercel.app/"
          />
          <ProjectCard
            title="100PlusTools.com"
            tagline="SEO‑optimized multi‑tool SaaS with subscriptions"
            bullets={[
              "Categories & dynamic routing",
              "Ad + subscription monetization",
              "Fast search & filtering",
            ]}
            tech={["Next.js", "Node", "Stripe", "SEO"]}
            href="https://100plustools.vercel.app"
          />
        </div>
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
