import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface ConceptHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    imageAlt: string;
}

export default function ConceptHero({
    badge,
    title,
    subtitle,
    backgroundImage,
    imageAlt,
}: ConceptHeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image avec Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,22,34,0.4)] to-[rgba(16,22,34,1)] z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    role="img"
                    aria-label={imageAlt}
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                    }}
                />
            </div>

            {/* Contenu */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <Badge variant="outline" className="mb-6">
                    {badge}
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <Icon name="keyboard_arrow_down" className="text-4xl text-white/60" />
                </div>
            </div>
        </section>
    );
}
