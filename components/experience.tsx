import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-primary">{"> EXPERIENCE"}</h2>

        <div className="space-y-6">
          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold">Software Development Team Lead</h3>
                  <p className="text-lg text-primary font-semibold">Saint-Gobain ADFORS</p>
                  <p className="text-muted-foreground">Litomyšl, Czech Republic</p>
                </div>
                <Badge variant="secondary" className="self-start">
                  April 2022 - Present
                </Badge>
              </div>

              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">
                    Leading cross-functional teams (K2 Nintex, Ignition, BI, SAP, .NET, Python) while driving strategic
                    technical decisions, automation, and architecture improvements
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">
                    Developing long-term IT strategy and conducting system studies for digital transformation
                    initiatives
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">
                    Implementing scalable solutions improving system efficiency and process automation
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">
                    Bridging development, data, and business processes to enhance technology strategy
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">
                    Managing security initiatives including penetration testing, network segmentation, and NIS2
                    compliance preparation
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold">Software Developer</h3>
                  <p className="text-lg text-primary font-semibold">Saint-Gobain ADFORS</p>
                  <p className="text-muted-foreground">Litomyšl, Czech Republic</p>
                </div>
                <Badge variant="secondary" className="self-start">
                  May 2015 - April 2022
                </Badge>
              </div>

              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">Full-stack development using MS SQL, Visual Studio, Git</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">Technologies: SQL, .NET C#, Xamarin, WPF, Python, JavaScript</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <span className="text-pretty">K2 BPM (Nintex) workflow development and automation</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Bachelor's Degree (Bc.) in Applied Informatics</p>
                <p className="text-sm text-muted-foreground">Specialization: Graphic Design</p>
                <p className="text-sm text-muted-foreground">Masaryk University Brno • 2011 - 2015</p>
              </div>
              <div>
                <p className="font-semibold">Gymnasium Svitavy</p>
                <p className="text-sm text-muted-foreground">2006 - 2010</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
