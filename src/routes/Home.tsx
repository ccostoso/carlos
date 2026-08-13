import { useCallback, useState } from 'react';
import { BootSequence } from '../components/BootSequence';
import { ServiceCatalog } from '../components/ServiceCatalog';
import { About } from '../components/About';

export function Home() {
  const [bootDone, setBootDone] = useState(false);
  const handleBootDone = useCallback(() => setBootDone(true), []);

  return (
    <>
      <div className="hero">
        <BootSequence onDone={handleBootDone} />
        <h1 className={`mono ${bootDone ? 'reveal' : ''}`}>
          Carlos Costoso
          <span className="cursor" />
        </h1>
        <p className={`role ${bootDone ? 'reveal' : ''}`}>
          Back-end engineer. I build it, deploy it and keep it running.
        </p>
      </div>
      <About />
      <ServiceCatalog />
    </>
  );
}
