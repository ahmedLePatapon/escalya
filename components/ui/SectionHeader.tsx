import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "center", className, ...props }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12 space-y-4", align === "center" ? "text-center" : "text-left", className)} {...props}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default SectionHeader;
