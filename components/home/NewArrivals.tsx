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

const newArrivals = [
  {
    id: 1,
    name: "Travel Backpack",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    rating: "4.6",
    reviews: "421",
    price: "$79.99",
    href: "/product/travel-backpack",
  },
  {
    id: 2,
    name: "Summer Dress",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
    rating: "4.6",
    reviews: "683",
    price: "$69.99",
    href: "/product/summer-dress",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=85",
    rating: "4.7",
    reviews: "512",
    price: "$89.99",
    href: "/product/casual-sneakers",
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    rating: "4.5",
    reviews: "580",
    price: "$99.99",
    href: "/product/lightweight-jacket",
  },
  {
    id: 5,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    rating: "4.8",
    reviews: "1.1K",
    price: "$149.99",
    href: "/product/smart-watch",
  },
  {
    id: 6,
    name: "Tote Bag",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85",
    rating: "4.7",
    reviews: "674",
    price: "$39.99",
    href: "/product/tote-bag",
  },
  {
    id: 7,
    name: "Minimal Sneakers",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=85",
    rating: "4.8",
    reviews: "392",
    price: "$94.99",
    href: "/product/minimal-sneakers",
  },
  {
    id: 8,
    name: "Classic Shirt",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    rating: "4.6",
    reviews: "318",
    price: "$54.99",
    href: "/product/classic-shirt",
  },
];

export default function NewArrivals() {
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
              New Arrivals
            </p>

            <h2 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900 sm:text-[26px] lg:text-[28px]">
              Fresh Picks for You
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop/new-arrivals"
              className="
                group hidden items-center gap-1
                text-xs font-semibold text-slate-700
                transition-colors duration-200
                hover:text-emerald-700
                sm:flex
              "
            >
              View All

              <ArrowRight
                size={13}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>

            <div className="hidden gap-1.5 md:flex">
              <button
                type="button"
                aria-label="Previous new arrivals"
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
                aria-label="Next new arrivals"
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
          {newArrivals.map((product) => (
            <article
              key={product.id}
              className="
                group relative
                min-w-[58%]
                snap-start
                overflow-hidden
                rounded-2xl
                border border-slate-100
                bg-white
                shadow-[0_3px_18px_rgba(15,23,42,0.035)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-200
                hover:shadow-[0_14px_35px_rgba(15,23,42,0.10)]
                sm:min-w-[31%]
                md:min-w-[23%]
                lg:min-w-[15.8%]
              "
            >
              {/* Product Image */}
              <Link href={product.href} className="block">
                <div className="relative aspect-[0.95/1] overflow-hidden bg-slate-50">

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

                  {/* New Badge */}
                  <span
                    className="
                      absolute left-2.5 top-2.5
                      rounded-full
                      bg-white/95
                      px-2.5 py-1
                      text-[8px] font-bold
                      uppercase tracking-wide
                      text-emerald-800
                      shadow-sm
                      backdrop-blur-sm
                    "
                  >
                    New
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
                    <Heart size={13} />
                  </button>

                  {/* Hover Quick Action */}
                  <div
                    className="
                      absolute inset-x-2.5 bottom-2.5
                      translate-y-3
                      opacity-0
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        flex w-full items-center
                        justify-center gap-1.5
                        rounded-full
                        bg-white/95
                        px-3 py-2
                        text-[9px] font-semibold
                        text-slate-800
                        shadow-lg
                        backdrop-blur-sm
                      "
                    >
                      <ShoppingCart size={11} />
                      Quick View
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product Details */}
              <div className="p-3 sm:p-3.5">

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
                    size={10}
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
                <div className="mt-1.5">
                  <span className="text-xs font-bold text-slate-900 sm:text-sm">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-0.5 w-0
                  bg-emerald-700
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-3 flex items-center justify-between sm:hidden">
          <span className="text-[10px] text-slate-400">
            Swipe to explore more
          </span>

          <Link
            href="/shop/new-arrivals"
            className="
              flex items-center gap-1
              text-[10px] font-semibold
              text-slate-700
            "
          >
            View All
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
}