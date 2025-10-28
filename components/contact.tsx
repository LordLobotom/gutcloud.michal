import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-primary">{"> CONTACT"}</h2>

        <Card className="p-8 bg-card/50 backdrop-blur">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-pretty">
              Interested in discussing solution architecture, technical leadership, or potential collaboration? Feel
              free to reach out through any of the channels below.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild variant="outline" size="lg" className="justify-start gap-3 h-auto py-4 bg-transparent">
                <a href="mailto:emichalgut@gmail.com">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-mono text-sm">emichalgut@gmail.com</div>
                  </div>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="justify-start gap-3 h-auto py-4 bg-transparent">
                <a href="tel:+420731638308">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="font-mono text-sm">+420 731 638 308</div>
                  </div>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="justify-start gap-3 h-auto py-4 bg-transparent">
                <a href="https://www.linkedin.com/in/michal-gut-71791250" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <div className="font-mono text-sm">michal-gut-71791250</div>
                  </div>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="justify-start gap-3 h-auto py-4 bg-transparent">
                <a href="https://github.com/LordLobotom" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">GitHub</div>
                    <div className="font-mono text-sm">LordLobotom</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p className="font-mono">{"> SYSTEM.TERMINATE() // Built with purpose"}</p>
          <p className="mt-2">© 2025 Michal Gut. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
