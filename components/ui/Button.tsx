import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    variant === "primary" && "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
                    variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",
                    variant === "outline" && "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800",
                    variant === "ghost" && "hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
                    variant === "white" && "bg-white text-slate-900 hover:bg-slate-100 border border-transparent shadow-sm",
                    size === "sm" && "h-9 px-4 text-sm",
                    size === "md" && "h-11 px-6 text-base",
                    size === "lg" && "h-14 px-8 text-lg",
                    size === "icon" && "h-10 w-10",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
