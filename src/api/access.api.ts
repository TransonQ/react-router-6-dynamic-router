import axios from 'axios'

const ax = axios.create({})

ax.interceptors.response.use((response) => response.data)

export const getAccess = (): Promise<any> =>
  ax.request({
    method: 'GET',
    url: '/access',
  })
