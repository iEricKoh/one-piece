"use client"

import { Bar } from "./Bar"

export default function Graph() {
  return (
    <>
      <Bar width={82} label="React / Angular / Flutter / Chrome extension" />
      <Bar width={70} label="Node.js / TypeScript / Go" />
      <Bar width={65} label="Tailwind / Bootstrap / Webpack / Vite" />
      <Bar width={40} label="MongoDB / Postgres" />
    </>
  )
}
