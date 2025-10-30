import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Competencies", href: "#competencies" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-[900px] px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-base font-semibold tracking-tight text-foreground">
            Michal Gut · Solution Architect
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <nav
              aria-label="Primary"
              className="flex flex-wrap justify-start gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground sm:justify-end"
            >
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="transition-colors hover:text-foreground">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex justify-start sm:justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
