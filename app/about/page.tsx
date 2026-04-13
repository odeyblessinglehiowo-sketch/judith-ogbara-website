"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "Contact", href: "/contact" },
];

export default function AboutPage() {
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
    <main className="bg-brown text-[#2b1c14]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-0 pt-0">
        <div className="border-b border-[#eadac4] bg-[#fcfaf7]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#d9bb8d]/30 bg-[#4a2f21]/5">
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
                <p className="mt-0.5 text-xs text-[#8b745f]">
                  Official Profile
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/about";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                      isActive
                        ? "bg-[#d4af78]/16 text-[#8b6438]"
                        : "text-[#5e4a39] hover:text-[#2b1c14]"
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

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden rounded-full bg-[#4a2f21] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14] md:inline-flex"
            >
              Get in Touch
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8b07a]/35 bg-[#4a2f21]/5 text-[#4a2f21] transition hover:bg-[#4a2f21]/10 md:hidden"
              aria-label="Open navigation menu"
            >
              <div className="flex h-4 w-5 flex-col items-center justify-between">
                <span className="h-[2px] w-5 rounded-full bg-current" />
                <span className="h-[2px] w-5 rounded-full bg-current" />
                <span className="h-[2px] w-5 rounded-full bg-current" />
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
            className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-[#fcfaf7] shadow-[0_20px_80px_rgba(0,0,0,0.22)] transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#eadac4] px-5 py-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449]">
                  Menu
                </p>
                <p className="mt-1 text-sm text-[#6d5746]">
                  Judith Ogbara
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1d4c1] text-[#2b1c14]"
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
                    className={`py-5 text-[1.9rem] font-semibold leading-none ${
                      item.href === "/about" ? "text-[#8b6438]" : "text-[#1f1f1f]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3.5 text-sm font-semibold text-white"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#2b1c14] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
  
  {/* Glow accents */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-100px] top-10 h-64 w-64 rounded-full bg-[#b7864a]/20 blur-3xl" />
    <div className="absolute right-[-80px] top-1/3 h-72 w-72 rounded-full bg-[#f0cf95]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

      {/* TEXT */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af78] sm:tracking-[0.3em]">
          About Judith
        </p>

        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          A life of service, leadership, and meaningful community impact.
        </h1>

        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

        <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#eadfce]/85 sm:text-lg">
          Hon. Dr. Judith Mayen Ogbara is a distinguished public servant,
          philanthropist, and advocate whose journey reflects integrity,
          compassion, and a deep commitment to people-centered leadership.
        </p>

        {/* MOBILE FIX: smaller + inline */}
        <div className="mt-6 flex gap-3">
          <Link
            href="/#impact"
            className="flex-1 rounded-full bg-[#d4af78] px-4 py-2.5 text-center text-sm font-semibold text-[#2b1c14]"
          >
            View Impact
          </Link>

          <Link
            href="/#vision"
            className="flex-1 rounded-full border border-[#d4af78]/50 px-4 py-2.5 text-center text-sm font-semibold text-[#f0cf95]"
          >
            Mandate & Vision
          </Link>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#dcc3a0]/30" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[#3a2418] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          
          {/* MOBILE: tighter height */}
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[420px] lg:h-[500px]">
            <Image
              src="/images/4.jpeg"
              alt="Hon. Dr. Judith Mayen Ogbara"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* subtle overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Biography */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.08fr] lg:gap-14">
      {/* Portrait column */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-[420px]">
          {/* floating effect */}
          <div className="absolute left-4 top-4 h-full w-full rounded-[0.9rem] border-2 border-[#b7864a]/40" />

          <div className="relative rounded-[0.9rem] bg-white p-4 shadow-[0_24px_60px_rgba(43,28,20,0.18)]">
            {/* outer rigid frame */}
            <div className="rounded-[0.55rem] border-[3px] border-[#2f7d32] p-3">
              {/* inner accent frame */}
              <div className="rounded-[0.35rem] border-[3px] border-[#d6b24d] p-2">
                <div className="relative overflow-hidden rounded-[0.3rem] bg-[#f5efe7]">
                  <div className="relative h-[420px] sm:h-[500px] lg:h-[520px]">
                    <Image
                      src="/images/4.jpeg"
                      alt="Hon. Dr. Judith Mayen Ogbara"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* title plate */}
            <div className="mt-4 text-center">
              <p className="text-[1.05rem] font-extrabold uppercase leading-tight text-[#16110d] sm:text-[1.2rem]">
                Hon. Dr. Judith Mayen Ogbara
              </p>
              <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#3b2a20] sm:text-sm">
                Public Servant • Philanthropist • Governance Advocate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Write-up column */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Biography
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          A public story built on visible service, steady leadership, and meaningful impact.
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

        <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
          <p>
            Hon. Dr. Judith Mayen Ogbara has built a respected record of public
            service through educational support, empowerment initiatives,
            governance advocacy, and humanitarian outreach.
          </p>

          <p>
            Her work reflects a leadership style centered on dignity,
            accountability, and meaningful action. Over the years, she has
            continued to create opportunities for women, youth, and underserved
            communities through practical interventions and
            development-focused initiatives.
          </p>

          <p>
            Beyond titles and recognition, her journey has remained defined by
            consistency, compassion, and a visible commitment to lasting impact.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/impact"
            className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
          >
            Explore Impact
          </Link>

          <Link
            href="/#vision"
            className="inline-flex items-center justify-center rounded-full border border-[#caa77a] px-5 py-3 text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3]"
          >
            Mandate & Vision
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Philosophy */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Leadership Philosophy
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Leadership is not simply about visibility. It is about service,
              responsibility, and real results.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Her approach to leadership continues to reflect a clear belief that
              trust is earned through action, consistency, and people-focused
              impact. It is this philosophy that shapes her work and public
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Core Values
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Principles that continue to guide the work.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-5">
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Integrity</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Leading with honesty and moral clarity.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Service</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Putting people and communities first.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Excellence</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Delivering with discipline and professionalism.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Compassion</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Leading with empathy and genuine concern.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm sm:col-span-2 xl:col-span-1 sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Innovation</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Embracing ideas that drive sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Continue Exploring
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Explore her impact, vision, and ongoing leadership story.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
              Learn more about the initiatives, values, and measurable outcomes
              that continue to shape her public engagement and service journey.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#impact"
                className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
              >
                Explore Impact
              </Link>

              <Link
                href="/#gallery"
                className="inline-flex items-center justify-center rounded-full border border-[#caa77a] px-5 py-3 text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3]"
              >
                Leadership in Action
              </Link>
            </div>
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
                    src="/images/judith-logo.png"
                    alt="Judith Ogbara logo"
                    fill
                    className="object-contain p-2"
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
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li><Link href="/about" className="transition hover:text-white">About</Link></li>
                <li><Link href="/#impact" className="transition hover:text-white">Impact</Link></li>
                <li><Link href="/#vision" className="transition hover:text-white">Mandate & Vision</Link></li>
                <li><Link href="/#gallery" className="transition hover:text-white">Leadership in Action</Link></li>
                <li><Link href="/#contact" className="transition hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af78]">
                Connect
              </p>

              <div className="mt-5 space-y-4 text-sm text-[#cbb89f]">
                <p>info@judithogbara.com</p>
                <p>+234 812 497 2568</p>
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
                  aria-label="X"
                >
                  <FaXTwitter className="text-sm" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
                  aria-label="WhatsApp"
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