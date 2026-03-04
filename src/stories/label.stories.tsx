import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Label',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
}
