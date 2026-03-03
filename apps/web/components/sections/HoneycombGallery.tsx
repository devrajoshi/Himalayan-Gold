import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HoneycombImage {
    src: string;
    alt: string;
}

interface HoneycombGridProps {
    images: HoneycombImage[];
    rows: number[];
    className?: string;
}

export function HoneycombGrid({ images, rows, className }: HoneycombGridProps) {
    let imageIndex = 0;

    return (
        <div className={cn("flex flex-col items-center select-none", className)}>
            {rows.map((count, rowIndex) => {
                const rowImages = images.slice(imageIndex, imageIndex + count);
                imageIndex += count;

                return (
                    <div
                        key={rowIndex}
                        className={cn(
                            "flex",
                            rowIndex !== rows.length - 1 ? "-mb-11" : ""
                        )}
                    >
                        {rowImages.map((img, i) => (
                            <div key={i} className="hexagon shadow-xl">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

interface HoneycombGalleryProps {
    title: string;
    description: string;
    images: HoneycombImage[];
    rows: number[];
}

export function HoneycombGallery({ title, description, images, rows }: HoneycombGalleryProps) {
    return (
        <section className="py-32 bg-white/40 backdrop-blur-md relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-forest mb-6 italic">{title}</h2>
                    <p className="text-forest/70 max-w-2xl mx-auto italic text-xl">
                        {description}
                    </p>
                </div>

                <HoneycombGrid images={images} rows={rows} />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
