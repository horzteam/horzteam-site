"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Rocket, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.features.innovation.title,
      description: t.features.innovation.description,
      icon: Rocket,
    },
    {
      title: t.features.community.title,
      description: t.features.community.description,
      icon: Users,
    },
    {
      title: t.features.quality.title,
      description: t.features.quality.description,
      icon: Code,
    },
    {
      title: t.features.passion.title,
      description: t.features.passion.description,
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.features.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
