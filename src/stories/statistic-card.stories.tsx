import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatisticCard } from '@/components/kamino/statistic-card'

const meta = {
  title: 'Kamino/Statistic Card',
  component: StatisticCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
  },
} satisfies Meta<typeof StatisticCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSubtitle: Story = {
  args: {
    title: 'Total Revenue',
    subtitle: 'Last 30 days',
    value: '$45,231.89',
  },
}

export const WithAdditionalData: Story = {
  args: {
    title: 'Total Revenue',
    subtitle: 'Last 30 days',
    value: '$45,231.89',
    additionalData: {
      label: 'Change',
      value: '+20.1%',
      variant: 'success',
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatisticCard
        title="Total Revenue"
        subtitle="Last 30 days"
        value="$45,231.89"
        additionalData={{ label: 'Change', value: '+20.1%', variant: 'success' }}
      />
      <StatisticCard
        title="Active Users"
        subtitle="Current period"
        value="2,350"
        additionalData={{ label: 'vs last period', value: '2,100' }}
      />
      <StatisticCard
        title="Conversion Rate"
        value="12.5%"
      />
    </div>
  ),
}
