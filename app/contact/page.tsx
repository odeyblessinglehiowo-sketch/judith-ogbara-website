"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-brown text-[#2b1c14]">
      {/* Header */}
  
    <header className="sticky top-0 z-50 w-full px-0 pt-0">
      <div className="border-b border-white/10 bg-[#160f0c]/88 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-[#d9bb8d]/30 bg-gold/10">
                     <Image
                       src="/images/judith-logo2.png"
                       alt="Judith Ogbara logo"
                       fill
                       className="object-cover p-0"
                     />
                   </div>

            <div className="hidden sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f0d39d]">
                Judith Ogbara
              </p>
              <p className="mt-0.5 text-xs text-[#eadfce]/70">
                Official Profile
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = item.href === "/contact";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#d4af78]/16 text-[#f3d7aa]"
                      : "text-[#f1e7da]/78 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-to-r from-[#b7864a] to-[#f2d4a8] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-[#d4af78] px-6 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89] md:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/20 bg-white/[0.04] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-white/[0.08] md:hidden"
            aria-label="Open navigation menu"
          >
            <div className="flex h-5 w-6 flex-col items-center justify-between">
              <span className="h-[2.5px] w-6 rounded-full bg-current" />
              <span className="h-[2.5px] w-6 rounded-full bg-current" />
              <span className="h-[2.5px] w-6 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-[340px] bg-[#fcfaf7] shadow-[0_20px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#eadac4] px-5 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9a7449]">
                Menu
              </p>
              <p className="mt-1 text-sm text-[#6d5746]">Judith Ogbara</p>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1d4c1] text-[#2b1c14] transition hover:bg-[#f4ede5]"
              aria-label="Close navigation menu"
            >
              <span className="text-3xl leading-none">×</span>
            </button>
          </div>

          <nav className="px-5 py-4">
            <div className="flex flex-col divide-y divide-[#eee3d5]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-4 text-[1.05rem] font-semibold tracking-[0.01em] transition ${
                    item.href === "/contact"
                      ? "text-[#8b6438]"
                      : "text-[#2b1c14] hover:text-[#8b6438]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#160f0c] px-5 py-10 text-white sm:px-6 lg:px-10 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-[-80px] top-12 h-72 w-72 rounded-full bg-[#b7864a]/10 blur-3xl" />
        <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-[#d4af78]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div>
              <p className="text-center text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a] sm:text-left sm:tracking-[0.3em]">
                Contact
              </p>

              <h1 className="mt-3 text-center text-[3rem] font-bold leading-[0.96] text-white sm:text-left sm:text-5xl lg:text-[4.15rem]">
                Reach out with clarity, purpose, and confidence.
              </h1>

              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent sm:mx-0" />

              <p className="mx-auto mt-4 max-w-[34rem] text-center text-[14px] leading-7 text-[#eadfce]/84 sm:mx-0 sm:text-left sm:text-lg sm:leading-8">
                For official inquiries, partnerships, collaborations, or direct
                communication, use the details below or send a message through the form.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  href="mailto:info@judithogbara.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89]"
                >
                  Send Email
                </Link>

                <Link
                  href="tel:+2348124972568"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Call Office
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.35fr_0.65fr]">
              <div className="relative h-[270px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 sm:h-[360px]">
                <Image
                  src="/images/judith -about.jpg"
                  alt="Judith Ogbara portrait"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="grid gap-3">
                <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8b07a]">
                    Office Contact
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#f1e6d7]/80">
                    Open for official communication, strategic partnerships, and structured engagement.
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,120,0.18),rgba(255,255,255,0.03))] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f0d39d]">
                    Professional Channel
                  </p>
                  <p className="mt-3 text-lg font-bold leading-tight text-white sm:text-xl">
                    Clear communication, handled with purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#fcfaf7] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Left info */}
          <div className="space-y-4">
            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Contact Information
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
                Official contact channels and office details.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
                For direct communication, official correspondence, or structured engagement,
                use the contact details below.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7449]">
                    Email
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6d5746] sm:text-base">
                    info@judithogbara.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f]">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7449]">
                    Phone
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6d5746] sm:text-base">
                    +234 812 497 2568
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f]">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7449]">
                    Office Address
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6d5746] sm:text-base">
                    85 Eket Etinan Road, Okon Eket, Akwa Ibom State
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Social Channels
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f] transition hover:bg-[#ead9c3]"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f] transition hover:bg-[#ead9c3]"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f] transition hover:bg-[#ead9c3]"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5ede3] text-[#8a653f] transition hover:bg-[#ead9c3]"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-[2rem] border border-[#eadac4] bg-white p-6 shadow-[0_22px_60px_rgba(43,28,20,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
              Send a Message
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Start the conversation clearly and directly.
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
              Use this form for inquiries, official communication, partnerships,
              or collaboration requests.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#e1d4c1] bg-[#fcfaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b7864a]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-[#e1d4c1] bg-[#fcfaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b7864a]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-[#e1d4c1] bg-[#fcfaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b7864a]"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-[#e1d4c1] bg-[#fcfaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#b7864a]"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-[#1f130d] px-5 py-14 text-[#e8dccb] sm:px-6 lg:px-10 lg:py-16">
       <div className="mx-auto max-w-7xl">
         <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr]">
           <div>
             <div className="flex items-center gap-3">
               <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#3a2418]">
                 <Image
                   src="/images/judith-logo2.png"
                   alt="Judith Ogbara logo"
                   fill
                   className="object-contain p-0"
                 />
               </div>
     
               <div>
                 <p className="text-sm font-semibold tracking-wide text-white">
                   Judith Ogbara
                 </p>
                 <p className="text-xs text-[#cbb89f]">
                   Official Profile
                 </p>
               </div>
             </div>
     
             <p className="mt-5 max-w-sm text-sm leading-7 text-[#cbb89f]">
               A public servant committed to advancing leadership, education,
               empowerment, and sustainable community development through service,
               integrity, and measurable impact.
             </p>
           </div>
     
           <div>
             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af78]">
               Navigation
             </p>
     
             <ul className="mt-5 space-y-3 text-sm text-[#cbb89f]">
               <li><a href="#home" className="transition hover:text-white">Home</a></li>
               <li><a href="#about" className="transition hover:text-white">About</a></li>
               <li><a href="#impact" className="transition hover:text-white">Impact</a></li>
               <li><a href="#vision" className="transition hover:text-white">Mandate & Vision</a></li>
               <li><a href="#gallery" className="transition hover:text-white">Leadership in Action</a></li>
               <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
             </ul>
           </div>
     
           <div>
             <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af78]">
               Contact
             </p>
     
             <div className="mt-5 space-y-4 text-sm text-[#cbb89f]">
               <p>info@judithogbara.com</p>
               <p>+234 812 497 2568 | +234 803 304 8469</p>
               <p>85 Eket Etinan Road, Okon Eket, Akwa Ibom State</p>
             </div>
     
             <div className="mt-6 flex gap-3">
               <a
                 href="#"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                 aria-label="Facebook"
               >
                 <FaFacebookF className="text-sm" />
               </a>
               <a
                 href="#"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                 aria-label="Instagram"
               >
                 <FaInstagram className="text-sm" />
               </a>
           
               <a
                 href="#"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                 aria-label="Linkedin"
               >
                 <FaLinkedin className="text-sm" />
               </a>
               <a
                 href="#"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                 aria-label="X"
               >
                 <FaXTwitter className="text-sm" />
               </a>
               <a
                 href="#"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                 aria-label="Whatsapp"
               >
                 <FaWhatsapp className="text-sm" />
               </a>
             </div>
           </div>
         </div>
     
         <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-[#a89377]">
           © {new Date().getFullYear()} Judith Ogbara. All rights reserved.
         </div>
       </div>
     </footer>
    </main>
  );
}