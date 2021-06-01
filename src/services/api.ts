import axios from 'axios'

const api = axios.create({
  baseURL: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge/',
})

export default api
