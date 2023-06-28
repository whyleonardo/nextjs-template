import { SocialLinks } from '@/components/Buttons/SocialLinks'
import { ThemeToggle } from '@/components/Buttons/ThemeToggle'

export default function IndexPage() {
	return (
		<div className="h-screen">
			<header className="container flex h-14 items-center justify-end">
				<div className="flex items-center gap-2 ">
					<SocialLinks.Github />
					<SocialLinks.Linkedin />
					<ThemeToggle />
				</div>
			</header>

			<div className="flex h-[calc(100%-3.5rem)] items-center justify-center">
				<span className="flex flex-wrap items-center justify-center gap-1 px-4 text-5xl font-semibold tracking-tighter">
					Next.js +
					<span className="bg-gradient-to-br from-blue-700 to-blue-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-blue-400">
						Tailwind <span>+&nbsp;</span>
					</span>
					shadcn-ui ❤️
				</span>
			</div>
		</div>
	)
}
