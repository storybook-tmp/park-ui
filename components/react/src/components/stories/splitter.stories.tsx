import type { Meta } from '@storybook/react-vite'
import { Splitter } from '~/components/ui/splitter'

const meta: Meta = {
  title: 'Components/Splitter',
}

export default meta

export const Base = () => {
  return (
    <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  )
}
