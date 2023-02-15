import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})
