import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Personality } from "@/components/personality"
import { Contact } from "@/components/contact"
import { MatrixBackground } from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Personality />
        <Contact />
      </div>
    </main>
  )
}
