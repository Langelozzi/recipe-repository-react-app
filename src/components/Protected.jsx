import { useAuth } from "../utils/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = (props) => {
  const { children } = props;

  const { isLoggedIn } = useAuth();
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
Protected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protected;
