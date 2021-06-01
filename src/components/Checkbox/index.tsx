import * as S from './styles'

export type CheckboxProps = {
  name: string
}

export const Checkbox = ({ name }: CheckboxProps) => (
  <S.CheckBox>
    <S.CheckBoxInput type="checkbox" />
    <S.CheckBoxLabel>{name}</S.CheckBoxLabel>
  </S.CheckBox>
)
