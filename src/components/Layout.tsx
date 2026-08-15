import { NavLink, Outlet, Link } from 'react-router-dom';
import { useServiceUptime } from '../hooks/useServiceUptime';
import { navLinks } from '../data/navLinks';
import { SocialLinks } from './SocialLinks';
import './layout.css';

export function Layout() {
  const uptime = useServiceUptime('pokemoves');

  return (
    <>
      <div className="statusbar mono">
        <span>
          <span className="dot" />
          ALL SYSTEMS OPERATIONAL
        </span>
        <span className="sep collapse">|</span>
        <span className="collapse">REGION: us-east-1</span>
        <span className="sep hide-uptime">|</span>
        <span className="hide-uptime">UPTIME: {uptime ?? '—'}</span>
        <span className="sep collapse">|</span>
        <span className="collapse">BUILD: passing</span>
      </div>

      <nav className="sitenav mono">
        <Link to="/" className="sitenav-mark">
          ~/costo.so
        </Link>
        <div className="sitenav-right">
          <div className="sitenav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={link.to === '/'}
              >
                {({ isActive }) => (isActive ? `[${link.label}]` : link.label)}
              </NavLink>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              resume ↗
            </a>
          </div>
          <SocialLinks />
        </div>
      </nav>

      <Outlet />

      <footer className="mono">
        <span>&copy; {new Date().getFullYear()} costo.so</span>
        <SocialLinks />
      </footer>
    </>
  );
}
