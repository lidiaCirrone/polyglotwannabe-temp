import clsx from 'clsx';
import { Link, Outlet, useLocation } from 'react-router'

const links = [
  {
    page: 'home',
    to: '/',
  },
  {
    page: 'about',
    to: '/about',
  },
  {
    page: 'now',
    to: '/now',
  },
  {
    page: 'projects',
    to: '/projects',
  },
]

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div {...(pathname === '/' && { className: 'home' })}>
      <main>
        <Outlet />
      </main>
      <nav>
        {links.map(link => <Link to={link.to} className={clsx(pathname === link.to && "current")}>{link.page}</Link>)}
      </nav>
    </div>
  )
}

export default Layout