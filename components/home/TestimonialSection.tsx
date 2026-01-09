import Image from "next/image";

export default function TestimonialSection() {
    return (
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-5xl mb-8 inline-block">❝</span>
                <blockquote className="text-3xl md:text-4xl text-slate-900 dark:text-white leading-relaxed mb-8 font-bold tracking-tight">
                    "Une expérience absolument irréprochable. Escalya a su redéfinir notre
                    vision du luxe discret et de l'hospitalité française. Nous ne
                    planifierons plus nos week-ends sans eux."
                </blockquote>
                <div className="flex flex-col items-center">
                    <div className="size-16 rounded-full bg-slate-200 dark:bg-slate-700 mb-4 overflow-hidden relative">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJtVE__4GTl4CM3XPn5RwAP_zqgSd8jSfVapSWZrs-Sm0jw-arn9gdCkyTCmGmqPpJLakUTRgpIsVhSZTg_VvG8E1BmqYGi-Zm_F8HQz2mi5tl5Cand6ZBGnlUbxkcmTn8tnRDjupyqQ_VfiB5IoTswntIoSuMXK3-oaU3BeugNDIAIWAxsVHL7qLpjxP-QR-CizBTIhf4rxtmZkkLwGA9UGjAI0ibyCFz5_fXaomvs9WaA0fhL9sUYSzCp-5ttoa6gqKG4n4eDdA"
                            alt="Jean-Baptiste M."
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="font-extrabold text-slate-900 dark:text-white">
                        Jean-Baptiste M.
                    </p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Fondateur, Groupe Orion
                    </p>
                </div>
            </div>
        </section>
    );
}
