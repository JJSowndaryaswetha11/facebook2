import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Cart from './Components/Cart';
import Users from './Components/Users';
import Video from './Components/Video';
import Group from './Components/Group';
import Navbar from './Components/Navbar';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/video" element={<Video />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </div>
  );
}

export default App;
