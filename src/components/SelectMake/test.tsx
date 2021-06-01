import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import { SelectMake } from '.'

describe('<SelectMake />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SelectMake />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
