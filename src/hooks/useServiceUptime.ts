import { useEffect, useState } from "react";

const UPTIME_ENDPOINT = import.meta.env.VITE_UPTIME_ENDPOINT;

export function useServiceUptime(service: string) {
    const [uptime, setUptime] = useState<string | null>(null);

    useEffect(() => {
        const fetchUptime = async () => {
            try {
                const res = await fetch(`${UPTIME_ENDPOINT}?service=${service}`);
                const data = await res.json();
                if (data.status !== "up") return setUptime(null);
                const days = Math.floor(data.uptimeSeconds / 86400);
                const hours = Math.floor((data.uptimeSeconds % 86400) / 3600);
                setUptime(`${days}d ${hours}h`);
            } catch {
                setUptime(null);
            }
        };

        fetchUptime();
    }, [service]);

    return uptime;
}