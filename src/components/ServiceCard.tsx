import type { Project } from '../data/projects';
import './service-card.css';

// Splits on `backtick` segments and renders them as inline mono spans, so
// descriptions can flag code/branch names without embedding raw HTML.
function renderDescription(text: string) {
  return text.split(/`([^`]+)`/g).map((part, i) =>
    i % 2 === 1 ? (
      <span className="mono" key={i}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function ServiceCard({ project }: { project: Project }) {
  const { name, description, status, badges, link, linkLabel } = project;

  return (
    <div className="glow-border">
      <div className="service">
        <div className="status">
          <span
            className={`dot ${status === 'inactive' ? 'dot-inactive' : ''}`}
          />
        </div>
        <div className="name">{name}</div>
        <div className="desc">{renderDescription(description)}</div>
        <div className="meta">
          {badges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <a className="link" href={link} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}
