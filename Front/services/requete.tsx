import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3550/',
  timeout: 5000,
  headers: {
    accept: 'application/json'
  }
})
