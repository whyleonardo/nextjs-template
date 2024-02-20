import localFont from "next/font/local"

import { GeistMono, GeistSans } from "geist/font"

const localCalSans = localFont({
	src: "./cal-sans/CalSans-SemiBold.woff2",
	variable: "--font-cal-sans"
})

export const fontCalSans = localCalSans.variable
export const fontSans = GeistSans.variable
export const fontMono = GeistMono.variable
