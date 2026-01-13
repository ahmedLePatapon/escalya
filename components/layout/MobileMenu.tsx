"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
    { label: "Séjours", href: "/sejours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Concept", href: "/concept" },
    { label: "Expériences", href: "/experiences" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                <Icon name={isOpen ? "close" : "menu"} className="text-2xl" />
            </Button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-slate-950 p-6 shadow-lg">
                    <nav className="flex flex-col space-y-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-slate-900 dark:text-white hover:text-slate-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <Button className="w-full justify-center">Réserver</Button>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
