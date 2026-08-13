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
        <div className="about-panel">
          <p>
            I'm a backend engineer who likes building things I can point to.
            Below, you'll find a collection of projects I built end-to-end and
            monitor myself, from schema design to CI/CD. Earlier in my career I
            worked the operational side of backend systems: extending FIX
            connectivity, maintaining SQL databases and catching issues before
            they happen with QA testing. Nowadays, I'm doing the building
            myself.
          </p>
          <ul className="now-list mono">
            {nowItems.map((item) => (
              <li key={item}>
                <span className="now-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
