"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    text: "Absolutely love the quality! Everything arrived quickly and looked exactly like the pictures. I'll definitely be shopping here again.",
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Verified Customer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    text: "Great products, easy checkout and super fast delivery. The whole shopping experience was smooth from start to finish.",
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Verified Customer",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    text: "The products are even better in person. Customer support was also incredibly helpful when I had a question about my order.",
  },
  {
    id: 4,
    name: "Daniel Smith",
    role: "Verified Customer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    rating: 4,
    text: "I've ordered several times now and the quality has always been consistent. Fast shipping and great value for money.",
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Verified Customer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85",
    rating: 5,
    text: "Beautiful products and such a clean shopping experience. I found exactly what I was looking for without any hassle.",
  },
];

export default function Testimonials() {
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
    <section className="w-full bg-[#f8faf9] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">
              Customer Reviews
            </p>

            <h2
              className="
                text-[23px] font-bold
                tracking-[-0.035em]
                text-slate-900
                sm:text-[27px]
                lg:text-[30px]
              "
            >
              Loved by our customers
            </h2>

            <p className="mt-1.5 max-w-md text-[11px] leading-5 text-slate-500 sm:text-xs">
              See what our customers have to say about their shopping
              experience.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="hidden gap-1.5 md:flex">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollSlider("left")}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-600
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
              aria-label="Next testimonials"
              onClick={() => scrollSlider("right")}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-600
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

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-3
            scrollbar-none
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-5
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                group relative
                min-w-[86%]
                snap-start
                overflow-hidden
                rounded-2xl
                border border-slate-200/80
                bg-white
                p-5
                shadow-[0_4px_20px_rgba(15,23,42,0.035)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-emerald-100
                hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]
                sm:min-w-[48%]
                lg:min-w-[31.5%]
              "
            >
              {/* Quote Icon */}
              <div
                className="
                  absolute right-5 top-5
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-emerald-50
                  text-emerald-700
                  transition-all duration-300
                  group-hover:rotate-6
                  group-hover:bg-emerald-700
                  group-hover:text-white
                "
              >
                <Quote size={15} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={12}
                    fill={index < testimonial.rating ? "currentColor" : "none"}
                    className={
                      index < testimonial.rating
                        ? "text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p
                className="
                  min-h-[88px]
                  max-w-[90%]
                  text-[11px]
                  leading-[1.8]
                  text-slate-600
                  sm:text-xs
                "
              >
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="
                    h-9 w-9
                    rounded-full
                    object-cover
                    ring-2 ring-white
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="truncate text-[10px] font-bold text-slate-900 sm:text-[11px]">
                      {testimonial.name}
                    </h3>

                    <BadgeCheck
                      size={12}
                      className="shrink-0 text-emerald-600"
                      fill="currentColor"
                    />
                  </div>

                  <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Accent */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[2px] w-0
                  bg-emerald-700
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-[10px] text-slate-400 sm:text-[11px]">
            Join thousands of happy customers
          </span>

          <Link
            href="/reviews"
            className="
              group flex items-center gap-1.5
              text-[10px] font-semibold
              text-slate-700
              transition-colors duration-200
              hover:text-emerald-700
              sm:text-[11px]
            "
          >
            Read all reviews

            <ArrowRight
              size={12}
              className="
                transition-transform duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Mobile Hint */}
        <div className="mt-3 text-center md:hidden">
          <span className="text-[9px] text-slate-400">
            Swipe to read more reviews
          </span>
        </div>
      </div>
    </section>
  );
}