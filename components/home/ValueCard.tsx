interface ValueCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 shadow-sm">
            <span className="text-3xl">{icon}</span>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-slate-500 font-medium">{description}</p>
        </div>
    );
}
