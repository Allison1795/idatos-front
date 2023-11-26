import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlaylistDisplay from './containers/PlaylistDisplay';
import Dashboard from './containers/Dashboard';
import UserInput from './containers/UserInput';

import './App.css';

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
  const [timedOut, setTimedOut] = useState<boolean>(false);

  useEffect(() => {
    const tokenData = window.location.href.match(/access_token=([^&]*)/);
    if (tokenData) {
      localStorage.setItem('token', tokenData![1]);
    }
  }, []);

  useEffect(() => {
    if (timedOut && localStorage.getItem('token')) {
      localStorage.removeItem('token');
      setTimedOut(false);

      const url = "https://accounts.spotify.com/authorize?client_id=1e339f88360b43a38d3434eef6bb69e7&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&scope=user-read-private%20user-read-email%20playlist-modify-public&response_type=token&state=123";
  
      window.location  = url;
    }

  }, [timedOut]);

  const redirectToNewPage = () => setTimedOut(true);

  setTimeout(redirectToNewPage, 30 * 60 * 1000);

  return (
    <Router>
      <Routes>
        {
          routes.map(({ component: Component, path }) => (
            <Route path={path} element={Component} key={path} />
          ))
        }
      </Routes>
    </Router>
  );
};

export default MainApp;
