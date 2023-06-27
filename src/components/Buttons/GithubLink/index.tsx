import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { GitHubLogoIcon } from '@radix-ui/react-icons'

export const GithubLink = () => {
	return (
		<Link
			className={buttonVariants({
				variant: 'ghost',
				className: 'absolute right-8 top-4'
			})}
			href="https://github.com/whyleonardo"
			data-testid="github-link"
			target="_blank"
		>
			<GitHubLogoIcon />
			<span className="sr-only">Github Link</span>
		</Link>
	)
}
