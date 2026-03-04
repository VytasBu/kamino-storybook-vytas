import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Chart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Chart wrapper for Recharts. See shadcn/ui docs for usage.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8 text-muted-foreground">
      Chart component wraps Recharts. See shadcn/ui documentation for usage examples.
    </div>
  ),
}
