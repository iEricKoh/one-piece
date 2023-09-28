"use client"
import { TypeAnimation } from "react-type-animation"

export default function TechStack({ stack }: { stack: string }) {
  return <TypeAnimation sequence={[stack]} wrapper="div" cursor={false} />
}
