import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from "./google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HoRzTeam - Better Horz.",
  description: "HoRzTeam - Creating innovative digital experiences. Better Horz.",
  keywords: "HoRzTeam, Minecraft, Web Development, Gaming, Technology"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col container m-auto p-2">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId="G-HZR1817TCH" />
        </Suspense>
      </body>
    </html>
  )
}
