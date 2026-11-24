import type { Metadata } from "next"
import { Outfit, Ovo } from "next/font/google"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { content } from "@/lib/content"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
})

const description = `${content.role} in ${content.location}. ${content.summary}`

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-chi-five-27.vercel.app",
  ),
  title: content.name,
  description,
  openGraph: {
    title: content.name,
    description,
    type: "website",
    siteName: content.shortName,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: content.name,
    description,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
