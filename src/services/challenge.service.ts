import api from './api'
import { MakeResponse, ModelResponse, VersionResponse } from 'types/Response'

export const getMakeApi = () => {
  return api.get<MakeResponse[]>('/Make')
}

export const getModelApi = (MakeID: string) => {
  return api.get<ModelResponse[]>(`/Model?MakeID=${MakeID}`)
}

export const getVersionApi = (ModelID: string) => {
  return api.get<VersionResponse[]>(`/Version?ModelID=${ModelID}`)
}
