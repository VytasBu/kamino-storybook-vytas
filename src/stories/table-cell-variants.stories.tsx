import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CellDefault,
  CellBadge,
  CellTokenDescription,
  CellSwitch,
  CellButton,
  CellDropdown,
  CellProgress,
  CellInput,
  CellToggleGroup,
  CellCheckbox,
  CellSmAvatar,
  CellNumbersDefault,
  CellNumbersAvatar,
  CellNumbersSmAvatar,
  CellVaultPosition,
  CellAllocation,
} from '@/components/kamino/table-cell-variants'

const meta = {
  title: 'Kamino/Table Cell Variants',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reusable table cell components for composing data tables with consistent styling.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-6 md:grid-cols-3 lg:grid-cols-4">
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellDefault</h4>
        <CellDefault value="Hello World" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellBadge</h4>
        <div className="flex flex-wrap gap-1">
          <CellBadge value="Active" variant="success" />
          <CellBadge value="Pending" variant="warning" />
          <CellBadge value="Failed" variant="destructive" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellTokenDescription</h4>
        <CellTokenDescription token="SOL" description="Solana" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellSwitch</h4>
        <CellSwitch checked={true} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellButton</h4>
        <CellButton label="Action" variant="outline" size="sm" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellDropdown</h4>
        <CellDropdown />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellProgress</h4>
        <CellProgress value={65} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellInput</h4>
        <CellInput placeholder="Enter value..." />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellToggleGroup</h4>
        <CellToggleGroup
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' },
          ]}
          value="a"
        />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellCheckbox</h4>
        <CellCheckbox checked={true} />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellSmAvatar</h4>
        <CellSmAvatar name="Alice Johnson" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersDefault</h4>
        <CellNumbersDefault value="1,234.56" suffix="USD" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersAvatar</h4>
        <CellNumbersAvatar value="$5,678.90" name="Bob Smith" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellNumbersSmAvatar</h4>
        <CellNumbersSmAvatar value="$1,234" name="Carol" />
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellVaultPosition</h4>
        <CellVaultPosition vault="SOL-USDC" position="Long" />
      </div>

      <div className="col-span-2 space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">CellAllocation</h4>
        <CellAllocation
          items={[
            { label: 'SOL', percentage: 50, color: '#9945FF' },
            { label: 'USDC', percentage: 30, color: '#2775CA' },
            { label: 'ETH', percentage: 20, color: '#627EEA' },
          ]}
        />
      </div>
    </div>
  ),
}
