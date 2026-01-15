import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface ContentWithImageProps {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    imagePosition: "left" | "right";
    linkText?: string;
    stats?: Array<{ value: string; label: string }>;
}

export default function ContentWithImage({
    badge,
    title,
    description,
    image,
    imageAlt,
    imagePosition,
    linkText,
    stats,
}: ContentWithImageProps) {
    const isReversed = imagePosition === "right";

    return (
        <section className="py-20 md:py-24 bg-background-dark">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div
                    className={cn(
                        "flex flex-col md:flex-row items-center gap-12 md:gap-16",
                        isReversed && "md:flex-row-reverse"
                    )}
                >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <div
                            className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl"
                            role="img"
                            aria-label={imageAlt}
                            style={{
                                backgroundImage: `url('${image}')`,
                            }}
                        />
                    </div>

                    {/* Contenu */}
                    <div className="w-full md:w-1/2">
                        <Badge variant="outline" className="mb-4">
                            {badge}
                        </Badge>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            {title}
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Statistiques optionnelles */}
                        {stats && stats.length > 0 && (
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-4xl font-bold text-primary mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-slate-400 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Lien optionnel */}
                        {linkText && (
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                            >
                                <span className="font-medium">{linkText}</span>
                                <Icon
                                    name="arrow_forward"
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
