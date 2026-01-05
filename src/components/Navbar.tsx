"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "History", href: "/sejarah" },
  { label: "Organization", href: "/organization" },
  { label: "Member", href: "/member" },
  { label: "Event", href: "/event" },
  { label: "Merchant", href: "/merchant" },
  { label: "Press Release", href: "/press" },
  { label: "All About W202", href: "/w202" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-primary shadow-md">
      {/* Main Navbar - 2 Columns Layout */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left Column - Logo, Title, Flag */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MB W202 Club Logo"
              width={60}
              height={60}
              className="w-14 h-14 object-contain rounded-full bg-black"
            />
            <div className="ml-3">
              <h1 className="font-sans font-bold text-white text-sm md:text-lg leading-tight">
                Mercedes Benz W202
              </h1>
              <p className="text-xs text-gray-300 font-medium">Club Indonesia</p>
            </div>

            {/* Flag */}
            <div className="ml-3 flex items-center">
              <div className="flag-animation">
                <div className="w-12 h-8 md:w-14 md:h-9 relative overflow-hidden rounded shadow-md">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-600"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-sans font-medium text-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "font-semibold transition duration-300",
                        isActive
                          ? "text-brand-accent"
                          : "text-white hover:text-brand-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-menu border-t border-brand-primary/20">
          <div className="container">
            <ul className="py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li
                    key={item.href}
                    className="border-b border-brand-primary/10 last:border-0"
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        "block px-4 py-3 text-sm transition-colors duration-300 capitalize",
                        isActive
                          ? "text-brand-accent font-medium"
                          : "text-white hover:text-brand-accent"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
