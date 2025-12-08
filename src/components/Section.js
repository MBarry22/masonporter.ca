import React from "react";

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 border-t border-neutral-100 first:border-t-0">
      <div className="mb-8">
        {eyebrow ? (
          <div className="text-xs uppercase tracking-wider text-brand-700/70">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}


