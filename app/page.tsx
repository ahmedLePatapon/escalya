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
            <FeaturesSection />
            <WellnessSection />
            <CollectionSection />
            <TestimonialSection />
            <Footer />
        </main>
    );
}
