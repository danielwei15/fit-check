"use client";

import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-4 lg:py-6">
            {/* Product Gallery - Left Side */}
            <div className="lg:w-[58%]">
              <ProductGallery />
            </div>

            {/* Product Details - Right Side */}
            <div className="lg:w-[42%] lg:pt-2">
              <ProductDetails />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
