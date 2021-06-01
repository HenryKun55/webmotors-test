import { Logo as LogoImage } from 'assets/images'

import * as S from './styles'

export const Logo = ({ ...props }) => <S.Image src={LogoImage} {...props} />
