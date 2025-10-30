export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">About</h2>
        <div className="mt-6 rounded-3xl border border-border bg-card p-12 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                Senior Solution Architect with a decade of experience shaping manufacturing and enterprise transformation
                roadmaps. I translate strategy into pragmatic architecture, building the capabilities, governance, and
                delivery rhythm required for measurable results.
              </p>
              <p>
                Today I guide multidisciplinary teams at Saint-Gobain ADFORS across SAP, integration, automation, and
                analytics. My remit spans architecture guardrails, modernization blueprints, and the execution coaching
                that keeps security and resilience built into every release.
              </p>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">Practice Anchors</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="leading-relaxed">Business & capability architecture aligned to strategic outcomes and investment cases.</li>
                  <li className="leading-relaxed">Application, integration, and data patterns engineered for reuse, security, and observability.</li>
                  <li className="leading-relaxed">Technology and OT platforms modernized with compliance, resilience, and lifecycle discipline.</li>
                  <li className="leading-relaxed">Delivery governance that connects portfolio priorities with accountable, empowered teams.</li>
                </ul>
              </div>
            </div>
            <dl className="space-y-6 text-sm text-muted-foreground">
              <div>
                <dt className="font-medium text-foreground">Location</dt>
                <dd className="mt-1">Svitavy, Czech Republic · CET</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Languages</dt>
                <dd className="mt-1">Czech (native), English (professional working proficiency)</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Engagement Models</dt>
                <dd className="mt-1">
                  Architecture advisory, program leadership, integration roadmaps, platform modernization initiatives.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
