"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"

export default function RedirectClient() {
  useEffect(() => {
    // 立即重定向到 Notion 文档
    window.location.href = "https://101121.notion.site/horzteamdocs"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Logo size="lg" className="justify-center" />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Redirecting to Documentation...</h1>
          <p className="text-muted-foreground">
            If you are not redirected automatically,{" "}
            <a href="https://101121.notion.site/horzteamdocs" className="text-primary hover:underline">
              click here
            </a>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  )
}
