import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      
        <p className='links'><Link to="/" >Home</Link></p>
        <p className='links'><Link to="/login" >Login</Link></p>
        <p className='links'><Link to="/register" >Register</Link></p>
      
    </nav>
  );
}

export default Navbar;
