"use client";

import Image from "next/image";
import { useState } from "react";

export default function SejourDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const [activeTab, setActiveTab] = useState("programme");

    // Données exemple - à remplacer par fetch réel
    const sejour = {
        id: params.id,
        title: "Escapade Vignoble à Bordeaux",
        location: "Bordeaux, France",
        duration: "3 Jours / 2 Nuits",
        rating: 4.9,
        reviewCount: 128,
        price: 2500,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2tz3P3DeUCxz1HXtuouYhzal8fkl21OoIo0UFsoggS8YCVoDFAVzABD7SJDQdzW-Yg2r5kUIn-Cug6t74QhEIgpoYrE_c8K34o4XaFWq2yZmWWSrYQFT7VFXJRH0K9rJh0RxVU7RHI3wD2EAyemUBudKmW7mvtLA-GJ5wO5aT0-VRuoaKhkf_o8xrPXrdn_gMjDYfn-2D9pflU8K8PCBuJ1zrLYMa3yUHtcWtFgTnTXdb1u3D7hOpA8DOcqv3ujny_ZvNgx6jeg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB9JUKEHCPNq6gSARSBRulcRpPPnMKAGmJFS0D1fcqPGRMJA8yn2z5rakKBVbejJ351R-kyXQIJxYtNMXgLR4ZDj5w15He_YIRo90gezAE1GivvOZ4dgJdHAXH4He1DESgWchAbSBx0cvytkaEX_A9WDawmVrA3WW4jjceBb4xzIcLgripb-8we2CUNQDJMIyItzCDVNwr_EwjFqymjG0Kq4C5ksFJND9OmkkP6EsCssGo4fL3hK8NebT6Wc06cTpARj1H4nueYQFg",
        ],
    };

    const tabs = [
        { id: "programme", label: "Le Programme" },
        { id: "hebergement", label: "Hébergement" },
        { id: "services", label: "Services Inclus" },
        { id: "avis", label: "Avis" },
    ];

    return (
        <main className="max-w-[1280px] mx-auto px-4 lg:px-20 py-8 pt-28">
            {/* Hero Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-8 overflow-hidden rounded-xl">
                <div className="md:col-span-2 md:row-span-2 bg-cover bg-center relative">
                    <Image
                        src={sejour.images[0]}
                        alt={sejour.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="hidden md:block bg-cover bg-center relative">
                    <Image
                        src={sejour.images[1]}
                        alt={`${sejour.title} - Image 2`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="hidden md:block bg-cover bg-center relative">
                    <Image
                        src={sejour.images[0]}
                        alt={`${sejour.title} - Image 3`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="hidden md:block bg-cover bg-center relative">
                    <Image
                        src={sejour.images[1]}
                        alt={`${sejour.title} - Image 4`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="hidden md:block bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold">
                            Voir toutes les photos
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                            ✓ Expérience Signature
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black">{sejour.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-500">
                            <span>📍 {sejour.location}</span>
                            <span>⏱ {sejour.duration}</span>
                            <span className="text-gold-accent">
                                ★ {sejour.rating} ({sejour.reviewCount} avis)
                            </span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="sticky top-[80px] z-40 bg-background-dark mb-8">
                        <div className="flex border-b border-slate-800 overflow-x-auto no-scrollbar gap-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-3 pt-4 whitespace-nowrap text-sm font-bold ${activeTab === tab.id
                                            ? "border-b-[3px] border-primary text-primary"
                                            : "text-slate-400 hover:text-primary"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="prose dark:prose-invert max-w-none">
                        {activeTab === "programme" && (
                            <div>
                                <h3>Itinéraire détaillé</h3>
                                <p>
                                    Découvrez les vignobles prestigieux de Bordeaux avec des
                                    dégustations privées et des rencontres avec les vignerons...
                                </p>
                            </div>
                        )}
                        {/* Autres onglets... */}
                    </div>
                </div>

                {/* Sidebar - Booking Form */}
                <div className="lg:w-[380px]">
                    <div className="sticky top-28 bg-anthracite rounded-xl p-6">
                        <div className="mb-6">
                            <div className="text-3xl font-black text-primary mb-2">
                                {sejour.price}€
                            </div>
                            <p className="text-sm text-slate-400">par personne, tout inclus</p>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Date d'arrivée
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 rounded-lg bg-background-dark border border-slate-700 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Voyageurs</label>
                                <select className="w-full px-4 py-2 rounded-lg bg-background-dark border border-slate-700 text-white">
                                    <option>1 personne</option>
                                    <option>2 personnes</option>
                                    <option>3 personnes</option>
                                    <option>4 personnes</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold"
                            >
                                Réserver
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
