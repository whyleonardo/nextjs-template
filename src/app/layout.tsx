import { Metadata, type Viewport } from "next"

import { ScreenSizeIndicator } from "@/components/screen-size-indicator"

import { siteConfig } from "@/config/config"

import { cn } from "@/lib/utils"

import "@/styles/base.css"
import { fontCalSans, fontMono, fontSans } from "@/styles/fonts"
import "@/styles/global.css"

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
	},
	description: siteConfig.description,
	keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
	authors: siteConfig.authors,
	creator: "whyleonardo",
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@christianlsb0"
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png"
	}
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="">
			<head />
			<body
				className={cn(
					"min-h-screen bg-background antialiased",
					fontSans,
					fontMono,
					fontCalSans
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
				<ScreenSizeIndicator />
			</body>
		</html>
	)
}
