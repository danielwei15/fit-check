"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sizes = ["XS", "S", "M", "L", "XL"];

const itemFeatures = [
  "Asymmetric construction",
  "Raw edges throughout",
  "Y-neck with modified peaked lapel",
  "Offset double-breasted button closure",
  "Flap pockets at waist",
  "Padded shoulders",
  "Surgeon's cuffs",
  "Twin vents at back hem",
  "Welt pockets at interior",
  "Full satin lining",
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  return (
    <div className="max-w-[460px]">
      {/* Brand & Product Name */}
      <div className="flex justify-between items-start gap-4 mb-2">
        <div>
          <a
            href="#"
            className="text-[13px] uppercase tracking-[0.08em] font-medium hover:underline underline-offset-2 block"
          >
            RECODE
          </a>
          <h1 className="text-[14px] mt-0.5 text-[#666]">
            Black Jacket Patch Blazer
          </h1>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-[14px]">$790 USD</p>
          <p className="text-[11px] text-[#888] mt-0.5">
            Duties calculated at checkout.
          </p>
        </div>
      </div>

      {/* Klarna */}
      <p className="text-[11px] text-[#666] mb-5">
        from $49/month, or 4 payments at 0% interest with klarna{" "}
        <a href="#" className="underline underline-offset-2 hover:no-underline">
          Check purchase power
        </a>
      </p>

      {/* Size Selector */}
      <div className="relative mb-4">
        <button
          onClick={() => setShowSizeDropdown(!showSizeDropdown)}
          className="w-full flex items-center justify-between px-4 py-3 border border-[#e5e5e5] text-[11px] uppercase tracking-[0.08em] hover:border-black transition-colors"
        >
          <span className={selectedSize ? "text-black" : "text-[#666]"}>
            {selectedSize || "Select a size"}
          </span>
          <ChevronDown
            size={14}
            strokeWidth={1.5}
            className={`transition-transform ${showSizeDropdown ? "rotate-180" : ""}`}
          />
        </button>

        {showSizeDropdown && (
          <div className="absolute top-full left-0 right-0 bg-white border border-[#e5e5e5] border-t-0 z-10 shadow-sm">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setShowSizeDropdown(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.08em] hover:bg-gray-50 transition-colors ${
                  selectedSize === size ? "bg-gray-100" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-0 mb-4">
        <button className="flex-1 bg-black text-white py-3.5 text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#333] transition-colors">
          Add to Bag
        </button>
        <button className="px-5 border border-l-0 border-[#e5e5e5] text-[11px] uppercase tracking-[0.08em] hover:border-black transition-colors whitespace-nowrap">
          Add to Wishlist
        </button>
      </div>

      {/* Model Info */}
      <p className="text-[11px] text-[#666] mb-6">
        Model is 6ft 1" and wears size L.{" "}
        <a href="#" className="underline underline-offset-2 hover:no-underline uppercase tracking-[0.05em]">
          Size Guide
        </a>
      </p>

      {/* Item Info */}
      <div className="border-t border-[#f0f0f0] pt-5">
        <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium mb-3">
          Item Info
        </h3>
        <p className="text-[12px] leading-[1.6] text-[#333] mb-4">
          Paneled wool twill and stretch wool-blend twill blazer.
        </p>
        <ul className="mb-4">
          {itemFeatures.map((feature, index) => (
            <li key={index} className="text-[12px] text-[#333] leading-[1.8]">
              · {feature}
            </li>
          ))}
        </ul>
        <p className="text-[12px] text-[#333] mb-4 leading-[1.6]">
          This item is part of a limited run of 11.
        </p>
        <p className="text-[12px] text-[#333] mb-4">
          Supplier color: Black
        </p>
        <p className="text-[12px] text-[#333] mb-1 leading-[1.6]">
          Body 1: 100% wool. Body 2: 54% polyester, 44% wool, 2% polyurethane.
        </p>
        <p className="text-[12px] text-[#333] mb-4">
          Lining: 100% cupra.
        </p>
        <p className="text-[12px] text-[#333] mb-4">Made in South Korea.</p>
        <p className="text-[12px] text-[#888]">261448M195000</p>
      </div>

      {/* Shipping Info */}
      <div className="border-t border-[#f0f0f0] pt-5 mt-5">
        <p className="text-[11px] text-[#666] leading-[1.6]">
          United States : Free shipping on orders over $300 USD and free returns on all orders.
        </p>
        <a
          href="#"
          className="text-[11px] underline underline-offset-2 hover:no-underline mt-3 inline-block"
        >
          Live Assistance
        </a>
      </div>
    </div>
  );
}
