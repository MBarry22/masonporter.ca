import React from "react";

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.162 19.49c.5.093.686-.217.686-.483 0-.237-.01-1.022-.015-1.855-2.79.607-3.38-1.19-3.38-1.19-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.911.833.09-.646.35-1.088.636-1.339-2.228-.254-4.57-1.114-4.57-4.957 0-1.094.39-1.99 1.03-2.69-.103-.253-.447-1.275.098-2.656 0 0 .84-.269 2.75 1.027A9.57 9.57 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.027 2.75-1.027.546 1.381.202 2.403.1 2.656.64.701 1.028 1.597 1.028 2.69 0 3.853-2.347 4.7-4.582 4.95.36.31.68.92.68 1.855 0 1.339-.012 2.418-.012 2.746 0 .268.18.581.69.482A10 10 0 0 0 12 2Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3.5v-6.2c0-1.48-.53-2.49-1.86-2.49-1.02 0-1.62.69-1.89 1.35-.1.24-.12.56-.12.89V21H8.1s.05-9.73 0-10.74h3.53v1.52c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.08 1.52 4.08 4.78V21H19zM5.5 7.5A2.5 2.5 0 1 1 5.5 2a2.5 2.5 0 0 1 0 5.5zM7.25 21H3.75V10.26h3.5V21z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.5a2.5 2.5 0 1 0 .001 5.001A2.5 2.5 0 0 0 12 9.5ZM18 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  ),
  site: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 2A10 10 0 1 0 22 12 10.011 10.011 0 0 0 12 2Zm6.92 6h-3.38a15.6 15.6 0 0 0-1.17-3.21A8.017 8.017 0 0 1 18.92 8ZM12 4a13.8 13.8 0 0 1 1.78 4H10.22A13.8 13.8 0 0 1 12 4ZM4.26 16a7.962 7.962 0 0 1 0-8h3.38a15.6 15.6 0 0 0 0 8ZM5.08 8a8.017 8.017 0 0 1 4.55-3.21A15.6 15.6 0 0 0 8.46 8H5.08Zm3.38 8a15.6 15.6 0 0 0 1.17 3.21A8.017 8.017 0 0 1 5.08 16Zm3.54 3.21A13.8 13.8 0 0 1 10.22 16h3.56a13.8 13.8 0 0 1-1.78 3.21ZM15.54 16h3.38a8.017 8.017 0 0 1-4.55 3.21A15.6 15.6 0 0 0 15.54 16Zm-5.32-6h3.56a13.1 13.1 0 0 1 0 4H10.22a13.1 13.1 0 0 1 0-4Zm6.42 0h3.38a7.962 7.962 0 0 1 0 8h-3.38a15.6 15.6 0 0 0 0-8Z"
      />
    </svg>
  ),
};

export default function Socials({ links = [] }) {
  const items = links.filter((l) => l.href && l.href.length > 0);
  if (items.length === 0) return null;
  return (
    <div className="flex items-center gap-3">
      {items.map((item, idx) => {
        const Icon = ICONS[item.type] || ICONS.site;
        return (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.type}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition"
            title={item.label || item.type}
          >
            {Icon}
          </a>
        );
      })}
    </div>
  );
}


