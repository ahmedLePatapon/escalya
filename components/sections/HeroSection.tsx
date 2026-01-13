import { Icon } from "@/components/ui/Icon";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,22,34,0.4)] via-[rgba(16,22,34,0.2)] to-[rgba(16,22,34,1)] z-10" />
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                    role="img"
                    aria-label="Luxury modern villa with infinity pool at dusk overlooking the ocean"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY8mfkRkJzRruL72a0KuDU3j1wU8TLTkCYqsmDcEHGjiA1iorTIJvqX-Svw2gwlZ_59NpmvnTIjXkmp7yLNpUBbnmz88wjDxeRhZXB-3MSGD9J7_olco7Ml7UIiFsdMDSv735c9o_8CN1Rzwkk7athYu80a5ti9Y5cs6jlabGXOg274dQ9eU0-lMFeSaLT60MeH7NVq5hngvu2sVLu3qLJRfl9LlkcCaH-Qfc25Ibd3EjRcRz7wTMeYBHz_PD6ngDa_4EoS3IKgVg')",
                        animation: 'none',
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 mx-auto px-4 text-center flex flex-col items-center gap-8 max-w-4xl mt-10">
                <span
                    className="text-primary font-medium tracking-[0.2em] uppercase text-sm animate-fade-in-up dark:text-white">Bienvenue
                    chez Escalya</span>
                <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
                    L'Art de Vivre,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Redéfini.</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-xl font-light">
                    Vivez l'expérience ultime du luxe tout inclus dans les villas les plus exclusives d'Europe. Sélectionnées pour le voyageur exigeant.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                    <button className="flex items-center justify-center h-14 px-8 rounded-full bg-white text-background-dark text-base font-bold hover:bg-gray-100 transition-colors">
                        Explorer Notre Collection
                    </button>
                    <button className="flex items-center justify-center h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm bg-white/5 text-white text-base font-bold hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined mr-2 text-[20px]">play_circle</span>
                        Voir le Film
                    </button>
                </div>

            </div>
            <div className="absolute bottom-0 left-0 w-full z-20 px-4 pb-6">
                <div className="max-w-[960px] mx-auto bg-background-dark/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 group-hover:text-primary transition-colors">Destination</label>
                                <div className="flex items-center text-white">
                                    <span className="material-symbols-outlined mr-2 text-gray-400">location_on</span>
                                    <span className="font-medium">Partout</span>
                                </div>
                            </div>
                            <div className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 group-hover:text-primary transition-colors">Dates</label>
                                <div className="flex items-center text-white">
                                    <span className="material-symbols-outlined mr-2 text-gray-400">calendar_month</span>
                                    <span className="font-medium">Ajouter dates</span>
                                </div>
                            </div>
                            <div className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 group-hover:text-primary transition-colors">Invités</label>
                                <div className="flex items-center text-white">
                                    <span className="material-symbols-outlined mr-2 text-gray-400">group</span>
                                    <span className="font-medium">Ajouter invités</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full md:w-auto h-14 md:h-16 px-8 bg-primary hover:bg-primary/90 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25">
                            <span className="material-symbols-outlined">search</span>
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
