import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { useNotification } from "../components/NotificationProvider";

const useApiRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, email } = useSelector((state: RootState) => state.auth); 
  const { showNotification } = useNotification();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  axios.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      if (email) {
        config.headers["X-User-Email"] = email;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const login = async (user: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, user);
      const { token, email } = response.data;
      dispatch(loginSuccess({ token, email })); 
      navigate("/home");
      showNotification("Connexion réussie !", "success");
    } catch (error) {
      console.error(error);
      showNotification(
        "Erreur de connexion. Veuillez vérifier vos informations.",
        "error"
      );
    }
  };

  const register = async (user: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, user);
      const { token, email } = response.data;
      dispatch(registerSuccess({ token, email })); 
      navigate("/home");
      showNotification("Inscription réussie !", "success");
    } catch (error) {
      console.error(error);
      showNotification(
        "Erreur lors de l'inscription. Veuillez vérifier vos informations.",
        "error"
      );
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/logout`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(logoutSuccess());
      navigate("/");
      showNotification("Déconnexion réussie !", "success");
    } catch (error) {
      console.error(error);
      showNotification("Erreur lors de la déconnexion.", "error");
    }
  };

  return { login, register, logout };
};

export default useApiRequests;
