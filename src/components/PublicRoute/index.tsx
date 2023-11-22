import { Navigate } from "react-router-dom";

const PublicRoute = (Component) => {
  if (!localStorage.getItem('token')) {
    return <Component />;
  }

  return <Navigate to="/user-input" />;
}

export default PublicRoute;
