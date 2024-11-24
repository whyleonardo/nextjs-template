import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { ScreenSizeIndicator } from "@/components/screen-size-indicator"

import { siteConfig } from "@/config/config"

import { cn } from "@/lib/utils"

import { fontCalSans, fontMono, fontSans } from "@/styles/fonts"
import "@/styles/styles.css"

import { QueryProvider } from "@/providers/query-provider"
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

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen", fontSans, fontMono, fontCalSans)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
        <ScreenSizeIndicator />
      </body>
    </html>
  )
}

export default RootLayout
