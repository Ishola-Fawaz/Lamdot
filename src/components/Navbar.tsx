"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/src/providers/CartProvider";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "#categories", label: "Categories" },
  { href: "#new-arrivals", label: "New Arrivals" },
  { href: "#sale", label: "Sale" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/#blog", label: "Blog" },
];

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const textColor = isScrolled ? "text-gray-900" : "text-black";
  const iconColor = isScrolled ? "text-gray-900" : "text-black";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* General wrapper div */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
          {/* Main row: logo | links | buttons */}
          <div className="flex items-center justify-between gap-6">
            {/* Logo div */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <img
                  src="/assets/logo.jpg"
                  alt="Lamdot Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Links div */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm xl:text-base font-medium font-sans transition-colors duration-200 py-2 ${textColor} hover:text-orange-500`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Buttons div */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* <button
                type="button"
                className={`p-2 transition-all duration-200 hover:text-orange-500 hover:scale-110 ${iconColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button> */}

              {/* <button
                type="button"
                className={`p-2 transition-all duration-200 hover:text-orange-500 hover:scale-110 ${iconColor}`}
                aria-label="Toggle theme"
                onClick={() => {
                  const root = document.documentElement;
                  const next = root.classList.contains("dark") ? "light" : "dark";
                  if (next === "dark") root.classList.add("dark");
                  else root.classList.remove("dark");
                  window.localStorage.setItem("theme", next);
                }}
              >
                <SunMoon className="w-5 h-5 md:w-6 md:h-6" />
              </button> */}


              {/* <button
                type="button"
                className={`p-2 transition-all duration-200 relative hover:text-orange-500 hover:scale-110 ${iconColor}`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  0
                </span>
              </button> */}

              <Link
                href="/cart"
                className={`p-2 transition-all duration-200 relative hover:text-orange-500 hover:scale-110 ${iconColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 md:w-10 md:h-8" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center text-[10px]">
                  {totalItems}
                </span>
              </Link>


              {/* Mobile menu button */}
              <button
                type="button"
                className={`lg:hidden p-2 transition-colors duration-200 hover:text-orange-500 ${iconColor}`}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Shop Now
              </button>
              <button
                type="button"
                className="py-3 px-4 border-2 border-gray-200 rounded-full font-medium hover:border-orange-500 hover:text-orange-500 transition-colors"
                // aria-label="Wishlist"
              >
                {/* <Heart className="w-5 h-5" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
