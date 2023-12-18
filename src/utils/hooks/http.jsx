import axios from "axios";
import useAuth from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const useHttp = () => {
  const [axiosInstance, setAxiosInstance] = useState(null);

  const { logout } = useAuth();

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // if the response has error code 401 (invalid token) then log out the user and propmt them to log in
        if ([401, 403].includes(error.status)) {
          logout();
          console.log("Session expired. Please log in again.");
        } else {
          // if any other error occurs then give this message
          console.log("An unexpected error occurred.");
        }
        return Promise.reject(error);
      }
    );

    setAxiosInstance(axiosInstance);
  }, [logout, setAxiosInstance]);

  return axiosInstance;
};

export default useHttp;
