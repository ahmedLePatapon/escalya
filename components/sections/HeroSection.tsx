import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import SearchBar from "./SearchBar";

export default function HeroSection() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - Using a div for now to allow for overlay, replace url with real image path or Next Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero-villa.jpg')",
                    backgroundColor: "#1a1a1a",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

            {/* Content */}
            <div className="container relative z-20 mx-auto px-4 text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-sm">
                    L'Escale d'Exception <br /> <span className="text-slate-200 font-light italic">Commence Ici</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-xl font-light">
                    Une collection exclusive de villas et chalets de luxe avec services hôteliers pour des séjours inoubliables.
                </p>

                <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="min-w-[160px]" variant="white">
                        Explorer
                    </Button>
                    <Button size="lg" variant="outline" className="min-w-[160px] text-white border-white hover:bg-white/10">
                        <Icon name="play_arrow" className="mr-2" />
                        Voir le Film
                    </Button>
                </div>

                <div className="absolute -bottom-16 left-0 right-0 px-4 md:-bottom-12">
                    <SearchBar />
                </div>
            </div>
        </section>
    );
}
