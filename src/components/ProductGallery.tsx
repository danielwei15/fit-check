"use client";

import { useState } from "react";
import Image from "next/image";

const productImages = [
  "https://ext.same-assets.com/1677610041/3416554245.jpeg",
  "https://ext.same-assets.com/1677610041/2480814662.jpeg",
  "https://ext.same-assets.com/1677610041/1727337546.jpeg",
  "https://ext.same-assets.com/1677610041/1569765907.jpeg",
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % productImages.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div
        className="relative bg-white cursor-pointer select-none"
        onClick={goToNext}
        style={{ aspectRatio: "3/4" }}
      >
        <Image
          src={productImages[activeIndex]}
          alt="RECODE Black Jacket Patch Blazer"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-8 h-[2px] transition-colors duration-200 ${
              activeIndex === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
