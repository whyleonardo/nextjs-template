import { Metadata } from 'next'

import { ScreenSizeIndicator } from '@/components/ScreenSizeIndicator'

import { siteConfig } from '@/config/config'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { fontMono, fontSans } from '@/styles/fonts'

import '@/styles/global.css'
import '@/styles/base.css'

// TODO: CHECK INFOS IN DEV TO SEE IF IT'S WORKING
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Next.js',
		'React',
		'Tailwind CSS',
		'Server Components',
		'Radix UI',
	],
	authors: siteConfig.authors,
	creator: 'whyleonardo',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: '@christianlsb0',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	// manifest: `${siteConfig.url}/site.webmanifest`
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				{/* eslint-disable-next-line @next/next/no-head-element*/}
				<head />
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable,
						fontMono.variable
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<div className="relative flex min-h-screen flex-col">
							<div className="inset-0 min-h-screen absolute -z-20" />

							<div className="flex-1">{children}</div>
						</div>
					</ThemeProvider>
					<ScreenSizeIndicator />
				</body>
			</html>
		</>
	)
}
