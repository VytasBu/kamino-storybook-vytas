import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'accent'],
    },
    appearance: {
      control: 'select',
      options: ['filled', 'outline', 'soft'],
    },
    size: {
      control: 'select',
      options: ['md', 'sm'],
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Success: Story = { args: { variant: 'success' } }
export const Warning: Story = { args: { variant: 'warning' } }
export const Accent: Story = { args: { variant: 'accent' } }

export const Outline: Story = { args: { appearance: 'outline' } }
export const Soft: Story = { args: { appearance: 'soft' } }

export const Small: Story = { args: { size: 'sm', children: 'Small' } }

export const AllVariantsFilled: Story = {
  name: 'All Variants (Filled)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map((variant) => (
        <Badge key={variant} variant={variant} appearance="filled">{variant}</Badge>
      ))}
    </div>
  ),
}

export const AllVariantsOutline: Story = {
  name: 'All Variants (Outline)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map((variant) => (
        <Badge key={variant} variant={variant} appearance="outline">{variant}</Badge>
      ))}
    </div>
  ),
}

export const AllVariantsSoft: Story = {
  name: 'All Variants (Soft)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map((variant) => (
        <Badge key={variant} variant={variant} appearance="soft">{variant}</Badge>
      ))}
    </div>
  ),
}

export const FullMatrix: Story = {
  name: 'Full Matrix (5 variants x 3 styles x 2 sizes)',
  render: () => (
    <div className="space-y-6">
      {(['filled', 'outline', 'soft'] as const).map((appearance) => (
        <div key={appearance} className="space-y-2">
          <h3 className="text-sm font-medium capitalize text-muted-foreground">{appearance}</h3>
          <div className="flex flex-wrap gap-2">
            {(['default', 'destructive', 'success', 'warning', 'accent'] as const).map((variant) => (
              <div key={variant} className="flex flex-col items-center gap-1">
                <Badge variant={variant} appearance={appearance} size="md">{variant}</Badge>
                <Badge variant={variant} appearance={appearance} size="sm">{variant}</Badge>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
