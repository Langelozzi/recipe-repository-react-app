import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

const useHttp = () => {
  const [http, setHttp] = useState(null);

  const { logout } = useAuth();

  useEffect(() => {
    const http = axios.create({});

    http.interceptors.request.use(
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

    http.interceptors.response.use(
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

    setHttp(http);
  }, [logout]);

  return http;
};

export default useHttp;
