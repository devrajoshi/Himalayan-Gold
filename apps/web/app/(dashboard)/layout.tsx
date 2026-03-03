"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { HexagonBackground } from "@/components/shared/HexagonBackground";
import content from "@/content.json";
import { motion } from "motion/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-background transition-colors duration-300">
            <DashboardSidebar
                siteName={content.site.name}
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed(!isCollapsed)}
            />
            <motion.main
                animate={{ marginLeft: isCollapsed ? 80 : 288 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex-grow flex flex-col min-h-screen relative"
            >
                <HexagonBackground
                    className="absolute inset-0 z-0"
                    glowColor="rgba(212, 175, 55, 0.4)"
                    borderColor="rgba(212, 175, 55, 0.1)"
                    hexagonSize={40}
                >
                    <div className="p-12 relative z-10 min-h-screen">
                        {children}
                    </div>
                </HexagonBackground>
            </motion.main>
        </div>
    );
}
