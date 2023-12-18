import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [isLoggedIn] = useState(localStorage.getItem("accessToken") !== null);

  const login = async (email, password) => {
    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL_BASE}/auth/login`,
        body
      );

      if (response.status == 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        // go to the home page
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response.status == 400) {
        console.log("Login failed: " + error.response.data);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// custom hook to use the auth context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
