export default function FeaturesSection() {
    return (
        <section className="py-20 bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none">
            </div>
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Plus qu'un
                            séjour.<br />Une
                            expérience fluide.</h2>
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Nous allons au-delà de la location de luxe. Chaque demeure Escalya est accompagnée d'une
                            équipe
                            dédiée pour assurer votre confort absolu.
                        </p>
                    </div>
                    <a className="text-primary font-bold flex items-center gap-2 group dark:text-white" href="#">
                        Découvrir notre concept
                        <span
                            className="material-symbols-outlined transition-transform group-hover:translate-x-1 dark:text-white">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <article
                        className="bg-[#1a2230] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                        <div
                            className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors dark:text-white">
                            <span className="material-symbols-outlined text-2xl">restaurant</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Chef Privé</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Savourez des repas gastronomiques préparés quotidiennement dans votre villa. Ingrédients
                            locaux,
                            menus sur mesure et présentation exquise.
                        </p>
                    </article>
                    <div
                        className="bg-[#1a2230] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                        <div
                            className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors dark:text-white">
                            <span className="material-symbols-outlined text-2xl">concierge</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Conciergerie 24/7</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Des réservations de restaurants aux locations de yachts, notre équipe de conciergerie dédiée
                            s'occupe de chaque détail de votre itinéraire.
                        </p>
                    </div>
                    <div
                        className="bg-[#1a2230] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                        <div
                            className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors dark:text-white">
                            <span className="material-symbols-outlined text-2xl">spa</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Bien-être &amp; Spa</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Massages en villa, séances de yoga et programmes de bien-être personnalisés conçus pour
                            rajeunir
                            votre corps et votre esprit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
