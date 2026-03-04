"use client";

import { ChevronDown } from "lucide-react";

const footerLinks = {
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] mt-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8">
        {/* Main Footer Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.08em]">
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:underline underline-offset-2">Customer Care</span>
            <ChevronDown size={10} strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:underline underline-offset-2">Location</span>
            <ChevronDown size={10} strokeWidth={1.5} />
          </div>
          <a href="#" className="hover:underline underline-offset-2">Editorial Archive</a>
          <a href="#" className="hover:underline underline-offset-2">Careers</a>
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:underline underline-offset-2">Country/Region: United States</span>
            <ChevronDown size={10} strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="group-hover:underline underline-offset-2">Email Signup</span>
            <ChevronDown size={10} strokeWidth={1.5} />
          </div>
          <a href="#" className="hover:underline underline-offset-2">Affiliates</a>
          <a href="#" className="hover:underline underline-offset-2">Sitemap</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mt-5 text-[11px] uppercase tracking-[0.08em]">
          {footerLinks.social.map((link) => (
            <a key={link.label} href={link.href} className="hover:underline underline-offset-2">
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 text-[11px] text-[#888]">
          <span>© 2026 ssense.com</span>
          {footerLinks.legal.map((link) => (
            <a key={link.label} href={link.href} className="hover:underline underline-offset-2">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
