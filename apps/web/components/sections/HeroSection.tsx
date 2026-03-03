"use client";

import { Button } from "@/components/ui/button";
import { HexagonBackground } from "@/components/shared/HexagonBackground";

interface HeroStat {
    label: string;
    value: string;
}

interface HeroProps {
    script: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
    stats: HeroStat[];
}

export function HeroSection({ script, title, description, cta, stats }: HeroProps) {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* HexagonBackground fills the hero */}
            <HexagonBackground
                className="!absolute inset-0 w-full h-full"
                glowColor="rgba(212, 175, 55, 0.5)"
                borderColor="rgba(6, 78, 59, 0.3)"
                hexagonSize={55}
                hexagonMargin={2}
            >
                <div className="pointer-events-none container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10 pt-40 pb-32">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="font-script text-primary text-4xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">{script}</p>
                        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {title.split(' ')[0]} <span className="text-primary italic">{title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-xl mb-10 max-w-lg mx-auto lg:mx-0 text-white/70 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                            {description}
                        </p>
                        <div className="pointer-events-auto flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-primary text-neutral-950 font-bold py-8 px-12 rounded-xl hover:bg-primary/90 hover:scale-105 transition-all text-lg">
                                <a href={cta.href}>{cta.label}</a>
                            </Button>
                            <Button variant="outline" asChild size="lg" className="bg-transparent border-primary/50 text-white font-bold py-8 px-12 rounded-xl hover:bg-primary hover:text-neutral-950 transition-all text-lg">
                                <a href="#about">Our Story</a>
                            </Button>
                        </div>

                        <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 opacity-80">
                            {stats.map((stat, i) => (
                                <div key={stat.label} className="flex items-center gap-12">
                                    <div className="text-center">
                                        <p className="font-bold text-3xl text-primary">{stat.value}</p>
                                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/50">{stat.label}</p>
                                    </div>
                                    {i < stats.length - 1 && (
                                        <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-20 lg:mt-0 relative flex justify-center">
                        <div className="absolute inset-0 bg-primary/20 blur-[140px] rounded-full scale-75 animate-pulse"></div>
                        <img
                            alt="Premium Honey"
                            className="relative z-10 w-full max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] rounded-3xl transform hover:rotate-2 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0L_BQdqccowYhXvVi76udrVYtJl6GbN4D88OUKXBeCLKMdNSQybry_H0yeahtJrEQb9Ku3cjPdtdcBZE2XYiM5cxApvbXgLQ9bvTIU1FhQhFUHKa6uW3l7GO-UBubZFyGqd51_4ZRRE3veRgY9F3gJslXTmbTNzvI1oKI0-cL2zuK7wjDMQQIKs8833m4wiTOO0Pdx3-caRmeOl3EmuHrXhSHFvYn8CjMEG5-R3niajgrvOFxlH3nLrM5nsasjvM9MTLkgvmZVLg"
                        />
                    </div>
                </div>
            </HexagonBackground>

        </section>
    );
}
