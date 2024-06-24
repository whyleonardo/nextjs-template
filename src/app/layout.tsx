import { Metadata, Viewport } from "next"
import { ReactNode } from "react"

import { ScreenSizeIndicator } from "@/components/screen-size-indicator"

import { siteConfig } from "@/config/config"

import { cn } from "@/lib/utils"

import { fontCalSans, fontMono, fontSans } from "@/styles/fonts"
import "@/styles/global.css"

import { ThemeProvider } from "@/providers/theme-provider"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  }
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen", fontSans, fontMono, fontCalSans)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <ScreenSizeIndicator />
      </body>
    </html>
  )
}
