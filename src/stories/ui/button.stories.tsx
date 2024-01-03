import { Icons } from '@/components/icons'
import { Button as ButtonUI } from '@/components/ui/button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonUI> = {
	title: 'components/Button',
	component: ButtonUI,
	tags: ['components', 'button'],
}

export default meta

type Story = StoryObj<typeof ButtonUI>

export const Button: Story = {
	args: {
		variant: 'default',
		children: 'Button',
	},
}

export const WithIcon: Story = {
	args: {
		variant: 'icon',
		size: 'icon',
	},
	render: (args) => (
		<ButtonUI {...args}>
			<Icons.tailwind />
		</ButtonUI>
	),
}
