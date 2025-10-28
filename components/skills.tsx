import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Core Competencies",
      skills: [
        "Solution Architecture",
        "Technical Leadership",
        "Business Analysis",
        "System Design",
        "Digital Transformation",
      ],
    },
    {
      title: "Technologies",
      skills: [
        "Docker & Containerization",
        "MS SQL Server",
        ".NET / C#",
        "Python",
        "JavaScript",
        "K2 Nintex",
        "SAP Integration",
      ],
    },
    {
      title: "Development",
      skills: ["WPF", "Xamarin", "Git", "Visual Studio", "Process Automation", "BI Solutions"],
    },
    {
      title: "Security & Compliance",
      skills: ["Penetration Testing", "Network Segmentation", "NIS2 Compliance", "Security Architecture"],
    },
  ]

  const certifications = [
    "Business Analysis: Essential Tools and Techniques",
    "Advanced SQL Programming in SQL Server",
    "Business Analysis Foundations",
    "Docker - Container Application Development and Deployment",
    "K2 Learning",
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-primary">{"> SKILLS"}</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-card/50 backdrop-blur">
          <h3 className="text-lg font-bold mb-4 text-primary">Certifications</h3>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
