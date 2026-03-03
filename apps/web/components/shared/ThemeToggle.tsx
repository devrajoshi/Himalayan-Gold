"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/store/useTheme";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ isTransparent }: { isTransparent?: boolean }) {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-2 w-10 h-10" />;
    }

    return (
        <button
            className={cn(
                "transition-all flex items-center justify-center p-2 rounded-lg",
                isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-foreground hover:text-primary hover:bg-forest/5 dark:hover:bg-white/5"
            )}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon size={22} strokeWidth={2} />
            ) : (
                <Sun size={22} strokeWidth={2} />
            )}
        </button>
    );
}
