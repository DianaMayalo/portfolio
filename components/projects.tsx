'use client'

import { useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Support-AI',
    tagline: 'Full-stack AI customer support platform with intelligent chat and smart escalation.',
    description: 'Support-AI is a full-stack engineering project showcasing backend API design, database architecture, and AI integration. The platform uses AI to handle routine support questions with knowledge base retrieval, but intelligently escalates complex issues to humans. From architecture to deployment, this project demonstrates production-grade software engineering practices.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Python', 'LLM Integration', 'Docker'],
    metrics: ['70+ Conversations', '24.3% Escalation Rate', '5.0/5 Satisfaction', '3.6s Response Time'],
    category: 'Full-Stack AI',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    featured: true,
    stats: '5.0/5 Satisfaction',
    image: '/images/support-ai.png',
    imagePosition: 'object-top',
    demoUrl: 'https://supportai.dianamayalo.workers.dev/',
  },
  {
    id: 2,
    title: 'Crop Disease Classification (CNN)',
    tagline: 'Deep learning model identifying 15 types of healthy and diseased crop leaves with 94% accuracy.',
    description: 'This computer vision project applies CNNs to solve a real agricultural problem: early disease detection. Using the PlantVillage dataset of 15,000+ crop images, I built and trained a custom CNN architecture with data augmentation techniques to achieve high accuracy on multi-class classification. The model is deployed as an interactive Streamlit app where farmers can upload leaf photos and get instant disease predictions.',
    tech: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Streamlit', 'Scikit-learn'],
    metrics: ['94% Accuracy', '15 Disease Classes', 'Data Augmentation', 'Interactive Deployment'],
    category: 'Deep Learning',
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    featured: true,
    stats: '94% Accuracy',
    image: '/images/crop-disease.png',
    githubUrl: 'https://github.com/DianaMayalo/Crop-Disease-Detection',
  },
  {
    id: 3,
    title: 'CleanWater AI',
    tagline: 'End-to-end ML system monitoring water quality across 22,000+ water points in Kenya.',
    description: 'I built CleanWater AI to solve a critical problem: tracking water quality across Kenya\'s vast landscape. The system integrates satellite imagery from Google Earth Engine, crowdsourced data from WPDx and GEMS APIs, and machine learning to predict contamination risks. The result is a production-deployed application that helps identify unsafe water sources before they affect communities.',
    tech: ['Python', 'XGBoost', 'Google Earth Engine', 'Streamlit', 'Docker', 'NLP'],
    metrics: ['94% Accuracy', '22,000+ Water Points', 'Multi-Source Data', 'Live in Production'],
    category: 'ML & Remote Sensing',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    featured: true,
    stats: '94% Accuracy',
    image: '/images/cleanwater-ai.png',
    demoUrl: 'https://cleanwatai.streamlit.app/',
    githubUrl: 'https://github.com/DianaMayalo/CleanWatAI',
  },
  {
    id: 4,
    title: 'Nairobi Emergency Dashboard (NED)',
    tagline: 'Real-time emergency command center automating crisis response for Nairobi County.',
    description: 'NED is more than a dashboard. It is a working product deployed with real users. I built it for NADEMA (Nairobi Disaster & Emergency Management Authority) to accelerate their response to crises. The system automatically collects field reports via Google Sheets, processes them with Python automation, and creates real-time maps showing where help is needed most.',
    tech: ['Streamlit', 'Python', 'Google Sheets API', 'Google Apps Script', 'Plotly Mapbox'],
    metrics: ['Active Users', 'Real-Time Processing', 'Measurable Impact', 'Production Deployment'],
    category: 'Data Visualization',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
    featured: true,
    stats: 'Live with Real Users',
    image: '/images/nairobi-dashboard.png',
    demoUrl: 'https://nairobi-emergency-dashboard-ned.onrender.com/',
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of data science and AI projects that demonstrate my approach to solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className={cn(
                'group relative rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500',
                hoveredId === project.id ? 'scale-[1.02] shadow-2xl shadow-primary/10' : 'hover:shadow-lg'
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    'object-cover transition-transform duration-500 group-hover:scale-105',
                    project.imagePosition ?? 'object-center'
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                {project.stats && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-bold">
                    {project.stats}
                  </div>
                )}
              </div>

              {/* Gradient overlay */}
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                project.gradient
              )} />

              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-foreground/90 font-medium mb-2 text-sm">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Metrics */}
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 text-xs font-semibold text-foreground/80"
                    >
                      {metric}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary/80 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <div className="ml-auto">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
