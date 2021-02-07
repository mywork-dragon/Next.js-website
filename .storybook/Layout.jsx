import React from 'react';
import '../styles/tailwind.css';
import './global.css';

const Layout = ({ children }) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
