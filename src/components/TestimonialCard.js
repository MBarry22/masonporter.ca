import React from "react";

export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <blockquote className="text-neutral-800">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-neutral-600">
        <span className="font-medium text-neutral-800">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}


