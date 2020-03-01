import React from 'react';
import logo from './svg/logo.svg';
import './scss/Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="nav-logo" alt="logo" />
    </div>
  );
}

export default Navbar;