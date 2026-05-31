"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="font-poppins text-xs tracking-[0.4em] uppercase text-gold mb-3">
            We&apos;d Love to Hear From You
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-cormorant text-5xl sm:text-6xl font-bold text-maroon mb-4">
            Get in Touch
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-poppins text-sm font-light text-maroon/60 max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re looking for a custom order, have a question, or simply want to say hello —
            we&apos;re here and happy to help.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="w-12 h-px bg-gold/50" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Enquiry Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="bg-parchment rounded-2xl shadow-lg p-8 sm:p-10"
          >
            <h2 className="font-cormorant text-2xl font-semibold text-maroon mb-6">Send an Enquiry</h2>

            <form
              action="mailto:infozerowork@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label className="block font-poppins text-xs font-medium text-maroon/70 mb-2 tracking-wide uppercase">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 font-poppins text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-poppins text-xs font-medium text-maroon/70 mb-2 tracking-wide uppercase">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 font-poppins text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-poppins text-xs font-medium text-maroon/70 mb-2 tracking-wide uppercase">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="I'm looking for a silver gift for..."
                  className="w-full px-4 py-3 rounded-xl border border-maroon/15 bg-cream/50 font-poppins text-sm text-maroon placeholder-maroon/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-maroon text-parchment font-poppins text-sm font-medium rounded-full border border-maroon hover:border-gold hover:bg-maroon-light transition-all duration-300 tracking-wide"
              >
                Send Enquiry
              </button>
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-6 pt-6 border-t border-maroon/10">
              <p className="font-poppins text-xs text-maroon/50 text-center mb-4">Or reach us directly</p>
              <a
                href="https://wa.me/919891710111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white font-poppins text-sm font-medium rounded-full hover:bg-[#20B858] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp +91 98917 10111
              </a>
            </div>
          </motion.div>

          {/* Info & Map */}
          <div className="space-y-6">
            {/* Address card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="bg-parchment rounded-2xl shadow-lg p-8"
            >
              <h2 className="font-cormorant text-2xl font-semibold text-maroon mb-6">Find Us</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-semibold text-maroon uppercase tracking-wide mb-1">Address</p>
                    <p className="font-poppins text-sm font-light text-maroon/65 leading-relaxed">
                      Delhi, India<br />
                      (Exact address shared on inquiry)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📞</span>
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-semibold text-maroon uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:+919891710111" className="font-poppins text-sm text-maroon/65 hover:text-maroon transition-colors">
                      +91 98917 10111
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-maroon/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>🕐</span>
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-semibold text-maroon uppercase tracking-wide mb-1">Hours</p>
                    <p className="font-poppins text-sm font-light text-maroon/65 leading-relaxed">
                      Mon – Sat: 10am – 8pm<br />
                      Sunday: 11am – 6pm
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="bg-parchment rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-56 bg-gradient-to-br from-cream to-maroon/10 flex flex-col items-center justify-center gap-3">
                <span className="text-5xl">🗺️</span>
                <p className="font-poppins text-xs text-maroon/50">Map loads on enquiry</p>
                <a
                  href="https://maps.google.com/?q=Delhi,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-xs font-medium text-maroon hover:text-maroon-light underline underline-offset-2 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
