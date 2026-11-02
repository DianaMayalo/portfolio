import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { marquees } from "@/content/skills";
import { ArrowIcon, primaryButton, secondaryButton } from "@/components/Buttons";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { LocalTime } from "@/components/LocalTime";

export const metadata: Metadata = {
  title: "Card",
  description: `${site.name} — ${site.role}. Links, CV and a way to get in touch.`,
};

const socials = [
  { name: "GitHub", href: site.github, Icon: GitHubIcon },
  ...(site.linkedin ? [{ name: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon }] : []),
  { name: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
];

/** A shareable one-screen card: who, what, where, and the two things to click. */
export default function CardPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_30%,transparent_100%)]" />
      <div aria-hidden="true" className="absolute -top-64 left-1/2 -z-10 h-[48rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_91_46/0.15),transparent)]" />

      <div className="container-x flex min-h-[calc(100svh-4.25rem)] items-center justify-center pt-28 pb-20">
        <div className="w-full max-w-lg rounded-3xl border border-border bg-surface p-8 sm:p-10">
          <div className="text-center">
            <span className="mx-auto grid size-20 place-items-center rounded-full border border-border-strong text-2xl font-semibold tracking-tight">
              {site.initials}
            </span>
            <h1 className="mt-6 text-[clamp(2rem,6vw,2.75rem)] leading-none font-semibold tracking-[-0.045em]">{site.name}</h1>
            <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-accent-text">{site.role}</p>
            <p className="mt-5 inline-flex items-center gap-3 rounded-full border border-border-strong px-4 py-2 text-sm">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="hp-pulse absolute inline-flex size-full rounded-full bg-accent" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>
          </div>

          <p className="eyebrow mt-10 text-center text-[11px] text-muted">Core toolkit</p>
          <p className="mt-3 text-center font-mono text-xs leading-relaxed text-soft">{marquees.flat().join(" / ")}</p>

          <ul className="mt-8 flex justify-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={name}
                  className="grid size-11 place-items-center rounded-full border border-border-strong text-soft transition-colors hover:border-accent hover:bg-accent hover:text-background"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <Link href="/" className={`${primaryButton} justify-center`}>
              View full portfolio
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            {site.resumeUrl && (
              <a href={site.resumeUrl} download className={`${secondaryButton} justify-center`}>
                Download CV
              </a>
            )}
          </div>

          <p className="mt-8 text-center font-mono text-xs text-muted">
            {site.location.based} · <LocalTime showZone />
          </p>
        </div>
      </div>
    </div>
  );
}
