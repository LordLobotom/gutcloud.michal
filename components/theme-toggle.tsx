'use client'

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isResolved = typeof resolvedTheme === "string"
  const isDark = resolvedTheme === "dark"
  const label = isResolved ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Loading theme preference"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full border-border/70 bg-background/80"
      onClick={() => {
        if (!isResolved) return
        setTheme(isDark ? "light" : "dark")
      }}
      aria-label={label}
      disabled={!isResolved}
    >
      {isResolved ? (
        isDark ? <SunMedium className="h-5 w-5" aria-hidden="true" /> : <MoonStar className="h-5 w-5" aria-hidden="true" />
      ) : (
        <SunMedium className="h-5 w-5 animate-pulse" aria-hidden="true" />
      )}
    </Button>
  )
}
