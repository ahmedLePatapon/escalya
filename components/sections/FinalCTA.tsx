"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface CTAButton {
    text: string;
    variant: "primary" | "secondary" | "outline" | "ghost" | "white";
    href: string;
}

interface FinalCTAProps {
    title: string;
    description: string;
    buttons: CTAButton[];
}

export default function FinalCTA({ title, description, buttons }: FinalCTAProps) {
    return (
        <section className="py-20 md:py-32 bg-background-dark">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative Blurred Circles */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-primary/10 rounded-full -mb-24 -ml-24 blur-3xl" />

                    {/* Contenu */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            {title}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {buttons.map((button, index) => (
                                <CTAButtonItem key={index} button={button} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTAButtonItem({ button }: { button: { text: string; variant: any; href: string } }) {
    const router = useRouter();

    return (
        <Button variant={button.variant} size="lg" onClick={() => router.push(button.href)}>
            {button.text}
        </Button>
    );
}
