export const site = {
  name: 'Diana Mayalo',
  email: 'dianamayalo28@gmail.com',
  location: 'Nairobi, Kenya',
  github: 'https://github.com/dianamayalo',
  linkedin: 'https://www.linkedin.com/in/dianamayalo22/',
  cvHref: '/Diana-Mayalo-CV.pdf',
} as const

/** Primary navigation. Absolute hashes so links work from /projects/* and /card too. */
export const navItems = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
] as const

export const sectionIds = navItems.map((item) => item.id)
