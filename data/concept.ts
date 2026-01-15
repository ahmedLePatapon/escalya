export const conceptHero = {
    badge: "The Vision",
    title: "Luxe Accessible",
    subtitle: "Redefining premium short stays with a tailor-made approach to modern luxury. Luxury is no longer just a destination; it's an experience curated specifically for you.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv3xaXFBy7SM_3pNu7zE0vCxWGYxR8YlWj6UyFfcSNuWX-zKN91WfbpEYSJq_1u_DBRuFuGgCCauhbQqKcwSrbzCrQm7M_mZlCvDpjUHIirC74Qs2ttheGWHHq_K7m6kh8q8Rg7GYYmkCDV2zUVb0ShrnjgpF-E2dYfKCraafdS2JGlTy1aEVONYdhUhdkHKzYZKLCfWESexjTHEla-TMp6Qpl35Uu_LMFNRxb6FF6XAUxg17hJrCfI4uS9lZNJWcMxsf13sPOMCw",
    imageAlt: "Luxury villa overlooking the Mediterranean ocean at sunset",
};

export const philosophyContent = {
    title: "Our Philosophy",
    quote: "Escalya bridges the gap between premium luxury and short-stay flexibility, ensuring every journey is as unique as our guests. We believe in high-touch service that feels invisible yet indispensable.",
};

export interface ConceptFeature {
    id: number;
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    linkText?: string;
    imagePosition: "left" | "right";
    stats?: Array<{ value: string; label: string }>;
}

export const conceptFeatures: ConceptFeature[] = [
    {
        id: 1,
        badge: "Personalization",
        title: "A Tailor-Made Approach",
        description: "Every Escalya stay is unique. Our concierge team crafts itineraries that go beyond simple bookings, incorporating your preferences, culinary desires, and personal wellness goals into a seamless narrative.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiJ-dZkGq-voUYHzFiH_jK-GDOVFqxw3JF8bwacCcgG0KzNdxuhuUXbO_kQKU2JeV1xEcqDtI4RBzhExyIcC7oZShREeaLlh6o6Y-4bFziD-LCQ7JG2hDYQ-JZmIIGHxjgEpPLwLNlKEUhlXg9PYin67xqs-KD9cNVCmXm458f4JTQmRdtOwM6gd7GO5o3x6j4o1JcnIXo_3kDObj5XphZlVdhEsYqJRKYZfDFIPW4tjhUYrjbsDGEieTvn9_3DyZA2fq5FtpT0N0",
        imageAlt: "High-end interior design showing a luxury hotel suite lounge",
        linkText: "Discover the Process",
        imagePosition: "left",
    },
    {
        id: 2,
        badge: "The Curation",
        title: "Exclusive Network",
        description: "We don't just find rooms; we secure experiences. Our network consists of hand-picked property owners and service providers who share our commitment to absolute excellence and discretion.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYYymiGbze_dwa8IsCk0Kgp_-OpzytGqm9e04zAkVY3fwhh7EQf3CcEcrH08ODHDqV1Df3Zr9jkPHuZFBbCAQkfAgnP_CleaFfSxcAUtupcWO1xRj3izcvp_lRrCbcMblLVnqmH5FAPyR6kdQnMYINE-e5_VOpxd-Uow3tNGMG--F1sMY1YONY58QnCV-2y6YRlQ45Cyya4Xj-MR933Jz8Rrr33v2w-FYQEGnrJ8fSZIViJI2wPojjBp2dy5lWdgLvUHxa5waHRBE",
        imageAlt: "Private infinity pool overlooking a tropical jungle at a luxury resort",
        imagePosition: "right",
        stats: [
            { value: "500+", label: "Private Estates" },
            { value: "24/7", label: "Lifestyle Concierge" },
        ],
    },
];

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: string;
    isPrimary: boolean;
}

export const timeline: TimelineItem[] = [
    {
        year: "2020",
        title: "The Inception",
        description: "A vision for accessible luxury was born amidst a changing travel landscape, focusing on privacy and ultimate flexibility.",
        icon: "auto_awesome",
        isPrimary: true,
    },
    {
        year: "2022",
        title: "The Curation",
        description: "Expanding our footprint by building an exclusive partner network across the Mediterranean and Alpine regions.",
        icon: "handshake",
        isPrimary: false,
    },
    {
        year: "2024 & Beyond",
        title: "Global Reach",
        description: "Taking the Escalya standard worldwide, ensuring seamless luxury is available wherever our guests choose to explore.",
        icon: "public",
        isPrimary: false,
    },
];

export interface Partner {
    name: string;
    className: string;
}

export const partners: Partner[] = [
    { name: "ELYSIAN", className: "text-2xl font-black italic tracking-tighter" },
    { name: "AZURE", className: "text-2xl font-light tracking-[0.4em]" },
    { name: "NEXUS", className: "text-2xl font-bold tracking-widest" },
    { name: "Aura.", className: "text-2xl font-serif" },
    { name: "V-Vista", className: "text-xl font-mono uppercase" },
    { name: "SOLIS", className: "text-2xl font-black" },
];

export const finalCTA = {
    title: "Experience the Vision",
    description: "Are you ready to redefine your concept of travel? Join our membership for exclusive access to the world's most unique stays.",
    buttons: [
        { text: "Inquire About Membership", variant: "primary" as const, href: "/contact" },
        { text: "View Destinations", variant: "outline" as const, href: "/destinations" },
    ],
};
