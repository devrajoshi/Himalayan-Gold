"use client";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface ReviewItem {
    name: string;
    rating: number;
    comment: string;
}

interface ReviewsProps {
    script: string;
    title: string;
    items: ReviewItem[];
    cta: string;
}

// Customer avatar images
const avatars = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
];

const designations = [
    "Verified Buyer • Organic Enthusiast",
    "Verified Buyer • Wellness Advocate",
    "Verified Buyer • Tea Connoisseur",
    "Verified Buyer • Health Practitioner",
];

export function ReviewsSection({ script, title, items }: ReviewsProps) {
    const testimonials = items.map((item, i) => ({
        quote: item.comment,
        name: item.name,
        designation: designations[i % designations.length]!,
        src: avatars[i % avatars.length]!,
        rating: item.rating,
    }));

    return (
        <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle script={script} title={title} />
                <AnimatedTestimonials testimonials={testimonials} autoplay />
            </div>
        </section>
    );
}
