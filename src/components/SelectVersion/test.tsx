import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { SelectVersion } from '.'

describe('<SelectVersion />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SelectVersion />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
