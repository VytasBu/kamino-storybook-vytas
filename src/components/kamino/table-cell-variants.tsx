import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

// Default text cell
function CellDefault({ value }: { value: string }) {
  return <span className="text-sm">{value}</span>
}

// Badge cell
function CellBadge({
  value,
  variant = "default",
}: {
  value: string
  variant?: "default" | "secondary" | "destructive" | "success" | "warning" | "outline"
}) {
  return <Badge variant={variant}>{value}</Badge>
}

// Token + Description cell
function CellTokenDescription({
  token,
  description,
  icon,
}: {
  token: string
  description: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{token}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </div>
  )
}

// Switch cell
function CellSwitch({
  checked,
  onCheckedChange,
}: {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return <Switch checked={checked} onCheckedChange={onCheckedChange} />
}

// Button cell
function CellButton({
  label,
  variant = "outline",
  size = "sm",
  onClick,
}: {
  label: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive"
  size?: "xs" | "sm" | "default"
  onClick?: () => void
}) {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {label}
    </Button>
  )
}

// Dropdown cell (shows a button that opens a dropdown)
function CellDropdown({ label = "Actions" }: { label?: string }) {
  return (
    <Button variant="ghost" size="icon-xs">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label={label}
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    </Button>
  )
}

// Progress cell
function CellProgress({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <Progress value={value} className="h-2 w-20" />
      <span className="text-xs text-muted-foreground">{value}%</span>
    </div>
  )
}

// Image cell
function CellImage({
  src,
  alt,
  size = 32,
}: {
  src: string
  alt: string
  size?: number
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-md object-cover"
      style={{ width: size, height: size }}
    />
  )
}

// Input cell
function CellInput({
  value,
  onChange,
  placeholder,
}: {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="h-8 w-32"
    />
  )
}

// ToggleGroup cell
function CellToggleGroup({
  options,
  value,
  onValueChange,
}: {
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
}) {
  return (
    <ToggleGroup
      type="single"
      size={6}
      value={value}
      onValueChange={onValueChange}
    >
      {options.map((opt) => (
        <ToggleGroupItem key={opt.value} value={opt.value}>
          {opt.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

// Checkbox cell
function CellCheckbox({
  checked,
  onCheckedChange,
}: {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
}

// Small avatar cell
function CellSmAvatar({
  name,
  src,
}: {
  name: string
  src?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Avatar size={6}>
        {src && <AvatarImage src={src} alt={name} />}
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <span className="text-sm">{name}</span>
    </div>
  )
}

// Numbers default cell
function CellNumbersDefault({
  value,
  suffix,
}: {
  value: string | number
  suffix?: string
}) {
  return (
    <span className="text-sm tabular-nums">
      {value}
      {suffix && (
        <span className="text-muted-foreground"> {suffix}</span>
      )}
    </span>
  )
}

// Numbers with avatar cell
function CellNumbersAvatar({
  value,
  name,
  src,
}: {
  value: string | number
  name: string
  src?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Avatar size={8}>
        {src && <AvatarImage src={src} alt={name} />}
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {value}
        </span>
      </div>
    </div>
  )
}

// Numbers with small avatar cell
function CellNumbersSmAvatar({
  value,
  name,
  src,
}: {
  value: string | number
  name: string
  src?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Avatar size={6}>
        {src && <AvatarImage src={src} alt={name} />}
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <span className="text-sm tabular-nums">{value}</span>
    </div>
  )
}

// Vault + Position cell
function CellVaultPosition({
  vault,
  position,
  icon,
}: {
  vault: string
  position: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{vault}</span>
        <span className="text-xs text-muted-foreground">{position}</span>
      </div>
    </div>
  )
}

// Allocation cell
function CellAllocation({
  items,
}: {
  items: { label: string; percentage: number; color: string }[]
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-2 w-full overflow-hidden rounded-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="h-full"
            style={{
              width: `${item.percentage}%`,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
      <div className="flex gap-2 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            <span
              className="inline-block size-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.label} {item.percentage}%
          </span>
        ))}
      </div>
    </div>
  )
}

export {
  CellDefault,
  CellBadge,
  CellTokenDescription,
  CellSwitch,
  CellButton,
  CellDropdown,
  CellProgress,
  CellImage,
  CellInput,
  CellToggleGroup,
  CellCheckbox,
  CellSmAvatar,
  CellNumbersDefault,
  CellNumbersAvatar,
  CellNumbersSmAvatar,
  CellVaultPosition,
  CellAllocation,
}
