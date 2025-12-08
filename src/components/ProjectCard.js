import React from "react";

export default function ProjectCard({
  title,
  tagline,
  bullets = [],
  tech = [],
  href = "#",
}) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50 transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{tagline}</p>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-700/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {tech.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </a>
  );
}


