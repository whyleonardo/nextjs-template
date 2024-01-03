import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
			name: '@storybook/addon-styling',
			options: {
				postcss: {
					implementation: require.resolve('postcss'),
				},
			},
		},
        '@storybook/addon-themes'
    ],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	previewHead: (head) => `
    ${head}
    <style>
      html, body {
        font-family: 'Inter', sans-serif;;
      }
    </style>
 `,
}
export default config
