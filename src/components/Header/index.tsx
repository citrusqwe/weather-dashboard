import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        <input type="text" placeholder="Search..." />
        <FaSearch />
      </div>
    </header>
  );
};

export default Header;
