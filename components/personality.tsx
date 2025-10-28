import { Card } from "@/components/ui/card"
import { Users, Eye, Brain, Anchor } from "lucide-react"

export function Personality() {
  const traits = [
    {
      icon: Users,
      title: "Interaction with Others",
      subtitle: "Collaborative Listener",
      description:
        "Approachable and cooperative, excels at listening and building strong, lasting relationships. Prefers collaboration over self-promotion.",
    },
    {
      icon: Eye,
      title: "Perception",
      subtitle: "Open Mind",
      description:
        "Balances big-picture thinking with attention to detail. Considers both opportunities and risks, adapting to various challenges with versatility.",
    },
    {
      icon: Brain,
      title: "Decision Making",
      subtitle: "Performance Realist",
      description:
        "Natural pragmatist driven by facts, data, and measurable results. Maintains objectivity and rational perspective in decision-making.",
    },
    {
      icon: Anchor,
      title: "Work Style",
      subtitle: "Steady Anchor",
      description:
        "Seeks order and stability even in turbulent times. Leverages existing solutions and established processes, thriving in familiar environments.",
    },
  ]

  const strengths = [
    "Logical, rational, and performance-oriented approach",
    "Versatile perception of context and detail",
    "Stabilizing presence in dynamic environments",
    "Strong organizational and resource management skills",
    "Motivated by structured, secure work environments",
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-primary">{"> PERSONALITY_PROFILE"}</h2>
        <p className="text-muted-foreground mb-8 text-sm">Based on psychodiagnostic assessment and AI analysis</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {traits.map((trait) => {
            const Icon = trait.icon
            return (
              <Card key={trait.title} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-bold text-sm text-muted-foreground">{trait.title}</h3>
                      <p className="text-lg font-semibold text-primary">{trait.subtitle}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{trait.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur">
          <h3 className="text-xl font-bold mb-6 text-primary">Key Strengths</h3>
          <ul className="space-y-3">
            {strengths.map((strength) => (
              <li key={strength} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1 flex-shrink-0">▸</span>
                <span className="text-pretty">{strength}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
