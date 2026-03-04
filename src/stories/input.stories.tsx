import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const File: Story = {
  args: { type: 'file' },
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Password' },
}

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled input' },
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="invalid-input">Email</Label>
      <Input id="invalid-input" type="email" placeholder="Email" aria-invalid="true" />
      <p className="text-xs text-destructive">Please enter a valid email.</p>
    </div>
  ),
}
