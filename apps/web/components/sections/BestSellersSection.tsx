"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
}

interface BestSellersProps {
  script: string;
  title: string;
  products: Product[];
}

export function BestSellersSection({ script, title, products }: BestSellersProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      className="py-32 bg-background-light dark:bg-background-dark overflow-hidden"
      id="shop"
    >
      <div className="container mx-auto px-6">
        <SectionTitle script={script} title={title} />

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="transition-all duration-500 ease-in-out py-8">
                  <ProductCard {...product} featured={index === current} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
