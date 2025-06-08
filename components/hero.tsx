"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 md:py_32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-background/50 backdrop-blur">
            <span className="text-muted-foreground">{t.hero.welcome}</span>
            <span className="ml-2 font-semibold">HoRzTeam</span>
          </div>

          <div className="mb-8">
            <Logo size="lg" className="justify-center" showText={false} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              {t.hero.slogan}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">
                {t.hero.exploreProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">{t.hero.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
