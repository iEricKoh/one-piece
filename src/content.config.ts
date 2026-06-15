import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import experiencesData from "./data/experiences/en.json"
import sideProjectsData from "./data/side-projects/en.json"

const experiences = defineCollection({
  loader: () =>
    experiencesData.map((entry, order) => ({
      id: String(order),
      order,
      ...entry,
    })),
  schema: z.object({
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
  loader: () =>
    sideProjectsData.map((entry, order) => ({
      id: String(order),
      order,
      ...entry,
    })),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    url: z.url(),
    desc: z.string(),
    techStack: z.array(z.string()).default([]),
  }),
})

export const collections = { experiences, sideProjects }
