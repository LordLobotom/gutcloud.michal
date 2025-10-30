import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Michal Gut | Solution Architect",
  description:
    "Solution Architect specialising in scalable enterprise platforms, integration, and delivery leadership for manufacturing and global enterprises.",
  keywords: [
    "Solution Architect",
    "Enterprise Architecture",
    "Digital Transformation",
    "Integration",
    "Manufacturing IT",
    "Michal Gut",
  ],
  authors: [{ name: "Michal Gut" }],
  openGraph: {
    title: "Michal Gut | Solution Architect",
    description:
      "Designing scalable enterprise architectures that connect IT strategy and execution for manufacturing and global enterprises.",
    url: "https://michal-gutcloud.vercel.app",
    siteName: "Michal Gut Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michal Gut | Solution Architect",
    description:
      "Enterprise Solution Architect aligning technology investments with measurable business value.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plex.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
