"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import light from "@/public/theme-light.svg"
import dark from "@/public/theme-dark.svg"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="p-2 rounded-full hover:bg-gray-200 transition-all dark:hover:bg-teal-400"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "light" ? (
        <Image src={light} alt="light" priority className="dark:invert" />
      ) : (
        <Image src={dark} alt="dark" priority className="dark:invert" />
      )}
    </button>
  )
}
