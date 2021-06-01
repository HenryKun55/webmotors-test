import styled, { css } from 'styled-components'

export const CheckBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: fit-content;
    justify-content: center;
    align-items: center;

    input[type='checkbox']:checked {
      position: relative;
      background-color: ${theme.colors.white};
      border-radius: 2px;
      border: 1px solid ${theme.colors.background};
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
      color: black;
      cursor: pointer;
    }

    input[type='checkbox']:checked:before {
      content: '✓';
      background: ${theme.colors.white};
      color: ${theme.colors.alert};
      position: absolute;
      width: 10px;
      height: 15px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`

export const CheckBoxInput = styled.input`
  ${({ theme }) => css`
    appearance: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
    border: 1px solid ${theme.colors.background};
    border-radius: 2px;
    background-color: ${theme.colors.white};
    display: inline-block;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
    color: ${theme.colors.black};
    box-sizing: content-box;
  `}
`

export const CheckBoxLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray};
    margin-left: 5px;
  `}
`
