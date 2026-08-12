import type { Project } from '../data/projects';
import './service-card.css';

export function ServiceCard({ project }: { project: Project }) {
  const { name, description, status, badges, link, linkLabel } = project;

  return (
    <div className="service">
      <div className="status">
        <span
          className={`dot ${status === 'inactive' ? 'dot-inactive' : ''}`}
        />
      </div>
      <div className="name">{name}</div>
      <div className="desc">{description}</div>
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
  );
}
