import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-cormorant text-3xl font-bold text-maroon tracking-widest uppercase">
                KOYASH
              </span>
              <span className="font-poppins text-[9px] font-light text-gold tracking-[0.35em] uppercase mt-[-2px]">
                House of Trust
              </span>
            </Link>
            <p className="font-poppins text-xs font-light text-maroon/60 leading-relaxed max-w-xs">
              Premium silver gifting rooted in trust. Every piece we offer is BIS hallmarked
              and crafted to last generations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-maroon mb-4 tracking-wide">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-maroon/60 hover:text-maroon transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-maroon mb-4 tracking-wide">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-sm">📍</span>
                <span className="font-poppins text-sm text-maroon/60">Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">📞</span>
                <a href="tel:+919891710111" className="font-poppins text-sm text-maroon/60 hover:text-maroon transition-colors">
                  +91 98917 10111
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">💬</span>
                <a
                  href="https://wa.me/919891710111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-maroon/60 hover:text-maroon transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-full border border-maroon/30 flex items-center justify-center hover:border-gold hover:bg-maroon/5 transition-all duration-200"
                >
                  <span className="font-poppins text-[10px] text-maroon/50">
                    {s[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/25" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L9.4 6.1 L16 8 L9.4 9.9 L8 16 L6.6 9.9 L0 8 L6.6 6.1 Z" fill="#C9A96E" opacity="0.5" />
          </svg>
          <div className="flex-1 h-px bg-gold/25" />
        </div>

        <p className="font-poppins text-[11px] text-maroon/40 text-center tracking-wide">
          © {new Date().getFullYear()} Koyash — House of Trust. All rights reserved. · Delhi, India
        </p>
      </div>
    </footer>
  );
}
