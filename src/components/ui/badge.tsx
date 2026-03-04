import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        success: "",
        warning: "",
        accent: "",
      },
      appearance: {
        filled: "",
        outline: "",
        soft: "",
      },
      size: {
        md: "h-5 px-2 py-0.5 text-xs",
        sm: "h-4 px-1.5 py-0 text-[10px]",
      },
    },
    compoundVariants: [
      // Default - Filled
      { variant: "default", appearance: "filled", className: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90" },
      // Default - Outline
      { variant: "default", appearance: "outline", className: "border-border bg-transparent text-foreground [a&]:hover:bg-accent" },
      // Default - Soft
      { variant: "default", appearance: "soft", className: "bg-muted text-muted-foreground [a&]:hover:bg-muted/80" },

      // Destructive - Filled
      { variant: "destructive", appearance: "filled", className: "bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90" },
      // Destructive - Outline
      { variant: "destructive", appearance: "outline", className: "border-destructive/50 bg-transparent text-destructive [a&]:hover:bg-destructive/10" },
      // Destructive - Soft
      { variant: "destructive", appearance: "soft", className: "bg-destructive/10 text-destructive [a&]:hover:bg-destructive/20" },

      // Success - Filled
      { variant: "success", appearance: "filled", className: "bg-success text-success-foreground [a&]:hover:bg-success/90" },
      // Success - Outline
      { variant: "success", appearance: "outline", className: "border-success/50 bg-transparent text-success [a&]:hover:bg-success/10" },
      // Success - Soft
      { variant: "success", appearance: "soft", className: "bg-success/10 text-success [a&]:hover:bg-success/20" },

      // Warning - Filled
      { variant: "warning", appearance: "filled", className: "bg-warning text-warning-foreground [a&]:hover:bg-warning/90" },
      // Warning - Outline
      { variant: "warning", appearance: "outline", className: "border-warning/50 bg-transparent text-warning [a&]:hover:bg-warning/10" },
      // Warning - Soft
      { variant: "warning", appearance: "soft", className: "bg-warning/10 text-warning [a&]:hover:bg-warning/20" },

      // Accent - Filled
      { variant: "accent", appearance: "filled", className: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90" },
      // Accent - Outline
      { variant: "accent", appearance: "outline", className: "border-secondary/50 bg-transparent text-secondary [a&]:hover:bg-secondary/10" },
      // Accent - Soft
      { variant: "accent", appearance: "soft", className: "bg-secondary/10 text-secondary [a&]:hover:bg-secondary/20" },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "filled",
      size: "md",
    },
  }
)

function Badge({
  className,
  variant = "default",
  appearance = "filled",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-appearance={appearance}
      className={cn(badgeVariants({ variant, appearance, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
