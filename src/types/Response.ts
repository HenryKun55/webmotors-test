export type MakeResponse = {
  ID: number
  Name: string
  Selected?: boolean
}

export interface ModelResponse extends MakeResponse {
  MakeID: number
}

export interface VersionResponse extends MakeResponse {
  ModelID: number
}
