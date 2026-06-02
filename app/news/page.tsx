"use client";

import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Awards", href: "/awards" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function NewsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#2b1c14]">
      <header className="sticky top-0 z-50 w-full px-0 pt-0">
        <div className="border-b border-white/10 bg-[#160f0c]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/judith-logo2.png"
                  alt="Judith Ogbara logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f3ddbc]">
                  Judith Ogbara
                </p>
                <p className="mt-0.5 text-xs text-[#eadfce]/60">Official Profile</p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/news";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#d4af78]/15 text-[#f3d7aa]"
                        : "text-white/80 hover:text-white"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-white transition hover:bg-white/[0.08] md:hidden"
              aria-label="Open navigation menu"
            >
              <div className="flex h-4 w-5 flex-col items-center justify-between">
                <span className="h-[2px] w-5 rounded-full bg-white" />
                <span className="h-[2px] w-5 rounded-full bg-white" />
                <span className="h-[2px] w-5 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>

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
            className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-[#fcfaf7] shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#eadac4] px-5 py-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449]">
                  Menu
                </p>
                <p className="mt-1 text-sm text-[#6d5746]">Judith Ogbara</p>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1d4c1] transition hover:bg-[#f4ede5]"
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
                    className={`py-5 text-[1.05rem] font-semibold transition ${
                      item.href === "/news"
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
      <section className="relative overflow-hidden bg-[#22160f] py-24">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,120,0.18),transparent_40%)]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af78]">
        Official Newsroom
      </p>

      <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        News & Updates
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-8 text-[#d7c8b4] sm:text-lg">
        Stay informed with the latest activities, development initiatives,
        community engagements, official announcements, recognitions,
        humanitarian interventions, and public service milestones involving
        Hon. Dr. Judith Mayen Etuk-Ogbara.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#stories"
          className="inline-flex items-center rounded-full bg-[#d4af78] px-7 py-3 text-sm font-semibold text-[#22160f] transition hover:bg-[#e0bd89]"
        >
          Explore Stories
        </a>
      </div>
    </div>
  </div>
</section>

      <section id="stories" className="scroll-mt-28 px-5 py-12 sm:px-6 lg:px-5 lg:py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {newsItems.map((item) => (
        <article
          key={item.slug}
          className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1"
        >
          <div className="relative aspect-[4/4.35] overflow-hidden bg-[#f2ede5]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 16vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex h-full flex-col p-4">
            <h2 className="text-sm font-bold leading-snug text-[#2b1c14] sm:text-base">
              {item.title}
            </h2>

            <p className="mt-1 text-xs font-medium text-[#8a653f]">{item.date}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#9a7449]">
              {item.byline}
            </p>

            <p className="mt-5 text-sm leading-6 text-[#6d5746]">
              {item.intro}
            </p>

            <div className="mt-4">
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex text-sm font-semibold text-[#8a653f] transition hover:text-[#4a2f21]"
              >
                Read more →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <footer
        id="contact"
        className="scroll-mt-28 bg-[#1f130d] px-5 py-14 text-[#e8dccb] sm:px-6 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#3a2418]">
                  <Image
                    src="/images/judith-logo2.png"
                    alt="Judith Ogbara logo"
                    fill
                    sizes="40px"
                    className="object-contain p-0"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">
                    Judith Ogbara
                  </p>
                  <p className="text-xs text-[#cbb89f]">Official Profile</p>
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
                <li>
                  <a href="#home" className="transition hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#stories" className="transition hover:text-white">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
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