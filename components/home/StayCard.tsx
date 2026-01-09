import Image from "next/image";

interface StayCardProps {
    title: string;
    description: string;
    location: string;
    image: string;
}

export default function StayCard({
    title,
    description,
    location,
    image,
}: StayCardProps) {
    return (
        <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-primary px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-tighter">
                    {location}
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 font-medium">{description}</p>
                    <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-extrabold text-sm hover:bg-white hover:text-primary transition-all uppercase tracking-widest">
                        Découvrir
                    </button>
                </div>
            </div>
        </div>
    );
}
