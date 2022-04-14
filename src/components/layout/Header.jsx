import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Batman Legendary</h1>
      <p>SOUNDS</p>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/characters">
            <li>Characters</li>
          </Link>
          <Link to="/univers">
            <li>DC Univers</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
