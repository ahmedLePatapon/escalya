import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-symbols-outlined text-primary text-2xl dark:text-white">diamond</span>
                            <h2 className="text-lg font-bold uppercase tracking-tight">Escalya</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Redéfinir le voyage de luxe avec des séjours tout compris sélectionnés dans les destinations les plus exclusives d'Europe.
                        </p>
                    </div>

                    {/* Découvrir */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Découvrir</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Notre Collection</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Destinations</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Expériences</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Journal</a></li>
                        </ul>
                    </div>

                    {/* Entreprise */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Entreprise</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">À Propos</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Services de Conciergerie</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Devenir Partenaire</a></li>
                            <li><a className="text-gray-400 hover:text-primary text-sm transition-colors" href="#">Carrières</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Restez Inspiré</h3>
                        <p className="text-gray-400 text-sm mb-4">Rejoignez notre newsletter pour des offres exclusives.</p>
                        <div className="flex gap-2">
                            <input
                                id="newsletter-email"
                                name="email"
                                aria-label="Adresse email"
                                className="bg-[#1a2230] border border-white/10 rounded-lg px-4 py-2 text-white text-sm w-full focus:outline-none focus:border-primary"
                                placeholder="Adresse email"
                                type="email"
                            />
                            <button
                                className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 flex items-center justify-center transition-colors"
                                aria-label="S'abonner"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm dark:text-white">© 2023 Escalya. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <a className="text-gray-500 hover:text-white text-sm transition-colors dark:text-white" href="#">Confidentialité</a>
                        <a className="text-gray-500 hover:text-white text-sm transition-colors dark:text-white" href="#">Conditions</a>
                        <a className="text-gray-500 hover:text-white text-sm transition-colors dark:text-white" href="#">Plan du site</a>
                    </div>
                    <div className="flex gap-4">
                        <a className="text-gray-400 hover:text-white transition-colors" href="#">IG</a>
                        <a className="text-gray-400 hover:text-white transition-colors" href="#">TW</a>
                        <a className="text-gray-400 hover:text-white transition-colors" href="#">LI</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
