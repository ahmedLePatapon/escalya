import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConceptHero from "@/components/sections/ConceptHero";
import PhilosophyQuote from "@/components/sections/PhilosophyQuote";
import ContentWithImage from "@/components/sections/ContentWithImage";
import Timeline from "@/components/sections/Timeline";
import PartnersGrid from "@/components/sections/PartnersGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import {
    conceptHero,
    philosophyContent,
    conceptFeatures,
    timeline,
    partners,
    finalCTA,
} from "@/data/concept";

export const metadata: Metadata = {
    title: "Notre Concept - Luxe Accessible | Escalya",
    description: "Découvrez la vision Escalya : redéfinir le luxe premium avec une approche sur-mesure. Expériences uniques, réseau exclusif et service haute touche pour des séjours d'exception.",
    keywords: "concept escalya, luxe accessible, séjours premium, conciergerie de luxe, voyage sur-mesure, hospitalité d'exception",
    openGraph: {
        title: "Notre Concept - Luxe Accessible | Escalya",
        description: "Redéfinir le luxe premium avec une approche personnalisée et un réseau exclusif de propriétés d'exception.",
        type: "website",
        locale: "fr_FR",
    },
};

export default function ConceptPage() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Header />

            {/* Hero Section */}
            <ConceptHero
                badge={conceptHero.badge}
                title={conceptHero.title}
                subtitle={conceptHero.subtitle}
                backgroundImage={conceptHero.backgroundImage}
                imageAlt={conceptHero.imageAlt}
            />

            {/* Philosophy Quote */}
            <PhilosophyQuote
                title={philosophyContent.title}
                quote={philosophyContent.quote}
            />

            {/* Content Sections avec images alternées */}
            {conceptFeatures.map((feature) => (
                <ContentWithImage
                    key={feature.id}
                    badge={feature.badge}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    imageAlt={feature.imageAlt}
                    imagePosition={feature.imagePosition}
                    linkText={feature.linkText}
                    stats={feature.stats}
                />
            ))}

            {/* Timeline Section */}
            <Timeline items={timeline} />

            {/* Partners Grid */}
            <PartnersGrid partners={partners} />

            {/* Final CTA */}
            <FinalCTA
                title={finalCTA.title}
                description={finalCTA.description}
                buttons={finalCTA.buttons}
            />

            <Footer />
        </main>
    );
}
