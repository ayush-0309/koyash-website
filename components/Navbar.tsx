"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/90 backdrop-blur-md shadow-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-cormorant text-3xl font-bold text-maroon tracking-widest uppercase">
            KOYASH
          </span>
          <span className="font-poppins text-[9px] font-light text-gold tracking-[0.35em] uppercase mt-[-2px]">
            House of Trust
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-poppins text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-maroon border-b-2 border-gold pb-0.5"
                  : "text-maroon/70 hover:text-maroon"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/collections"
            className="ml-2 px-5 py-2 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon-light transition-all duration-300"
          >
            Shop Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-maroon transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-maroon transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-maroon transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-parchment/95 backdrop-blur-md border-t border-gold/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-poppins text-base font-medium ${
                pathname === link.href ? "text-maroon" : "text-maroon/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/collections"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full text-center border border-maroon hover:border-gold transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
