import { projects } from '../data/projects';
import { ServiceCard } from './ServiceCard';

export function ServiceCatalog() {
  return (
    <>
      <div className="section-label mono">// deployed_services</div>
      <div className="catalog">
        {projects.map((project) => (
          <ServiceCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
