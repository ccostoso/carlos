import { Outlet, Link } from 'react-router-dom';
import { useServiceUptime } from '../hooks/useServiceUptime';
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
        <span className="sep">|</span>
        <span>REGION: us-east-1</span>
        <span className="sep">|</span>
        <span>UPTIME: {uptime ?? '—'}</span>
        <span className="sep">|</span>
        <span>BUILD: passing</span>
      </div>

      <Outlet />

      <footer className="mono">
        <span>&copy; 2026 costo.so</span>
        <span>
          <a href="https://github.com/ccostoso">github.com/ccostoso</a>
          &nbsp;&middot;&nbsp;
          <Link to="/contact">email</Link>
        </span>
      </footer>
    </>
  );
}
