import { Button } from "@/components/ui/button";

interface SaleBannerProps {
  title: string;
  description: string;
  code: string;
  cta: string;
}

export function SaleBanner({ title, description, code, cta }: SaleBannerProps) {
  return (
    <section className="relative py-16 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 honeycomb-bg pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-forest text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-4xl font-bold font-display mb-2">{title}</h3>
          <p className="text-lg font-medium">
            {description} Use code:{" "}
            <span className="bg-forest text-primary px-3 py-1 rounded-lg ml-2 font-bold font-mono">
              {code}
            </span>
          </p>
        </div>
        <Button
          size="lg"
          className="bg-forest text-white px-10 py-8 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
        >
          {cta}
        </Button>
      </div>
    </section>
  );
}
