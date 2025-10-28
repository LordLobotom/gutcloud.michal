import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-primary">{"> ABOUT"}</h2>

        <Card className="p-8 bg-card/50 backdrop-blur">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-pretty">
              Experienced Technical Lead with a strong background in software architecture, automation, and
              business-driven technology solutions. Currently leading a development team while progressively expanding
              my role into technical leadership, solution architecture, and strategic decision-making.
            </p>

            <p className="text-pretty">
              Passionate about bridging business and technology to drive innovation, process optimization, and
              cross-functional collaboration. I specialize in transforming complex requirements into elegant, scalable
              solutions that deliver real business value.
            </p>

            <div className="pt-4 border-t border-border">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2 text-foreground">Svitavy, Czech Republic</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Languages:</span>
                  <span className="ml-2 text-foreground">Czech (Native), English (Professional)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
