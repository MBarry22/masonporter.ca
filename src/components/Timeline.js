import React from "react";

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-neutral-200">
      {items.map((item, idx) => (
        <li key={idx} className="mb-8 ml-4">
          <span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-brand-700" />
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-xs text-neutral-500">{item.period}</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            {item.points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}


