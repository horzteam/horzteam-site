"use client"

import Link from "next/link"
import { Github, Mail, MonitorPlay } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.projects}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.kivotos.net.cn/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.projects.minecraftKivotos.title}
                </Link>
              </li>
              <li>
                <Link
                  href="https://mc.epsvideo.cn/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.projects.minecraftRoleplay.title}
                </Link>
              </li>
              <li>
                <Link
                  href="https://qwer.top"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.projects.qwerTop.title}
                </Link>
              </li>
              <li>
                <Link
                  href="https://awa.gs"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.projects.awaGs.title}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link href="/cgi-bin/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.docs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="http://github.com/horzteam"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <Github className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://space.bilibili.com/1893385009"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <MonitorPlay className="h-5 w-5 mr-2" />
                <span>Bilibili</span>
              </Link>
              <Link
                href="mailto:contact@horzteam.com"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@horzteam.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} HoRzTeam. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
