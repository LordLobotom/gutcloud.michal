const projects = [
  {
    name: "Global Manufacturing Analytics Platform",
    industry: "Advanced Materials · EMEA",
    summary:
      "Consolidated plant-floor, ERP, and quality data into a governed model used by operations and corporate finance.",
    outcomes: [
      "Cut reporting cycles from weekly to near real time with automated data pipelines and standardized KPIs.",
      "Delivered executive-ready dashboards adopted across 6 plants within the first quarter.",
    ],
    technology: "Azure, SAP, Power BI, Python, SQL Server, Ignition",
  },
  {
    name: "Order-to-Cash Automation Program",
    industry: "Industrial Manufacturing · Europe & North America",
    summary:
      "Redesigned the customer order orchestration flow, bringing legacy BPM, SAP, and CRM systems into a unified workflow.",
    outcomes: [
      "Reduced manual interventions by 40% through event-driven integrations and automated exception handling.",
      "Introduced architecture guardrails and reusable APIs adopted by three regional business units.",
    ],
    technology: "K2 Nintex, SAP, .NET, REST APIs, Docker",
  },
  {
    name: "Operational Technology Security Uplift",
    industry: "Manufacturing · EMEA",
    summary:
      "Led a multi-year security initiative to modernize OT network zones and harden plant applications against NIS2.",
    outcomes: [
      "Implemented segmented network design with continuous monitoring and incident response workflows.",
      "Established secure development lifecycle and vendor onboarding standards adopted across the division.",
    ],
    technology: "Cisco, Fortinet, OT Monitoring, Secure SDLC Playbooks",
  },
]

export function SelectedProjects() {
  return (
    <section id="projects" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Selected Projects</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Representative initiatives that demonstrate the balance of strategic design and hands-on delivery leadership.
        </p>
        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                <p className="text-sm font-medium text-primary">{project.industry}</p>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">
                Technology & Approach · <span className="font-medium text-foreground">{project.technology}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
