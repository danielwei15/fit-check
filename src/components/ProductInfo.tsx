"use client";

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

export default function ProductInfo() {
  return (
    <div className="text-[12px] leading-[1.7] text-[#333]">
      <a
        href="#"
        className="text-[13px] uppercase tracking-[0.08em] font-medium hover:underline underline-offset-2 block text-black"
      >
        RECODE
      </a>
      <h1 className="text-[14px] mt-1 text-[#666] font-normal">
        Black Jacket Patch Blazer
      </h1>

      <div className="mt-6">
        <p className="mb-4">
          Paneled wool twill and stretch wool-blend twill blazer.
        </p>
        <ul className="mb-4">
          {itemFeatures.map((feature) => (
            <li key={feature}>· {feature}</li>
          ))}
        </ul>
        <p className="mb-4">This item is part of a limited run of 11.</p>
        <p className="mb-4">Supplier color: Black</p>
        <p className="mb-1">
          Body 1: 100% wool. Body 2: 54% polyester, 44% wool, 2% polyurethane.
        </p>
        <p className="mb-4">Lining: 100% cupra.</p>
        <p className="mb-4">Made in South Korea.</p>
        <p className="text-[#888]">261448M195000</p>
      </div>
    </div>
  );
}
