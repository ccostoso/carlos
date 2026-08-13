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
            "What would a portfolio be without a PokéAPI-based app? Pokémoves makes comparing learnsets for Pokémon across generations easy. Should you wait to learn Hyper Voice before evolving Crocalor or take the stat boost and wait another four levels? At what level Pikachu learn Thunderbolt in Red and Blue\u2014or only in Yellow? Use Pokémoves to find out, and create an account to save your research!\n\nPokémoves is a full-stack app built with Next.js, Prisma 7, Postgres, Better Auth and ECS/Fargate. It uses the PokéAPI to fetch Pokémon data via GraphQL queries and caches results for fast lookups.",
        status: "active",
        badges: ["Prisma 7 · Postgres", "GraphQL", "Better Auth", "Next.js", "ECS · Fargate", "GitHub Actions"],
        link: "https://pokemoves.costo.so",
        linkLabel: "pokemoves.costo.so ↗",
    },
    {
        name: "next-ecommerce",
        description: "Full-stack ecommerce demo — product catalog, cart, checkout flow.",
        status: "active",
        badges: ["Next.js", "Postgres", "Vercel"],
        link: "https://ccostoso-next-ecommerce-2026.vercel.app/",
        linkLabel: "next-ecommerce ↗",
    },
];