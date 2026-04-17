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
  FaLinkedin,
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

const heroImages = [
  "/images/action5.jpg",
  "/images/action-2.jpg",
  "/images/rise-training.jpg",
];

const galleryTop = [
  {
    image: "/images/action-2.jpg",
    title: "Committee Engagement",
    caption:
      "Leadership participation in a structured public-facing committee setting.",
  },
  {
    image: "/images/Women Empowerment.jpg",
    title: "Women Empowerment Support",
    caption:
      "Practical empowerment support for women through visible and meaningful intervention.",
  },
  {
    image: "/images/pads-donation1.jpg",
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
    image: "/images/makeup-kits1.jpg",
    title: "Empowerment Kits Presentation",
    caption:
      "Giving practical empowerment materials to promote self-reliance and growth.",
  },
  {
    image: "/images/p8.jpeg",
    title: "Leadership Portrait",
    caption:
      "A strong public-facing leadership image that reflects confidence and direction.",
  },
  {
    image: "/images/action-02.jpg",
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

const galleryBottom = [
  {
    image: "/images/P65.jpeg",
    title: "RISE Flag-Off Address",
    caption:
      "A moment of purpose at the RISE Training flag-off, marking the beginning of a journey focused on inclusion, support, and empowerment.",
  },
  {
    image: "/images/P66.jpeg",
    title: "A Shared Commitment to Impact",
    caption:
      "A warm exchange with the Acting First Lady of Akwa Ibom State, reflecting shared commitment to community development and meaningful impact.",
  },
  {
    image: "/images/P67.jpeg",
    title: "A Meaningful Hand-Over",
    caption:
      "A simple but memorable moment with a beneficiary, where practical support met preparation, confidence, and hope.",
  },
  {
    image: "/images/P68.jpeg",
    title: "Global Collaboration at RISE",
    caption:
      "Engaging with Mrs. Ross during the RISE flag-off and reflecting the strength of partnerships that widen opportunity and support.",
  },
  {
    image: "/images/P69.jpeg",
    title: "Women Empowerment Support",
    caption:
      "Standing with women in Akwa Ibom through empowerment efforts designed to create real support and lasting value.",
  },
  {
    image: "/images/P70.jpeg",
    title: "Strategic Leadership Engagement",
    caption:
      "A moment of leadership engagement and mutual respect, strengthening relationships that support purposeful work and public service.",
  },
  {
    image: "/images/P71.jpeg",
    title: "Educational Support for Young Learners",
    caption:
      "Sharing a meaningful moment with schoolchildren in Akwa Ibom and reinforcing the importance of investing in learning and the future.",
  },
  {
    image: "/images/P72.jpeg",
    title: "Women’s Empowerment Initiative",
    caption:
      "Celebrating resilience, progress, and community strength through an empowerment initiative that placed women at the center.",
  },
];

const stripImages = [
  {
    image: "/images/p3.jpeg",
    title: "",
  },
  {
    image: "/images/p5.jpeg",
    title: "",
    
  },
  {
    image: "/images/orange.jpeg",
    title: "",
    
  },
  {
    image: "/images/8.jpeg",
    title: "",
    
  },
  {
    image: "/images/p1.jpeg",
    title: "",
    
  },
  {
    image: "/images/p2.jpeg",
    title: "",
    
  },
  {
    image: "/images/p4.jpeg",
    title: "",
    
  },
  {
    image: "/images/P73.jpeg",
    title: "",
    
  },
  {
    image: "/images/P74.jpeg",
    title: "",
  },
];

const allImages = [...galleryTop, ...galleryBottom, ...stripImages];

export default function LeadershipInActionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const openByImage = (image: string, title: string) => {
    const foundIndex = allImages.findIndex(
      (item) => item.image === image && item.title === title
    );
    if (foundIndex !== -1) {
      openLightbox(foundIndex);
    }
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
    <main className="min-h-screen bg-brown text-[#2b1c14]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-0 pt-0">
        <div className="border-b border-white/10 bg-[#160f0c]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/judith-logo1.png"
                  alt="Judith Ogbara logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f3ddbc]">
                  Judith Ogbara
                </p>
                <p className="mt-0.5 text-xs text-[#eadfce]/60">
                  Official Profile
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/leadership-in-action";

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
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1d4c1]"
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
                    className={`py-5 text-[1.05rem] font-semibold ${
                      item.href === "/leadership-in-action"
                        ? "text-[#8b6438]"
                        : "text-[#2b1c14]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
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
      <section className="relative overflow-hidden bg-[#160f0c] px-5 py-10 text-white sm:px-6 lg:px-10 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-[-80px] top-12 h-72 w-72 rounded-full bg-[#b7864a]/10 blur-3xl" />
        <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-[#d4af78]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div>
              <p className="text-center text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a] sm:text-left sm:tracking-[0.3em]">
                Leadership in Action
              </p>

              <h1 className="mt-3 text-center text-[2.7rem] font-bold leading-[0.96] text-white sm:text-left sm:text-5xl lg:text-6xl">
                A visual record of service, presence, and public engagement.
              </h1>

              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent sm:mx-0" />

              <p className="mx-auto mt-4 max-w-[32rem] text-center text-[14px] leading-7 text-[#eadfce]/84 sm:mx-0 sm:text-left sm:text-lg sm:leading-8">
                This gallery captures Hon. Judith in moments of outreach,
                leadership, empowerment, learning support, and active public presence.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
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

            <div className="grid gap-3 sm:grid-cols-[1.35fr_0.65fr]">
              <div className="relative h-[300px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 sm:h-[360px]">
                <Image
                  src={heroImages[0]}
                  alt="Judith Ogbara in action"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="grid gap-3">
                <div className="relative h-[128px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 sm:h-[173px]">
                  <Image
                    src={heroImages[1]}
                    alt="Judith Ogbara public engagement"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="relative h-[128px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 sm:h-[173px]">
                  <Image
                    src={heroImages[2]}
                    alt="Judith Ogbara youth development moment"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upper two rows */}
      <section className="bg-[#fcfaf7] px-5 py-9 sm:px-6 lg:px-10 lg:py-11">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449]">
              Gallery Highlights
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Visible work, captured in real moments.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {galleryTop.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-[1.35rem] border border-[#eadac4] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f5e9d8]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative h-[180px] overflow-hidden sm:h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-300 group-hover:from-black/10" />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold leading-tight text-[#2b1c14] sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Motion strip */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
            A Moving Glimpse of Service
          </p>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="mt-5 marquee-wrapper">
          <div className="marquee-track">
            {[...stripImages, ...stripImages].map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => openByImage(item.image, item.title)}
                className="group mx-2 inline-block w-[220px] overflow-hidden rounded-[1.25rem] border border-[#eadac4] bg-[#fcfaf7] text-left shadow-sm transition duration-300 hover:-translate-y-1 sm:mx-3 sm:w-[270px]"
              >
                <div className="relative h-[150px] sm:h-[180px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lower two rows */}
      <section className="bg-[#fcfaf7] px-5 py-9 sm:px-6 lg:px-10 lg:py-11">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {galleryBottom.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index + galleryTop.length)}
                className="group relative overflow-hidden rounded-[1.35rem] border border-[#eadac4] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f5e9d8]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative h-[180px] overflow-hidden sm:h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-300 group-hover:from-black/10" />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold leading-tight text-[#2b1c14] sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-5 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Continue Exploring
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              Every frame carries a story of service, presence, and practical impact.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Explore the wider leadership profile and impact story behind these moments.
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

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
          will-change: transform;
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
    </main>
  );
}