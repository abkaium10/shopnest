"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: "01",
    image: "/images/shopnest-hero.jpeg",
    eyebrow: "NEW SEASON",
    title: (
      <>
        Find Your Next
        <br />
        <span className="text-[#0F5145]">Favorite</span>
      </>
    ),
    description:
      "Discover thoughtfully selected products designed to make everyday life better, easier, and more beautiful.",
  },
  {
    id: "02",
    image: "/images/shopnest-hero-2.jpeg",
    eyebrow: "CURATED FOR YOU",
    title: (
      <>
        Designed for
        <br />
        <span className="text-[#0F5145]">Everyday Life</span>
      </>
    ),
    description:
      "From everyday essentials to standout pieces, explore collections curated around the way you live.",
  },
  {
    id: "03",
    image: "/images/shopnest-hero-3.jpeg",
    eyebrow: "TIMELESS STYLE",
    title: (
      <>
        Better Things,
        <br />
        <span className="text-[#0F5145]">Better Living</span>
      </>
    ),
    description:
      "Quality products, timeless design, and everyday essentials—all brought together in one beautiful collection.",
  },
];

const trustItems = [
  {
    title: "Premium Quality",
    description: "Carefully selected products",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Quick & reliable shipping",
    icon: Truck,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns",
    icon: RotateCcw,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-white px-3 pb-3 pt-3 sm:px-4 lg:px-5">
      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}
      <div
        className="
          relative
          mx-auto
          min-h-[620px]
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[20px]
          bg-[#F5F7F2]
          shadow-[0_15px_45px_rgba(16,25,24,0.08)]

          sm:min-h-[650px]
          sm:rounded-[24px]

          md:min-h-[680px]

          lg:min-h-[720px]
          lg:rounded-[32px]
        "
      >
        {/* =======================================================
            BACKGROUND IMAGE

            Main subject is on RIGHT side.
            So mobile/tablet use stronger right positioning.
        ======================================================= */}
        <motion.div
          key={activeSlide.id}
          initial={{
            scale: 1.04,
            opacity: 0.8,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={activeSlide.image}
            alt="ShopNest premium lifestyle collection"
            fill
            priority={currentSlide === 0}
            sizes="(max-width: 768px) 100vw, 1440px"
            quality={95}
            className="
              object-cover

              /* Mobile: keep right-side subject visible */
              object-[82%_center]

              /* Small tablet */
              sm:object-[80%_center]

              /* Tablet */
              md:object-[76%_center]

              /* Desktop */
              lg:object-[73%_center]

              /* Large desktop */
              xl:object-[70%_center]

              brightness-[1.03]
              contrast-[1.05]
              saturate-[1.03]
            "
          />
        </motion.div>

        {/* =======================================================
            MAIN LEFT GRADIENT
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-gradient-to-r
            from-[#F5F7F2]/95
            via-[#F5F7F2]/65
            to-transparent

            sm:from-[#F5F7F2]/90
            sm:via-[#F5F7F2]/40
            sm:to-transparent

            lg:from-[#F5F7F2]/90
            lg:via-[#F5F7F2]/35
            lg:to-transparent
          "
        />

        {/* =======================================================
            MOBILE EXTRA OVERLAY

            Helps text readability without hiding subject.
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-gradient-to-t
            from-[#F5F7F2]/35
            via-transparent
            to-transparent

            sm:hidden
          "
        />

        {/* =======================================================
            BOTTOM GRADIENT
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-40
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
          "
        />

        {/* =======================================================
            SOFT GREEN GLOW
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-32
            z-10
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#0F5145]/10
            blur-[100px]

            sm:-left-20
            sm:-top-20
            sm:h-[450px]
            sm:w-[450px]

            lg:-left-10
            lg:-top-20
            lg:h-[500px]
            lg:w-[500px]
          "
        />

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}
        <div
          className="
            relative
            z-20
            flex
            min-h-[620px]
            w-full
            flex-col
            justify-center
            px-5
            pb-28
            pt-20

            sm:min-h-[650px]
            sm:px-8
            sm:pb-28

            md:px-10

            lg:min-h-[720px]
            lg:w-[62%]
            lg:px-12
            lg:pb-24
            lg:pt-16

            xl:w-[60%]
            xl:px-16
          "
        >
          {/* =====================================================
              EYEBROW
          ===================================================== */}
          <motion.div
            key={`eyebrow-${activeSlide.id}`}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mb-5 sm:mb-6"
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#0F5145]/10
                bg-white/65
                px-3.5
                py-2
                shadow-sm
                backdrop-blur-md
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0F5145]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#0F5145]

                  sm:text-[10px]
                "
              >
                {activeSlide.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}
          <motion.h1
            key={`title-${activeSlide.id}`}
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[700px]
              text-[40px]
              font-bold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#101918]

              sm:text-[56px]

              md:text-[68px]

              lg:text-[64px]

              xl:text-[78px]
            "
          >
            {activeSlide.title}
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            key={`description-${activeSlide.id}`}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.22,
            }}
            className="
              mt-5
              max-w-[430px]
              text-[13px]
              leading-6
              text-[#66706D]

              sm:mt-6
              sm:text-[15px]
              sm:leading-7

              lg:mt-8
              lg:text-[16px]
            "
          >
            {activeSlide.description}
          </motion.p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.3,
            }}
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-8
              sm:w-auto
              sm:flex-row

              lg:mt-9
            "
          >
            {/* Primary CTA */}
            <Link
              href="/shop"
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#0F5145]
                px-7
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_25px_rgba(15,81,69,0.18)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#0c443a]
                hover:shadow-[0_15px_35px_rgba(15,81,69,0.25)]

                active:translate-y-0

                sm:w-auto
              "
            >
              Shop Now

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/collections"
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#101918]/15
                bg-white/70
                px-7
                text-sm
                font-semibold
                text-[#101918]
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#0F5145]/30
                hover:bg-white

                active:translate-y-0

                sm:w-auto
              "
            >
              Explore Collection
            </Link>
          </motion.div>

          {/* =====================================================
              TRUST INDICATORS
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.4,
            }}
            className="
              mt-7
              grid
              grid-cols-3
              gap-2
              border-t
              border-[#101918]/10
              pt-5

              sm:mt-9
              sm:gap-4
              sm:pt-6

              lg:mt-12
            "
          >
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    flex
                    min-w-0
                    items-center
                    gap-2

                    sm:gap-3
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/70
                      text-[#0F5145]
                      shadow-sm
                      backdrop-blur-sm
                      transition-all
                      duration-300

                      group-hover:scale-105
                      group-hover:bg-[#0F5145]
                      group-hover:text-white

                      sm:h-9
                      sm:w-9
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="sm:h-4 sm:w-4"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[9px]
                        font-semibold
                        leading-4
                        text-[#101918]

                        sm:text-[11px]
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        hidden
                        truncate
                        text-[9px]
                        leading-4
                        text-[#66706D]

                        sm:block
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* =======================================================
            EDITORIAL TEXT - DESKTOP ONLY
        ======================================================= */}
        <div
          className="
            pointer-events-none
            absolute
            right-8
            top-1/2
            z-20
            hidden
            -translate-y-1/2

            lg:block

            xl:right-12
          "
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[#101918]/20" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#101918]/50
              "
            >
              Style Meets Comfort
            </span>
          </div>
        </div>

        {/* =======================================================
            DESKTOP IMAGE LABEL
        ======================================================= */}
        <div
          className="
            absolute
            bottom-6
            left-5
            z-30
            hidden
            items-center
            gap-3

            sm:flex
            sm:left-8

            lg:bottom-8
            lg:left-10
          "
        >
          <div className="h-px w-8 bg-[#101918]/25" />

          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#101918]/50
              "
            >
              ShopNest
            </p>

            <p
              className="
                mt-0.5
                text-[10px]
                font-medium
                text-[#101918]/40
              "
            >
              Essentials
            </p>
          </div>
        </div>

        {/* =======================================================
            MOBILE IMAGE LABEL
        ======================================================= */}
        <div
          className="
            absolute
            bottom-5
            left-5
            z-30
            sm:hidden
          "
        >
          <div
            className="
              rounded-full
              border
              border-white/30
              bg-black/10
              px-3
              py-1.5
              backdrop-blur-md
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              ShopNest · Essentials
            </p>
          </div>
        </div>

        {/* =======================================================
            CAROUSEL CONTROLS
        ======================================================= */}
        <div
          className="
            absolute
            bottom-5
            right-5
            z-40
            flex
            items-center
            gap-1.5

            sm:bottom-7
            sm:right-8

            lg:bottom-8
            lg:right-10
          "
        >
          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/10
              text-white
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300

              hover:bg-white
              hover:text-[#101918]

              sm:h-10
              sm:w-10
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.8}
              className="sm:h-4 sm:w-4"
            />
          </button>

          {/* Counter */}
          <div
            className="
              flex
              h-9
              min-w-[60px]
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/10
              px-3
              text-[10px]
              font-semibold
              tracking-[0.12em]
              text-white
              shadow-sm
              backdrop-blur-md

              sm:h-10
              sm:min-w-[66px]
              sm:text-[11px]
            "
          >
            <span>
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="mx-1.5 opacity-50">
              /
            </span>

            <span className="opacity-60">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/10
              text-white
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300

              hover:bg-white
              hover:text-[#101918]

              sm:h-10
              sm:w-10
            "
          >
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="sm:h-4 sm:w-4"
            />
          </button>
        </div>

        {/* =======================================================
            MOBILE SLIDE DOTS
        ======================================================= */}
        <div
          className="
            absolute
            bottom-[76px]
            left-1/2
            z-40
            flex
            -translate-x-1/2
            items-center
            gap-1.5

            sm:hidden
          "
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  currentSlide === index
                    ? "w-6 bg-[#0F5145]"
                    : "w-1.5 bg-[#101918]/25"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}