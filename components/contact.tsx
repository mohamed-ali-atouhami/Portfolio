"use client"

import { useActionState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { content } from "@/lib/content"
import { sendEmail, type ContactState } from "@/app/actions/send-email"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = { status: "idle", message: "" }

const fieldClass =
  "h-auto rounded-md border-[0.5px] border-foreground/30 bg-white px-3 py-3 text-base shadow-none md:text-base dark:border-white/70 dark:bg-transparent"

export function Contact() {
  const [state, formAction, pending] = useActionState(sendEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-20 bg-[radial-gradient(ellipse_80%_55%_at_50%_35%,rgba(255,196,176,0.55),transparent_70%)] px-6 py-16 sm:px-[12%] dark:bg-none"
    >
      <Reveal duration={1}>
        <Reveal y={-20} delay={0.3} duration={0.5}>
          <p className="text-center font-heading text-lg">{content.contactLead.eyebrow}</p>
        </Reveal>
        <Reveal y={-20} delay={0.5} duration={0.5}>
          <h2 className="mt-2 text-center font-heading text-4xl sm:text-5xl">
            {content.contactLead.title}
          </h2>
        </Reveal>
        <Reveal delay={0.7} duration={0.5}>
          <p className="mx-auto mt-5 mb-12 max-w-2xl text-center font-heading text-muted-foreground">
            {content.contactLead.text}
          </p>
        </Reveal>
      </Reveal>

      <Reveal delay={0.9} duration={0.6}>
      <form ref={formRef} action={formAction} className="mx-auto max-w-2xl">
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" className="sr-only">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your name"
              required
              className={fieldClass}
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
            className={`${fieldClass} mb-6 min-h-40 w-full`}
          />
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="mx-auto flex h-auto gap-2 rounded-full bg-foreground/80 px-8 py-3 text-background hover:bg-foreground dark:border-[0.5px] dark:border-white/80 dark:bg-transparent dark:text-foreground dark:hover:bg-white/10"
        >
          {pending ? "Sending..." : "Submit now"}
          <ArrowRight />
        </Button>
        {state.status !== "idle" ? (
          <p
            role={state.status === "error" ? "alert" : "status"}
            className={
              state.status === "error"
                ? "mt-4 text-center text-sm text-destructive"
                : "mt-4 text-center text-sm"
            }
          >
            {state.message}
          </p>
        ) : null}
      </form>
      </Reveal>
    </section>
  )
}
