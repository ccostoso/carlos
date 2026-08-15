import { Link } from 'react-router-dom';
import './about.css';

const nowItems = [
  'Deepening backend fundamentals with Go',
  'Studying for the AWS Solutions Architect Associate cert',
  'Adding test coverage across projects',
];

export function About() {
  return (
    <>
      <div className="section-label mono">// about</div>
      <section className="about">
        <div className="glow-border">
          <div className="about-panel">
            <p>
              My name's Carlos, and my calling is the backend. Earlier in my
              career, I worked the operational side of backend systems:
              extending FIX connectivity, maintaining SQL databases and catching
              issues before they happen with QA tests. Nowadays, I'm doing the
              building myself.
            </p>
            <p>Here's what I've been up to lately:</p>
            <ul className="now-list mono">
              {nowItems.map((item) => (
                <li key={item}>
                  <span className="now-dot" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Below, you'll find a collection of projects I built and monitor
              myself, from schema design to CI/CD. If you'd like to get in
              touch, visit the{' '}
              <Link to="/contact" className="mono">
                contact
              </Link>{' '}
              page to send me an email, or click on the{' '}
              <a
                href="https://github.com/ccostoso"
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
              >
                GitHub
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/carlos-costoso"
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
              >
                LinkedIn
              </a>{' '}
              icons at the top- and bottom-right corners of the page to visit my
              profiles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
