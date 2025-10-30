const competencies = [
  {
    title: "Enterprise Architecture",
    summary: "Target-state design, capability mapping, and roadmaps that align technology to business outcomes.",
    items: ["Operating model definition", "Architecture governance & guardrails", "Platform modernization plans"],
  },
  {
    title: "Integration & Automation",
    summary: "Connecting OT, ERP, and cloud platforms to streamline data flow and reduce manual effort.",
    items: ["SAP and MES integration", "Workflow automation (K2 Nintex)", "Event-driven and API-led patterns"],
  },
  {
    title: "Data & Insights",
    summary: "Enabling reliable, trusted data for operations and leadership through resilient pipelines.",
    items: ["BI solution design", "Data quality and lineage controls", "Analytics platform enablement"],
  },
  {
    title: "Delivery Leadership",
    summary: "Leading cross-functional teams with clear architecture direction and measurable execution.",
    items: ["Portfolio prioritization", "Solution design authority", "Vendor and stakeholder alignment"],
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
        <div className="mt-12 rounded-2xl border border-border/60 bg-background/80 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Selected Certifications</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
