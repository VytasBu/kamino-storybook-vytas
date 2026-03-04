import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: { value: 0 },
}

export const Half: Story = {
  args: { value: 50 },
}

export const Full: Story = {
  args: { value: 100 },
}
