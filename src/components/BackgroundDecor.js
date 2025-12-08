import React from "react";

function GridPattern({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 400"
      width="400"
      height="400"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function RadialGlow({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background:
          "radial-gradient(600px 300px at 50% 0%, rgba(14,31,74,0.08), rgba(14,31,74,0.0) 60%)",
      }}
    />
  );
}

export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <RadialGlow className="absolute inset-0" />
      <GridPattern className="absolute -right-24 -top-10 h-[500px] w-[500px] text-brand-100" />
      <GridPattern className="absolute -left-24 -bottom-20 h-[450px] w-[450px] rotate-6 text-brand-100/70" />
    </div>
  );
}


