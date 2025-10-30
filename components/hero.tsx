import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="px-6 py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary sm:text-base">Solution Architect</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Michal Gut
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Designing scalable enterprise architectures that connect IT strategy and execution.
        </p>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Architecture-first leadership for manufacturing and global enterprises—bridging strategic roadmaps, delivery
          disciplines, and secure platform execution.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <a href="https://www.linkedin.com/in/michal-gut-71791250" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://github.com/LordLobotom" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" aria-hidden="true" />
              View GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="h-5 w-5" aria-hidden="true" />
              Start a Conversation
            </a>
          </Button>
        </div>
        <dl className="mt-12 grid w-full gap-6 text-left sm:grid-cols-3">
          {[
            {
              label: "Enterprise Programs Guided",
              value: "12+",
              variant: "stat",
            },
            {
              label: "Years in Architecture & Delivery",
              value: "10",
              variant: "stat",
            },
            {
              label: "Automation & Integration Platforms",
              value: "SAP · K2 Nintex · Ignition · .NET",
              variant: "text",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border/60 bg-card/60 p-5 shadow-sm">
              <dt className="text-sm font-medium text-muted-foreground">{item.label}</dt>
              <dd
                className={`mt-2 font-semibold text-foreground ${
                  item.variant === "stat" ? "text-3xl" : "text-sm leading-6"
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
