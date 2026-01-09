"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Implémenter l'inscription newsletter
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
            <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
                <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                    Rejoignez le Cercle Escalya
                </h2>
                <p className="text-white/80 text-lg mb-10 font-medium">
                    Recevez en avant-première nos nouvelles destinations et nos offres
                    exclusives réservées à nos membres.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 font-medium"
                        placeholder="Votre adresse email"
                        type="email"
                        required
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-white text-primary font-extrabold rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </section>
    );
}
