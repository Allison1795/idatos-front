import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }: any) => {
//   const token = localStorage.getItem('token');

//   return !token ? <Component /> : <Navigate to="/" />
// };

// export default PrivateRoute;

const PublicRoute = (Component) => {
  if (!localStorage.getItem('token')) {
    return <Component />;
  }

  return <Navigate to="/user-input" />;
}

export default PublicRoute;
