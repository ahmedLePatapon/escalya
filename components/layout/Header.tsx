import Link from "next/link";
import { Button } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const links = [
        { label: "Séjours", href: "/sejours" },
        { label: "Destinations", href: "/destinations" },
        { label: "Concept", href: "/concept" },
        { label: "Expériences", href: "/experiences" },
        { label: "À propos", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 z-40 w-full border-b border-slate-200 bg-background-dark/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <div className="layout-container max-w-[1280px] mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="size-8 flex items-center justify-center text-primary dark:text-white">
                        <span className="material-symbols-outlined text-3xl">diamond</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">Escalya</span>
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
                    <Button size="sm">Réserver</Button>
                    <MobileMenu />
                </div>
            </div >
        </header >
    );
}
