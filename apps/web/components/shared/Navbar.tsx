"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/useCart";
import { useStore } from "@/hooks/useStore";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    name: string;
    links: NavLink[];
}

export function Navbar({ name, links }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const cart = useStore(useCart, (state) => state);

    const totalItems = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md py-3 border-primary/10"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-primary text-3xl font-bold">HG</span>
                    <span className={cn(
                        "font-display text-2xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-forest dark:text-primary" : "text-white"
                    )}>
                        {name}
                    </span>
                </div>
                <ul className="hidden md:flex space-x-8 font-medium">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={cn(
                                    "transition-colors",
                                    isScrolled
                                        ? "text-foreground hover:text-primary"
                                        : "text-white/80 hover:text-primary"
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center space-x-5">
                    <button className={cn(
                        "transition-colors",
                        isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                    )}>
                        <Search size={22} strokeWidth={2} />
                    </button>
                    <button className={cn(
                        "transition-colors",
                        isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                    )}>
                        <Heart size={22} strokeWidth={2} />
                    </button>
                    <Link
                        href="/dashboard"
                        className={cn(
                            "transition-colors",
                            isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                        )}
                    >
                        <User size={22} strokeWidth={2} />
                    </Link>
                    <ThemeToggle isTransparent={!isScrolled} />
                    <div className="relative">
                        <button
                            onClick={() => cart?.toggleCart()}
                            className={cn(
                                "transition-colors",
                                isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                            )}
                        >
                            <ShoppingBag size={22} strokeWidth={2} />
                        </button>
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-forest text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
