import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Toggle' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
}

export const Group: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const SingleGroup: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
}
