import { useEffect, useState } from 'react'

import * as S from 'assets/styles/home'

import { VehicleType } from 'types/Vehicle'
import {
  getMakeApi,
  getModelApi,
  getVersionApi,
} from 'services/challenge.service'
import { MakeResponse, ModelResponse, VersionResponse } from 'types/Response'

export default function Home() {
  const [vehicle, setVehicle] = useState<VehicleType>('car')
  const [makes, setMakes] = useState<MakeResponse[]>([])
  const [models, setModels] = useState<ModelResponse[]>([])
  const [versions, setVersions] = useState<VersionResponse[]>([])

  async function getMarks() {
    const { data } = await getMakeApi()
    const _makes: MakeResponse[] = [
      {
        ID: 0,
        Name: 'Todas',
        Selected: true,
      },
      ...data,
    ]
    setMakes(_makes)
    setModels([])
    setVersions([])
  }

  async function getModels(MakeID: string) {
    const { data } = await getModelApi(MakeID)
    const _models: ModelResponse[] = [
      {
        ID: 0,
        MakeID: 0,
        Name: 'Todos',
        Selected: true,
      },
      ...data,
    ]
    setModels(_models)
    setVersions([])
  }

  async function getVersions(ModelID: string) {
    const { data } = await getVersionApi(ModelID)
    const _versions: VersionResponse[] = [
      {
        ID: 0,
        ModelID: 0,
        Name: 'Todos',
        Selected: true,
      },
      ...data,
    ]
    setVersions(_versions)
  }

  function getButtonTextSell() {
    switch (vehicle) {
      case 'car':
        return 'Vender meu carro'
      case 'bike':
        return 'Vender minha moto'
    }
  }

  function isCar() {
    return vehicle === 'car'
  }

  function isBike() {
    return vehicle === 'bike'
  }

  useEffect(() => {
    getMarks()
  }, [])

  return (
    <S.Wrapper>
      <S.Logo />
      <S.Header>
        <S.Button actived={isCar()} onClick={() => setVehicle('car')}>
          <S.ButtonIconCar actived={isCar()} />
          <S.ButtonContent>
            <S.ButtonTitle>Comprar</S.ButtonTitle>
            <S.ButtonSubtitle actived={isCar()}>Carros</S.ButtonSubtitle>
          </S.ButtonContent>
        </S.Button>
        <S.Button actived={isBike()} onClick={() => setVehicle('bike')}>
          <S.ButtonIconBike actived={isBike()} />
          <S.ButtonContent>
            <S.ButtonTitle>Comprar</S.ButtonTitle>
            <S.ButtonSubtitle actived={isBike()}>Motos</S.ButtonSubtitle>
          </S.ButtonContent>
        </S.Button>
        <S.ButtonSell>{getButtonTextSell()}</S.ButtonSell>
      </S.Header>
      <S.Container>
        <S.CheckBoxes>
          <S.CheckBox name="Novos" />
          <S.CheckBox name="Usados" />
        </S.CheckBoxes>
        <S.Content>
          <S.ContentSelect>
            <S.PlaceContainer>
              <S.PlaceIcon />
              <S.PlaceText>
                Onde: <strong>São Paulo - SP</strong>
              </S.PlaceText>
              <S.PlaceClearIcon />
              <S.PlaceLine />
              <S.GenericSelect withoutBorder>
                <S.GenericOption>Raio: 100km</S.GenericOption>
              </S.GenericSelect>
            </S.PlaceContainer>

            <S.ContentMakeModel>
              <S.GenericSelect>
                <S.GenericOption>Ano desejado</S.GenericOption>
              </S.GenericSelect>
              <S.GenericSelect>
                <S.GenericOption>Faixa de Preço</S.GenericOption>
              </S.GenericSelect>
            </S.ContentMakeModel>
          </S.ContentSelect>
          <S.ContentSelect marginTop>
            <S.ContentMakeModel>
              <S.SelectMake
                data={makes}
                onChange={(value) => getModels(value)}
              />
              <S.SelectModel
                data={models}
                onChange={(value) => getVersions(value)}
              />
            </S.ContentMakeModel>
            <S.SelectVersion
              data={versions}
              onChange={(value) => console.log(value)}
            />
          </S.ContentSelect>
        </S.Content>
        <S.Footer>
          <S.ContentFooter>
            <S.SearchContainer>
              <S.SearchIcon />
              <S.SearchTitle>Busca avançada</S.SearchTitle>
            </S.SearchContainer>
          </S.ContentFooter>
          <S.ContentFooter>
            <S.ClearText>Limpar filtros</S.ClearText>
            <S.ButtonOffer>Ver ofertas</S.ButtonOffer>
          </S.ContentFooter>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
