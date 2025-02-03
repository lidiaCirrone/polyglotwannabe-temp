import clsx from 'clsx';
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main>
        <Outlet />
      </main>
      <nav>
        <Link to="/" className={clsx(pathname === '/' && "current")}>home</Link>
        <Link to="/about" className={clsx(pathname === '/about' && "current")}>about</Link>
        <Link to="/now" className={clsx(pathname === '/now' && "current")}>now</Link>
        <Link to="/projects" className={clsx(pathname === '/projects' && "current")}>projects</Link>
      </nav>
    </>
  )
}

export default Layout