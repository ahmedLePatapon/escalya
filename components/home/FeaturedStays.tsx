import StayCard from "./StayCard";

export default function FeaturedStays() {
    const stays = [
        {
            title: "Domaine de la Vigie",
            description: "Un écrin de verdure surplombant la Méditerranée.",
            location: "Côte d'Azur",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7PVbQYpkP4WRqZfy-Ab7e0UYlP9X9pbyhM4M9ezD6WLhbu-J-DnK27pCtuD3K97SpsM_dxV-7oTGn3dh6EY1-YPUWE8427Ppe6lqaPGFW1UhPSz8UzEbuOJyrGgRVBlrn82BQAS01F70EABUfHB_gH5E5ib-_Er05w7UZpAaMMvWAFn8tPJBL2N3AlznR9QAqXTLLsGrWPbwKLbAAGtFR8T56c4tVNq1BG0vZujqmRC50wyZCqY9SBHn1i7lZZZ5hY3NzsyRESI",
        },
        {
            title: "Chalet Cristal",
            description: "Luxe contemporain au sommet des sommets.",
            location: "Alpes Françaises",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UCCQKLMDzj5cLIWFdKIigjCZWnCmKAGnHU3reiUQh4HPxw1S8islPxqTSt_KQyZzoXB5yEoz-dRb0Nv7bEyj_jbQ4zogQQcijIz-nR-JtZXwEdlswn5_0RXeu5saFDcHICBcFtJESdavYqTPBI82YXbCb9GAClcw8aF4dbk8mU8hr9rUXA5yJ7h5s-Nj7r3_bauEUGvBRPKsK7DwhKys65ryOwdk0VFOVlvk05J0TmzbHX3GbB8bee4d9urFUq6Qkqqqi0GEYc4",
        },
        {
            title: "Château de Chenonceau",
            description: "Privatisation exclusive de l'aile royale.",
            location: "Val de Loire",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBMahL9Z2A_hkEoBsl7dsw3tM2uQ3nbGjEjoBuYstdW_KCpz-wUzg1uf6VJ1c-F9UHoHFWfj4pEITqqyO8bOStkPBhWIhvt9Pyq5FowtagCWI8uecXATH6I0BrsxkiD9T0tcyFGonhMzQmRNAjtzpMK6cAPGWn_lWf6o_fri7bLAmIxNrIokqfbJdFCjEyCaih0x3yXIO4LWMA-jzZYt2WY6qpmOiCvW7FClGrXXSEttaNrNEcGXxoIRkU4wVoHOVq0oNHoodRifDI",
        },
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0f1a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-extrabold text-sm tracking-widest uppercase mb-2 block">
                            Collections
                        </span>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            Séjours d'Exception
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-primary transition-colors">
                        Voir tout le catalogue{" "}
                        <span className="text-xl">→</span>
                    </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stays.map((stay) => (
                        <StayCard key={stay.title} {...stay} />
                    ))}
                </div>
            </div>
        </section>
    );
}
