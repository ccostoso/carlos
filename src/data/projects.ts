type ProjectStatus = "active" | "inactive";

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
        name: "pokémoves",
        description:
            "What would a portfolio be without a PokéAPI-based app? Pokémoves makes comparing learnsets for Pokémon across generations easy. Should you wait to learn Hyper Voice before evolving Crocalor or take the stat boost and wait another four levels? When do Pikachu learn Thunderbolt in Red and Blue... or did they only start learning it by leveling up in Yellow? Use Pokémoves to find out, and create an account to save your research!\n\nPokémoves is a full-stack app built with Next.js, Prisma 7, Postgres, Better Auth and ECS/Fargate. It uses the PokéAPI to fetch Pokémon data via GraphQL queries and caches results for fast lookups.",
        status: "active",
        badges: ["Prisma 7 · Postgres", "GraphQL", "Better Auth", "Next.js", "ECS · Fargate", "GitHub Actions"],
        link: "https://pokemoves.costo.so",
        linkLabel: "pokemoves.costo.so ↗",
    },
    {
        name: "costo.so",
        description:
            "Hey, that's this site! It's static, but two Amazon Lambda functions handle back-end tasks: one wires up Resend for the form on the `contact` page, while the other drives the `UPTIME` clock in the bar up top, tracking my longest-running ECS container. GitHub Actions deploys it to S3/CloudFront on every push to `main`.",
        status: "active",
        badges: ["Resend", "React", "Amazon Lambda", "S3 · CloudFront", "GitHub Actions"],
        link: "https://costo.so",
        linkLabel: "costo.so ↗"
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