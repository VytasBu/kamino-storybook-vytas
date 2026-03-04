import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
  type SortDirection,
} from '@/components/ui/table'
import {
  CellBadge,
  CellProgress,
  CellSmAvatar,
  CellButton,
  CellDropdown,
} from '@/components/kamino/table-cell-variants'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250 },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: 150 },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350 },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: 450 },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: 550 },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

/** Demonstrates sortable column headers with sort icons */
export const Sortable: Story = {
  name: 'Sortable Headers',
  render: function SortableTable() {
    const [sortCol, setSortCol] = React.useState<'invoice' | 'amount' | null>(null)
    const [sortDir, setSortDir] = React.useState<SortDirection>('none')

    function toggleSort(col: 'invoice' | 'amount') {
      if (sortCol !== col) {
        setSortCol(col)
        setSortDir('ascending')
      } else if (sortDir === 'ascending') {
        setSortDir('descending')
      } else {
        setSortDir('none')
        setSortCol(null)
      }
    }

    const sorted = [...invoices].sort((a, b) => {
      if (!sortCol || sortDir === 'none') return 0
      const mult = sortDir === 'ascending' ? 1 : -1
      if (sortCol === 'invoice') return mult * a.invoice.localeCompare(b.invoice)
      return mult * (a.amount - b.amount)
    })

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={sortCol === 'invoice' ? sortDir : 'none'}
              onSort={() => toggleSort('invoice')}
              className="w-[100px]"
            >
              Invoice
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead
              sortable
              sortDirection={sortCol === 'amount' ? sortDir : 'none'}
              onSort={() => toggleSort('amount')}
              className="text-right"
            >
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

/** Demonstrates row selection with checkboxes in head and cells */
export const WithRowSelection: Story = {
  name: 'Row Selection (Checkboxes)',
  render: function SelectableTable() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set())

    const allChecked = selected.size === invoices.length
    const someChecked = selected.size > 0 && !allChecked

    function toggleAll(checked: boolean) {
      setSelected(checked ? new Set(invoices.map((i) => i.invoice)) : new Set())
    }

    function toggleRow(id: string, checked: boolean) {
      setSelected((prev) => {
        const next = new Set(prev)
        if (checked) next.add(id)
        else next.delete(id)
        return next
      })
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              showCheckbox
              checked={allChecked ? true : someChecked ? 'indeterminate' : false}
              onCheckedChange={toggleAll}
              className="w-10"
            />
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              data-state={selected.has(invoice.invoice) ? 'selected' : undefined}
            >
              <TableCell
                showCheckbox
                checked={selected.has(invoice.invoice)}
                onCheckedChange={(c) => toggleRow(invoice.invoice, c)}
              />
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

/** Demonstrates first column spacer for indented rows */
export const WithFirstColumnSpacer: Story = {
  name: 'First Column Spacer',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead firstColumnSpacer>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell firstColumnSpacer className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/** Table with Kamino cell variant components */
export const WithCellVariants: Story = {
  name: 'Cell Variants (Kamino)',
  render: function CellVariantsTable() {
    const [selected, setSelected] = React.useState<Set<string>>(new Set())
    const users = [
      { id: '1', name: 'Alice Johnson', status: 'Active' as const, progress: 75 },
      { id: '2', name: 'Bob Smith', status: 'Pending' as const, progress: 30 },
      { id: '3', name: 'Carol White', status: 'Inactive' as const, progress: 100 },
    ]

    const allChecked = selected.size === users.length
    const someChecked = selected.size > 0 && !allChecked

    function toggleAll(checked: boolean) {
      setSelected(checked ? new Set(users.map((u) => u.id)) : new Set())
    }

    function toggleRow(id: string, checked: boolean) {
      setSelected((prev) => {
        const next = new Set(prev)
        if (checked) next.add(id)
        else next.delete(id)
        return next
      })
    }

    const statusVariant = {
      Active: 'success' as const,
      Pending: 'warning' as const,
      Inactive: 'default' as const,
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              showCheckbox
              checked={allChecked ? true : someChecked ? 'indeterminate' : false}
              onCheckedChange={toggleAll}
              className="w-10"
            />
            <TableHead sortable sortDirection="none">User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              data-state={selected.has(user.id) ? 'selected' : undefined}
            >
              <TableCell
                showCheckbox
                checked={selected.has(user.id)}
                onCheckedChange={(c) => toggleRow(user.id, c)}
              />
              <TableCell><CellSmAvatar name={user.name} /></TableCell>
              <TableCell><CellBadge value={user.status} variant={statusVariant[user.status]} /></TableCell>
              <TableCell><CellProgress value={user.progress} /></TableCell>
              <TableCell><CellButton label="View" variant="outline" size="xs" /></TableCell>
              <TableCell><CellDropdown /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
