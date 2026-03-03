import * as Icons from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  script: string;
  title: string;
  description: string;
  items: BenefitItem[];
  testimonial: {
    quote: string;
    author: string;
  };
}

const iconMap: Record<string, any> = {
  eco: Icons.Leaf,
  health_and_safety: Icons.ShieldCheck,
  science: Icons.FlaskConical,
  public: Icons.Globe,
  grade: Icons.Star,
};

export function BenefitsSection({ script, title, description, items, testimonial }: BenefitsProps) {
  return (
    <section className="py-32 relative overflow-hidden" id="benefits">
      <div className="absolute inset-0 bg-forest/5 dark:bg-white/5 skew-y-3 origin-right pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => {
              const Icon = iconMap[item.icon] || Icons.HelpCircle;
              return (
                <div
                  key={item.title}
                  className={cn(
                    "p-8 bg-white dark:bg-background-dark rounded-3xl shadow-xl transition-all hover:scale-105",
                    index % 2 === 1 ? "md:translate-y-8" : "",
                  )}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 className="font-display text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <p className="font-script text-primary text-4xl mb-4">{script}</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest dark:text-white mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{description}</p>
            <div className="bg-forest text-primary p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Icons.Star size={80} />
              </div>
              <p className="text-2xl italic font-medium leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <p className="font-bold tracking-widest uppercase text-sm">— {testimonial.author}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
