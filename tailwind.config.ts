import { type Config } from "tailwindcss"

const {
	default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette")
const svgToDataUri = require("mini-svg-data-uri")

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				svg: 'hsl(0 0% 63.9%)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)'],
				heading: ['var(--font-sans-heading)'],


			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				gradient: {
					'0%': {
						backgroundPosition: '0%'
					},
					'50%': {
						backgroundPosition: '100%'
					},
					'100%': {
						backgroundPosition: '100%'
					}
				}
			},
			backgroundSize: {
				gradient: '250%'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				gradient: 'gradient 5s ease infinite alternate'
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@beaubus/svg-patterns-for-tailwindcss'),
		 function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width='32' height='32' fill="none" stroke="${value}"><path d="M2,8 L5,2 L8,8"/></svg>`
            )}")`,
          }),
        },
				{ values: flattenColorPalette(theme("colors")), type: "color" },
      );
		},

	]
} satisfies Config
