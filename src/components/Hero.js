import Link from "next/link";
import React from "react";
import Socials from "@/components/Socials";
import BackgroundDecor from "@/components/BackgroundDecor";
import LSystemCanvas from "@/components/LSystemCanvas";
import HighlightsBar from "@/components/HighlightsBar";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 to-white" />
      <BackgroundDecor />
      <LSystemCanvas />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-brand-700">
          Mason Barry (aka Mason Porter) · Nanaimo, BC
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
          Building production systems that streamline operations and scale
        </h1>
        <p className="mt-5 text-neutral-600">
          Full‑stack developer, IT systems architect, and SaaS founder. I
          design and ship enterprise‑grade platforms that automate workflows and
          integrate with your tools.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center rounded-md bg-brand-700 px-5 py-2.5 text-white shadow-sm hover:bg-brand-800 transition"
          >
            View Projects
          </Link>
          <div className="flex gap-3">
            <a
              href="/api/resume?inline=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-neutral-200 px-5 py-2.5 hover:bg-neutral-50 transition"
            >
              View Résumé (PDF)
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md border border-neutral-200 px-5 py-2.5 hover:bg-neutral-50 transition"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Socials
            links={[
              { type: "github", href: process.env.NEXT_PUBLIC_GITHUB_URL || "" },
              { type: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/masonporter12" },
              { type: "instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
              { type: "email", href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_TO || "mason@mpdevelopments.ca"}` },
              { type: "site", href: process.env.NEXT_PUBLIC_SITE_URL || "https://mpdevelopments.ca" },
            ]}
          />
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          4+ yrs building production systems · 100k+ LOC enterprise platform ·
          Procore, Stripe, Azure AD
        </p>
      </div>
      <HighlightsBar />
    </header>
  );
}


