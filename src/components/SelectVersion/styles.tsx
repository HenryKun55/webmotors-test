import styled, { css } from 'styled-components'

export const Select = styled.select`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    height: 30px;
  `}
`

export const Option = styled.option``
