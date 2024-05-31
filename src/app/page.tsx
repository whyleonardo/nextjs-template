import { ThemeToggle } from "@/components/theme-toggle"
import { Typography } from "@/components/ui/typography"

export default function IndexPage() {
  return (
    <div className="grid h-dvh place-items-center">
      <main className="flex flex-col items-center gap-2 text-xl">
        <div className="absolute right-16 top-4">
          <ThemeToggle />
        </div>

        <Typography.H1>Hello World</Typography.H1>
      </main>
    </div>
  )
}
