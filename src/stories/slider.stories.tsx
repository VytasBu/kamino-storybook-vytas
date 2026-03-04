import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  args: { defaultValue: [25, 75] },
}

export const WithSteps: Story = {
  args: { defaultValue: [50], step: 10 },
}
