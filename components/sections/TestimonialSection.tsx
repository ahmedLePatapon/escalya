import { Icon } from "@/components/ui/Icon";
import { testimonial } from "@/data/testimonials";

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <Icon name="format_quote" className="text-6xl text-slate-300 dark:text-slate-700 mb-8" />

                <blockquote className="mb-10 text-2xl font-light italic text-slate-800 dark:text-slate-200 md:text-3xl leading-relaxed">
                    "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-sm">
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${testimonial.image}')`, backgroundColor: '#e2e8f0' }} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
