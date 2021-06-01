import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
