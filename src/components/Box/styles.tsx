import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 933px;
    max-height: 312px;
    height: 312px;
    margin: 0 auto;
    background-color: ${theme.colors.background};
  `}
`
