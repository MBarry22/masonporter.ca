import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <aside className="hidden lg:block lg:col-span-3 pt-10">
            <nav className="sticky top-8 space-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Now", "#now"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-md px-3 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="lg:col-span-9">{children}</main>
        </div>
      </div>
    </div>
  );
}


