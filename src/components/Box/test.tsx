import { screen } from '@testing-library/react'

import { Box } from '.'
import { renderWithTheme } from 'utils/tests/helper'

describe('<Box />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Box>
        <h1>Work</h1>
      </Box>
    )
    expect(true)
  })
})
