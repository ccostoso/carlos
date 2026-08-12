import { ServiceCatalog } from '../components/ServiceCatalog';

export function Home() {
  return (
    <>
      <div className="hero">
        <h1>
          Carlos Costoso<span className="accent">.</span>
        </h1>
        <p className="role mono">
          Full-stack developer → platform engineer. Ships real infrastructure,
          not just code.
        </p>
      </div>
      <ServiceCatalog />
    </>
  );
}
