import { CheckCircle2 } from "lucide-react";
import { HoneycombGrid, type HoneycombImage } from "./HoneycombGallery";

interface AboutProps {
  script: string;
  title: string;
  content: string[];
  verifiedText: string;
  images: HoneycombImage[];
}

export function AboutSection({ script, title, content, verifiedText, images }: AboutProps) {
  return (
    <section className="py-32 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 flex justify-center">
            <HoneycombGrid images={images} rows={[3, 4, 5]} className="scale-90" />
          </div>
          <div className="lg:w-1/2">
            <p className="font-script text-primary text-4xl mb-4">{script}</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest dark:text-white mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-6 mb-10 text-muted-foreground text-lg leading-relaxed">
              {content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex items-center gap-4 text-forest dark:text-primary font-bold text-xl italic bg-forest/5 p-6 rounded-2xl border border-primary/10 w-fit">
              <CheckCircle2 className="text-primary" size={28} />
              <span>{verifiedText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
