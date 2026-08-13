export interface NavLink {
    label: string;
    to: string;
}

export const navLinks: NavLink[] = [
    { label: 'home', to: '/' },
    { label: 'contact', to: '/contact' },
];