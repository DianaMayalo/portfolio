import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

type Role = {
  title: string
  organization: string
  location: string
  period: string
  highlights: { label: string; text: string }[]
}

type Education = {
  degree: string
  school: string
  period: string
  note: string
}

const roles: Role[] = [
  {
    title: 'Data Analyst (Freelance)',
    organization: 'Intelinkpro',
    location: 'Remote',
    period: 'Oct 2023 – Apr 2025',
    highlights: [
      {
        label: 'Automated Excel processing',
        text: 'Developed Python scripts to programmatically process complex client datasets, reducing manual report generation time by 30% while eliminating structural calculation errors.',
      },
      {
        label: 'Business intelligence',
        text: 'Designed and deployed scalable Power BI dashboards for corporate clients, providing real-time operational metrics that improved decision-making and contributed to a 15% improvement in target outcomes.',
      },
      {
        label: 'Data preparation',
        text: 'Cleaned and structured messy transactional databases using SQL and Python, preparing high-quality datasets for BI and analytics pipelines.',
      },
      {
        label: 'Client project management',
        text: 'Managed end-to-end analytical workflows, ensuring timely delivery and alignment with business requirements across multiple concurrent projects.',
      },
    ],
  },
  {
    title: 'Data Analyst Intern',
    organization: 'Future Interns',
    location: 'Bengaluru, India',
    period: 'Sep 2024 – Nov 2024',
    highlights: [
      {
        label: 'Predictive modeling',
        text: 'Built and validated a loan eligibility classification model in Python, achieving 81.3% test accuracy through systematic feature engineering and model tuning.',
      },
      {
        label: 'Exploratory data analysis',
        text: 'Conducted deep statistical analysis on large datasets to identify patterns, distributions and predictive features for model training.',
      },
      {
        label: 'Dashboard development',
        text: 'Translated complex sports performance metrics into interactive Power BI dashboards, enabling stakeholders to extract tactical insights and make data-driven decisions.',
      },
      {
        label: 'Agile environment',
        text: 'Executed iterative data sprints within agile workflows, collaborating with cross-functional teams to deliver rapid prototypes and insights.',
      },
    ],
  },
]

const education: Education[] = [
  {
    degree: 'Data Science Bootcamp',
    school: 'Moringa School',
    period: 'Feb 2025 – Aug 2025',
    note: 'Graduated November 2025',
  },
  {
    degree: 'BSc Actuarial Science',
    school: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
    period: 'Sep 2019 – Jun 2024',
    note: 'Graduated June 2024',
  },
]

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Where I&apos;ve applied data analysis, automation and machine learning to real business problems, and the
            training behind it.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Work experience timeline */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Work experience
            </h3>

            <ol className="relative border-l border-border/60 pl-8 space-y-10">
              {roles.map((role) => (
                <li key={`${role.organization}-${role.title}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
                  />
                  <article className="rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <h4 className="text-xl font-bold">{role.title}</h4>
                        <p className="text-primary font-medium">{role.organization}</p>
                      </div>
                      <div className="flex flex-col items-start gap-1 text-sm text-muted-foreground sm:items-end">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          {role.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {role.highlights.map((item) => (
                        <li key={item.label} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            <span className="font-semibold text-foreground">{item.label}: </span>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education
            </h3>

            <ul className="space-y-4">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/40"
                >
                  <p className="text-lg font-bold">{item.degree}</p>
                  <p className="mt-1 text-muted-foreground">{item.school}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.period}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">{item.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
