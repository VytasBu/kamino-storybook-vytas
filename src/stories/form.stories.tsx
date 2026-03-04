import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function SimpleFormExample() {
  const form = useForm({
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(values: { username: string }) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[360px] space-y-6">
        <FormField
          control={form.control}
          name="username"
          rules={{ required: 'Username is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Form component built on react-hook-form with accessible validation and field composition.',
      },
    },
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SimpleFormExample />,
}
