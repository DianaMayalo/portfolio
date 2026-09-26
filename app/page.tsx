import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SkillsGrid } from '@/components/skills-grid'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="min-h-screen outline-none">
        <Hero />
        <SkillsGrid />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
