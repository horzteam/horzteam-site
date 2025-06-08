"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutClient() {
  const { t } = useLanguage()

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-muted-foreground">{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.about.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.about.mission.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.about.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.about.vision.description}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>{t.about.story.title}</CardTitle>
            <CardDescription>{t.about.story.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.about.story.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">{t.about.values.title}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {t.about.values.items.map((value, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
