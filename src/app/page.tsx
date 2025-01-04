import { ThemeToggle } from "@/components/theme-toggle"
import { Typography } from "@/components/ui/typography"

const HomePage = () => {
  return (
    <div className="grid h-dvh place-items-center">
      <main className="flex flex-col items-center gap-2 text-xl">
        <div className="absolute top-4 right-16">
          <ThemeToggle />
        </div>

        <Typography variant="h1" as="h1" className="font-mono">
          Hello World
        </Typography>
      </main>
    </div>
  )
}

export default HomePage
