import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { content, type Project } from "@/lib/content"
import { Reveal } from "@/components/reveal"

function WorkCard({ project }: { project: Project }) {
  const href = project.href
  const body = (
    <>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top"
      />
      <div className="work-card-bar">
        <div className="min-w-0">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="work-card-arrow" aria-hidden={!href}>
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </>
  )

  return (
    <Reveal hoverOnly hover={1.05} className="work-card">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="work-card-link"
          aria-label={project.title}
        >
          {body}
        </a>
      ) : (
        body
      )}
    </Reveal>
  )
}

export function Work() {
  return (
    <section id="work" aria-label="Work" className="scroll-mt-20 px-6 py-24">
      <Reveal duration={1} className="mx-auto max-w-6xl">
        <Reveal y={-20} delay={0.3} duration={0.5}>
          <h2 className="font-heading text-4xl tracking-tight">Work</h2>
        </Reveal>
        <Reveal delay={0.9} duration={0.6} className="work-grid mt-10">
          {content.projects.map((project) => (
            <WorkCard key={project.title} project={project} />
          ))}
        </Reveal>
      </Reveal>
    </section>
  )
}
