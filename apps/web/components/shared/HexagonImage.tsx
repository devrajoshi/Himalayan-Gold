import { cn } from "@/lib/utils";

interface HexagonImageProps {
    src: string;
    alt: string;
    className?: string;
    borderWidth?: number;
    borderColor?: string;
}

export function HexagonImage({
    src,
    alt,
    className,
    borderWidth = 4,
    borderColor = "border-primary",
}: HexagonImageProps) {
    return (
        <div className={cn("hexagon-container relative overflow-hidden", className)}>
            <div
                className={cn("absolute inset-0 z-10 pointer-events-none", borderColor)}
                style={{ borderWidth: `${borderWidth}px`, clipPath: 'inherit' }}
            />
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
