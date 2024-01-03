import { SocialLinks } from '@/components/Buttons/SocialLinks'
import { ThemeToggle } from '@/components/Buttons/ThemeToggle'

export default function IndexPage() {
	return (
		<div className="h-screen">
			<header className="container flex h-14 items-center justify-end pt-2">
				<div className="flex items-center gap-2 ">
					<SocialLinks.Github />
					<SocialLinks.Linkedin />
					<ThemeToggle />
				</div>
			</header>

			<div className="flex h-[calc(100%-3.5rem)] items-center justify-center font-black">
				<span className="flex flex-wrap items-center justify-center gap-1 px-4 text-3xl tracking-tight sm:text-5xl xl:text-8xl">
					Next.
					<span className="animate-gradient bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-gradient bg-clip-text tracking-tighter text-transparent">
						Tailwind.
					</span>
					shadcn-ui.
				</span>
			</div>
		</div>
	)
}
