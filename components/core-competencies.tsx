const capabilities = [
  {
    title: "ERP & Integrations (incl. SAP)",
    summary:
      "Integration design, data contracts, API gateways, eventing, resilience, and security across SAP and adjacent enterprise systems.",
  },
  {
    title: "Data Platforms & Warehousing",
    summary:
      "Data modeling, SQL performance, lineage visibility, and reporting enablement with governance foundations in place.",
  },
  {
    title: "MES/SCADA & Industrial Apps",
    summary:
      "Real-time constraints, OT/IT integration, telemetry ingestion, and auditability for plant operations and industrial services.",
  },
  {
    title: "Architecture with Delivery",
    summary:
      "UML models, ADRs, threat modeling, CI/CD pipelines, code reviews, and SonarQube gates to keep delivery accountable.",
  },
  {
    title: "AI Prototyping (RAG/LLMs)",
    summary:
      "Practical proofs-of-concept with LangChain, Qdrant, and Ollama; developer-assist workflows using Codex-CLI and Claude Code.",
  },
]

export function CoreCompetencies() {
  return (
    <section id="what-i-do" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">What I Do</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          I bridge business goals and engineering reality. I like clear boundaries, clean interfaces, and code you can
          operate.
        </p>
        <div className="mt-10 grid gap-6">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{capability.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
