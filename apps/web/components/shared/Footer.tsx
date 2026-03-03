"use client";

import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    items: FooterLink[];
}

interface FooterProps {
    about: string;
    links: FooterSection[];
    newsletter: {
        title: string;
        description: string;
        placeholder: string;
        cta: string;
    };
    copyright: string;
}

export function Footer({ about, links, newsletter, copyright }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-forest text-white pt-20 pb-10 relative overflow-hidden">
            <div className="absolute inset-0 honeycomb-bg opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-primary text-3xl font-bold">HG</span>
                            <span className="font-display text-2xl font-bold tracking-tight text-primary">
                                Himalayan Gold
                            </span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            {about}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-forest transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-forest transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-forest transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {links.map((section) => (
                        <div key={section.title}>
                            <h5 className="font-bold text-lg mb-6 text-primary">{section.title}</h5>
                            <ul className="space-y-4 text-white/70">
                                {section.items.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="hover:text-primary transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h5 className="font-bold text-lg mb-6 text-primary">{newsletter.title}</h5>
                        <p className="text-sm text-white/70 mb-4">{newsletter.description}</p>
                        <form className="flex flex-col gap-3">
                            <input
                                className="bg-white/10 border border-primary/30 rounded px-4 py-2 focus:outline-none focus:border-primary text-white"
                                placeholder={newsletter.placeholder}
                                type="email"
                            />
                            <Button className="bg-primary text-forest font-bold py-6 hover:bg-white transition-all">
                                {newsletter.cta}
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/50 text-sm">{copyright}</p>
                    <div className="flex items-center space-x-6 opacity-30">
                        <span>Visa</span>
                        <span>PayPal</span>
                        <span>Mastercard</span>
                    </div>
                </div>
            </div>
            <button
                onClick={scrollToTop}
                className="absolute bottom-10 right-10 bg-primary text-forest w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
}
