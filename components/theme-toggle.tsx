'use client'

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const label = isDark ? "Switch to light theme" : "Switch to dark theme"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full border border-border bg-card"
      onClick={() => {
        setTheme(isDark ? "light" : "dark")
      }}
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {isDark ? (
        <SunMedium className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonStar className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  )
}
