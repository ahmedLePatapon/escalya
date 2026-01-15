import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface Partner {
    name: string;
    className: string;
}

interface PartnersGridProps {
    partners: Partner[];
}

export default function PartnersGrid({ partners }: PartnersGridProps) {
    return (
        <section className="py-20 md:py-24 bg-background-dark">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <SectionHeader
                    title="Trusted Partners"
                    subtitle="Building excellence together"
                    align="center"
                />

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            <div className={cn("text-white", partner.className)}>
                                {partner.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
