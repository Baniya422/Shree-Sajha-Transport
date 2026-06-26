import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sst_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const apiEndpoints = {
  health: () => api.get('/health'),
  branches: () => api.get('/branches'),
  createBooking: (payload) => api.post('/bookings', payload),
  createContact: (payload) => api.post('/contacts', payload),
  createEstimate: (payload) => api.post('/estimates', payload),
  trackShipment: (trackingId) => api.get(`/tracking/${trackingId}`),
}

export default api
