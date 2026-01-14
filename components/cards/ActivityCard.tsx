interface ActivityCardProps {
    icon: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    tags: string[];
}

export function ActivityCard({ icon, title, description, image, alt, tags }: ActivityCardProps) {
    return (
        <div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
            <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                aria-label={alt}
                style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary backdrop-blur-md dark:text-white">
                        <span className="material-symbols-outlined text-sm">{icon}</span>
                    </span>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6 max-w-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;
