import ActivityCard from "@/components/cards/ActivityCard";
import { activities } from "@/data/activities";

export default function WellnessSection() {
    return (
        <section className="py-20 bg-background-dark relative border-t border-white/5 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2 dark:text-white">
                            Art de vivre
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Bien-être &amp; Mouvement
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Une approche holistique du luxe. Nous organisons des accès sportifs exclusifs et des retraites de bien-être réparatrices pour vous assurer un retour revitalisé.
                        </p>
                    </div>
                    <a className="hidden md:flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors group" href="#">
                        Explorer les Activités
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 dark:text-white">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {activities.map((activity, idx) => (
                        <ActivityCard key={idx} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}
