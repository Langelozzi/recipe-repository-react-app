import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [isLoggedIn] = useState(localStorage.getItem("accessToken") !== null);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
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
