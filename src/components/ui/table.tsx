import * as React from "react"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-hidden rounded-2xl border"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("bg-muted [&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

type SortDirection = "ascending" | "descending" | "none"

function TableHead({
  className,
  sortable = false,
  sortDirection,
  onSort,
  showCheckbox = false,
  checked,
  onCheckedChange,
  firstColumnSpacer = false,
  children,
  ...props
}: React.ComponentProps<"th"> & {
  /** Makes the column header clickable for sorting */
  sortable?: boolean
  /** Current sort direction */
  sortDirection?: SortDirection
  /** Callback when sort is toggled */
  onSort?: () => void
  /** Show a checkbox in the header for bulk selection */
  showCheckbox?: boolean
  /** Checkbox checked state */
  checked?: boolean | "indeterminate"
  /** Checkbox change handler */
  onCheckedChange?: (checked: boolean) => void
  /** Adds left spacing for first column alignment */
  firstColumnSpacer?: boolean
}) {
  const SortIcon =
    sortDirection === "ascending"
      ? ArrowUp
      : sortDirection === "descending"
        ? ArrowDown
        : ArrowUpDown

  return (
    <th
      data-slot="table-head"
      aria-sort={sortable ? (sortDirection === "none" ? undefined : sortDirection) : undefined}
      className={cn(
        "h-10 px-2 text-left align-middle text-xs font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        firstColumnSpacer && "pl-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {showCheckbox && (
          <Checkbox
            checked={checked}
            onCheckedChange={onCheckedChange}
            aria-label="Select all"
          />
        )}
        {sortable ? (
          <Button
            variant="ghost"
            size="xs"
            className="-ml-2 h-8 gap-1 font-medium text-muted-foreground hover:text-foreground"
            onClick={onSort}
          >
            {children}
            <SortIcon className="size-3" />
          </Button>
        ) : (
          children
        )}
      </div>
    </th>
  )
}

function TableCell({
  className,
  showCheckbox = false,
  checked,
  onCheckedChange,
  firstColumnSpacer = false,
  children,
  ...props
}: React.ComponentProps<"td"> & {
  /** Show a checkbox in the cell for row selection */
  showCheckbox?: boolean
  /** Checkbox checked state */
  checked?: boolean
  /** Checkbox change handler */
  onCheckedChange?: (checked: boolean) => void
  /** Adds left spacing for first column alignment */
  firstColumnSpacer?: boolean
}) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "h-16 px-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        firstColumnSpacer && "pl-4",
        className
      )}
      {...props}
    >
      {showCheckbox ? (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={checked}
            onCheckedChange={onCheckedChange}
            aria-label="Select row"
          />
          {children}
        </div>
      ) : (
        children
      )}
    </td>
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

export type { SortDirection }
