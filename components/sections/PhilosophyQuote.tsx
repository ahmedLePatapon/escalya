import { SectionHeader } from "@/components/ui/SectionHeader";

interface PhilosophyQuoteProps {
    title: string;
    quote: string;
}

export default function PhilosophyQuote({ title, quote }: PhilosophyQuoteProps) {
    return (
        <section className="py-20 md:py-24 bg-background-dark relative overflow-hidden">
            {/* Decorative Blurred Circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
                <SectionHeader title={title} align="center" />

                <blockquote className="mt-12 text-center">
                    <p className="text-2xl md:text-3xl font-light italic text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        "{quote}"
                    </p>
                </blockquote>
            </div>
        </section>
    );
}
