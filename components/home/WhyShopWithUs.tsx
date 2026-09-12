"use client";

import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const benefits = [
  {
    title: "Fast & Free Delivery",
    description: "On orders over $50",
    icon: Truck,
    href: "/shipping",
  },
  {
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: ShieldCheck,
    href: "/payment-security",
  },
  {
    title: "Easy Returns",
    description: "Within 30 days",
    icon: RotateCcw,
    href: "/returns",
  },
  {
    title: "24/7 Support",
    description: "We're here to help",
    icon: Headphones,
    href: "/contact",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Main Container */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-emerald-100/80
            bg-[#f4f9f6]
            shadow-[0_4px_25px_rgba(15,23,42,0.035)]
          "
        >
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-[1.25fr_repeat(4,1fr)]
            "
          >

            {/* Section Intro */}
            <div
              className="
                col-span-2
                flex items-center
                border-b border-emerald-100/80
                px-5 py-5
                lg:col-span-1
                lg:border-b-0
                lg:border-r
                lg:px-7
                lg:py-6
              "
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700 sm:text-[10px]">
                  Why Shop With Us?
                </p>

                <h2
                  className="
                    mt-1
                    text-[16px] font-bold
                    tracking-[-0.025em]
                    text-slate-900
                    sm:text-[18px]
                  "
                >
                  Your satisfaction is our priority.
                </h2>
              </div>
            </div>

            {/* Benefits */}
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Link
                  key={benefit.title}
                  href={benefit.href}
                  className={`
                    group relative
                    flex items-center
                    gap-3
                    px-4 py-5
                    transition-all duration-300
                    hover:bg-white
                    sm:px-5
                    lg:px-5
                    lg:py-6

                    ${
                      index < 2
                        ? "border-b border-emerald-100/80 lg:border-b-0"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "border-r border-emerald-100/80 lg:border-r-0"
                        : ""
                    }

                    lg:border-l lg:border-emerald-100/80
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-emerald-100
                      bg-white
                      text-slate-600
                      shadow-[0_2px_8px_rgba(15,23,42,0.04)]
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:scale-105
                      group-hover:bg-emerald-700
                      group-hover:text-white
                      group-hover:shadow-[0_6px_15px_rgba(5,150,105,0.18)]
                      sm:h-10 sm:w-10
                    "
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        text-[10px] font-bold
                        text-slate-800
                        transition-colors duration-200
                        group-hover:text-emerald-800
                        sm:text-[11px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p className="mt-0.5 truncate text-[9px] text-slate-500 sm:text-[10px]">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <ArrowRight
                    size={12}
                    className="
                      ml-auto hidden shrink-0
                      text-slate-300
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:text-emerald-700
                      sm:block
                    "
                  />

                  {/* Bottom Hover Indicator */}
                  <span
                    className="
                      absolute bottom-0 left-0
                      h-[2px] w-0
                      bg-emerald-700
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}