import type { Meta } from '@storybook/react-vite'
import { FormLabel } from '~/components/ui/form-label'

const meta: Meta = {
  title: 'Components/Form Label',
  component: FormLabel,
}

export default meta

export const Base = () => {
  return <FormLabel>Form Label</FormLabel>
}
