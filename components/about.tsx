export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">About</h2>
        <div className="mt-6 rounded-2xl border border-border/60 bg-card/70 p-10 shadow-sm">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I partner with enterprise leaders to translate business intent into actionable architecture strategies. My
              background spans solution design, team leadership, and delivery governance across manufacturing, supply
              chain, and digital transformation programs.
            </p>
            <p>
              At Saint-Gobain ADFORS I lead multidisciplinary teams across SAP, automation, data, and .NET platforms.
              My focus is on establishing architecture guardrails, accelerating decision cycles, and ensuring platforms
              scale with compliance and resilience built in.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                <span>Bridging business cases with executable roadmaps and measurable KPIs.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                <span>Guiding platform modernization and integration patterns with security at the core.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                <span>Mentoring delivery teams to maintain architectural integrity from discovery to rollout.</span>
              </li>
            </ul>
          </div>
          <dl className="mt-8 grid gap-6 text-sm text-muted-foreground sm:grid-cols-2">
            <div>
              <dt className="font-medium text-foreground">Location</dt>
              <dd className="mt-1">Svitavy, Czech Republic · CET</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Languages</dt>
              <dd className="mt-1">Czech (native), English (professional working proficiency)</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
