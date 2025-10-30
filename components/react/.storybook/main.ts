// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const require = createRequire(import.meta.url)

const config: StorybookConfig = {
  stories: ['../src/components/stories/*.tsx', '../src/plus/stories/*.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-mcp'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: './' })],
    })
  },

  features: {
    backgrounds: false,
    controls: false,
    actions: false,
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true,
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
