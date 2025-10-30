const roles = [
  {
    title: "Solution Architect & Software Development Team Lead",
    company: "Saint-Gobain ADFORS",
    location: "Litomyšl, Czech Republic",
    period: "Apr 2022 – Present",
    impact:
      "Guiding cross-functional teams across SAP, MES, automation, and analytics to deliver the manufacturing digital thread.",
    highlights: [
      "Established architecture governance and technology roadmaps aligned to business capability priorities.",
      "Led modernization of plant systems—integrating Ignition, K2 Nintex, and SAP to reduce cycle time and manual effort.",
      "Directed security uplift initiatives covering network segmentation, penetration testing, and NIS2 readiness.",
    ],
  },
  {
    title: "Software Developer",
    company: "Saint-Gobain ADFORS",
    location: "Litomyšl, Czech Republic",
    period: "May 2015 – Apr 2022",
    impact:
      "Delivered business-critical applications and integrations spanning SQL Server, .NET, Python, and mobile platforms.",
    highlights: [
      "Built BI and reporting solutions enabling plant and leadership transparency on production KPIs.",
      "Implemented workflow automation on the K2 platform, streamlining approval chains and compliance tracking.",
      "Collaborated with global teams to deploy reusable integration assets across the EMEA manufacturing footprint.",
    ],
  },
]

const education = [
  {
    school: "Masaryk University, Brno",
    detail: "B.Sc. Applied Informatics · Graphic Design Specialization",
    period: "2011 – 2015",
  },
  {
    school: "Gymnasium Svitavy",
    detail: "General Studies",
    period: "2006 – 2010",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          10 years translating strategy into delivery, partnering with leadership to build platforms the business can
          trust.
        </p>
        <div className="mt-10 space-y-10">
          {roles.map((role) => (
            <article key={role.title} className="rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                  <p className="text-sm font-medium text-primary">{role.company}</p>
                  <p className="text-sm text-muted-foreground">{role.location}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{role.period}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{role.impact}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border/60 bg-background/80 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            {education.map((item) => (
              <li key={item.school}>
                <p className="font-medium text-foreground">{item.school}</p>
                <p>{item.detail}</p>
                <p>{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
