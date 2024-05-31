import * as React from "react"

import { cn } from "@/lib/utils"

import { type VariantProps, cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-px font-semibold text-xs transition-colors hover:cursor-default hover:select-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        "destructive-subtle":
          "border-transparent bg-destructive-subtle text-destructive-subtle-foreground hover:bg-destructive-subtle/80",
        "warning-subtle":
          "border-transparent bg-warning-subtle text-warning-subtle-foreground hover:bg-warning-subtle/80",
        "info-subtle":
          "border-transparent bg-info-subtle text-info-subtle-foreground hover:bg-info-subtle/80",
        "success-subtle":
          "border-transparent bg-success-subtle text-success-subtle-foreground hover:bg-success-subtle/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
