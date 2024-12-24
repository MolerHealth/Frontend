// axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Base URL for your API
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Token ${token}`; // Set Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
