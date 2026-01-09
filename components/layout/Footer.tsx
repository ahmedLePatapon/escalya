import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-dark border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo et description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-8 text-primary">
                                <svg
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tighter text-white uppercase">
                                Escalya
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-md">
                            Vivez des séjours tout-inclus dans les plus prestigieux domaines et
                            châteaux de France. Une parenthèse hors du temps orchestrée par nos
                            experts.
                        </p>
                    </div>

                    {/* Navigation rapide */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/concept"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Notre Concept
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sejours"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Séjours
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/a-propos"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>contact@escalya.fr</li>
                            <li>+33 1 23 45 67 89</li>
                            <li>Paris, France</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Escalya. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/mentions-legales"
                            className="text-slate-500 hover:text-white text-sm transition-colors"
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="/confidentialite"
                            className="text-slate-500 hover:text-white text-sm transition-colors"
                        >
                            Confidentialité
                        </Link>
                        <Link
                            href="/cgv"
                            className="text-slate-500 hover:text-white text-sm transition-colors"
                        >
                            CGV
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
