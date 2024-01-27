import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://freuders-web-api-test-3.azurewebsites.net/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global request interceptor
instance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  console.error(error);
  return Promise.reject(error);
});

// Global response interceptor
instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  console.error(error);
  return Promise.reject(error);
});