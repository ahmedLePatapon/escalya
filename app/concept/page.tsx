import Image from "next/image";

export default function ConceptPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{
                        backgroundImage:
                            'linear-gradient(to bottom, rgba(16, 22, 34, 0.4), rgba(16, 22, 34, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv3xaXFBy7SM_3pNu7zE0vCxWGYxR8YlWj6UyFfcSNuWX-zKN91WfbpEYSJq_1u_DBRuFuGgCCauhbQqKcwSrbzCrQm7M_mZlCvDpjUHIirC74Qs2ttheGWHHq_K7m6kh8q8Rg7GYYmkCDV2zUVb0ShrnjgpF-E2dYfKCraafdS2JGlTy1aEVONYdhUhdkHKzYZKLCfWESexjTHEla-TMp6Qpl35Uu_LMFNRxb6FF6XAUxg17hJrCfI4uS9lZNJWcMxsf13sPOMCw")',
                    }}
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary/20 text-primary rounded-full border border-primary/30">
                        The Vision
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                        Luxe Accessible
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                        Redéfinir les séjours courts premium avec une approche sur-mesure du
                        luxe moderne. Le luxe n'est plus seulement une destination; c'est une
                        expérience conçue spécialement pour vous.
                    </p>
                </div>
            </section>

            {/* Philosophy Text Section */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
                    Notre Philosophie
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    "Escalya comble le fossé entre le luxe premium et la flexibilité des
                    courts séjours, garantissant que chaque voyage est aussi unique que nos
                    clients. Nous croyons en un service attentif qui semble invisible mais
                    indispensable."
                </p>
            </section>

            {/* Feature Sections */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                {/* Part 1: Tailor-Made */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv8DsQ7ktLa8YNjqI7A-PoQc_8xD6oHhH6kn1MXlMsptNxwL8OLCMEzDnZOq5LgYF9o7VXOQPblJE0fqcCAZWOvlKIkFOUq7TjwCb-lC3Y7KmfEoG7A2W7V7RhVu4eaYq0Bgl8uxPfwLbaPiMIGDKmFXvp4tWONUXFNXz43hEKD6DXdiFdz7FXKbfh9xJXQZ4G2A1qG0q2MR4q3MSNP6VDmZ7JV5wCZXhMZnxJwL4v3pZL4EwmQ8fCxvJXQNEQl7YHbgx3h_L4iqg"
                            alt="Tailor-Made Experience"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
                            Sur-Mesure
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                            Une Expérience Taillée Pour Vous
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                            Chaque séjour Escalya est conçu autour de vos préférences uniques.
                            De la sélection de votre suite à la planification d'activités
                            exclusives, nous créons une expérience qui résonne avec vos désirs.
                        </p>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span>Conciergerie dédiée 24/7</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span>Itinéraires personnalisés</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span>Expériences privées exclusives</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Part 2: Sports & Wellness */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQF7KP3b8mFVXQPRv7pDhP5P_5cFQQ4qXf1xXQYxhL1n5gx5pVQ7X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7h"
                            alt="Sports & Wellness"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
                            Équilibre
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                            Sport & Bien-Être
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Rechargez votre corps et votre esprit avec nos programmes de
                            bien-être intégrés. Du yoga au lever du soleil aux randonnées
                            guidées, chaque activité est conçue pour revitaliser et inspirer.
                        </p>
                    </div>
                </div>

                {/* Part 3: Luxury Redefined */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQF7KP3b8mFVXQPRv7pDhP5P_5cFQQ4qXf1xXQYxhL1n5gx5pVQ7X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7hQ5xQ5X0h7h"
                            alt="Luxury Redefined"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
                            Excellence
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                            Le Luxe Redéfini
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Notre définition du luxe va au-delà du matériel. C'est l'attention
                            portée aux détails invisibles, la qualité du silence, la perfection
                            des saveurs, et la sincérité du service.
                        </p>
                    </div>
                </div>
            </section>
        </>
export default function Page() {
        return (
            <div className="py-20 text-center">
                <h1 className="text-3xl font-bold">Concept</h1>
                <p>En construction...</p>
            </div>
        );
    }
