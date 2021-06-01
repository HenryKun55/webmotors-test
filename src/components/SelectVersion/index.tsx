import { VersionResponse } from 'types/Response'

import * as S from './styles'

export interface SelectProps {
  data: VersionResponse[]
  onChange(value: string): void
}

export const SelectVersion = ({ data, onChange, ...props }: SelectProps) => {
  return (
    <S.Select onChange={(e) => onChange(e.currentTarget.value)} {...props}>
      {data.map((value) => (
        <>
          {value.Selected ? (
            <S.Option
              disabled
              selected
              key={value.ModelID}
              value={value.ModelID}
            >
              {`Versão: ${value.Name}`}
            </S.Option>
          ) : (
            <S.Option key={value.ModelID} value={value.ModelID}>
              {value.Name}
            </S.Option>
          )}
        </>
      ))}
    </S.Select>
  )
}
