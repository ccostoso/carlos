import { useLayoutEffect, useRef } from 'react';

// Hides items in a fixed priority order (lowest priority first) until nothing wraps onto a new
// line. Item 0 is the baseline and is never hidden.
export function useCollapseOnWrap<T extends HTMLElement = HTMLElement>(hidePriority: number[]) {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(T | null)[]>([]);

    const recalc = () => {
        const items = itemRefs.current;
        if (!items[0]) return;

        items.forEach((el) => {
            if (el) el.style.display = '';
        });

        const baseline = items[0].offsetTop;
        const wraps = () =>
            items.some(
                (el, i) => i !== 0 && el && el.style.display !== 'none' && el.offsetTop > baseline,
            );

        for (const index of hidePriority) {
            if (!wraps()) break;
            const el = items[index];
            if (el) el.style.display = 'none';
        }
    };

    useLayoutEffect(() => {
        recalc();
    });

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const observer = new ResizeObserver(recalc);
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const setItemRef = (index: number) => (el: T | null) => {
        itemRefs.current[index] = el;
    };

    return { containerRef, setItemRef };
}
