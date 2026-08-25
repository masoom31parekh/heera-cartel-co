// API Client Utility

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

class APIClient {
  async fetch(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    return response.json()
  }

  async get(endpoint) {
    return this.fetch(endpoint, { method: 'GET' })
  }

  async post(endpoint, data) {
    return this.fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async put(endpoint, data) {
    return this.fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async delete(endpoint) {
    return this.fetch(endpoint, { method: 'DELETE' })
  }
}

export const apiClient = new APIClient()

// Diamond endpoints
export const diamondAPI = {
  list: (filters) => apiClient.get(`/api/diamonds?${new URLSearchParams(filters)}`),
  get: (id) => apiClient.get(`/api/diamonds/${id}`),
  create: (data) => apiClient.post('/api/diamonds', data),
  update: (id, data) => apiClient.put(`/api/diamonds/${id}`, data),
  delete: (id) => apiClient.delete(`/api/diamonds/${id}`),
}

// Inquiry endpoints
export const inquiryAPI = {
  submit: (data) => apiClient.post('/api/inquiries', data),
  get: (id) => apiClient.get(`/api/inquiries/${id}`),
  list: () => apiClient.get('/api/inquiries'),
}

// Certificate endpoints
export const certificateAPI = {
  verify: (certNumber) => apiClient.get(`/api/certificates/${certNumber}`),
  create: (data) => apiClient.post('/api/certificates', data),
}
