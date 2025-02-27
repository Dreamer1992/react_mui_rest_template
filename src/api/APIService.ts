import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const getAccessToken = () => Cookies.get('accessToken');

export const APIService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

APIService.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

APIService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('accessToken');
      window.location.href = '/auth/sign-in';
    }
    return Promise.reject(error);
  }
);
