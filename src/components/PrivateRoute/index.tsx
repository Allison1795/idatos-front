import { Navigate } from "react-router-dom";

const PrivateRoute = (Component) => {
  if (localStorage.getItem('token')) {
    return <Component />;
  }

  return <Navigate to="/user-input" />;
}

export default PrivateRoute;
