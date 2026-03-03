import { notFound } from "next/navigation";
import { CartDrawer } from "@/components/features/cart/CartDrawer";
import { ProductDetails } from "@/components/sections/ProductDetails";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import content from "@/content.json";
import { getProductById, products } from "@/lib/mock/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Filter out current product for related section
  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <main className="min-h-screen">
      <Navbar name={content.site.name} links={content.navigation} />

      <ProductDetails product={product} relatedProducts={relatedProducts} />

      <Footer
        about={content.footer.about}
        links={content.footer.links}
        newsletter={content.footer.newsletter}
        copyright={content.footer.copyright}
      />

      <CartDrawer />
    </main>
  );
}
