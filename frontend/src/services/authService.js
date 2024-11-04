import axios from 'axios';

const API_URL = 'https://trade-craft-backend.vercel.app/api/auth';
// const API_URL = 'http://127.0.0.1:8000/api/auth';


const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authService = {
  async login(credentials) {
    const response = await axiosInstance.post('/login/', credentials);
    if (response.data.access) {
      const userData = {
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        user: response.data.user,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    }
    return response.data;
  },

  async register(userData) {
    const response = await axiosInstance.post('/register/', userData);
    if (response.data.access) {
      const userData = {
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        user: response.data.user,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    }
    return response.data;
  },

  async logout() {
    localStorage.removeItem('user');
  },

  async refreshToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.refreshToken) {
      const response = await axiosInstance.post('/token/refresh/', {
        refresh: user.refreshToken,
      });
      if (response.data.access) {
        const updatedUser = {
          ...user,
          accessToken: response.data.access,
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return response.data.access;
      }
    }
    return null;
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default authService;