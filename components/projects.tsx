"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gamepad2, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.minecraftKivotos.title,
      description: t.projects.minecraftKivotos.description,
      url: "https://www.kivotos.net.cn/",
      icon: Gamepad2,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: t.projects.minecraftRoleplay.title,
      description: t.projects.minecraftRoleplay.description,
      url: "https://mc.epsvideo.cn/",
      icon: Gamepad2,
      gradient: "from-primary to-primary/80",
    },
    {
      title: t.projects.qwerTop.title,
      description: t.projects.qwerTop.description,
      url: "https://qwer.top",
      icon: Globe,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: t.projects.epsilonAuth.title,
      description: t.projects.epsilonAuth.description,
      url: "https://idp.qwer.top",
      icon: Shield,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: t.projects.awaGs.title,
      description: t.projects.awaGs.description,
      url: "https://awa.gs",
      icon: Zap,
      gradient: "from-teal-500 to-primary",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.projects.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      {t.projects.visitProject}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
