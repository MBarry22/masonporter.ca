import React from "react";

export default function HighlightsBar() {
  const items = [
    { label: "Experience", value: "5+ years" },
    { label: "Enterprise impact", value: "$100M+ CMS footprint" },
    { label: "Communities", value: "500k players • 17k members" },
    { label: "Location", value: "Calgary, AB" },
  ];
  return (
    <div className="mx-auto mt-4 max-w-4xl">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-lg border border-neutral-200 bg-white/70 px-4 py-3 text-sm backdrop-blur"
          >
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {it.label}
            </div>
            <div className="mt-0.5 font-medium text-neutral-900">{it.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


