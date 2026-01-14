import PropertyCard from "@/components/cards/PropertyCard";
import { properties } from "@/data/properties";

export default function CollectionSection() {
    return (
        <section className="py-10 bg-background-dark">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2 dark:text-white">
                            Notre Collection
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Évasions Uniques</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            className="size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            aria-label="Précédent"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            className="size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            aria-label="Suivant"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {properties.map((prop) => (
                        <PropertyCard key={prop.id} {...prop} />
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <button className="flex items-center justify-center h-12 px-8 rounded-lg border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                        Voir Toutes les Propriétés
                    </button>
                </div>
            </div>
        </section>
    );
}
