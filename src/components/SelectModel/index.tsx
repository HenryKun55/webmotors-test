import { ModelResponse } from 'types/Response'

import * as S from './styles'

export interface SelectProps {
  data: ModelResponse[]
  onChange(value: string): void
}

export const SelectModel = ({ data, onChange, ...props }: SelectProps) => {
  return (
    <S.Select onChange={(e) => onChange(e.currentTarget.value)} {...props}>
      {data.map((value) => (
        <>
          {value.Selected ? (
            <S.Option disabled selected key={value.MakeID} value={value.MakeID}>
              {`Modelo: ${value.Name}`}
            </S.Option>
          ) : (
            <S.Option key={value.MakeID} value={value.MakeID}>
              {value.Name}
            </S.Option>
          )}
        </>
      ))}
    </S.Select>
  )
}
