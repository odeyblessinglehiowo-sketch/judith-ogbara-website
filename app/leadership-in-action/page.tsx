"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaArrowLeft,
  FaArrowRight,
  FaXmark,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "Contact", href: "/contact" },
];

const featuredImages = [
  {
    image: "/images/action-1.jpg",
    title: "Visible Service in National Spaces",
    caption:
      "Active participation in national-level engagement that reflects responsibility, representation, and leadership presence.",
    tag: "Featured Moment",
  },
  {
    image: "/images/rise-training.jpg",
    title: "Mentoring Through the RISE Training Initiative",
    caption:
      "Direct engagement with students through a practical skills program focused on opportunity, confidence, and future readiness.",
    tag: "Featured Moment",
  },
];

const galleryImages = [
  {
    image: "/images/action-2.jpg",
    title: "Committee Engagement",
    caption:
      "Leadership participation in a structured public-facing committee setting.",
  },
  {
    image: "/images/8.jpg",
    title: "Women Empowerment Support",
    caption:
      "Practical empowerment support for women through visible and meaningful intervention.",
  },
  {
    image: "/images/pads-donation.jpg",
    title: "Dignity Support for Girls",
    caption:
      "Providing sanitary support to strengthen dignity, health, and confidence among girls.",
  },
  {
    image: "/images/learning-materials.jpg",
    title: "Educational Material Distribution",
    caption:
      "Supporting students with resources that strengthen learning and encouragement.",
  },
  {
    image: "/images/makeup-kits.jpg",
    title: "Empowerment Kits Presentation",
    caption:
      "Giving practical empowerment materials to promote self-reliance and growth.",
  },
  {
    image: "/images/judith-hero.jpg",
    title: "Leadership Portrait in Public Service",
    caption:
      "A strong public-facing leadership image that reflects confidence and direction.",
  },
  {
    image: "/images/action-1.jpg",
    title: "Leadership Presence",
    caption:
      "Showing up in spaces where service, coordination, and impact matter.",
  },
  {
    image: "/images/rise-training.jpg",
    title: "Student Development Engagement",
    caption:
      "Encouraging young people through direct presence and skills-focused opportunity.",
  },
];

const movingStripImages = [
  {
    image: "/images/action-2.jpg",
    title: "Committee Service",
  },
  {
    image: "/images/8.jpg",
    title: "Empowerment Outreach",
  },
  {
    image: "/images/pads-donation.jpg",
    title: "Girls Support Initiative",
  },
  {
    image: "/images/learning-materials.jpg",
    title: "Learning Support",
  },
];

export default function LeadershipInActionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = [...featuredImages, ...galleryImages];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <main className="bg-white text-[#2b1c14]">
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
                <p className="mt-0.5 text-xs text-[#8b745f]">Official Profile</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/leadership-in-action";

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

            <Link
              href="/#contact"
              className="hidden rounded-full bg-[#4a2f21] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14] md:inline-flex"
            >
              Get in Touch
            </Link>

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
                <p className="mt-1 text-sm text-[#6d5746]">Judith Ogbara</p>
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
                      item.href === "/leadership-in-action"
                        ? "text-[#8b6438]"
                        : "text-[#1f1f1f]"
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#160f0c] px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-[-80px] top-12 h-72 w-72 rounded-full bg-[#b7864a]/10 blur-3xl" />
        <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-[#d4af78]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a] sm:tracking-[0.3em]">
                Leadership in Action
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Real moments that reflect visible service, leadership presence, and meaningful engagement.
              </h1>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#eadfce]/85 sm:text-lg">
                This page captures moments of public service, empowerment,
                education-focused outreach, and active leadership engagement
                across communities and formal spaces.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/impact"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89]"
                >
                  Explore Impact
                </Link>

                <Link
                  href="/leadership"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Leadership Profile
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="relative h-[300px] overflow-hidden rounded-[1.6rem] sm:h-[420px]">
                <Image
                  src="/images/action-1.jpg"
                  alt="Judith Ogbara in action"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1c120d]/72 p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8b07a]">
                    Featured Frame
                  </p>
                  <p className="mt-2 text-lg font-bold leading-tight text-white">
                    Leadership expressed through action, visibility, and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured images */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Featured Moments
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Strong visual moments that capture public presence and people-centered leadership.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredImages.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index)}
                className="group overflow-hidden rounded-[1.85rem] border border-[#eadac4] bg-[#fcfaf7] text-left shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]"
              >
                <div className="relative h-[280px] overflow-hidden sm:h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/35 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[#2b1c14]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6d5746] sm:text-base">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main gallery */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Moments of outreach, empowerment, learning, and public engagement.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.slice(0, 4).map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index + featuredImages.length)}
                className="group overflow-hidden rounded-[1.65rem] border border-[#eadac4] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(43,28,20,0.08)]"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-tight text-[#2b1c14]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Moving strip */}
      <section className="overflow-hidden bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
            A Moving Glimpse of Service
          </p>
        </div>

        <div className="mt-6 marquee-wrapper">
          <div className="marquee-track">
            {[...movingStripImages, ...movingStripImages].map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="mx-3 inline-block w-[260px] overflow-hidden rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] shadow-sm sm:w-[320px]"
              >
                <div className="relative h-[190px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#2b1c14]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .marquee-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: scrollLeft 28s linear infinite;
          }

          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }

          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* More gallery */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.slice(4).map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  openLightbox(index + featuredImages.length + 4)
                }
                className="group overflow-hidden rounded-[1.65rem] border border-[#eadac4] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(43,28,20,0.08)]"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-tight text-[#2b1c14]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Continue Exploring
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              Every image tells a story of service, presence, and practical impact.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Explore the wider leadership profile, impact story, and public service
              journey behind these moments.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/impact"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89]"
              >
                Explore Impact
              </Link>

              <Link
                href="/leadership"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Leadership Profile
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
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li><Link href="/about" className="transition hover:text-white">About</Link></li>
                <li><Link href="/impact" className="transition hover:text-white">Impact</Link></li>
                <li><Link href="/leadership" className="transition hover:text-white">Leadership</Link></li>
                <li><Link href="/leadership-in-action" className="transition hover:text-white">Leadership in Action</Link></li>
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Close image viewer"
            >
              <FaXmark />
            </button>

            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#1a120e] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <div className="relative h-[320px] sm:h-[480px] lg:h-[620px]">
                <Image
                  src={allImages[lightboxIndex].image}
                  alt={allImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-[#1f1611] px-5 py-5 text-white sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8b07a]">
                  Leadership in Action
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  {allImages[lightboxIndex].title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#eadfce]/78 sm:text-base">
                  {allImages[lightboxIndex].caption}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={showPrev}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <FaArrowLeft /> Previous
              </button>

              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}