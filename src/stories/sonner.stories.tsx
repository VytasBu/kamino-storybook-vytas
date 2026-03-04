import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created')}
    >
      Show Toast
    </Button>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast.success('Event has been created')}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error('Event has been deleted')}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Event is starting soon')}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Be at the area 10 minutes before')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00 PM',
          })
        }
      >
        With Description
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  ),
}
