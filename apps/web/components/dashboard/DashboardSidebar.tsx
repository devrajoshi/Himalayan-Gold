"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ReceiptText,
    User,
    Gift,
    MapPin,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DashboardSidebarProps {
    siteName: string;
    isCollapsed: boolean;
    onToggle: () => void;
}

export function DashboardSidebar({ siteName, isCollapsed, onToggle }: DashboardSidebarProps) {
    const pathname = usePathname();

    const navItems = [
        {
            label: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Order History",
            href: "/dashboard/orders",
            icon: ReceiptText,
        },
        {
            label: "My Details",
            href: "/dashboard/details",
            icon: User,
        },
        {
            label: "My Honey Rewards",
            href: "/dashboard/rewards",
            icon: Gift,
        },
        {
            label: "Addresses",
            href: "/dashboard/addresses",
            icon: MapPin,
        },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 288 }}
            className="bg-forest text-white flex flex-col fixed h-full z-20 border-r border-primary/10"
        >
            {/* Toggle Button - Centered on the border */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 z-50 bg-primary text-forest p-1.5 rounded-full shadow-xl border-2 border-forest hover:bg-white transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
                title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                {isCollapsed ? <ChevronRight size={14} strokeWidth={3} /> : <ChevronLeft size={18} strokeWidth={4} />}
            </button>

            <div className="flex flex-col h-full overflow-hidden">
                <div className="p-6 mb-4 flex items-center gap-3 overflow-hidden whitespace-nowrap">
                    <div className="bg-primary/20 p-2 rounded-xl shrink-0">
                        <LayoutDashboard className="text-primary w-6 h-6" />
                    </div>
                    <AnimatePresence mode="wait">
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="font-display text-xl font-bold tracking-tight truncate"
                            >
                                {siteName}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <nav className="flex-grow mt-4 px-3 overflow-y-auto overflow-x-hidden">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-4 p-3 rounded-xl transition-all group relative",
                                            isActive
                                                ? "bg-primary text-forest shadow-lg shadow-primary/20"
                                                : "hover:bg-primary/10 hover:text-primary",
                                            isCollapsed && "justify-center px-0"
                                        )}
                                        title={isCollapsed ? item.label : undefined}
                                    >
                                        <Icon className={cn(
                                            "w-5 h-5 transition-transform shrink-0",
                                            isActive ? "text-forest" : "text-white/70 group-hover:text-primary hover:scale-110"
                                        )} />

                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    className="font-medium whitespace-nowrap truncate"
                                                >
                                                    {item.label}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>

                                        {isCollapsed && isActive && (
                                            <div className="absolute left-0 w-1 h-8 bg-forest rounded-r-full" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 mt-auto border-t border-white/5 overflow-hidden">
                    <Link
                        href="/login"
                        className={cn(
                            "flex items-center gap-4 p-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors group",
                            isCollapsed && "justify-center px-0"
                        )}
                        title={isCollapsed ? "Logout" : undefined}
                    >
                        <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                        {!isCollapsed && <span className="font-medium">Logout</span>}
                    </Link>
                </div>
            </div>
        </motion.aside>
    );
}
