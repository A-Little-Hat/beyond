import axios from 'axios'

const baseURL = 'http://localhost:8080/api'

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
