'use client'

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const company = String(formData.get("company") ?? "")
    const inquiry = String(formData.get("message") ?? "")

    if (!name || !email || !inquiry) {
      setStatus("error")
      setMessage("Please provide your name, email, and a brief message.")
      return
    }

    setStatus("submitting")
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : undefined,
      "",
      inquiry,
    ].filter(Boolean)

    try {
      if (typeof window !== "undefined") {
        const mailto = `mailto:emichalgut@gmail.com?subject=${encodeURIComponent(
          `Solution Architecture Inquiry – ${name}`,
        )}&body=${encodeURIComponent(lines.join("\n"))}`
        window.location.href = mailto
      }
      form.reset()
      setStatus("success")
      setMessage("Thank you. An email draft was opened—please review and send when ready.")
    } catch (error) {
      console.error(error)
      setStatus("error")
      setMessage("Something went wrong while preparing your message. Please email emichalgut@gmail.com directly.")
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-3xl font-semibold text-foreground">Contact</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Let’s talk about modernizing operations, scaling digital platforms, or building a roadmap that connects
          technology with measurable business value.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8 rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Direct Channels</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                I typically respond within one business day. Please include project context, timeline, and expected
                outcomes where possible.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <a className="font-medium text-foreground underline-offset-4 hover:underline" href="mailto:emichalgut@gmail.com">
                  emichalgut@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
                <a
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                  href="https://www.linkedin.com/in/michal-gut-71791250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" aria-hidden="true" />
                <a
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                  href="https://github.com/LordLobotom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm"
            aria-describedby={status !== "idle" ? "contact-status" : undefined}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="mt-2 w-full rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                How can I help? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="self-start gap-2"
              disabled={status === "submitting"}
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              {status === "submitting" ? "Preparing message…" : "Send message"}
            </Button>
            {status !== "idle" && message ? (
              <p
                id="contact-status"
                className={`text-sm ${
                  status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
                }`}
              >
                {message}
              </p>
            ) : null}
            <p className="text-xs text-muted-foreground">
              Your details are used solely to follow up on this inquiry and are not stored on this site.
            </p>
          </form>
        </div>

        <footer className="mt-16 border-t border-border/40 pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Michal Gut. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
