import Link from "next/link";
import { Button } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const links = [
        { label: "Séjours", href: "/sejours" },
        { label: "Destinations", href: "/destinations" },
        { label: "Concept", href: "/concept" },
        { label: "Expériences", href: "/experiences" },
    ];

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Escalya</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden lg:block px-6 py-2 rounded-lg border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all">
                        Espace Membre
                    </button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                        Réserver
                    </button>

                    {/* Menu mobile toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div >
            </div >

            {/* Menu Mobile */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 glass-nav border-b border-white/10">
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )
            }
            <div className="hidden md:block">
                <Button size="sm">Réserver</Button>
            </div>
            <MobileMenu />
        </div>
            </div >
        </header >
    );
}
