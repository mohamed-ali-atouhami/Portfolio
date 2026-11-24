import { content } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="scroll-mt-20 px-6 py-24"
    >
      <Reveal duration={1} className="mx-auto max-w-6xl">
        <Reveal y={-20} delay={0.3} duration={0.5}>
          <h2 className="font-heading text-4xl tracking-tight">Services</h2>
        </Reveal>
        <Reveal delay={0.9} duration={0.6} className="mt-10 grid gap-4 md:grid-cols-3">
          {content.services.map((service) => (
            <Reveal key={service.title} hoverOnly hover={1.05}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </Reveal>
      </Reveal>
    </section>
  )
}
