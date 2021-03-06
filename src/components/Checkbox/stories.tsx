import { Story, Meta } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta

export const Basic: Story<CheckboxProps> = (props) => <Checkbox {...props} />
