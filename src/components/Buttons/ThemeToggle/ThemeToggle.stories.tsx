import { ThemeToggle } from '@/components/Buttons/ThemeToggle'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ThemeToggle> = {
	title: 'Buttons/ThemeToggle',
	component: ThemeToggle,
	tags: ['button', 'theme', 'switcher'],
}

type Story = StoryObj<typeof ThemeToggle>

export const Primary: Story = {
	render: () => <ThemeToggle />,
}

export default meta
