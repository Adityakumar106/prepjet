import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
  resetPassword: (data) => api.post('/auth/reset-password', data),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  updateAvatar: (formData) => api.put('/users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getPurchases: () => api.get('/users/purchases'),
};

// Test Series API
export const testSeriesAPI = {
  getAll: () => api.get('/test-series'),
  getById: (id) => api.get(`/test-series/${id}`),
  create: (data) => api.post('/test-series', data),
  update: (id, data) => api.put(`/test-series/${id}`, data),
  delete: (id) => api.delete(`/test-series/${id}`),
};

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blogs'),
  getById: (id) => api.get(`/blogs/${id}`),
  create: (data) => api.post('/blogs', data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

// Resources API
export const resourceAPI = {
  getAll: () => api.get('/resources'),
  getById: (id) => api.get(`/resources/${id}`),
  create: (formData) => api.post('/resources', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  update: (id, formData) => api.put(`/resources/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id) => api.delete(`/resources/${id}`),
  download: (id) => api.get(`/resources/${id}/download`, { responseType: 'blob' }),
};

// Purchase API
export const purchaseAPI = {
  create: (data) => api.post('/purchases', data),
  getByUser: (userId) => api.get(`/purchases/user/${userId}`),
  getById: (id) => api.get(`/purchases/${id}`),
};

export default api;