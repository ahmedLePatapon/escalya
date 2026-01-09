import ValueCard from "./ValueCard";

export default function LivingArtSection() {
    const values = [
        {
            icon: "🏰",
            title: "Héritage",
            description: "Des lieux chargés d'histoire et de caractère.",
        },
        {
            icon: "🍽️",
            title: "Gastronomie",
            description: "Une table d'exception servie par nos chefs.",
        },
        {
            icon: "🎩",
            title: "Service",
            description: "Conciergerie dédiée 24h/24 pour vos envies.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                            L'Art de Vivre Escalya
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                            Plus qu'un voyage, nous vous proposons une immersion totale. Chaque
                            détail, de la gastronomie étoilée aux transferts privés, est pensé
                            pour que votre seule préoccupation soit de profiter de l'instant
                            présent.
                        </p>
                        <div className="flex items-center gap-4 text-primary font-extrabold">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <a
                                className="uppercase tracking-widest text-sm hover:text-primary/80 transition-colors"
                                href="/concept"
                            >
                                En savoir plus sur l'expérience
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
                        {values.map((value) => (
                            <ValueCard key={value.title} {...value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
