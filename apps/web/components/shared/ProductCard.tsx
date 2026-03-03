"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStore } from "@/hooks/useStore";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
  featured?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  description,
  image,
  tag,
  featured = false,
}: ProductCardProps) {
  const cart = useStore(useCart, (state) => state);

  return (
    <div
      className={cn(
        "group p-8 rounded-3xl border transition-all text-center",
        featured
          ? "bg-forest border-4 border-primary shadow-2xl scale-105"
          : "bg-white dark:bg-forest/10 border-primary/10 hover:border-primary/50",
      )}
    >
      {tag && featured && (
        <span
          className={cn(
            "inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4",
            featured ? "bg-primary text-forest" : "bg-forest text-primary",
          )}
        >
          {tag}
        </span>
      )}
      <Link href={`/product/${id}`} className="block mb-6 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      <Link href={`/product/${id}`}>
        <h3
          className={cn(
            "font-display text-2xl font-bold mb-2 hover:text-primary transition-colors",
            featured ? "text-white" : "text-forest dark:text-white",
          )}
        >
          {name}
        </h3>
      </Link>
      <p
        className={cn(
          "text-sm mb-4",
          featured ? "text-white/60" : "text-gray-500 dark:text-gray-400",
        )}
      >
        {description}
      </p>
      <p className="text-primary font-bold text-2xl mb-6">\${price.toFixed(2)}</p>
      <Button
        onClick={() => cart?.addItem({ id, name, price, image })}
        className={cn(
          "w-full py-6 rounded-xl font-bold transition-colors",
          featured
            ? "bg-primary text-forest hover:bg-primary/90"
            : "bg-forest text-primary hover:bg-forest/90",
        )}
      >
        Add to Cart
      </Button>
    </div>
  );
}
