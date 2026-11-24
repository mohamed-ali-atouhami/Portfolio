import Image from "next/image"
import { Briefcase, Code2, GraduationCap, type LucideIcon } from "lucide-react"
import { content } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { isToolName, ToolIcon } from "@/components/tool-icons"

const cardIcons: Record<(typeof content.about.cards)[number]["title"], LucideIcon> = {
  Languages: Code2,
  Education: GraduationCap,
  Projects: Briefcase,
}

export function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-20 px-6 py-16 sm:px-[12%]">
      <Reveal duration={1}>
        <Reveal y={-20} delay={0.3} duration={0.5}>
          <p className="text-center font-heading text-lg">{content.about.eyebrow}</p>
        </Reveal>
        <Reveal y={-20} delay={0.5} duration={0.5}>
          <h2 className="mt-2 text-center font-heading text-4xl sm:text-5xl">{content.about.title}</h2>
        </Reveal>

        <div className="about-layout my-16 flex flex-col items-center gap-12">
          <Reveal fromScale={0.9} duration={0.6}>
            <div
              className="about-photo shrink-0 overflow-hidden rounded-3xl"
              style={{ width: "14rem", maxWidth: "100%" }}
            >
              <Image
                src={content.aboutImage.src}
                alt={content.aboutImage.alt}
                width={640}
                height={800}
                className="aspect-[3/4] h-auto w-full object-cover object-[center_22%]"
              />
            </div>
          </Reveal>

          <div className="min-w-0 flex-1">
            <Reveal delay={0.8} duration={0.6}>
              <p className="mb-6 max-w-2xl font-heading">{content.bio}</p>
            </Reveal>

            <Reveal delay={1} duration={0.8}>
              <ul className="about-cards grid max-w-2xl grid-cols-1 gap-4">
                {content.about.cards.map((card) => {
                  const Icon = cardIcons[card.title]
                  return (
                    <li key={card.title}>
                      <Reveal
                        hoverOnly
                        hover={1.05}
                        className="h-full rounded-xl border-[0.5px] border-foreground/30 p-4 transition duration-500 hover:-translate-y-1 hover:bg-[#fcf4f0] hover:shadow-[4px_4px_0_#1a1814] dark:border-white/80 dark:hover:bg-white/5 dark:hover:shadow-[4px_4px_0_#f4f0e7]"
                      >
                        <Icon className="size-6" />
                        <h3 className="mt-3 mb-2 text-sm font-semibold">{card.title}</h3>
                        <p className="text-xs leading-5 text-muted-foreground">{card.description}</p>
                      </Reveal>
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal y={20} delay={1.3} duration={0.5}>
              <h3 className="mt-6 mb-3 font-heading text-sm text-muted-foreground">{content.about.toolsTitle}</h3>
            </Reveal>
            <Reveal delay={1.5} duration={0.6}>
              <ul className="flex flex-wrap items-center gap-3">
                {content.about.tools.map((tool) =>
                  isToolName(tool) ? (
                    <li key={tool}>
                      <Reveal
                        hoverOnly
                        hover={1.1}
                        className="flex items-center justify-center rounded-md border-foreground/40 transition duration-500 hover:-translate-y-1 dark:border-white/70"
                        style={{ width: "2.75rem", height: "2.75rem", borderWidth: "1px", borderStyle: "solid" }}
                      >
                        <ToolIcon name={tool} />
                      </Reveal>
                    </li>
                  ) : null
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
