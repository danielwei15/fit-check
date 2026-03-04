"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sizes = [
  { label: "XS", note: "" },
  { label: "S", note: "" },
  { label: "M", note: "Only 2 remaining" },
  { label: "L", note: "Only 1 remaining" },
  { label: "XL", note: "" },
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  const selectedSizeObj = sizes.find((s) => s.label === selectedSize);

  return (
    <div>
      <a
        href="#"
        className="text-[13px] uppercase tracking-[0.08em] font-medium hover:underline underline-offset-2 block"
      >
        RECODE
      </a>
      <h2 className="text-[14px] mt-0.5 text-[#666] font-normal">
        Black Jacket Patch Blazer
      </h2>

      <p className="text-[14px] mt-4">$790 USD</p>
      <p className="text-[11px] text-[#888] mt-0.5">
        Duties calculated at checkout.
      </p>

      <p className="text-[11px] text-[#666] mt-3 mb-6">
        from $49/month, or 4 payments at 0% interest with klarna{" "}
        <a
          href="#"
          className="underline underline-offset-2 hover:no-underline"
        >
          Check purchase power
        </a>
      </p>

      <div className="relative mb-4">
        <button
          onClick={() => setShowSizeDropdown(!showSizeDropdown)}
          className="w-full flex items-center justify-between px-4 py-3 border border-[#e5e5e5] text-[11px] uppercase tracking-[0.08em] hover:border-black transition-colors"
        >
          <span className={selectedSize ? "text-black" : "text-[#666]"}>
            {selectedSize
              ? `${selectedSize}${selectedSizeObj?.note ? ` — ${selectedSizeObj.note}` : ""}`
              : "Select a size"}
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
                key={size.label}
                onClick={() => {
                  setSelectedSize(size.label);
                  setShowSizeDropdown(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.08em] hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                  selectedSize === size.label ? "bg-gray-100" : ""
                }`}
              >
                <span>{size.label}</span>
                {size.note && (
                  <span className="text-[#888] normal-case">
                    — {size.note}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-0 mb-4">
        <button className="flex-1 bg-black text-white py-3.5 text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#333] transition-colors">
          Add to Bag
        </button>
        <button className="px-5 border border-l-0 border-[#e5e5e5] text-[11px] uppercase tracking-[0.08em] hover:border-black transition-colors whitespace-nowrap">
          Add to Wishlist
        </button>
      </div>

      <p className="text-[11px] text-[#666] mb-6">
        Model is 6ft 1&quot; and wears size L.{" "}
        <a
          href="#"
          className="underline underline-offset-2 hover:no-underline uppercase tracking-[0.05em]"
        >
          Size Guide
        </a>
      </p>

      <div className="border-t border-[#f0f0f0] pt-5">
        <p className="text-[11px] text-[#666] leading-[1.6]">
          United States : Free shipping on orders over $300 USD and free returns
          on all orders.
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
