export interface Experience {
  company: string
  duration: string
  position: string
  desc: Array<string>
  techStack: Array<string>
  projects: Array<{ name: string; desc: string }>
}
