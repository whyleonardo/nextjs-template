import * as React from "react"

import { cn } from "@/lib/utils"

import { Slot, Slottable } from "@radix-ui/react-slot"

import { type VariantProps, tv } from "tailwind-variants"

const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      withIcon: "relative group bg-primary text-primary-foreground",
      ringHover:
        "bg-primary hover:bg-primary/90 transition-all text-primary-foreground hover:ring-2 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary duration-300",
      linkHover:
        "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-7/12 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-8"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

interface IconProps {
  Icon: React.ElementType
  iconPlacement: "left" | "right"
}

interface IconRefProps {
  Icon?: never
  iconPlacement?: undefined
}

export type ButtonIconProps = IconProps | IconRefProps

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant,
      size,
      Icon,
      iconPlacement = "left",
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:-translate-x-1.5 group-hover:opacity-100">
            <Icon className="size-4" />
          </div>
        )}
        <Slottable>{children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon className="size-4" />
          </div>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
