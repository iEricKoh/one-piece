import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./theme-provider"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eric Koh - Senior Front End / Full Stack Developer",
  description: "Eric Koh - Senior Front End / Full Stack Developer",
  keywords: [
    "Eric Koh",
    "Senior Front End Developer",
    "Senior Full Stack Developer",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Eric Koh", url: "https://www.ierickoh.com/" }],
  creator: "Eric Koh",
  publisher: "Eric Koh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
