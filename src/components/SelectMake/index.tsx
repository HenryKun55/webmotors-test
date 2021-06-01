import { MakeResponse } from 'types/Response'

import * as S from './styles'

export interface SelectProps {
  data: MakeResponse[]
  onChange(value: string): void
}

export const SelectMake = ({ data, onChange, ...props }: SelectProps) => {
  return (
    <S.Select onChange={(e) => onChange(e.currentTarget.value)} {...props}>
      {data.map((value) => (
        <>
          {value.Selected ? (
            <S.Option disabled selected key={value.ID} value={value.ID}>
              {`Marca: ${value.Name}`}
            </S.Option>
          ) : (
            <S.Option key={value.ID} value={value.ID}>
              {value.Name}
            </S.Option>
          )}
        </>
      ))}
    </S.Select>
  )
}
