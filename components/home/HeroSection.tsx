import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(16, 22, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYiuww3N99V82WFif_6Iy-6nBwOzO_nqvztoImDTXx9GbRDoV8QaSzqwVXxtBCH8gWa33AbhZNqP2f9kuNVquPF-z3cmdzqbvlQOYzKgVCwiAxtrKTRL475jiRfkdUhFzE1p-4vZaKKlqRfQnswOj4C7T6OpEhIiCQ-b-tMpMJSvT6l2EKaQsB0jh17YLyOqmJifcaxM7cekeTb8tvsmHWqaRNHJhx8y_qf7vyZuHULnMBkQj3HIe8-3KU_92HBW-4HrwxR5brapY")',
                }}
            />
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <span className="text-gold-accent font-bold tracking-[0.4em] uppercase mb-6 block text-sm">
                    L'Art de s'évader
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] font-extrabold tracking-tight text-shadow-lg">
                    L'Exceptionnel à Votre Portée
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                    Vivez des séjours tout-inclus dans les plus prestigieux domaines et
                    châteaux de France. Une parenthèse hors du temps orchestrée par nos
                    experts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg">
                        Découvrir les séjours
                    </Button>
                    <Button variant="secondary" size="lg">
                        Notre Concept
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-8 h-8 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                </svg>
            </div>
        </section>
    );
}
