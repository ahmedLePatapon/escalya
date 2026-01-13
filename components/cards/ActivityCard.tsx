import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

interface ActivityCardProps {
    title: string;
    description: string;
    image: string;
}

export function ActivityCard({ title, description, image }: ActivityCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl h-[400px]">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="mb-6 text-slate-200">{description}</p>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    En savoir plus
                    <Icon name="arrow_forward" className="ml-2 text-sm" />
                </Button>
            </div>
        </div>
    );
}

export default ActivityCard;
