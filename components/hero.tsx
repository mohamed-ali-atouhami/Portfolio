import Image from "next/image"
import { cn } from "cn"
import { content } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative flex min-h-svh scroll-mt-20 flex-col items-center px-6 pt-32 pb-20 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(226,196,160,0.55),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,244,230,0.1),transparent_70%)]"
      />

      <Reveal spring className="relative z-10 size-32 overflow-hidden rounded-full border border-border">
        <Image
          src={content.portrait.src}
          alt={content.portrait.alt}
          width={256}
          height={256}
          preload
          className="size-full object-cover object-[center_18%]"
        />
      </Reveal>

      <Reveal y={-20} delay={0.3} duration={0.6} className="relative z-10">
        <p className="mt-6 text-sm text-muted-foreground">
          {content.role} · {content.location}
        </p>
      </Reveal>
      <Reveal y={-30} delay={0.5} duration={0.8} className="relative z-10">
        <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
          {content.name}
        </h1>
      </Reveal>
      <Reveal delay={0.7} duration={0.6} className="relative z-10">
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          {content.summary}
        </p>
      </Reveal>

      <Reveal
        delay={1}
        duration={0.6}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a href="#work" className={buttonVariants()}>
          View work
        </a>
        <a
          href={content.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Download CV
        </a>
      </Reveal>
    </section>
  )
}
