import React from "react";

function isExternalUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

const linkPrimaryClass =
  "inline-flex w-full min-h-[2.5rem] shrink-0 items-center justify-center rounded-md border border-brand-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-brand-50/80 focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-600/40 focus-visible:ring-offset-2 sm:min-w-[9.5rem] sm:w-auto";

const linkSingleClass =
  "inline-flex w-full min-h-[2.5rem] items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-600/40 focus-visible:ring-offset-2 sm:w-auto";

const secondaryTextLinkClass =
  "inline-flex min-h-[2.5rem] shrink-0 items-center justify-center self-center px-0 py-2 text-sm font-medium text-brand-800 underline decoration-brand-300 decoration-1 underline-offset-[3px] transition hover:decoration-brand-600 sm:min-h-0 sm:justify-center sm:py-0 sm:px-0 sm:self-center";

const MAX_BULLETS = 3;
const MAX_TAGS = 5;

export default function ProjectCard({
  title,
  tagline,
  bullets = [],
  tech = [],
  href = "#",
  primaryLabel = "View site",
  secondaryHref,
  secondaryLabel = "Read Case Study",
  badge,
  featured,
}) {
  const primaryExternal = isExternalUrl(href);
  const secondaryExternal = secondaryHref && isExternalUrl(secondaryHref);
  const hasSecondary = Boolean(secondaryHref);
  const primaryClassName = hasSecondary ? linkPrimaryClass : linkSingleClass;

  const displayBullets = bullets.slice(0, MAX_BULLETS);
  const displayTags = tech.slice(0, MAX_TAGS);
  const extraTagCount = Math.max(0, tech.length - MAX_TAGS);

  return (
    <article
      className={
        featured
          ? "flex h-full min-h-0 flex-col overflow-hidden rounded-xl border-2 border-brand-600/20 bg-brand-50/20 p-4 shadow-sm sm:p-5 md:min-h-[22.5rem] md:max-h-[22.5rem] md:min-w-0"
          : "flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-neutral-200 p-4 transition hover:bg-neutral-50 sm:p-5 md:min-h-[22.5rem] md:max-h-[22.5rem] md:min-w-0"
      }
    >
      <div className="shrink-0">
        <div className="flex min-w-0 items-start justify-between gap-2">
          <h3
            className="line-clamp-2 min-w-0 break-words text-base font-semibold leading-snug sm:text-lg"
            title={title}
          >
            {title}
          </h3>
          {badge ? (
            <span className="shrink-0 rounded-full border border-brand-200/90 bg-white/80 px-2 py-0.5 text-xs font-medium text-brand-800">
              {badge}
            </span>
          ) : null}
        </div>
        <p
          className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-neutral-600"
          title={tagline}
        >
          {tagline}
        </p>
        <ul className="mt-2.5 space-y-0.5 text-sm leading-tight text-neutral-700" aria-label="Project highlights">
          {displayBullets.map((b, i) => (
            <li key={i} className="flex min-w-0 gap-2">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700/70"
                aria-hidden
              />
              <span className="line-clamp-1 min-w-0 break-words" title={b}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-h-0 flex-1" aria-hidden="true" />

      <div className="shrink-0">
        {displayTags.length > 0 ? (
          <div className="flex max-h-6 max-w-full flex-nowrap items-center gap-1.5 overflow-hidden">
            {displayTags.map((t) => (
              <span
                key={t}
                className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium leading-tight text-neutral-700"
                title={t}
              >
                {t}
              </span>
            ))}
            {extraTagCount > 0 ? (
              <span
                className="shrink-0 rounded-full bg-neutral-200/80 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                title={`${extraTagCount} more tags`}
              >
                +{extraTagCount}
              </span>
            ) : null}
          </div>
        ) : null}

        <div
          className={
            hasSecondary
              ? "mt-2.5 flex w-full min-w-0 flex-col items-stretch gap-1.5 sm:mt-3 sm:flex-row sm:items-center sm:gap-4"
              : "mt-2.5 flex w-full min-w-0 sm:mt-3"
          }
        >
          <a
            href={href}
            className={primaryClassName}
            aria-label={`${title}: ${primaryLabel}`}
            {...(primaryExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {primaryLabel}
          </a>
          {hasSecondary ? (
            <a
              href={secondaryHref}
              className={secondaryTextLinkClass}
              aria-label={`${title}: ${secondaryLabel}`}
              {...(secondaryExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
