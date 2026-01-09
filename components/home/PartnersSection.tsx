export default function PartnersSection() {
    const partners = [
        "LOUIS VUITTON",
        "AIR FRANCE",
        "CHAMPAGNE KRUG",
        "RELAIS & CHÂTEAUX",
        "FOUR SEASONS",
    ];

    return (
        <section className="py-12 px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
                {partners.map((partner) => (
                    <span
                        key={partner}
                        className="text-xl font-extrabold tracking-tighter"
                    >
                        {partner}
                    </span>
                ))}
            </div>
        </section>
    );
}
