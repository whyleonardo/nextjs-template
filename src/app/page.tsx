import { GithubLink } from '@/components/Buttons/GithubLink'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function IndexPage() {
	return (
		<div className="relative flex min-h-screen items-center justify-center">
			<GithubLink />
			<ThemeToggle />

			<span className="flex flex-wrap items-center justify-center gap-1 px-4 text-5xl font-semibold tracking-tighter">
				Next.js +
				<span className="bg-gradient-to-br from-blue-700 to-blue-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-blue-400">
					Tailwind{' '}
					<span className="text-neutral-950 dark:text-neutral-50">+&nbsp;</span>
				</span>
				shadcn-ui ❤️
			</span>
		</div>
	)
}
