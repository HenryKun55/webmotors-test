import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Checkbox name="test" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
