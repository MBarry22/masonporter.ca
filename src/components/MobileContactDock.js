import React from "react";
import Socials from "@/components/Socials";

export default function MobileContactDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-20 px-4 sm:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-neutral-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
        <Socials
          links={[
            { type: "email", href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_TO || "mason@mpdevelopments.ca"}` },
            { type: "github", href: process.env.NEXT_PUBLIC_GITHUB_URL || "" },
            { type: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/masonporter12" },
            { type: "instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
          ]}
        />
        <a
          href="https://cal.com/masonbarry/"
          className="ml-2 rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-800"
        >
          Book
        </a>
      </div>
    </div>
  );
}


