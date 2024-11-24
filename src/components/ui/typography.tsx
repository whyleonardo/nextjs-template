import type { FC, JSX, PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

import { type VariantProps, tv } from "tailwind-variants"

const typographyStyles = tv({
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
      code: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-muted-foreground text-xl",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-muted-foreground text-sm"
    }
  },
  defaultVariants: {
    variant: "p"
  }
})

type TypographyProps = VariantProps<typeof typographyStyles> & {
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  as,
  className,
  variant,
  children
}) => {
  if (as) {
    const Component = as
    return (
      <Component className={cn(typographyStyles({ variant }), className)}>
        {children}
      </Component>
    )
  }

  const Component =
    variant === "large"
      ? "div"
      : variant === "lead" || variant === "muted"
        ? "p"
        : (variant ?? "p")

  return (
    <Component className={cn(typographyStyles({ variant }), className)}>
      {children}
    </Component>
  )
}
