"use client"

import { Bar } from "./Bar"

export default function Graph() {
  return (
    <>
      <Bar width={85} label="React / Angular / Flutter / Chrome extension" />
      <Bar width={75} label="Tailwind / Bootstrap / Webpack / Vite" />
      <Bar width={63} label="Node.js / TypeScript / Go" />
      <Bar width={42} label="MongoDB / Postgres" />
    </>
  )
}
