"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "cn"
import { content } from "@/lib/content"
import { buttonVariants, Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6"
      >
        <a href="#home" className="text-lg font-medium tracking-tight">
          {content.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(buttonVariants(), "hidden sm:inline-flex")}
          >
            Contact
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{content.shortName}</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {content.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
