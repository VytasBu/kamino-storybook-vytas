import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Application sidebar component with collapsible sections.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8 text-muted-foreground">
      Sidebar component - composable layout component. See shadcn/ui documentation.
    </div>
  ),
}
