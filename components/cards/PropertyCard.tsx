interface PropertyProps {
    title: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    alt: string;
    badge1: string;
    badge2: string;
}

export function PropertyCard({ title, location, price, rating, image, alt, badge1, badge2 }: PropertyProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    role="img"
                    aria-label={alt}
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute top-4 right-4 z-20">
                    <button
                        className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors"
                        aria-label="Ajouter aux favoris"
                    >
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                </div>
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                        {badge1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                        {badge2}
                    </span>
                </div>
            </div>
            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1 text-white text-sm font-bold">
                        <span className="material-symbols-outlined text-primary text-[18px] dark:text-white">star</span>
                        {rating}
                    </div>
                </div>
                <p className="text-gray-400 text-sm">{location}</p>
                <p className="text-white text-sm font-medium mt-2">
                    <span className="font-bold">€{price.toLocaleString()}</span>{" "}
                    <span className="text-gray-500 font-normal dark:text-white">/ nuit</span>
                </p>
            </div>
        </div>
    );
}

export default PropertyCard;
