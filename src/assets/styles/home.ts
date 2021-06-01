import styled, { css } from 'styled-components'
import { FaCarSide } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import {
  RiMotorbikeFill,
  RiMapPinLine,
  RiCloseCircleFill,
} from 'react-icons/ri'

import { customMedia } from 'utils/styles'
import {
  Box as BoxComponent,
  Logo as LogoComponent,
  Checkbox as CheckboxComponent,
  SelectMake as SelectMakeComponent,
  SelectModel as SelectModelComponent,
  SelectVersion as SelectVersionComponent,
} from 'components'

type ActivedProps = {
  actived: boolean
}

type ContentSelectProps = {
  marginTop?: boolean
}

type GenericSelectProps = {
  withoutBorder?: boolean
}

export const Wrapper = styled(BoxComponent)`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Logo = styled(LogoComponent)`
  margin-bottom: 50px;
`

export const Header = styled.div`
  display: flex;
  gap: 20px;
`

export const Button = styled.button<ActivedProps>`
  ${({ theme, actived }) => css`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding-bottom: 10px;
    border-bottom: 3px solid ${actived ? theme.colors.alert : theme.colors.gray};
  `}
`

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`

export const ButtonTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray};
    text-transform: uppercase;
  `}
`

export const ButtonSubtitle = styled.span<ActivedProps>`
  ${({ theme, actived }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${actived ? theme.colors.alert : theme.colors.gray};
    text-transform: uppercase;
  `}
`

export const ButtonIconCar = styled(FaCarSide)<ActivedProps>`
  ${({ theme, actived }) => css`
    width: 30px;
    height: 30px;
    color: ${actived ? theme.colors.alert : theme.colors.gray};
  `}
`

export const ButtonIconBike = styled(RiMotorbikeFill)<ActivedProps>`
  ${({ theme, actived }) => css`
    width: 30px;
    height: 30px;
    color: ${actived ? theme.colors.alert : theme.colors.gray};
  `}
`

export const ButtonSell = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid ${theme.colors.warning};
    height: 40px;
    padding: 20px 30px;
    border-radius: 5px;
    color: ${theme.colors.warning};
    font-weight: ${theme.font.bold};
    margin-left: auto;

    ${customMedia.lessThan('md')`
      display: none;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    height: inherit;
    border-radius: 5px;
    padding: 20px 30px;
    ${customMedia.lessThan('sm')`
      height: auto;
    `}
  `}
`

export const CheckBoxes = styled.div`
  display: flex;
  gap: 30px;
`

export const CheckBox = styled(CheckboxComponent)``

export const Content = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  ${customMedia.lessThan('md')`
    display: block;
  `}
`

export const PlaceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${theme.colors.border};
  `}
`

export const PlaceText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray};
    margin-left: 4px;
    flex: 1;
  `}
`

export const PlaceIcon = styled(RiMapPinLine)`
  ${({ theme }) => css`
    color: ${theme.colors.alert};
  `}
`

export const PlaceClearIcon = styled(RiCloseCircleFill)`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const PlaceLine = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.gray};
    margin: 0 5px;
  `}
`

export const ContentSelect = styled.div<ContentSelectProps>`
  ${({ marginTop }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    ${customMedia.lessThan('md')`
      margin-top: ${marginTop ? 10 : 0}px;
    `}
  `}
`

export const ContentMakeModel = styled.div`
  display: flex;
  gap: 10px;
`

export const GenericSelect = styled.select<GenericSelectProps>`
  ${({ theme, withoutBorder }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.gray};
    flex: 1;
    height: 30px;
    border-right: ${withoutBorder
      ? 'none'
      : `1px solid ${theme.colors.border}`};
    border-left: ${withoutBorder ? 'none' : `1px solid ${theme.colors.border}`};
  `}
`

export const GenericOption = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const SelectMake = styled(SelectMakeComponent)`
  width: 100%;
`
export const SelectModel = styled(SelectModelComponent)`
  width: 100%;
`
export const SelectVersion = styled(SelectVersionComponent)``

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  ${customMedia.lessThan('md')`
    flex-direction: column;
    align-items: flex-end;
  `}
`

export const ContentFooter = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  align-items: center;
  ${customMedia.lessThan('md')`
    margin-top: 10px;
  `}
  ${customMedia.lessThan('sm')`
    flex-direction: column;
  `}
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled(MdKeyboardArrowRight)`
  ${({ theme }) => css`
    color: ${theme.colors.alert};
  `}
`

export const SearchTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.alert};
    font-weight: ${theme.font.xbold};
  `}
`

export const ClearText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    cursor: pointer;
    width: 120px;
    ${customMedia.lessThan('md')`
      width: 150px;
    `}
    ${customMedia.lessThan('sm')`
      text-align: end;
    `}
  `}
`

export const ButtonOffer = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.alert};
    width: 100%;
    height: 40px;
    padding: 20px 30px;
    border-radius: 5px;
    color: ${theme.colors.white};
    font-weight: ${theme.font.xxbold};
    text-transform: uppercase;
  `}
`
