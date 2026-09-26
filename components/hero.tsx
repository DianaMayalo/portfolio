'use client'

import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroMap } from '@/components/hero-map'
import { site } from '@/lib/site'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[calc(100vh-var(--header-height))] items-center px-6 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            {site.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-medium">
            Data Scientist & AI Automation Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build intelligent systems and data-driven solutions. Specializing in machine learning,
            predictive analytics, and automation that transforms complex data into actionable insights.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button variant="outline" size="lg" asChild>
              <a href={site.cvHref} download>
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </Button>
            <Button onClick={scrollToProjects} size="lg" className="group">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        <HeroMap className="mx-auto lg:mx-0" />
      </div>
    </section>
  )
}
