const steps = [
  "Start with a shared vocabulary: context diagram, domain language, constraints.",
  "Model data and interfaces first; agree on contracts and failure modes.",
  "Define non-functionals (security, audit, operability) early.",
  "Keep CI/CD and quality gates from day one.",
  "Document decisions (ADRs) and iterate with short feedback loops.",
]

export function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">How I Work</h2>
        <ol className="mt-6 space-y-4 text-base text-muted-foreground">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="mt-1 h-6 w-6 flex-none rounded-full bg-primary/10 text-center text-sm font-semibold leading-6 text-primary">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
