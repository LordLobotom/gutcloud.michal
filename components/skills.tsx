const skills = [
  {
    label: "Languages / Platforms",
    value: ".NET (C#), Python, SQL",
  },
  {
    label: "Architecture & Modeling",
    value: "UML, ADRs, integration patterns, security basics",
  },
  {
    label: "Data",
    value: "Relational modeling, performance tuning, warehousing fundamentals",
  },
  {
    label: "DevOps / Quality",
    value: "GitLab CI/CD, SonarQube, container basics",
  },
  {
    label: "AI / RAG (POCs)",
    value: "LangChain, Qdrant, Ollama, Codex-CLI, Claude Code, Gemini",
  },
  {
    label: "Domains",
    value: "ERP (SAP integrations), MES/SCADA, manufacturing, system integrations",
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.label} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{skill.label}</h3>
              <p className="mt-2 text-base text-foreground">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
