import { NavLink, Outlet, Link } from 'react-router-dom';
import { useServiceUptime } from '../hooks/useServiceUptime';
import { useCollapseOnWrap } from '../hooks/useCollapseOnWrap';
import { navLinks } from '../data/navLinks';
import { SocialLinks } from './SocialLinks';
import './layout.css';

export function Layout() {
  const uptime = useServiceUptime('pokemoves');
  // Drop order when space runs out: BUILD, then REGION, then UPTIME.
  const { containerRef, setItemRef } = useCollapseOnWrap<HTMLSpanElement>([
    3, 1, 2,
  ]);

  return (
    <>
      <div className="statusbar mono" ref={containerRef}>
        <span ref={setItemRef(0)}>
          <span className="dot" />
          ALL SYSTEMS OPERATIONAL
        </span>
        <span className="statusbar-item" ref={setItemRef(1)}>
          <span className="sep">|</span>
          REGION: us-east-1
        </span>
        <span className="statusbar-item" ref={setItemRef(2)}>
          <span className="sep">|</span>
          UPTIME: {uptime ?? '—'}
        </span>
        <span className="statusbar-item" ref={setItemRef(3)}>
          <span className="sep">|</span>
          BUILD: passing
        </span>
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
              resume.pdf ↗
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
