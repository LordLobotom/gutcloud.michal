export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">About</h2>
        <div className="mt-6 rounded-3xl border border-border bg-card p-12 shadow-sm">
          <p className="text-base leading-relaxed text-muted-foreground">
            I’m a solution architect and development team lead. I prefer simple designs that are easy to operate and
            evolve. I’m comfortable switching between diagrams and code reviews. I like working closely with
            stakeholders, modeling data properly, and making trade-offs explicit. I prototype with AI to accelerate
            discovery, but I ship only what helps the system.
          </p>
        </div>
      </div>
    </section>
  )
}
