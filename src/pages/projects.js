import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projects";

export default function ProjectsPage() {
  const all = getAllProjects();

  return (
    <Layout>
      <Head>
        <title>Projects — Mason Porter | masonporter.ca</title>
        <meta
          name="description"
          content="Selected builds: SaaS platforms, workflow automation, permission-aware document intelligence (VaultLens), and production business systems."
        />
      </Head>

      <div className="pt-8 sm:pt-10">
        <Section id="catalog" title="Projects" eyebrow="Work">
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-neutral-600">
            A concise catalog of shipped and demo-grade work — full-stack apps, internal platforms,
            and architecture-focused demos. Highlights also appear in the{" "}
            <Link
              href="/#projects"
              className="font-medium text-brand-800 underline decoration-brand-200 underline-offset-2 hover:text-brand-900"
            >
              featured section
            </Link>{" "}
            on the homepage.
          </p>
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
            {all.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                tagline={p.subtitle}
                bullets={p.bullets}
                tech={p.tags}
                href={p.href}
                primaryLabel={p.primaryLabel}
                secondaryHref={p.secondaryHref}
                secondaryLabel={p.secondaryLabel}
                badge={p.badge}
                featured={p.featured}
              />
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
}
