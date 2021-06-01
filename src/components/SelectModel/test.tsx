import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { SelectModel } from '.'

describe('<SelectModel />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SelectModel />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
