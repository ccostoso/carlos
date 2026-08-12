import { useEffect, useState } from 'react';
import './boot-sequence.css';

interface Step {
  label: string;
  passed: boolean;
}

const STEP_LABELS = ['lint', 'build', 'test', 'deploy'];
const STEP_DURATION = 500; // ms per step: "running…" then "passed"

export function BootSequence({ onDone }: { onDone?: () => void }) {
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    setSteps([]);
    const timers: ReturnType<typeof setTimeout>[] = [];

    STEP_LABELS.forEach((label, i) => {
      const start = i * STEP_DURATION;
      const pass = start + STEP_DURATION * 0.7;

      timers.push(
        setTimeout(() => {
          setSteps((prev) => [...prev, { label, passed: false }]);
        }, start),
      );

      timers.push(
        setTimeout(() => {
          setSteps((prev) =>
            prev.map((s) => (s.label === label ? { ...s, passed: true } : s)),
          );
        }, pass),
      );
    });

    const totalDuration = STEP_LABELS.length * STEP_DURATION;
    if (onDone) {
      timers.push(setTimeout(onDone, totalDuration));
    }

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="boot mono">
      {steps.map((step) => (
        <div className="line" key={step.label}>
          {step.passed ? (
            <>
              <span className="ok">✓</span>
              <span className="step">{step.label}</span>
              <span className="dim">passed</span>
            </>
          ) : (
            <>
              <span className="step">$ {step.label}</span>
              <span className="dim">running…</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
