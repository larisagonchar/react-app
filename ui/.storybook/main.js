/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  paths: {
    "src/*": ["src/*"],
    "assets/*": ["src/assets/*"],
    "components/*": ["src/components/*"],
    "formatters/*": ["src/formatters/*"],
    "styles/*": ["src/styles/*"],
    "constants/*": ["src/constants/*"]
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
};
export default config;
