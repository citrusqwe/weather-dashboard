import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <Header />
        <Outlet />
      </div>
      <Aside />
    </div>
  );
};

export default Layout;
