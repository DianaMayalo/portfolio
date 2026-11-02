import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/SiteFooter";
import { CommandPalette } from "@/components/CommandPalette";
import { ConsoleHello } from "@/components/ConsoleHello";
import { ContactForm } from "@/components/ContactForm";
import { SectionRail } from "@/components/SectionRail";
import { TargetCursor } from "@/components/TargetCursor";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: ["Data Science", "AI", "Machine Learning", "Python", "TensorFlow", "XGBoost", "Automation", "Nairobi"],
  authors: [{ name: site.name }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [site.github, site.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0b0b0c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      {/*
        suppressHydrationWarning: browser extensions (Grammarly, password
        managers) inject attributes into <body> before React hydrates. It only
        covers this element's own attributes, not the rest of the tree.
      */}
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <SectionRail />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <ContactForm />
        <ConsoleHello />
        <TargetCursor />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
