"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyClientPage() {
  const { t } = useLanguage()

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.privacy.title}</h1>
          <p className="text-xl text-muted-foreground">{t.privacy.subtitle}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {t.privacy.lastUpdated} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.privacy.sections.collect.title}</CardTitle>
              <CardDescription>{t.privacy.sections.collect.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">{t.privacy.sections.collect.personal}</h4>
                <p className="text-muted-foreground">{t.privacy.sections.collect.personalDesc}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.privacy.sections.collect.usage}</h4>
                <p className="text-muted-foreground">{t.privacy.sections.collect.usageDesc}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.privacy.sections.use.title}</CardTitle>
              <CardDescription>{t.privacy.sections.use.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {t.privacy.sections.use.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.privacy.sections.security.title}</CardTitle>
              <CardDescription>{t.privacy.sections.security.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t.privacy.sections.security.content}</p>
              <div>
                <h4 className="font-semibold mb-2">{t.privacy.sections.security.measures}</h4>
                <ul className="space-y-1 text-muted-foreground">
                  {t.privacy.sections.security.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{t.privacy.sections.sharing.title}</CardTitle>
              <CardDescription>{t.privacy.sections.sharing.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t.privacy.sections.sharing.content}</p>
              <div>
                <h4 className="font-semibold mb-2">{t.privacy.sections.sharing.when}</h4>
                <ul className="space-y-1 text-muted-foreground">
                  {t.privacy.sections.sharing.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.privacy.sections.rights.title}</CardTitle>
              <CardDescription>{t.privacy.sections.rights.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t.privacy.sections.rights.content}</p>
              <ul className="space-y-1 text-muted-foreground">
                {t.privacy.sections.rights.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.privacy.sections.contactUs.title}</CardTitle>
              <CardDescription>{t.privacy.sections.contactUs.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.privacy.sections.contactUs.content}</p>
              <p className="mt-2">
                <a href="mailto:contact@horzteam.com" className="text-primary hover:underline">
                  contact@horzteam.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
