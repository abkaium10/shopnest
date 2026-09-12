"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Truck,
  ChevronDown,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Headphones,
  MapPin,
  Shirt,
  Sparkles,
  Footprints,
  Smartphone,
  Home,
  Watch,
  Percent,
  Zap,
  Gift,
  Tag,
  ArrowRight,
} from "lucide-react";

/* ============================================================
   NAVBAR
============================================================ */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  /* ==========================================================
     SCROLL
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================================================
     MOBILE DROPDOWN TOGGLE
  ========================================================== */

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  /* ==========================================================
     CLOSE EVERYTHING
  ========================================================== */

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#E8ECE9] shadow-[0_4px_20px_rgba(16,25,24,0.06)]"
          : "border-b border-transparent"
      }`}
    >
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ====================================================== */}

      <div className="bg-[#101918] text-white">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-5 text-[11px] sm:px-6 lg:px-8">
          {/* Shipping Message */}

          <div className="flex items-center gap-2 text-white/85">
            <Truck size={14} strokeWidth={1.8} />

            <span>Free shipping on orders over $50</span>
          </div>

          {/* Utility Links */}

          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/track-order"
              className="transition-colors hover:text-white/65"
            >
              Track Order
            </Link>

            <Link
              href="/help"
              className="transition-colors hover:text-white/65"
            >
              Help
            </Link>

            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-white/65"
            >
              English
              <ChevronDown size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <div className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center gap-5 sm:gap-6">
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMenus}
              className="group flex shrink-0 items-center gap-2.5"
            >
              {/* Logo Icon */}

              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0F5145] text-white transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <div className="h-4 w-4 rounded-[5px] border-[1.8px] border-white" />

                  <div className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-[#0F5145]" />
                </div>
              </div>

              {/* Brand */}

              <span className="text-[19px] font-semibold tracking-[-0.03em] text-[#101918]">
                ShopNest
              </span>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="ml-auto hidden items-center gap-6 lg:flex xl:gap-7">
              <NavLink href="/" active onClick={closeMenus}>
                Home
              </NavLink>

              <DesktopDropdown
                label="Shop"
                open={desktopDropdown === "Shop"}
                onOpen={() => setDesktopDropdown("Shop")}
                onClose={() => setDesktopDropdown(null)}
              >
                <ShopDropdown />
              </DesktopDropdown>

              <DesktopDropdown
                label="Categories"
                open={desktopDropdown === "Categories"}
                onOpen={() => setDesktopDropdown("Categories")}
                onClose={() => setDesktopDropdown(null)}
              >
                <CategoriesDropdown />
              </DesktopDropdown>

              <DesktopDropdown
                label="Deals"
                open={desktopDropdown === "Deals"}
                onOpen={() => setDesktopDropdown("Deals")}
                onClose={() => setDesktopDropdown(null)}
              >
                <DealsDropdown />
              </DesktopDropdown>

              <NavLink href="/about" onClick={closeMenus}>
                About
              </NavLink>

              <NavLink href="/contact" onClick={closeMenus}>
                Contact
              </NavLink>
            </nav>

            {/* =================================================
                RIGHT ACTION AREA
            ================================================== */}

            <div className="ml-auto flex items-center gap-1.5 lg:ml-5 xl:gap-2">
              {/* Search */}

              <div className="relative hidden xl:block">
                <Search
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#66706D]"
                />

                <input
                  type="text"
                  placeholder="Search for products..."
                  className="
                    h-11
                    w-[220px]
                    rounded-[12px]
                    border
                    border-transparent
                    bg-[#F0F2EF]
                    pl-10
                    pr-4
                    text-[13px]
                    text-[#101918]
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-[#89918E]
                    hover:bg-[#EBEEEB]
                    focus:border-[#C8D6D0]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#0F5145]/5
                  "
                />
              </div>

              {/* Wishlist */}

              <ActionButton
                href="/wishlist"
                label="Wishlist"
                badge={0}
              >
                <Heart size={20} strokeWidth={1.7} />
              </ActionButton>

              {/* Cart */}

              <ActionButton
                href="/cart"
                label="Shopping cart"
                badge={3}
              >
                <ShoppingBag size={20} strokeWidth={1.7} />
              </ActionButton>

              {/* Account */}

              <ActionButton
                href="/account"
                label="Account"
              >
                <UserRound size={20} strokeWidth={1.7} />
              </ActionButton>

              {/* Mobile Menu */}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen((prev) => !prev);
                  setMobileDropdown(null);
                }}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                className="
                  ml-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[10px]
                  text-[#101918]
                  transition-all
                  hover:bg-[#EEF2EE]
                  lg:hidden
                "
              >
                {mobileMenuOpen ? (
                  <X size={22} strokeWidth={1.8} />
                ) : (
                  <Menu size={22} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE SEARCH
          ================================================== */}

          <div className="pb-4 xl:hidden">
            <div className="relative">
              <Search
                size={17}
                strokeWidth={1.8}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#66706D]"
              />

              <input
                type="text"
                placeholder="Search for products..."
                className="
                  h-11
                  w-full
                  rounded-[12px]
                  border
                  border-[#E8ECE9]
                  bg-[#F0F2EF]
                  pl-10
                  pr-4
                  text-[13px]
                  text-[#101918]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-[#89918E]
                  focus:border-[#C8D6D0]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#0F5145]/5
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`overflow-hidden border-t border-[#E8ECE9] bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 py-4 sm:px-6">
          <nav className="flex flex-col">
            {/* Home */}

            <MobileNavLink
              href="/"
              active
              onClick={closeMenus}
            >
              Home
            </MobileNavLink>

            {/* Shop */}

            <MobileNavDropdown
              label="Shop"
              open={mobileDropdown === "Shop"}
              onClick={() => toggleMobileDropdown("Shop")}
            />

            {mobileDropdown === "Shop" && (
              <div className="border-b border-[#E8ECE9] bg-[#F8FAF7] px-2 py-3">
                <MobileDropdownLink
                  href="/shop"
                  title="All Products"
                  description="Explore everything"
                  icon={Sparkles}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/shop/mens-fashion"
                  title="Men's Fashion"
                  description="Clothing & essentials"
                  icon={Shirt}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/shop/womens-fashion"
                  title="Women's Fashion"
                  description="Style for every occasion"
                  icon={Sparkles}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/shop/shoes"
                  title="Shoes"
                  description="Sneakers, casual & more"
                  icon={Footprints}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/shop/electronics"
                  title="Electronics"
                  description="Smart everyday tech"
                  icon={Smartphone}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/shop/home-living"
                  title="Home & Living"
                  description="Make your space better"
                  icon={Home}
                  onClick={closeMenus}
                />
              </div>
            )}

            {/* Categories */}

            <MobileNavDropdown
              label="Categories"
              open={mobileDropdown === "Categories"}
              onClick={() => toggleMobileDropdown("Categories")}
            />

            {mobileDropdown === "Categories" && (
              <div className="border-b border-[#E8ECE9] bg-[#F8FAF7] px-2 py-3">
                <MobileDropdownLink
                  href="/categories/clothing"
                  title="Clothing"
                  description="T-shirts, shirts, dresses"
                  icon={Shirt}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/categories/shoes"
                  title="Shoes"
                  description="Sneakers & footwear"
                  icon={Footprints}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/categories/electronics"
                  title="Electronics"
                  description="Phones, gadgets & accessories"
                  icon={Smartphone}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/categories/accessories"
                  title="Accessories"
                  description="Bags, watches & more"
                  icon={Watch}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/categories/home-living"
                  title="Home & Living"
                  description="Furniture & home essentials"
                  icon={Home}
                  onClick={closeMenus}
                />
              </div>
            )}

            {/* Deals */}

            <MobileNavDropdown
              label="Deals"
              open={mobileDropdown === "Deals"}
              onClick={() => toggleMobileDropdown("Deals")}
            />

            {mobileDropdown === "Deals" && (
              <div className="border-b border-[#E8ECE9] bg-[#F8FAF7] px-2 py-3">
                <MobileDropdownLink
                  href="/deals"
                  title="All Deals"
                  description="Browse all offers"
                  icon={Percent}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/deals/flash-sale"
                  title="Flash Sale"
                  description="Limited-time offers"
                  icon={Zap}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/deals/up-to-50"
                  title="Up to 50% Off"
                  description="Big savings today"
                  icon={Tag}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/deals/new"
                  title="New Deals"
                  description="Fresh discounts"
                  icon={Gift}
                  onClick={closeMenus}
                />

                <MobileDropdownLink
                  href="/deals/clearance"
                  title="Clearance"
                  description="Last chance products"
                  icon={Percent}
                  onClick={closeMenus}
                />
              </div>
            )}

            {/* About */}

            <MobileNavLink
              href="/about"
              onClick={closeMenus}
            >
              About
            </MobileNavLink>

            {/* Contact */}

            <MobileNavLink
              href="/contact"
              onClick={closeMenus}
            >
              Contact
            </MobileNavLink>
          </nav>

          {/* =================================================
              MOBILE UTILITY LINKS
          ================================================== */}

          <div className="mt-4 border-t border-[#E8ECE9] pt-4">
            <Link
              href="/track-order"
              onClick={closeMenus}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-3
                text-sm
                text-[#66706D]
                transition-colors
                hover:bg-[#F5F7F4]
                hover:text-[#101918]
              "
            >
              <MapPin
                size={17}
                strokeWidth={1.7}
              />

              Track Order
            </Link>

            <Link
              href="/help"
              onClick={closeMenus}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-3
                text-sm
                text-[#66706D]
                transition-colors
                hover:bg-[#F5F7F4]
                hover:text-[#101918]
              "
            >
              <Headphones
                size={17}
                strokeWidth={1.7}
              />

              Help Center
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   DESKTOP NAV LINK
============================================================ */

function NavLink({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex h-[76px] items-center text-[13px] font-medium transition-colors duration-200 ${
        active
          ? "text-[#0F5145]"
          : "text-[#4F5956] hover:text-[#0F5145]"
      }`}
    >
      {children}

      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#0F5145]" />
      )}

      {!active && (
        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#0F5145] transition-all duration-200 group-hover:w-full" />
      )}
    </Link>
  );
}

/* ============================================================
   DESKTOP DROPDOWN WRAPPER
============================================================ */

function DesktopDropdown({
  label,
  open,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={open}
        className={`
          group
          relative
          flex
          h-[76px]
          items-center
          gap-1.5
          text-[13px]
          font-medium
          transition-colors
          duration-200

          ${
            open
              ? "text-[#0F5145]"
              : "text-[#4F5956] hover:text-[#0F5145]"
          }
        `}
      >
        {label}

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className={`
            transition-transform
            duration-200
            ${open ? "rotate-180" : ""}
          `}
        />

        <span
          className={`
            absolute
            bottom-0
            left-1/2
            h-[2px]
            -translate-x-1/2
            rounded-full
            bg-[#0F5145]
            transition-all
            duration-200
            ${open ? "w-full" : "w-0"}
          `}
        />
      </button>

      {/* Dropdown */}

      <div
        className={`
          absolute
          left-1/2
          top-[70px]
          z-[60]
          -translate-x-1/2
          pt-3
          transition-all
          duration-200
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   SHOP DROPDOWN
============================================================ */

function ShopDropdown() {
  return (
    <div className="w-[650px] overflow-hidden rounded-[18px] border border-[#E6EBE7] bg-white shadow-[0_20px_60px_rgba(16,25,24,0.12)]">
      <div className="grid grid-cols-[1fr_230px]">
        {/* Left */}

        <div className="p-6">
          <div className="mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F5145]">
              Shop Collections
            </p>

            <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-[#101918]">
              Find something you love
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <DropdownItem
              href="/shop"
              icon={Sparkles}
              title="All Products"
              description="Explore everything"
            />

            <DropdownItem
              href="/shop/mens-fashion"
              icon={Shirt}
              title="Men's Fashion"
              description="Modern everyday style"
            />

            <DropdownItem
              href="/shop/womens-fashion"
              icon={Sparkles}
              title="Women's Fashion"
              description="Style & essentials"
            />

            <DropdownItem
              href="/shop/shoes"
              icon={Footprints}
              title="Shoes"
              description="Sneakers & footwear"
            />

            <DropdownItem
              href="/shop/electronics"
              icon={Smartphone}
              title="Electronics"
              description="Smart tech & gadgets"
            />

            <DropdownItem
              href="/shop/accessories"
              icon={Watch}
              title="Accessories"
              description="Complete your look"
            />

            <DropdownItem
              href="/shop/home-living"
              icon={Home}
              title="Home & Living"
              description="Better everyday spaces"
            />

            <DropdownItem
              href="/shop/new-arrivals"
              icon={Gift}
              title="New Arrivals"
              description="Freshly added products"
            />
          </div>
        </div>

        {/* Right Promo */}

        <div className="relative overflow-hidden bg-[#0F5145] p-6 text-white">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em]">
              New Season
            </span>

            <h3 className="mt-5 text-[23px] font-semibold leading-tight tracking-[-0.04em]">
              Fresh styles.
              <br />
              Better living.
            </h3>

            <p className="mt-3 text-[11px] leading-5 text-white/70">
              Discover our latest products and seasonal favorites.
            </p>

            <Link
              href="/shop/new-arrivals"
              className="group mt-6 inline-flex items-center gap-2 text-[11px] font-semibold"
            >
              Shop New Arrivals

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CATEGORIES DROPDOWN
============================================================ */

function CategoriesDropdown() {
  return (
    <div className="w-[700px] overflow-hidden rounded-[18px] border border-[#E6EBE7] bg-white shadow-[0_20px_60px_rgba(16,25,24,0.12)]">
      <div className="p-6">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F5145]">
              Browse Categories
            </p>

            <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-[#101918]">
              Shop by category
            </h3>
          </div>

          <Link
            href="/categories"
            className="group flex items-center gap-1 text-[11px] font-semibold text-[#0F5145]"
          >
            View all

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <CategoryCard
            href="/categories/clothing"
            icon={Shirt}
            title="Clothing"
            items="T-Shirts · Shirts · Dresses"
          />

          <CategoryCard
            href="/categories/shoes"
            icon={Footprints}
            title="Shoes"
            items="Sneakers · Casual · Formal"
          />

          <CategoryCard
            href="/categories/electronics"
            icon={Smartphone}
            title="Electronics"
            items="Phones · Gadgets · Tech"
          />

          <CategoryCard
            href="/categories/accessories"
            icon={Watch}
            title="Accessories"
            items="Bags · Watches · Jewelry"
          />

          <CategoryCard
            href="/categories/home-living"
            icon={Home}
            title="Home & Living"
            items="Furniture · Decor · Kitchen"
          />

          <CategoryCard
            href="/categories/beauty"
            icon={Sparkles}
            title="Beauty & Care"
            items="Skincare · Beauty · Personal"
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DEALS DROPDOWN
============================================================ */

function DealsDropdown() {
  return (
    <div className="w-[620px] overflow-hidden rounded-[18px] border border-[#E6EBE7] bg-white shadow-[0_20px_60px_rgba(16,25,24,0.12)]">
      <div className="p-6">
        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F5145]">
            Special Offers
          </p>

          <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-[#101918]">
            Save more on your favorites
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <DealCard
            href="/deals/flash-sale"
            icon={Zap}
            title="Flash Sale"
            description="Limited-time prices on selected products."
            badge="HOT"
          />

          <DealCard
            href="/deals/up-to-50"
            icon={Percent}
            title="Up to 50% Off"
            description="Big savings across selected categories."
            badge="50% OFF"
          />

          <DealCard
            href="/deals/new"
            icon={Gift}
            title="New Deals"
            description="Fresh discounts added regularly."
            badge="NEW"
          />

          <DealCard
            href="/deals/clearance"
            icon={Tag}
            title="Clearance"
            description="Last chance products at special prices."
            badge="LAST CHANCE"
          />
        </div>

        <Link
          href="/deals"
          className="
            group
            mt-5
            flex
            items-center
            justify-between
            rounded-[12px]
            bg-[#F3F6F2]
            px-4
            py-3
            text-[11px]
            font-semibold
            text-[#0F5145]
            transition-colors
            hover:bg-[#EAF0EA]
          "
        >
          <span>View all deals & offers</span>

          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

/* ============================================================
   DROPDOWN ITEM
============================================================ */

function DropdownItem({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        gap-3
        rounded-[12px]
        p-3
        transition-all
        duration-200
        hover:bg-[#F3F6F2]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-[#F0F4F0]
          text-[#0F5145]
          transition-all
          duration-200
          group-hover:bg-[#0F5145]
          group-hover:text-white
        "
      >
        <Icon size={16} strokeWidth={1.7} />
      </div>

      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-[#101918]">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[10px] text-[#7A8480]">
          {description}
        </p>
      </div>
    </Link>
  );
}

/* ============================================================
   CATEGORY CARD
============================================================ */

function CategoryCard({
  href,
  icon: Icon,
  title,
  items,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  items: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-[12px]
        border
        border-[#E8ECE9]
        p-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[#C9D8D1]
        hover:bg-[#F8FAF7]
        hover:shadow-sm
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[10px]
          bg-[#F0F4F0]
          text-[#0F5145]
          transition-all
          duration-200
          group-hover:bg-[#0F5145]
          group-hover:text-white
        "
      >
        <Icon size={16} strokeWidth={1.7} />
      </div>

      <h4 className="mt-3 text-[12px] font-semibold text-[#101918]">
        {title}
      </h4>

      <p className="mt-1 text-[9px] leading-4 text-[#7A8480]">
        {items}
      </p>
    </Link>
  );
}

/* ============================================================
   DEAL CARD
============================================================ */

function DealCard({
  href,
  icon: Icon,
  title,
  description,
  badge,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        overflow-hidden
        rounded-[13px]
        border
        border-[#E8ECE9]
        p-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[#C9D8D1]
        hover:bg-[#F8FAF7]
        hover:shadow-sm
      "
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-[10px]
            bg-[#F0F4F0]
            text-[#0F5145]
            transition-all
            duration-200
            group-hover:bg-[#0F5145]
            group-hover:text-white
          "
        >
          <Icon size={16} strokeWidth={1.7} />
        </div>

        <span className="rounded-full bg-[#EEF5F0] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-[#0F5145]">
          {badge}
        </span>
      </div>

      <h4 className="mt-3 text-[13px] font-semibold text-[#101918]">
        {title}
      </h4>

      <p className="mt-1 text-[10px] leading-4 text-[#7A8480]">
        {description}
      </p>
    </Link>
  );
}

/* ============================================================
   ACTION BUTTON
============================================================ */

function ActionButton({
  href,
  label,
  children,
  badge,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        group
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-[10px]
        text-[#263330]
        transition-all
        duration-200
        hover:bg-[#EEF2EE]
        hover:text-[#0F5145]
      "
    >
      <span className="transition-transform duration-200 group-hover:scale-105">
        {children}
      </span>

      {badge !== undefined && badge > 0 && (
        <span
          className="
            absolute
            right-[2px]
            top-[1px]
            flex
            h-[16px]
            min-w-[16px]
            items-center
            justify-center
            rounded-full
            bg-[#0F5145]
            px-1
            text-[9px]
            font-semibold
            leading-none
            text-white
            ring-2
            ring-[#FAFAF8]
          "
        >
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </Link>
  );
}

/* ============================================================
   MOBILE NAV LINK
============================================================ */

function MobileNavLink({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        border-b
        border-[#E8ECE9]
        px-2
        py-4
        text-[14px]
        font-medium
        transition-colors

        ${
          active
            ? "text-[#0F5145]"
            : "text-[#263330] hover:text-[#0F5145]"
        }
      `}
    >
      {children}
    </Link>
  );
}

/* ============================================================
   MOBILE NAV DROPDOWN
============================================================ */

function MobileNavDropdown({
  label,
  open,
  onClick,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="
        flex
        w-full
        items-center
        justify-between
        border-b
        border-[#E8ECE9]
        px-2
        py-4
        text-left
        text-[14px]
        font-medium
        text-[#263330]
        transition-colors
        hover:text-[#0F5145]
      "
    >
      {label}

      <ChevronDown
        size={17}
        strokeWidth={1.8}
        className={`transition-transform duration-200 ${
          open ? "rotate-180 text-[#0F5145]" : ""
        }`}
      />
    </button>
  );
}

/* ============================================================
   MOBILE DROPDOWN LINK
============================================================ */

function MobileDropdownLink({
  href,
  title,
  description,
  icon: Icon,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group
        flex
        items-center
        gap-3
        rounded-[12px]
        px-3
        py-3
        transition-colors
        hover:bg-white
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-white
          text-[#0F5145]
          shadow-sm
        "
      >
        <Icon size={16} strokeWidth={1.7} />
      </div>

      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-[#101918]">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[10px] text-[#7A8480]">
          {description}
        </p>
      </div>

      <ArrowRight
        size={14}
        className="
          ml-auto
          shrink-0
          text-[#9AA39F]
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:text-[#0F5145]
        "
      />
    </Link>
  );
}