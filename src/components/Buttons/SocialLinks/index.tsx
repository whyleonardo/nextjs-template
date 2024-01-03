import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const Github = () => {
	return (
		<Link
			className={buttonVariants({
				variant: 'icon',
				size: 'icon',
			})}
			href="https://github.com/whyleonardo"
			data-testid="github-link"
			target="_blank"
		>
			<GitHubLogoIcon className="icon" />
			<span className="sr-only">Github Link</span>
		</Link>
	)
}

const Linkedin = () => {
	return (
		<Link
			className={buttonVariants({
				variant: 'icon',
				size: 'icon',
			})}
			href="https://linkedin.com/in/christianlsb"
			data-testid="github-link"
			target="_blank"
		>
			<LinkedInLogoIcon className="icon" />
			<span className="sr-only">Github Link</span>
		</Link>
	)
}

export const SocialLinks = { Github, Linkedin }
