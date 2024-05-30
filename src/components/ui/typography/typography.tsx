import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { PropsWithChildren, RefObject } from "react"

interface TypographyProps<T> extends PropsWithChildren {
	className?: string
	ref?: RefObject<T>
}

export const H1 = ({
	children,
	className,
	ref
}: TypographyProps<HTMLHeadingElement>) => {
	return (
		<h1
			ref={ref}
			className={cn(
				"scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
				className
			)}
		>
			{children}
		</h1>
	)
}
export const H2 = ({
	children,
	className,
	ref
}: TypographyProps<HTMLHeadingElement>) => {
	return (
		<h2
			ref={ref}
			className={cn(
				"scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
				className
			)}
		>
			{children}
		</h2>
	)
}

export const H3 = ({
	children,
	className,
	ref
}: TypographyProps<HTMLHeadingElement>) => {
	return (
		<h3
			ref={ref}
			className={cn(
				"scroll-m-20 font-semibold text-2xl tracking-tight",
				className
			)}
		>
			{children}
		</h3>
	)
}

export const H4 = ({
	children,
	className,
	ref
}: TypographyProps<HTMLHeadingElement>) => {
	return (
		<h4
			ref={ref}
			className={cn(
				"scroll-m-20 font-semibold text-xl tracking-tight",
				className
			)}
		>
			{children}
		</h4>
	)
}

export const P = ({
	children,
	className,
	ref
}: TypographyProps<HTMLParagraphElement>) => {
	return (
		<p
			ref={ref}
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
		>
			{children}
		</p>
	)
}

export const Blockquote = ({
	children,
	className,
	ref
}: TypographyProps<HTMLQuoteElement>) => {
	return (
		<blockquote
			ref={ref}
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
		>
			{children}
		</blockquote>
	)
}

export const Ol = ({
	children,
	className,
	ref
}: TypographyProps<HTMLOListElement>) => {
	return (
		<ol
			ref={ref}
			className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
		>
			{children}
		</ol>
	)
}

export const Ul = ({
	children,
	className,
	ref
}: TypographyProps<HTMLUListElement>) => {
	return (
		<ul ref={ref} className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
			{children}
		</ul>
	)
}

export const Code = ({
	children,
	className,
	ref
}: TypographyProps<HTMLElement>) => {
	return (
		<code
			ref={ref}
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
				className
			)}
		>
			{children}
		</code>
	)
}

export const Lead = ({
	children,
	className,
	ref
}: TypographyProps<HTMLParagraphElement>) => {
	return (
		<p ref={ref} className={cn("text-muted-foreground text-xl", className)}>
			{children}
		</p>
	)
}

export const Large = ({
	children,
	className,
	ref
}: TypographyProps<HTMLDivElement>) => {
	return (
		<div ref={ref} className={cn("font-semibold text-lg", className)}>
			{children}
		</div>
	)
}

export const Small = ({
	children,
	className,
	ref
}: TypographyProps<HTMLElement>) => {
	return (
		<small
			ref={ref}
			className={cn("font-medium text-sm leading-none", className)}
		>
			{children}
		</small>
	)
}

export const Muted = ({
	children,
	className,
	ref
}: TypographyProps<HTMLParagraphElement>) => {
	return (
		<p ref={ref} className={cn("text-muted-foreground text-sm", className)}>
			{children}
		</p>
	)
}

const kbdVariants = cva(
	"flex select-none items-center rounded-md border border-muted-foreground/15 border-b-4 bg-muted px-1 leading-6 tracking-wide dark:border-muted-foreground/10",
	{
		variants: {
			size: {
				sm: "min-h-5 text-sm",
				md: "min-h-6 text-base",
				lg: "min-h-7 text-lg"
			}
		},
		defaultVariants: {
			size: "md"
		}
	}
)

interface KbdProps
	extends TypographyProps<HTMLElement>,
		VariantProps<typeof kbdVariants> {}

export const Kbd = ({ children, className, size, ref }: KbdProps) => {
	return (
		<kbd ref={ref} className={kbdVariants({ className, size })}>
			{children}
		</kbd>
	)
}
