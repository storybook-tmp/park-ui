import type { Meta } from '@storybook/react-vite'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
}

export default meta

export const Base = () => {
  return <Input id="name" placeholder="Your Name" />
}
