import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlaylistDisplay from './containers/PlaylistDisplay';
import Dashboard from './containers/Dashboard';
import UserInput from './containers/UserInput';

import './App.css';
import Loader from './components/loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const routes = [
  {
    component: PublicRoute(Dashboard),
    path: "/",
  },
  {
    component: PrivateRoute(PlaylistDisplay),
    path: "/playlist",
  },
  {
    component: PrivateRoute(UserInput),
    path: "/user-input",
  },
];

const MainApp: React.FC = () => {
  const [token, setToken] = useState<RegExpMatchArray | null>(null);

  useEffect(() => {
    const tokenData = window.location.href.match(/access_token=([^&]*)/);
    if (tokenData) {
      setToken(tokenData);
      localStorage.setItem('token', tokenData![1]);
    }
  }, [])

  return (
    <Router>
      {/* <div> */}
      <Routes>
        {
          routes.map(({ component: Component, path }) => (
            <Route path={path} element={Component} />
          ))
        }
      </Routes>
      {/* </div> */}
    </Router>
  );
};

export default MainApp;


// <Router>
// <div className="app__container">
//   {
//     token ? (
//       <UserInput />
//     ) : (
//       <Dashboard />
//     )
//   }
// </div>
// </Router>
