"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-black text-white text-center py-2.5 px-10 text-[11px] tracking-[0.03em] relative">
          <span>
            Free shipping on full-price orders over $100 USD and other orders over $300 USD.{" "}
            <a href="#" className="underline underline-offset-2 hover:no-underline">
              Details
            </a>
          </span>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
            aria-label="Close announcement"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="border-b border-[#f0f0f0]">
        <div className="flex items-center justify-between px-4 lg:px-6 py-4">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-[0.08em]">
            <a href="#" className="hover:underline underline-offset-2 font-medium">
              Menswear
            </a>
            <a href="#" className="hover:underline underline-offset-2">
              Womenswear
            </a>
            <a href="#" className="hover:underline underline-offset-2">
              Everything Else
            </a>
            <a href="#" className="hover:underline underline-offset-2">
              Sale
            </a>
            <a href="#" className="hover:underline underline-offset-2">
              Search
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[11px] uppercase tracking-[0.08em]">
            Menu
          </button>

          {/* Logo - Centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-[22px] font-bold tracking-[0.15em]">SSENSE</span>
          </Link>

          {/* Right Utilities */}
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.08em]">
            <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:underline underline-offset-2">
              <span>English</span>
              <ChevronDown size={11} strokeWidth={1.5} />
            </div>
            <a href="#" className="hidden sm:block hover:underline underline-offset-2">
              Login
            </a>
            <a href="#" className="hidden sm:block hover:underline underline-offset-2">
              Wishlist
            </a>
            <a href="#" className="hover:underline underline-offset-2">
              Bag (0)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
