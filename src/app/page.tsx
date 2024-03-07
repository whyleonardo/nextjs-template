import { ThemeToggle } from "@/components/theme-toggle"

export default function IndexPage() {
	return (
		<div className="grid h-dvh place-items-center">
			<main className="flex flex-col items-center gap-2 text-xl">
				<ThemeToggle />
				<span className="font-medium">Hello World</span>
			</main>
		</div>
	)
}
