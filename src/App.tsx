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

  useEffect(() => {
    const tokenData = window.location.href.match(/access_token=([^&]*)/);
    if (tokenData) {
      localStorage.setItem('token', tokenData![1]);
    }
  }, [])

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
