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
                    <div className="hidden md:block">
                        <Button size="sm">Réserver</Button>
                    </div>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
