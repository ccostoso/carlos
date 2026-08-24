import type { Project } from '../data/projects';
import './service-card.css';

// Parses `backtick` code spans and [label](url) links, rendering both as
// real elements so descriptions never need embedded raw HTML.
function renderDescription(text: string) {
  const pattern = /`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <span className="mono" key={key++}>
          {match[1]}
        </span>,
      );
    } else {
      nodes.push(
        <a
          href={match[3]}
          className="desc-link"
          target="_blank"
          rel="noreferrer"
          key={key++}
        >
          {match[2]}
        </a>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
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
