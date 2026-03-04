import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
    spacing: { control: 'number' },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="italic">
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  ),
}
