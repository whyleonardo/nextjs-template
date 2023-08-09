import type { Meta, StoryObj } from '@storybook/react'

import HomePage from '@/app/page'

const meta: Meta<typeof HomePage> = {
	title: 'Pages/Index',
	component: HomePage,
	tags: ['pages', 'home'],
}

export default meta

type Story = StoryObj<typeof HomePage>

export const Index: Story = {
	render: () => <HomePage />,
}
