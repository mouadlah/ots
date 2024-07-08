import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">OTS</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/schedule">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
