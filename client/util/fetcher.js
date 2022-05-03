import axios from 'axios'

// const baseURL = 'https://8080-alittlehat-beyond-goyokxvalp9.ws-us43.gitpod.io/api/' || 'http://localhost:8080/api'
// const baseURL = process.env.NODE_ENV === 'development'
//   ? 'http://localhost:8080/api'
//   : `https://${process.env.SITE_NAME}/api`

const baseURL = 'http://localhost:8080/api'

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
