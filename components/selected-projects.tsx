const projects = [
  {
    name: "MESRAG (Open-Source)",
    description:
      "Lightweight RAG stack for industrial documentation. FastAPI backend for ingest and chunking, embeddings stored in Qdrant, chat UI in Next.js, local LLM served by Ollama. Demonstrates practical AI delivery inside constrained OT environments.",
    outcome: "Clear deployment instructions and guardrails let plant teams validate the workflow without exposing data externally.",
    link: "https://github.com/LordLobotom/MESRAG",
  },
  {
    name: "ERP ↔ Data Warehouse Integration",
    description:
      "Designed contracts and pipelines to reconcile data across SAP and satellite systems. Normalised semantics, aligned schedules, and packaged load jobs for operators.",
    outcome:
      "Reporting became predictable, query performance improved, and analysts stopped spelunking through ad-hoc SQL to explain mismatches.",
  },
  {
    name: "Industrial Telemetry & Integrations",
    description:
      "Architected secure ingestion from MES/SCADA into enterprise services. Covered buffering, sequence guarantees, logging, and alerting.",
    outcome:
      "Fault isolation improved, downtime during incidents dropped, and OT events now land in downstream systems without manual babysitting.",
  },
  {
    name: "Code Review & Quality Discipline",
    description:
      "Stood up review cadence, GitLab CI/CD checks, and SonarQube gates across the team. Templates emphasise ownership and regression checks.",
    outcome:
      "Teams close feedback loops faster, quality issues surface earlier, and releases land with fewer surprises.",
  },
]

export function SelectedProjects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Selected Projects</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Outcome-focused work that shows how I balance architecture decisions with hands-on delivery.
        </p>
        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-foreground">{project.outcome}</p>
              {project.link ? (
                <p className="mt-4 text-sm text-primary underline-offset-4 hover:underline">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
