import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LivingArtSection from "@/components/home/LivingArtSection";
import FeaturedStays from "@/components/home/FeaturedStays";
import TestimonialSection from "@/components/home/TestimonialSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
    title: "Escalya | Séjours d'Exception Tout-Inclus",
    description:
        "Vivez des séjours tout-inclus dans les plus prestigieux domaines et châteaux de France. Une parenthèse hors du temps orchestrée par nos experts.",
    openGraph: {
        title: "Escalya | Séjours d'Exception Tout-Inclus",
        description:
            "Vivez des séjours tout-inclus dans les plus prestigieux domaines et châteaux de France.",
        type: "website",
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <LivingArtSection />
            <FeaturedStays />
            <TestimonialSection />
            <PartnersSection />
            <NewsletterSection />
        </>
    );
}

