import { GithubLink } from '@/components/Buttons/GithubLink'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'

const linkTestId = 'github-link'
const screenReaderLabel = 'Github Link'
const linkHref = 'https://github.com/whyleonardo'

describe('GithubLink', () => {
	beforeEach(async () => {
		render(<GithubLink />)
	})
	it('renders a github logo', () => {
		expect(screen.getByTestId(linkTestId)).toContainHTML('svg')
	})

	it('renders a link to my github', () => {
		expect(screen.getByTestId(linkTestId).getAttribute('href')).toBe(linkHref)
	})

	it('opens the link in a new tab', () => {
		expect(screen.getByTestId(linkTestId).getAttribute('target')).toBe('_blank')
	})

	it('has a label for screen readers', () => {
		expect(
			screen.getByTestId(linkTestId).getElementsByClassName('sr-only')[0]
		).toHaveTextContent(screenReaderLabel)
	})

	it('redirect user to github link', () => {
		const mockedOpen = vi.fn()
		vi.spyOn(window, 'open').mockImplementation(mockedOpen)

		const newWindow = window.open(linkHref, '_blank')

		expect(mockedOpen).toHaveBeenCalledWith(linkHref, '_blank')

		expect(newWindow).not.toBeNull()

		mockedOpen.mockRestore()
	})
})
