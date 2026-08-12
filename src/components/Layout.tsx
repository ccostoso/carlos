import { Outlet, Link } from 'react-router-dom';
import './layout.css';

export function Layout() {
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
        <span>UPTIME: 47d 12h</span>
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
