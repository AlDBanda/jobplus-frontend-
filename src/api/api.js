import axios from 'axios'
const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;


const api = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  return axios.create({
    baseURL: 'BASE_URL',
    headers,
  }

  )
}

export default api();