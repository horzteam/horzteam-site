"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactClient() {
  const { t } = useLanguage()

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.contact.email.title}</CardTitle>
              <CardDescription>{t.contact.email.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t.contact.email.general} <br />
                <a href="mailto:contact@horzteam.com" className="text-primary hover:underline">
                  contact@horzteam.com
                </a>
              </p>
              <p className="text-muted-foreground mt-4">
                {t.contact.email.support} <br />
                <a href="mailto:contact@horzteam.com" className="text-primary hover:underline">
                  contact@horzteam.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.contact.response.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.contact.response.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
