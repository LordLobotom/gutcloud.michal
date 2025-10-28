import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-primary font-mono text-sm tracking-wider">{"> SYSTEM.INITIALIZE()"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Michal Gut</h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">the Architect</p>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Engineering clarity into complex systems. From code to architecture – building systems with purpose.
            </p>
          </div>

          <div className="pt-4">
            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
              <p className="text-pretty">
                {
                  '"Ergo, vis-à-vis your requests, I have already chosen the optimal solution. Now, you must understand it."'
                }
              </p>
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button asChild size="lg" className="gap-2">
              <a href="https://www.linkedin.com/in/michal-gut-71791250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="https://github.com/LordLobotom" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="mailto:emichalgut@gmail.com">
                <Mail className="h-5 w-5" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
