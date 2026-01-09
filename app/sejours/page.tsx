"use client";

import Image from "next/image";
import { useState } from "react";

export default function SejoursPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const sejours = [
        {
            id: "1",
            title: "Domaine de la Vigie",
            location: "Côte d'Azur",
            duration: "3 Jours / 2 Nuits",
            price: 2500,
            rating: 4.9,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7PVbQYpkP4WRqZfy-Ab7e0UYlP9X9pbyhM4M9ezD6WLhbu-J-DnK27pCtuD3K97SpsM_dxV-7oTGn3dh6EY1-YPUWE8427Ppe6lqaPGFW1UhPSz8UzEbuOJyrGgRVBlrn82BQAS01F70EABUfHB_gH5E5ib-_Er05w7UZpAaMMvWAFn8tPJBL2N3AlznR9QAqXTLLsGrWPbwKLbAAGtFR8T56c4tVNq1BG0vZujqmRC50wyZCqY9SBHn1i7lZZZ5hY3NzsyRESI",
        },
        {
            id: "2",
            title: "Chalet Cristal",
            location: "Alpes Françaises",
            duration: "4 Jours / 3 Nuits",
            price: 3200,
            rating: 5.0,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UCCQKLMDzj5cLIWFdKIigjCZWnCmKAGnHU3reiUQh4HPxw1S8islPxqTSt_KQyZzoXB5yEoz-dRb0Nv7bEyj_jbQ4zogQQcijIz-nR-JtZXwEdlswn5_0RXeu5saFDcHICBcFtJESdavYqTPBI82YXbCb9GAClcw8aF4dbk8mU8hr9rUXA5yJ7h5s-Nj7r3_bauEUGvBRPKsK7DwhKys65ryOwdk0VFOVlvk05J0TmzbHX3GbB8bee4d9urFUq6Qkqqqi0GEYc4",
        },
        {
            id: "3",
            title: "Château de Chenonceau",
            location: "Val de Loire",
            duration: "2 Jours / 1 Nuit",
            price: 1800,
            rating: 4.8,
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBMahL9Z2A_hkEoBsl7dsw3tM2uQ3nbGjEjoBuYstdW_KCpz-wUzg1uf6VJ1c-F9UHoHFWfj4pEITqqyO8bOStkPBhWIhvt9Pyq5FowtagCWI8uecXATH6I0BrsxkiD9T0tcyFGonhMzQmRNAjtzpMK6cAPGWn_lWf6o_fri7bLAmIxNrIokqfbJdFCjEyCaih0x3yXIO4LWMA-jzZYt2WY6qpmOiCvW7FClGrXXSEttaNrNEcGXxoIRkU4wVoHOVq0oNHoodRifDI",
        },
    ];

    return (
        <main className="max-w-[1440px] mx-auto px-6 py-8 pt-28">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-6 text-sm text-slate-500 font-medium">
                <a href="/" className="hover:text-primary transition-colors">
                    Accueil
                </a>
                <span>›</span>
                <span className="text-white">Séjours</span>
            </nav>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        La Collection
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Séjours premium soigneusement sélectionnés pour le voyageur mondial
                        exigeant.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2.5 rounded-lg ${viewMode === "grid"
                                ? "bg-primary text-white"
                                : "bg-anthracite text-slate-400"
                            }`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2.5 rounded-lg ${viewMode === "list"
                                ? "bg-primary text-white"
                                : "bg-anthracite text-slate-400"
                            }`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sejours.map((sejour) => (
                    <a
                        key={sejour.id}
                        href={`/sejours/${sejour.id}`}
                        className="group relative bg-anthracite rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <Image
                                src={sejour.image}
                                alt={sejour.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
                                {sejour.location}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{sejour.title}</h3>
                            <p className="text-slate-400 text-sm mb-4">{sejour.duration}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary">
                                    {sejour.price}€
                                </span>
                                <span className="text-gold-accent flex items-center gap-1">
                                    ★ {sejour.rating}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}
