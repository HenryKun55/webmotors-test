import { ReactNode } from 'react'
import * as S from './styles'

type BoxProps = {
  children: ReactNode
}

export const Box = ({ children, ...props }: BoxProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)
