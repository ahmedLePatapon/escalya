import { Icon } from "@/components/ui/Icon";
import { testimonial } from "@/data/testimonials";

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto dark:text-white px-4 max-w-[800px] text-center">
                <Icon name="format_quote" className="dark:text-white mb-8" style={{ fontSize: '3rem' }} />

                <blockquote className="mb-10 text-2xl italic leading-tight text-slate-800 dark:text-white md:text-4xl leading-relaxed font-serif">
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
