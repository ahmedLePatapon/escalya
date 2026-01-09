"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        dates: "",
        guests: "",
        message: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: Implémenter l'envoi du formulaire
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-12 pt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Form */}
                <div className="lg:col-span-8">
                    <div className="mb-12">
                        <span className="text-gold-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                            Voyage Sur-Mesure
                        </span>
                        <h1 className="text-5xl font-black tracking-tight mb-4">
                            Demande Personnalisée
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Partagez vos envies avec nous et laissez nos experts créer un séjour
                            d'exception parfaitement adapté à vos désirs.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Jean Dupont"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="jean@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Destination souhaitée
                            </label>
                            <input
                                type="text"
                                value={formData.destination}
                                onChange={(e) =>
                                    setFormData({ ...formData, destination: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Bordeaux, Côte d'Azur..."
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Dates souhaitées
                                </label>
                                <input
                                    type="text"
                                    value={formData.dates}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dates: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="15-18 Mars 2026"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Nombre de voyageurs
                                </label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) =>
                                        setFormData({ ...formData, guests: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="1">1 personne</option>
                                    <option value="2">2 personnes</option>
                                    <option value="3-4">3-4 personnes</option>
                                    <option value="5+">5+ personnes</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Parlez-nous de votre projet
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-anthracite border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Décrivez vos attentes, vos envies particulières, vos besoins spécifiques..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all"
                        >
                            Envoyer ma demande
                        </button>
                    </form>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4">
                    <div className="bg-anthracite rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-bold mb-6">Contact Direct</h3>
                        <div className="space-y-4 text-slate-400">
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Email</p>
                                <p>contact@escalya.fr</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Téléphone</p>
                                <p>+33 1 23 45 67 89</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Horaires</p>
                                <p>Lun-Ven: 9h-19h</p>
                                <p>Sam: 10h-18h</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-anthracite rounded-xl p-8">
                        <h3 className="text-xl font-bold mb-6">Questions Fréquentes</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold mb-2">Délai de réponse ?</p>
                                <p className="text-sm text-slate-400">
                                    Nous répondons sous 24h ouvrées.
                                </p>
                            </div>
                            <div>
                                <p className="font-bold mb-2">Devis gratuit ?</p>
                                <p className="text-sm text-slate-400">
                                    Oui, tous nos devis sont gratuits et sans engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
