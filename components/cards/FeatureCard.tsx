import { Icon } from "@/components/ui/Icon";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group rounded-2xl bg-slate-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors dark:bg-slate-800 dark:text-white dark:group-hover:bg-slate-700">
                <Icon name={icon} className="text-3xl" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
    );
}

export default FeatureCard;
