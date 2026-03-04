import Image from "next/image";

const recommendedProducts = [
  {
    brand: "RECODE",
    name: "Black Wool Blazer",
    price: "$690 USD",
    image: "https://ext.same-assets.com/1677610041/3416554245.jpeg",
  },
  {
    brand: "LEMAIRE",
    name: "Brown Double-Breasted Blazer",
    price: "$1,490 USD",
    image: "https://ext.same-assets.com/1677610041/2480814662.jpeg",
  },
  {
    brand: "OUR LEGACY",
    name: "Navy Wool Blazer",
    price: "$595 USD",
    image: "https://ext.same-assets.com/1677610041/1727337546.jpeg",
  },
  {
    brand: "ACNE STUDIOS",
    name: "Black Tailored Blazer",
    price: "$850 USD",
    image: "https://ext.same-assets.com/1677610041/1569765907.jpeg",
  },
  {
    brand: "DRIES VAN NOTEN",
    name: "Gray Pinstripe Blazer",
    price: "$1,195 USD",
    image: "https://ext.same-assets.com/1677610041/3416554245.jpeg",
  },
  {
    brand: "MAISON MARGIELA",
    name: "Black Deconstructed Blazer",
    price: "$2,290 USD",
    image: "https://ext.same-assets.com/1677610041/2480814662.jpeg",
  },
];

export default function RecommendedProducts() {
  return (
    <div className="border-t border-[#e5e5e5] mt-12">
      <div className="px-4 lg:px-10 xl:px-16 py-10">
        <h3 className="text-[11px] uppercase tracking-[0.12em] font-medium mb-8">
          You May Also Like
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {recommendedProducts.map((product) => (
            <a
              key={`${product.brand}-${product.name}`}
              href="#"
              className="flex-shrink-0 w-[200px] lg:w-[240px] group"
            >
              <div
                className="relative bg-[#f5f5f5] mb-3"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  className="object-contain"
                  sizes="240px"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.08em] font-medium group-hover:underline underline-offset-2">
                {product.brand}
              </p>
              <p className="text-[12px] text-[#666] mt-0.5 truncate">
                {product.name}
              </p>
              <p className="text-[12px] mt-1">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
