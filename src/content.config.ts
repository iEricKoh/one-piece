import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import enExperiences from "./data/experiences/en.json"
import zhExperiences from "./data/experiences/zh-CN.json"
import enSideProjects from "./data/side-projects/en.json"
import zhSideProjects from "./data/side-projects/zh-CN.json"

/**
 * Builds a content-layer loader from per-locale arrays. Every locale must list
 * the same items (matched by `keyField`) in the same order, otherwise the build
 * fails instead of silently shipping a mismatched / untranslated entry.
 */
function syncedLoader<T extends Record<string, unknown>>(
  name: string,
  sources: Record<string, readonly T[]>,
  keyField: keyof T,
) {
  return () => {
    const keyLists = Object.entries(sources).map(
      ([locale, list]) => [locale, list.map((e) => e[keyField])] as const,
    )
    const [, reference] = keyLists[0]
    for (const [locale, list] of keyLists.slice(1)) {
      const inSync =
        list.length === reference.length &&
        list.every((key, i) => key === reference[i])
      if (!inSync) {
        throw new Error(
          `[${name}] locale "${locale}" is out of sync with "${keyLists[0][0]}".\n` +
            `Each locale must define the same "${String(keyField)}" values in the same order.\n` +
            JSON.stringify(Object.fromEntries(keyLists), null, 2),
        )
      }
    }

    return Object.entries(sources).flatMap(([locale, list]) =>
      list.map((item, order) => ({
        id: `${locale}-${order}`,
        locale,
        order,
        ...item,
      })),
    )
  }
}

const experiences = defineCollection({
  loader: syncedLoader(
    "experiences",
    { en: enExperiences, "zh-CN": zhExperiences },
    "company",
  ),
  schema: z.object({
    locale: z.enum(["en", "zh-CN"]),
    order: z.number(),
    company: z.string(),
    duration: z.string(),
    position: z.string(),
    desc: z.array(z.string()).min(1),
    techStack: z.array(z.string()).min(1),
    projects: z.array(
      z.object({
        name: z.string(),
        desc: z.string(),
      }),
    ),
  }),
})

const sideProjects = defineCollection({
  loader: syncedLoader(
    "sideProjects",
    { en: enSideProjects, "zh-CN": zhSideProjects },
    "name",
  ),
  schema: z.object({
    locale: z.enum(["en", "zh-CN"]),
    order: z.number(),
    name: z.string(),
    url: z.url(),
    desc: z.string(),
    techStack: z.array(z.string()).default([]),
  }),
})

export const collections = { experiences, sideProjects }
