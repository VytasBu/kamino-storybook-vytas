import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'dashed'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xsm', 'icon-sm', 'icon-lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
}

export const Link: Story = {
  args: { variant: 'link', children: 'Link' },
}

export const Dashed: Story = {
  args: { variant: 'dashed', children: 'Dashed' },
}

export const Loading: Story = {
  args: { loading: true, children: 'Loading' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

export const IconButton: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    ),
    'aria-label': 'Add',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'dashed'] as const).map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-1">
          <Button size={size}>{size}</Button>
          <span className="text-xs text-muted-foreground">{size === 'xs' ? '16px' : size === 'sm' ? '28px' : size === 'default' ? '32px' : '36px'}</span>
        </div>
      ))}
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
}

export const FullMatrix: Story = {
  name: 'Full Matrix (7 variants x 4 sizes)',
  render: () => (
    <div className="space-y-4">
      {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'dashed'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <span className="w-24 text-xs text-muted-foreground">{variant}</span>
          {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              Button
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}
