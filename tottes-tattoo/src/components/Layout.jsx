import React from 'react';
import { Outlet } from 'react-router';
import HeaderComponent from './HeaderComponent';

const Layout = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
