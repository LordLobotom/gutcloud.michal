import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="px-6 py-28">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary sm:text-sm">Michal Gut</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Solution Architect & Tech Lead — ERP, Integrations, Data, MES/SCADA
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I design pragmatic systems and keep a hands-on edge — from ERP & SAP integrations to data platforms, industrial apps, and secure, maintainable code.
        </p>
        <dl className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
          {[
            "Architectures for ERP (SAP), integrations, data warehouses, MES/SCADA",
            "Daily tools: .NET · Python · SQL · UML · GitLab CI/CD · SonarQube",
            "Hybrid/remote from Svitavy, open to CZ/EU",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-card px-5 py-4 shadow-sm">
              {item}
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:emichalgut@gmail.com?subject=Website%20inquiry">
              <Mail className="h-5 w-5" aria-hidden="true" />
              Contact me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#projects">
              View projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://www.linkedin.com/in/michal-gut-71791250" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://github.com/LordLobotom" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
