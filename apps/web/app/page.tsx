import { CartDrawer } from "@/components/features/cart/CartDrawer";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HoneycombGallery } from "@/components/sections/HoneycombGallery";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SaleBanner } from "@/components/sections/SaleBanner";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import content from "../content.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar name={content.site.name} links={content.navigation} />

      <HeroSection
        script={content.hero.script}
        title={content.hero.title}
        description={content.hero.description}
        cta={content.hero.cta}
        stats={content.hero.stats}
      />

      <AboutSection
        script={content.about.script}
        title={content.about.title}
        content={content.about.content}
        verifiedText={content.about.verifiedText}
        images={content.about.images}
      />

      <SaleBanner
        title={content.saleBanner.title}
        description={content.saleBanner.description}
        code={content.saleBanner.code}
        cta={content.saleBanner.cta}
      />

      <BestSellersSection
        script={content.bestSellers.script}
        title={content.bestSellers.title}
        products={content.bestSellers.products}
      />

      <BenefitsSection
        script={content.benefits.script}
        title={content.benefits.title}
        description={content.benefits.description}
        items={content.benefits.items}
        testimonial={content.benefits.testimonial}
      />

      <ReviewsSection
        script={content.reviews.script}
        title={content.reviews.title}
        items={content.reviews.items}
        cta={content.reviews.cta}
      />

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
