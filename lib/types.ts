// Types communs pour l'application Escalya

export interface Destination {
    id: string;
    name: string;
    country: string;
    description: string;
    image: string;
}

export interface Stay {
    id: string;
    title: string;
    location: string;
    duration: string; // ex: "3 Jours / 2 Nuits"
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
    images?: string[];
    description: string;
    features: string[];
    category: "signature" | "premium" | "classic";
}

export interface Review {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
}

export interface NavLink {
    label: string;
    href: string;
}
