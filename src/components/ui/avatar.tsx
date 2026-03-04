"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const avatarSizeClasses = {
  5: "size-5",
  6: "size-6",
  8: "size-8",
  10: "size-10",
  12: "size-12",
} as const

type AvatarSize = keyof typeof avatarSizeClasses

function Avatar({
  className,
  size = 8,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: AvatarSize
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none",
        avatarSizeClasses[size],
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

const fallbackTextSizeClasses = {
  5: "text-[8px]",
  6: "text-[10px]",
  8: "text-xs",
  10: "text-sm",
  12: "text-base",
} as const

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground",
        "group-data-[size='5']/avatar:text-[8px]",
        "group-data-[size='6']/avatar:text-[10px]",
        "group-data-[size='8']/avatar:text-xs",
        "group-data-[size='10']/avatar:text-sm",
        "group-data-[size='12']/avatar:text-base",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size='6']/avatar:size-2 group-data-[size='6']/avatar:[&>svg]:hidden",
        "group-data-[size='8']/avatar:size-2.5 group-data-[size='8']/avatar:[&>svg]:size-2",
        "group-data-[size='10']/avatar:size-3 group-data-[size='10']/avatar:[&>svg]:size-2",
        "group-data-[size='12']/avatar:size-3.5 group-data-[size='12']/avatar:[&>svg]:size-2.5",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
