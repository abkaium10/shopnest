"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUp,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

/* ============================================================
   SOCIAL ICONS
   Lucide does not provide brand icons, so we use custom SVGs.
============================================================ */

function InstagramIcon({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="17.4"
        cy="6.6"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z"
      />
    </svg>
  );
}

function YoutubeIcon({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 9L16 12L10 15V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TiktokIcon({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.5 4H17C17.2 5.4 18 6.6 19.3 7.3C19.8 7.6 20.4 7.8 21 7.8V10.5C19.5 10.5 18.1 10 17 9.2V15.2C17 18.2 14.6 20.5 11.6 20.5C8.6 20.5 6.5 18.3 6.5 15.7C6.5 13 8.7 10.9 11.4 10.9C11.8 10.9 12.2 10.9 12.5 11V13.8C12.2 13.7 11.9 13.6 11.5 13.6C10.2 13.6 9.2 14.5 9.2 15.7C9.2 16.9 10.2 17.8 11.5 17.8C12.8 17.8 14 16.8 14 15.4L14.5 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ============================================================
   SOCIAL LINK
============================================================ */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-white/10
        bg-white/[0.03]
        text-[#A7B2AE]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#B8C8A8]/40
        hover:bg-[#B8C8A8]
        hover:text-[#0B1716]
      "
    >
      {children}
    </a>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group flex items-center
        text-sm text-[#A7B2AE]
        transition-colors duration-200
        hover:text-white
      "
    >
      <span
        className="
          mr-2 h-px w-0
          bg-[#B8C8A8]
          transition-all duration-300
          group-hover:w-3
        "
      />

      {children}
    </Link>
  );
}

/* ============================================================
   MOBILE ACCORDION
============================================================ */

function MobileFooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex w-full items-center
          justify-between
          py-5
          text-left
          text-sm font-semibold
          text-white
        "
        aria-expanded={open}
      >
        <span>{title}</span>

        <ChevronDown
          size={18}
          className={`
            text-[#A7B2AE]
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          grid transition-all duration-300
          ${
            open
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="space-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER
============================================================ */

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect this to your API later.
    console.log("Newsletter email:", email);

    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0B1716] text-white">

      {/* ======================================================
          NEWSLETTER CTA
      ====================================================== */}

      <section className="bg-[#0F5145]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">

          <div
            className="
              flex flex-col gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* Newsletter Content */}

            <div className="max-w-xl">
              <span
                className="
                  mb-3 inline-block
                  text-xs font-semibold
                  uppercase tracking-[0.18em]
                  text-[#B8C8A8]
                "
              >
                Stay in the loop
              </span>

              <h2
                className="
                  text-2xl font-semibold
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Get the latest from ShopNest.
              </h2>

              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm leading-6
                  text-white/70
                  sm:text-base
                "
              >
                Subscribe for new products, exclusive offers,
                useful shopping tips, and updates.
              </p>
            </div>

            {/* Newsletter Form */}

            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full max-w-xl"
            >
              <div
                className="
                  flex flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <div
                  className="
                    relative flex-1
                  "
                >
                  <Mail
                    size={18}
                    className="
                      absolute
                      left-4 top-1/2
                      -translate-y-1/2
                      text-white/40
                    "
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email address"
                    required
                    className="
                      h-13 w-full
                      rounded-xl
                      border border-white/10
                      bg-white/10
                      pl-11 pr-4
                      text-sm text-white
                      outline-none
                      placeholder:text-white/40
                      transition
                      focus:border-white/30
                      focus:bg-white/[0.14]
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    h-13
                    rounded-xl
                    bg-[#B8C8A8]
                    px-6
                    text-sm font-semibold
                    text-[#0B1716]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                    active:translate-y-0
                  "
                >
                  Subscribe
                </button>
              </div>

              <p className="mt-3 text-xs text-white/50">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ====================================================
            DESKTOP FOOTER
        ==================================================== */}

        <div
          className="
            hidden
            grid-cols-2
            gap-10
            py-16
            md:grid
            lg:grid-cols-5
            lg:gap-8
          "
        >

          {/* Brand */}

          <div className="lg:col-span-1">

            {/* Logo */}

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#B8C8A8]
                  text-lg font-bold
                  text-[#0B1716]
                "
              >
                S
              </div>

              <span
                className="
                  text-xl font-bold
                  tracking-tight
                  text-white
                "
              >
                ShopNest
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm leading-6
                text-[#A7B2AE]
              "
            >
              A modern shopping experience built around
              quality products, simple discovery, and
              dependable service.
            </p>

            {/* Contact */}

            <div className="mt-6 space-y-3">

              <a
                href="mailto:hello@shopnest.com"
                className="
                  flex items-center gap-3
                  text-sm text-[#A7B2AE]
                  transition-colors
                  hover:text-white
                "
              >
                <Mail size={16} />
                hello@shopnest.com
              </a>

              <a
                href="tel:+1234567890"
                className="
                  flex items-center gap-3
                  text-sm text-[#A7B2AE]
                  transition-colors
                  hover:text-white
                "
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>

              <div
                className="
                  flex items-start gap-3
                  text-sm leading-5
                  text-[#A7B2AE]
                "
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                </span>
              </div>

            </div>

          </div>

          {/* Shop */}

          <div>
            <h3
              className="
                text-sm font-semibold
                text-white
              "
            >
              Shop
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <FooterLink href="/shop">
                  All Products
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/new-arrivals">
                  New Arrivals
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/best-sellers">
                  Best Sellers
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/categories">
                  Categories
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/deals">
                  Deals & Offers
                </FooterLink>
              </li>

            </ul>
          </div>

          {/* Company */}

          <div>
            <h3
              className="
                text-sm font-semibold
                text-white
              "
            >
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <FooterLink href="/about">
                  About Us
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/contact">
                  Contact
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/careers">
                  Careers
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/blog">
                  Blog
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/reviews">
                  Customer Reviews
                </FooterLink>
              </li>

            </ul>
          </div>

          {/* Support */}

          <div>
            <h3
              className="
                text-sm font-semibold
                text-white
              "
            >
              Support
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <FooterLink href="/help">
                  Help Center
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/shipping">
                  Shipping & Delivery
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/returns">
                  Returns & Refunds
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/faq">
                  FAQ
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/track-order">
                  Track Order
                </FooterLink>
              </li>

            </ul>
          </div>

          {/* Account */}

          <div>
            <h3
              className="
                text-sm font-semibold
                text-white
              "
            >
              My Account
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <FooterLink href="/account">
                  My Account
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/orders">
                  Order History
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/wishlist">
                  Wishlist
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/cart">
                  Shopping Cart
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/checkout">
                  Checkout
                </FooterLink>
              </li>

            </ul>
          </div>

        </div>

        {/* ====================================================
            MOBILE FOOTER
        ==================================================== */}

        <div className="md:hidden">

          {/* Mobile Brand */}

          <div className="py-10">

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-[#B8C8A8]
                  text-lg font-bold
                  text-[#0B1716]
                "
              >
                S
              </div>

              <span
                className="
                  text-xl font-bold
                  tracking-tight
                  text-white
                "
              >
                ShopNest
              </span>
            </Link>

            <p
              className="
                mt-4
                max-w-md
                text-sm leading-6
                text-[#A7B2AE]
              "
            >
              A modern shopping experience built around
              quality products, simple discovery, and
              dependable service.
            </p>

            {/* Mobile Contact */}

            <div className="mt-5 space-y-3">

              <a
                href="mailto:hello@shopnest.com"
                className="
                  flex items-center gap-3
                  text-sm text-[#A7B2AE]
                  hover:text-white
                "
              >
                <Mail size={16} />
                hello@shopnest.com
              </a>

              <a
                href="tel:+1234567890"
                className="
                  flex items-center gap-3
                  text-sm text-[#A7B2AE]
                  hover:text-white
                "
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>

              <div
                className="
                  flex items-start gap-3
                  text-sm leading-5
                  text-[#A7B2AE]
                "
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                </span>
              </div>

            </div>

          </div>

          {/* Mobile Accordions */}

          <div>

            <MobileFooterSection title="Shop">
              <FooterLink href="/shop">
                All Products
              </FooterLink>

              <FooterLink href="/new-arrivals">
                New Arrivals
              </FooterLink>

              <FooterLink href="/best-sellers">
                Best Sellers
              </FooterLink>

              <FooterLink href="/categories">
                Categories
              </FooterLink>

              <FooterLink href="/deals">
                Deals & Offers
              </FooterLink>
            </MobileFooterSection>

            <MobileFooterSection title="Company">
              <FooterLink href="/about">
                About Us
              </FooterLink>

              <FooterLink href="/contact">
                Contact
              </FooterLink>

              <FooterLink href="/careers">
                Careers
              </FooterLink>

              <FooterLink href="/blog">
                Blog
              </FooterLink>

              <FooterLink href="/reviews">
                Customer Reviews
              </FooterLink>
            </MobileFooterSection>

            <MobileFooterSection title="Support">
              <FooterLink href="/help">
                Help Center
              </FooterLink>

              <FooterLink href="/shipping">
                Shipping & Delivery
              </FooterLink>

              <FooterLink href="/returns">
                Returns & Refunds
              </FooterLink>

              <FooterLink href="/faq">
                FAQ
              </FooterLink>

              <FooterLink href="/track-order">
                Track Order
              </FooterLink>
            </MobileFooterSection>

            <MobileFooterSection title="My Account">
              <FooterLink href="/account">
                My Account
              </FooterLink>

              <FooterLink href="/orders">
                Order History
              </FooterLink>

              <FooterLink href="/wishlist">
                Wishlist
              </FooterLink>

              <FooterLink href="/cart">
                Shopping Cart
              </FooterLink>

              <FooterLink href="/checkout">
                Checkout
              </FooterLink>
            </MobileFooterSection>

          </div>

        </div>

        {/* ====================================================
            TRUST / PAYMENT AREA
        ==================================================== */}

        <div
          className="
            border-t border-white/10
            py-8
          "
        >

          <div
            className="
              flex flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* Security */}

            <div
              className="
                flex items-center gap-3
              "
            >

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-white/[0.05]
                  text-[#B8C8A8]
                "
              >
                <ShieldCheck size={20} />
              </div>

              <div>
                <p
                  className="
                    text-sm font-medium
                    text-white
                  "
                >
                  Secure Shopping
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    text-[#A7B2AE]
                  "
                >
                  Your information is protected
                </p>
              </div>

            </div>

            {/* Payment Methods */}

            <div>

              <p
                className="
                  mb-3
                  text-xs font-medium
                  uppercase tracking-wider
                  text-[#66706D]
                  lg:text-right
                "
              >
                We accept
              </p>

              <div
                className="
                  flex flex-wrap
                  gap-2
                  lg:justify-end
                "
              >

                {[
                  "VISA",
                  "Mastercard",
                  "AMEX",
                  "PayPal",
                  "Apple Pay",
                  "Google Pay",
                ].map((payment) => (
                  <div
                    key={payment}
                    className="
                      flex h-9
                      items-center
                      rounded-lg
                      border border-white/10
                      bg-white/[0.04]
                      px-3
                      text-[10px]
                      font-semibold
                      tracking-wide
                      text-[#A7B2AE]
                      transition-colors
                      hover:border-white/20
                      hover:text-white
                    "
                  >
                    {payment}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ====================================================
            SOCIAL + BOTTOM BAR
        ==================================================== */}

        <div
          className="
            border-t border-white/10
            py-7
          "
        >

          <div
            className="
              flex flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* Copyright */}

            <p
              className="
                text-xs
                text-[#66706D]
              "
            >
              © {new Date().getFullYear()} ShopNest.
              All rights reserved.
            </p>

            {/* Legal */}

            <div
              className="
                flex flex-wrap
                items-center
                gap-x-5
                gap-y-2
              "
            >

              <Link
                href="/privacy"
                className="
                  text-xs
                  text-[#66706D]
                  transition-colors
                  hover:text-white
                "
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="
                  text-xs
                  text-[#66706D]
                  transition-colors
                  hover:text-white
                "
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookies"
                className="
                  text-xs
                  text-[#66706D]
                  transition-colors
                  hover:text-white
                "
              >
                Cookie Policy
              </Link>

            </div>

            {/* Social Links */}

            <div
              className="
                flex items-center gap-2
              "
            >

              <SocialLink
                href="https://instagram.com"
                label="Instagram"
              >
                <InstagramIcon size={18} />
              </SocialLink>

              <SocialLink
                href="https://facebook.com"
                label="Facebook"
              >
                <FacebookIcon size={18} />
              </SocialLink>

              <SocialLink
                href="https://youtube.com"
                label="YouTube"
              >
                <YoutubeIcon size={18} />
              </SocialLink>

              <SocialLink
                href="https://tiktok.com"
                label="TikTok"
              >
                <TiktokIcon size={18} />
              </SocialLink>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================
          BACK TO TOP
      ====================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-5 right-5
          z-40
          flex h-11 w-11
          items-center justify-center
          rounded-full
          border border-white/10
          bg-[#0F5145]
          text-white
          shadow-xl
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#B8C8A8]
          hover:text-[#0B1716]
          sm:bottom-6
          sm:right-6
        "
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  );
}