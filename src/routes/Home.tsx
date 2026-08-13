import { useCallback, useState } from 'react';
import { BootSequence } from '../components/BootSequence';
import { ServiceCatalog } from '../components/ServiceCatalog';

export function Home() {
  const [bootDone, setBootDone] = useState(false);
  const handleBootDone = useCallback(() => setBootDone(true), []);

  return (
    <>
      <div className="hero">
        <BootSequence onDone={handleBootDone} />
        <h1 className={bootDone ? 'reveal' : ''}>
          Carlos Costoso
          <span className="cursor" />
        </h1>
        <p className={`role mono ${bootDone ? 'reveal' : ''}`}>
          Back-end engineer. I build systems and ship results.
        </p>
      </div>
      <ServiceCatalog />
    </>
  );
}
