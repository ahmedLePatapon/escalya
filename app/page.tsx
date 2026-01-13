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

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WellnessSection from "@/components/sections/WellnessSection";
import CollectionSection from "@/components/sections/CollectionSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <div className="h-24 bg-background-dark"></div>
            <FeaturesSection />
            <WellnessSection />
            <CollectionSection />
            <TestimonialSection />
            <Footer />
        </main >
    );
}
