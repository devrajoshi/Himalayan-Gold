import { cn } from "@/lib/utils";

interface SectionTitleProps {
  script: string;
  title: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ script, title, className, light = false }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <p className="font-script text-primary text-3xl mb-2">{script}</p>
      <h2
        className={cn(
          "font-display text-5xl font-bold mb-4",
          light ? "text-white" : "text-forest dark:text-white",
        )}
      >
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto"></div>
    </div>
  );
}
