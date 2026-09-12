"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Men's Fashion",
    subtitle: "Trendy & Comfortable",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85",
    href: "/shop/mens-fashion",
  },
  {
    title: "Women's Fashion",
    subtitle: "Elegant & Stylish",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=85",
    href: "/shop/womens-fashion",
  },
  {
    title: "Shoes",
    subtitle: "Step into Comfort",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    href: "/shop/shoes",
  },
  {
    title: "Electronics",
    subtitle: "Latest Tech & Gadgets",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    href: "/shop/electronics",
  },
  {
    title: "Accessories",
    subtitle: "Complete Your Look",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
    href: "/shop/accessories",
  },
  {
    title: "Home & Living",
    subtitle: "Make It Cozy",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85",
    href: "/shop/home-living",
  },
];

export default function ShopByCategory() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.75;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 sm:text-[11px]">
              Shop by Category
            </p>

            <h2 className="text-[22px] font-bold tracking-[-0.03em] text-slate-900 sm:text-[26px] lg:text-[28px]">
              Explore Our Popular Categories
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="hidden gap-1.5 md:flex">
            <button
              type="button"
              aria-label="Previous categories"
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
              aria-label="Next categories"
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

        {/* Category Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-3 overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-2
            scrollbar-none
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-4
          "
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="
                group relative
                min-w-[calc(50%-6px)]
                snap-start
                overflow-hidden
                rounded-2xl
                border border-slate-100
                bg-white
                shadow-[0_3px_18px_rgba(15,23,42,0.04)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-200
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-600
                focus-visible:ring-offset-2
                sm:min-w-[calc(33.333%-11px)]
                lg:min-w-[calc(16.666%-14px)]
              "
            >
              {/* Image */}
              <div className="relative aspect-[1.05/1] overflow-hidden bg-slate-50">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t
                    from-black/15
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between gap-2 px-3 py-3 sm:px-3.5 sm:py-3.5">
                <div className="min-w-0">
                  <h3
                    className="
                      truncate
                      text-[11px] font-bold
                      text-slate-900
                      transition-colors duration-200
                      group-hover:text-emerald-800
                      sm:text-xs
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-0.5 truncate
                      text-[9px] leading-4
                      text-slate-500
                      sm:text-[10px]
                    "
                  >
                    {category.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    flex h-7 w-7 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-slate-50
                    text-slate-500
                    transition-all duration-300
                    group-hover:bg-slate-900
                    group-hover:text-white
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={13} />
                </div>
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
            </Link>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-3 flex items-center sm:hidden">
          <span className="text-[10px] text-slate-400">
            Swipe to explore more
          </span>
        </div>
      </div>
    </section>
  );
}