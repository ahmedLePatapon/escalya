import { SectionHeader } from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/data/features";

export default function FeaturesSection() {
    return (
        <section className="py-24 pt-32 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Services Inclus"
                    subtitle="Profitez de l'excellence hôtelière dans l'intimité d'une maison privée."
                />

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
