import { Icons } from '@/components/Icons'

export const ScreenSizeIndicator = () => {
	if (process.env.NODE_ENV === 'production') return null

	return (
		<div className="fixed bottom-1 left-1 z-50 flex items-center justify-center gap-2 rounded-full bg-neutral-900 p-3 font-mono text-xs font-bold text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
			<div className="block sm:hidden">xs</div>
			<div className="hidden sm:block md:hidden">sm</div>
			<div className="hidden md:block lg:hidden">md</div>
			<div className="hidden lg:block xl:hidden">lg</div>
			<div className="hidden xl:block 2xl:hidden">xl</div>
			<div className="hidden 2xl:block">2xl</div>

			<Icons.tailwind className="h-4 w-4" />
		</div>
	)
}
