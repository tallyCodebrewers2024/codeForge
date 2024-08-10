import axios from "axios";

const apiService = import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
  baseURL: apiService,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
