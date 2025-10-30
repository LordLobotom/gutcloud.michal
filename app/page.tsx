import { Hero } from "@/components/hero"
import { CoreCompetencies } from "@/components/core-competencies"
import { SelectedProjects } from "@/components/selected-projects"
import { Contact } from "@/components/contact"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { HowIWork } from "@/components/how-i-work"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CoreCompetencies />
      <SelectedProjects />
      <Skills />
      <About />
      <HowIWork />
      <Contact />
    </main>
  )
}
