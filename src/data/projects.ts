export type ProjectStatus = "active" | "inactive";

export interface Project {
    name: string;
    description: string;
    status: ProjectStatus;
    badges: string[];
    link: string;
    linkLabel: string;
}

export const projects: Project[] = [
    {
        name: "Pokémoves",
        description:
            "Next.js app for building Pokémon movesets, deployed to ECS/Fargate with OIDC-based CI/CD.",
        status: "active",
        badges: ["Prisma 7 · Postgres", "Better Auth", "Next.js", "ECS · Fargate", "GitHub Actions"],
        link: "https://pokemoves.costo.so",
        linkLabel: "pokemoves.costo.so ↗",
    },
    {
        name: "next-ecommerce",
        description: "Full-stack ecommerce demo — product catalog, cart, checkout flow.",
        status: "inactive",
        badges: ["Next.js", "Postgres", "Vercel"],
        link: "https://ccostoso-next-ecommerce-2026.vercel.app/",
        linkLabel: "next-ecommerce ↗",
    },
];