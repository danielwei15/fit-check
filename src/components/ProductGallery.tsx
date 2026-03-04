import Image from "next/image";

const productImages = [
  "https://ext.same-assets.com/1677610041/3416554245.jpeg",
  "https://ext.same-assets.com/1677610041/2480814662.jpeg",
  "https://ext.same-assets.com/1677610041/1727337546.jpeg",
  "https://ext.same-assets.com/1677610041/1569765907.jpeg",
];

export default function ProductGallery() {
  return (
    <div className="flex flex-col">
      {productImages.map((src, index) => (
        <div
          key={src}
          className="relative bg-white"
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src={src}
            alt={`RECODE Black Jacket Patch Blazer - Image ${index + 1}`}
            fill
            className="object-contain"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      ))}
    </div>
  );
}
