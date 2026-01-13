import { SectionHeader } from "@/components/ui/SectionHeader";
import ActivityCard from "@/components/cards/ActivityCard";
import { activities } from "@/data/activities";

export default function WellnessSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <SectionHeader title="Bien-être & Art de Vivre" subtitle="Redécouvrez le temps de prendre soin de vous." />

                <div className="grid gap-8 md:grid-cols-2">
                    {activities.map((activity, idx) => (
                        <ActivityCard key={idx} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}
