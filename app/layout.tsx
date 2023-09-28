import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
  colorScheme: "dark",
  creator: "Eric Koh",
  publisher: "Eric Koh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
