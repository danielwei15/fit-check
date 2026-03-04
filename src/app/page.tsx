"use client";

import Header from "@/components/Header";
import ProductInfo from "@/components/ProductInfo";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import RecommendedProducts from "@/components/RecommendedProducts";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="px-4 lg:px-10 xl:px-16">
          {/* Mobile: single column */}
          <div className="flex flex-col lg:hidden py-4 gap-6">
            <ProductDetails />
            <ProductGallery />
            <div className="border-t border-[#f0f0f0] pt-6">
              <ProductInfo />
            </div>
          </div>

          {/* Desktop: 3-column layout */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_2.2fr_1fr] gap-8 xl:gap-12 py-6">
            <div className="sticky top-[100px] self-start">
              <ProductInfo />
            </div>
            <div>
              <ProductGallery />
            </div>
            <div className="sticky top-[100px] self-start">
              <ProductDetails />
            </div>
          </div>
        </div>

        <RecommendedProducts />
      </main>

      <Footer />
    </div>
  );
}
