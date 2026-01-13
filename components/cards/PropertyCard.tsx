"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PropertyProps {
    title: string;
    location: string;
    guests: number;
    bedrooms: number;
    price: string;
    rating: number;
    image: string;
    badges: string[];
}

export function PropertyCard({ title, location, guests, bedrooms, price, rating, image, badges }: PropertyProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all dark:bg-slate-900">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-slate-950/80">
                            {badge}
                        </Badge>
                    ))}
                </div>
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white text-slate-900"
                >
                    <Icon name="favorite" className={isFavorite ? "text-red-500" : "text-slate-400"} style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }} />
                </button>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                        <p className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                            <Icon name="location_on" className="mr-1 text-base" />
                            {location}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon name="star" className="text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }} />
                        <span className="font-semibold">{rating}</span>
                    </div>
                </div>

                <div className="flex gap-4 my-4 py-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Icon name="group" />
                        <span>{guests} Voyageurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Icon name="bed" />
                        <span>{bedrooms} Chambres</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="block text-lg font-bold text-slate-900 dark:text-white">{price}</span>
                    </div>
                    <Button variant="outline" size="sm">Réserver</Button>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
