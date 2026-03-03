"use client";

import { ChevronRight, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { useStore } from "@/hooks/useStore";
import { type Product } from "@/lib/mock/products";
import { useCart } from "@/store/useCart";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const cart = useStore(useCart, (state) => state);

  const handleAddToCart = () => {
    if (cart) {
      for (let i = 0; i < quantity; i++) {
        cart.addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        });
      }
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-background transition-colors duration-300">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={14} />
          </li>
          <li>
            <Link className="hover:text-primary" href="/#shop">
              Shop Honey
            </Link>
          </li>
          <li>
            <ChevronRight size={14} />
          </li>
          <li className="text-forest dark:text-primary font-semibold">{product.name}</li>
        </ol>
      </nav>

      {/* Product Hero */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image Area */}
          <div className="lg:w-1/2">
            <div className="relative group bg-white dark:bg-forest/5 rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
              <img
                alt={product.name}
                className="w-full aspect-square object-cover"
                src={product.image}
              />
              {product.tag && (
                <div className="absolute top-6 left-6">
                  <span className="bg-forest text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-forest dark:text-white mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">\${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.reviews[0]?.rating || 5)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }
                  />
                ))}
                <span className="text-muted-foreground text-sm ml-2 self-center">
                  ({product.reviews.length} Reviews)
                </span>
              </div>
            </div>

            <div className="prose prose-forest dark:prose-invert mb-8">
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-muted">
              <div className="flex items-center border border-muted-foreground/20 rounded-lg overflow-hidden h-14 bg-muted/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors text-foreground"
                >
                  <Minus size={16} />
                </button>
                <input
                  className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold text-foreground"
                  readOnly
                  type="number"
                  value={quantity}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 w-full bg-forest text-primary py-7 rounded-lg font-bold text-lg hover:bg-forest/90 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Add to Cart
              </Button>

              <button className="w-14 h-14 border border-muted-foreground/20 rounded-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Purity Badges */}
      <section className="py-16 bg-muted/10 border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {product.purityDetails.map((detail, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {/* Using Lucide icons for consistency */}
                  <span className="text-primary text-3xl font-light">HG</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                  {detail.title}
                </h3>
                <p className="text-muted-foreground text-sm">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Legacy Section */}
      <section className="py-24 honeycomb-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <p className="font-script text-primary text-4xl mb-4">
                {product.story.title.split(" ")[0]}
              </p>
              <h2 className="font-display text-5xl font-bold text-forest dark:text-white mb-8">
                {product.story.title}
              </h2>
              {product.story.content.map((p, i) => (
                <p key={i} className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img
                  alt={product.story.title}
                  className="w-full h-[500px] object-cover"
                  src={product.story.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Details Table */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl font-bold mb-10 text-center text-primary">
              Harvest Details
            </h3>
            <div className="overflow-hidden border border-primary/20 rounded-2xl">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-white/10">
                    <th className="px-8 py-6 font-display text-xl bg-white/5">Altitude</th>
                    <td className="px-8 py-6 text-lg">{product.altitude}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <th className="px-8 py-6 font-display text-xl bg-white/5">Region</th>
                    <td className="px-8 py-6 text-lg">{product.region}</td>
                  </tr>
                  <tr>
                    <th className="px-8 py-6 font-display text-xl bg-white/5">Harvest Season</th>
                    <td className="px-8 py-6 text-lg">{product.harvestSeason}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-script text-primary text-3xl mb-2">Explore More</p>
              <h2 className="font-display text-4xl font-bold text-forest dark:text-white">
                You May Also Like
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedProducts.slice(0, 3).map((rp) => (
              <ProductCard
                key={rp.id}
                id={rp.id}
                name={rp.name}
                price={rp.price}
                description={rp.description}
                image={rp.image}
                tag={rp.tag}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
