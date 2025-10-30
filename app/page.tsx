import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CoreCompetencies } from "@/components/core-competencies"
import { Experience } from "@/components/experience"
import { SelectedProjects } from "@/components/selected-projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <CoreCompetencies />
      <Experience />
      <SelectedProjects />
      <Contact />
    </main>
  )
}
