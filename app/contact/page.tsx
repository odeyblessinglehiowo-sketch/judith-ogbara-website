"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
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
  return (
    <main className="bg-white text-[#2b1c14]">

      {/* HEADER (same structure you’ve been using) */}
      <header className="sticky top-0 z-50 w-full">
        <div className="border-b border-[#eadac4] bg-[#fcfaf7]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#3a2418]">
                <Image
                  src="/images/judith-logo.png"
                  alt="Judith Ogbara logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6e4c2d]">
                  Judith Ogbara
                </p>
                <p className="text-xs text-[#8b745f]">Official Profile</p>
              </div>
            </Link>

            <nav className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    item.href === "/contact"
                      ? "bg-[#d4af78]/20 text-[#8b6438]"
                      : "text-[#5e4a39] hover:text-[#2b1c14]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#160f0c] px-5 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8b07a]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Reach Out and Connect
          </h1>

          <p className="mt-6 text-sm leading-7 text-[#eadfce]/85 sm:text-base">
            For official inquiries, partnerships, collaborations, or
            communication, please use the contact details below or send a direct message.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1fr]">

          {/* LEFT - INFO */}
          <div>
            <h2 className="text-3xl font-bold text-[#2b1c14]">
              Contact Information
            </h2>

            <div className="mt-6 space-y-5 text-sm sm:text-base text-[#6d5746]">
              <p>
                <span className="font-semibold text-[#2b1c14]">Email:</span><br />
                info@judithogbara.com
              </p>

              <p>
                <span className="font-semibold text-[#2b1c14]">Phone:</span><br />
                +234 812 497 2568
              </p>

              <p>
                <span className="font-semibold text-[#2b1c14]">Office Address:</span><br />
                85 Eket Etinan Road, Okon Eket, Akwa Ibom State
              </p>
            </div>

            {/* SOCIALS */}
            <div className="mt-8 flex gap-4">
              <a className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f5ede3]">
                <FaFacebookF />
              </a>
              <a className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f5ede3]">
                <FaInstagram />
              </a>
              <a className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f5ede3]">
                <FaXTwitter />
              </a>
              <a className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f5ede3]">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-[#2b1c14]">
              Send a Message
            </h3>

            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-[#e1d4c1] px-4 py-3 outline-none focus:border-[#b7864a]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#e1d4c1] px-4 py-3 outline-none focus:border-[#b7864a]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-[#e1d4c1] px-4 py-3 outline-none focus:border-[#b7864a]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#4a2f21] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f130d] px-5 py-14 text-[#e8dccb]">
        <div className="mx-auto max-w-7xl text-center text-sm text-[#a89377]">
          © {new Date().getFullYear()} Judith Ogbara. All rights reserved.
        </div>
      </footer>
    </main>
  );
}