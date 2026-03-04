import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [5, 6, 8, 10, 12],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {([5, 6, 8, 10, 12] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-1">
          <Avatar size={size}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size} ({size * 4}px)</span>
        </div>
      ))}
    </div>
  ),
}

export const AllSizesFallback: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {([5, 6, 8, 10, 12] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-1">
          <Avatar size={size}>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size} ({size * 4}px)</span>
        </div>
      ))}
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Avatar size={10}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size={8}>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar size={8}>
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar size={8}>
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
}
