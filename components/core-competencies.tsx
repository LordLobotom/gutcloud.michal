const competencies = [
  {
    title: "Architecture Strategy & Governance",
    summary:
      "Target-state blueprints and capability maps that align corporate objectives, investments, and compliance requirements.",
    items: ["Business capability modeling", "Architecture guardrails & principles", "Portfolio & risk alignment"],
  },
  {
    title: "Application & Integration Platforms",
    summary:
      "Composable solutions that connect ERP, MES, and cloud services with reusable patterns and measurable reliability.",
    items: ["SAP, MES, and OT interoperability", "API-led and event-driven integration", "Workflow automation at scale"],
  },
  {
    title: "Data & Intelligence Foundations",
    summary:
      "Data products and analytics frameworks that deliver trustworthy insights while respecting governance and lineage.",
    items: ["Operational analytics design", "Data quality & stewardship standards", "Modern BI enablement"],
  },
  {
    title: "Delivery Leadership & Assurance",
    summary:
      "Architecture authority embedded in delivery teams to accelerate decisions, manage dependencies, and coach execution.",
    items: ["Program and portfolio steering", "Solution review & design authority", "Vendor and stakeholder alignment"],
  },
]

const certifications = [
  "Business Analysis: Essential Tools and Techniques",
  "Advanced SQL Programming in SQL Server",
  "Docker – Container Application Development & Deployment",
  "Business Analysis Foundations",
  "K2 Platform Certification",
]

export function CoreCompetencies() {
  return (
    <section id="competencies" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Core Competencies</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Proven ability to translate strategy into resilient architecture, ensure delivery discipline, and unlock
          measurable value across enterprise transformation programs.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {competencies.map((competency) => (
            <article
              key={competency.title}
              className="flex flex-col rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground">{competency.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{competency.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {competency.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="mt-12 rounded-2xl border border-border/60 bg-background/80 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Selected Certifications</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Continuous learning focused on architecture methods, automation platforms, and enterprise delivery practices.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
