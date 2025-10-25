import type { Meta } from '@storybook/react-vite'
import { Link } from '~/components/ui/link'

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
}

export default meta

export const Base = () => <Link href="https://park-ui.com">Park UI</Link>
