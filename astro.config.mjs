// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://www.ierickoh.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          "zh-CN": "zh-CN",
        },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
