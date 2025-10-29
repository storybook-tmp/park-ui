import type { Meta } from '@storybook/react-vite'
import { Badge } from '~/components/ui/badge'

const meta: Meta = {
  title: 'Components/Badge',
}

export default meta

export const Base = () => <Badge>Park UI</Badge>
