import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { StatisticCard } from '@/components/kamino/statistic-card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const Statistic: Story = {
  render: () => (
    <StatisticCard
      title="Total Revenue"
      subtitle="Last 30 days"
      value="$45,231.89"
      additionalData={{ label: "Change", value: "+20.1%", variant: "success" }}
    />
  ),
}

export const StatisticDefault: Story = {
  render: () => (
    <StatisticCard
      title="Active Users"
      subtitle="Current period"
      value="2,350"
      additionalData={{ label: "vs last period", value: "2,100" }}
    />
  ),
}
