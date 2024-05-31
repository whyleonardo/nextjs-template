"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { Moon, Sun } from "lucide-react"

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      size="icon"
      variant="ghost"
      className="flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
