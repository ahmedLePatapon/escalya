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
                    "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    // Variants (aligned with styles used in home.html)
                    variant === "primary" && "bg-primary text-white font-bold tracking-wide hover:bg-primary/90 shadow-lg shadow-primary/20",
                    variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",
                    variant === "outline" && "border border-white/30 backdrop-blur-sm bg-white/5 text-white hover:bg-white/10",
                    variant === "ghost" && "hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
                    variant === "white" && "bg-white text-background-dark hover:bg-gray-100 border border-transparent shadow-sm",
                    // Sizes (match header/hero/search/button sizes from home.html)
                    size === "sm" && "h-10 px-6 text-sm rounded-full",
                    size === "md" && "h-11 px-6 text-base rounded-lg",
                    size === "lg" && "h-14 px-8 text-base rounded-full",
                    size === "icon" && "h-10 w-10 rounded-full",
                    className
                )}
                {...props}
            >
                {props.children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
