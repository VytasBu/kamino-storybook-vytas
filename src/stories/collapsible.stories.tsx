import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
