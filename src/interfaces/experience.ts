export interface Project {
  name: string
  desc: string
}

export interface Experience {
  company: string
  duration: string
  position: string
  desc: string[]
  techStack: string[]
  projects: Project[]
}
