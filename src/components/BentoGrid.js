import React from "react";

export function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {children}
    </div>
  );
}

export function BentoCard({ className = "", children }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/0 via-white to-white opacity-0 group-hover:opacity-100 transition" />
      {children}
    </div>
  );
}


