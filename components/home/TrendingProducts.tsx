"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    rating: "4.8",
    reviews: "1.2K",
    price: "$119.99",
    oldPrice: "$149.99",
    discount: "-20%",
    href: "/product/nike-air-max-270",
  },
  {
    id: 2,
    name: "Fossil Chronograph Watch",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85",
    rating: "4.7",
    reviews: "866",
    price: "$169.99",
    oldPrice: "$199.99",
    discount: "-15%",
    href: "/product/fossil-chronograph-watch",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    rating: "4.9",
    reviews: "2.3K",
    price: "$299.99",
    oldPrice: "$399.99",
    discount: "-25%",
    href: "/product/sony-wh-1000xm5",
  },
  {
    id: 4,
    name: "Essentials Hoodie",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    rating: "4.6",
    reviews: "1.8K",
    price: "$48.99",
    oldPrice: "$69.99",
    discount: "-30%",
    href: "/product/essentials-hoodie",
  },
  {
    id: 5,
    name: "Ray-Ban Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
    rating: "4.7",
    reviews: "742",
    price: "$129.99",
    oldPrice: "$159.99",
    discount: "-18%",
    href: "/product/ray-ban-sunglasses",
  },
  {
    id: 6,
    name: "Adidas Running Shoes",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=85",
    rating: "4.8",
    reviews: "932",
    price: "$99.99",
    oldPrice: "$129.99",
    discount: "-23%",
    href: "/product/adidas-running-shoes",
  },
  {
    id: 7,
    name: "Classic Leather Bag",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    rating: "4.7",
    reviews: "521",
    price: "$89.99",
    oldPrice: "$119.99",
    discount: "-25%",
    href: "/product/classic-leather-bag",
  },
];

export default function TrendingProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.78;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 sm:text-[11px]">
              Trending Now
            </p>

            <h2 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900 sm:text-[26px] lg:text-[28px]">
              Bestseller This Week
            </h2>

            <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
              Loved by thousands. Don&apos;t miss out!
            </p>
          </div>

          {/* Slider Controls */}
          <div className="hidden gap-1.5 md:flex">
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => scrollSlider("left")}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-slate-200
                bg-white text-slate-600
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:bg-slate-50
                hover:text-slate-900
                active:scale-95
              "
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              aria-label="Next products"
              onClick={() => scrollSlider("right")}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-slate-200
                bg-white text-slate-600
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:bg-slate-50
                hover:text-slate-900
                active:scale-95
              "
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-3 overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-3
            scrollbar-none
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-4
          "
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="
                group relative
                min-w-[72%]
                snap-start
                overflow-hidden
                rounded-2xl
                border border-slate-100
                bg-white
                shadow-[0_3px_18px_rgba(15,23,42,0.04)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-200
                hover:shadow-[0_14px_35px_rgba(15,23,42,0.11)]
                sm:min-w-[45%]
                md:min-w-[30%]
                lg:min-w-[19%]
              "
            >
              {/* Product Image */}
              <Link
                href={product.href}
                className="block"
                aria-label={`View ${product.name}`}
              >
                <div className="relative aspect-[1/0.82] overflow-hidden bg-slate-50">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="
                      h-full w-full object-cover
                      transition-transform duration-500
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Discount Badge */}
                  <span
                    className="
                      absolute left-2.5 top-2.5
                      rounded-full
                      bg-[#063f38]
                      px-2.5 py-1
                      text-[9px] font-bold
                      text-white
                      shadow-sm
                    "
                  >
                    {product.discount}
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    onClick={(e) => e.preventDefault()}
                    className="
                      absolute right-2.5 top-2.5
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      bg-white/90
                      text-slate-500
                      shadow-sm
                      backdrop-blur-sm
                      transition-all duration-200
                      hover:scale-110
                      hover:bg-white
                      hover:text-red-500
                    "
                  >
                    <Heart
                      size={13}
                      className="transition-transform duration-200"
                    />
                  </button>

                  {/* Image Hover Overlay */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-3 sm:p-3.5">

                {/* Product Name */}
                <Link href={product.href}>
                  <h3
                    className="
                      truncate
                      text-[10px] font-bold
                      text-slate-800
                      transition-colors duration-200
                      hover:text-emerald-700
                      sm:text-[11px]
                    "
                  >
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="mt-1.5 flex items-center gap-1">
                  <Star
                    size={11}
                    fill="currentColor"
                    className="text-amber-400"
                  />

                  <span className="text-[9px] font-semibold text-slate-700">
                    {product.rating}
                  </span>

                  <span className="text-[9px] text-slate-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 sm:text-sm">
                    {product.price}
                  </span>

                  <span className="text-[9px] text-slate-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Add To Cart */}
                <button
                  type="button"
                  className="
                    mt-3 flex w-full
                    items-center justify-center gap-1.5
                    rounded-full
                    bg-[#06453d]
                    px-3 py-2
                    text-[9px] font-semibold
                    text-white
                    transition-all duration-300
                    hover:bg-[#07352f]
                    hover:shadow-[0_6px_18px_rgba(6,69,61,0.22)]
                    active:scale-[0.98]
                    sm:text-[10px]
                  "
                >
                  <ShoppingCart size={12} />
                  Add to Cart
                </button>
              </div>

              {/* Hover Border */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  rounded-2xl
                  ring-1 ring-inset ring-transparent
                  transition-all duration-300
                  group-hover:ring-slate-200
                "
              />
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-2 flex items-center sm:hidden">
          <span className="text-[10px] text-slate-400">
            Swipe to explore more products
          </span>
        </div>
      </div>
    </section>
  );
}