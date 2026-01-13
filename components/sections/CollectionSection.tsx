import { SectionHeader } from "@/components/ui/SectionHeader";
import PropertyCard from "@/components/cards/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/Button";

export default function CollectionSection() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <SectionHeader title="Notre Collection" subtitle="Une sélection rigoureuse des propriétés les plus exclusives." />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {properties.map((prop) => (
                        <PropertyCard key={prop.id} {...prop} />
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="secondary" size="lg">Voir toute la collection</Button>
                </div>
            </div>
        </section>
    );
}
