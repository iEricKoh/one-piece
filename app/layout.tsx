import "./globals.css"
import type { Metadata } from "next"
import { dir } from "i18next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./theme-provider"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { locales } from "@/i18n/settings"
import { PropsWithChildren } from "react"
import currentLocale from "@/i18n/current-locale"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "Eric Koh - Senior Front End / Full Stack Developer",
  description: "Eric Koh - Senior Front End / Full Stack Developer",
  generator: "Next.js",
  keywords: [
    "Eric Koh",
    "Senior Front End Developer",
    "Senior Full Stack Developer",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Eric Koh", url: "https://www.ierickoh.com/" }],
  applicationName: "Eric Koh",
  creator: "Eric Koh",
  publisher: "Eric Koh",
}

export default function RootLayout({ children }: PropsWithChildren) {
  const locale = currentLocale()
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={`${inter.className}  bg-white dark:bg-slate-900`}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
