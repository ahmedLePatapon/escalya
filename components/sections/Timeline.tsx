import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: string;
    isPrimary: boolean;
}

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <section className="py-20 md:py-24 bg-background-dark">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <SectionHeader
                    title="Our Journey"
                    subtitle="From vision to global presence"
                    align="center"
                />

                <div className="mt-16 max-w-3xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative grid grid-cols-[40px_1fr] gap-x-8 pb-16 last:pb-0"
                        >
                            {/* Ligne verticale (sauf pour le dernier élément) */}
                            {index < items.length - 1 && (
                                <div className="absolute left-[19px] top-12 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
                            )}

                            {/* Icône */}
                            <div className="flex flex-col items-center relative z-10">
                                <div
                                    className={cn(
                                        "size-10 rounded-full flex items-center justify-center",
                                        item.isPrimary
                                            ? "bg-primary text-white"
                                            : "bg-slate-800 text-slate-300"
                                    )}
                                >
                                    <Icon name={item.icon} className="text-xl" />
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="pt-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge
                                        variant={item.isPrimary ? "default" : "outline"}
                                        className="text-xs"
                                    >
                                        {item.year}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
