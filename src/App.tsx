import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlaylistDisplay from './containers/PlaylistDisplay';
import Dashboard from './containers/Dashboard';
import UserInput from './containers/UserInput';

const MainApp: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/playlist">Playlist</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/user-input">UserInput</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/playlist" element={<PlaylistDisplay />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-input" element={<UserInput />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainApp;
