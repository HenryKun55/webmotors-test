import { Story, Meta } from '@storybook/react/types-6-0'
import { Box } from '.'

export default {
  title: 'Box',
  component: Box,
} as Meta

export const Basic: Story = () => <Box>Works</Box>
