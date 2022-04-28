import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscGraph, VscGraphLine } from 'react-icons/vsc';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-logo">
        Hello
      </Link>
      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-link">
          <VscGraph />
        </NavLink>
        <NavLink to="/info" className="nav-link">
          <VscGraphLine />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
