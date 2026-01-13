import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">Escalya</Link>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                            L'art de vivre d'exception. Des propriétés exclusives et des expériences inoubliables.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a key={social} href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <div className="w-5 h-5 bg-slate-300 dark:bg-slate-700 rounded-full" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Découvrir</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/sejours">Nos Séjours</Link></li>
                            <li><Link href="/destinations">Destinations</Link></li>
                            <li><Link href="/concept">Le Concept</Link></li>
                            <li><Link href="/experiences">Expériences</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Entreprise</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/a-propos">À Propos</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="#">Carrières</Link></li>
                            <li><Link href="#">Presse</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Newsletter</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Inscrivez-vous pour recevoir nos offres exclusives.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                            <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">OK</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-500">
                    © {new Date().getFullYear()} Escalya. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
