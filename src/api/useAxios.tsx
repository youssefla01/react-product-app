import axios, { AxiosInstance } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const useAxios = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const axiosToken: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosToken.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosToken.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error("Non autorisé. Veuillez vous reconnecter.");
      }
      return Promise.reject(error);
    }
  );

  return { axiosToken };
};

export default useAxios;
