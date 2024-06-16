import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registrace from './components/Registrace';
import MainContent from './components/MainContent';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div>
        <Navbar />  
        <Sidebar />  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registrace />} />
        </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <MainContent/>
    </div>
  );
}

export default App;
