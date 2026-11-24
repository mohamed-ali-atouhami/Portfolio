import { Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { content } from "@/lib/content"

const socials = [
  { label: "GitHub", href: content.contact.githubHref },
  { label: "LinkedIn", href: content.contact.linkedinHref },
  { label: "WhatsApp", href: content.contact.whatsappHref },
]

export function Footer() {
  return (
    <footer className="px-6 pt-8 pb-6 sm:px-[10%]">
      <Reveal duration={1}>
      <div className="text-center">
        <p className="font-heading text-4xl">{content.shortName}</p>
        <a
          href={`mailto:${content.contact.email}`}
          className="mx-auto mt-4 flex w-max max-w-full items-center gap-2 text-sm"
        >
          <Mail className="size-5 shrink-0" />
          <span className="break-all">{content.contact.email}</span>
        </a>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/25 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm">© 2026 {content.name}. All rights reserved.</p>
        <ul className="flex items-center gap-8">
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      </Reveal>
    </footer>
  )
}
