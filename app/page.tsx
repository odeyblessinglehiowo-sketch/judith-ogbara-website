"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,

  
} from "react-icons/fa6";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Mandate & Vision", href: "#vision" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMandateCard, setActiveMandateCard] = useState<number | null>(null);

  // the rest of your code...

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as Element[];

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${5 + ((i * 13) % 90)}%`,
        top: `${8 + ((i * 11) % 80)}%`,
        size: `${4 + (i % 3) * 2}px`,
        delay: `${(i % 6) * 0.8}s`,
        duration: `${3.5 + (i % 4)}s`,
      })),
    []
  );

  return (

    <main className="bg-brown text-white">
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1d3a6]/60 to-transparent" />

        {/* NAVBAR */}
<header className="sticky top-0 z-50 w-full px-0 pt-0">
  <div className="border-b border-white/10 bg-[#2a1b14]/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <a href="#home" className="flex items-center gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#d9bb8d]/30 bg-white/10">
          <Image
            src="/images/judith-logo.png"
            alt="Judith Ogbara logo"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f3ddbc]">
            Judith Ogbara
          </p>
          <p className="mt-0.5 text-xs text-[#f8ede0]/60">
            Official Profile
          </p>
        </div>
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-[#d4af78]/16 text-[#f3d19f]"
                  : "text-[#f7efe4]/82 hover:text-white"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-to-r from-[#d4af78] to-[#f2d4a8] transition-transform duration-300 ${
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="group relative hidden overflow-hidden rounded-full border border-[#d8b07a]/45 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-[#f5e5cc] backdrop-blur md:inline-flex"
      >
        <span className="relative z-10 transition duration-300 group-hover:text-[#24160f]">
          Get in Touch
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#d4af78] to-[#f0d2a4] opacity-0 transition duration-300 group-hover:opacity-100" />
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8b07a]/35 bg-white/[0.05] text-[#f5e5cc] backdrop-blur transition hover:bg-white/[0.1] md:hidden"
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

  {/* Mobile side drawer */}
  <div
    className={`fixed inset-0 z-[60] md:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-5 text-[1.9rem] font-semibold leading-none text-[#1f1f1f]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3.5 text-sm font-semibold text-white"
        >
          Get in Touch
        </a>
      </nav>
    </div>
  </div>
</header>
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#21150f]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212,175,120,0.22), transparent 24%)`,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1f140f_0%,#2c1b13_35%,#3b2418_65%,#1b120d_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,221,170,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(176,129,73,0.22),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="hero-blob absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-[#c89857]/20 blur-3xl" />
        <div className="hero-blob-delay absolute bottom-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[#f1d3a6]/10 blur-3xl" />
        <div className="hero-blob-slow absolute left-[45%] top-[12%] h-[220px] w-[220px] rounded-full bg-[#9e6f42]/15 blur-3xl" />

        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="hero-sparkle absolute rounded-full bg-[#f7e7c6]"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              width: sparkle.size,
              height: sparkle.size,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
              boxShadow: "0 0 12px rgba(255, 223, 170, 0.85)",
            }}
          />
        ))}

<div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 pb-8 pt-6 sm:px-6 md:pb-16 md:pt-10 lg:px-10">
  <div className="grid w-full items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af78]/30 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] backdrop-blur sm:text-[11px] sm:tracking-[0.35em]">
        Public Servant • Philanthropist • Governance Advocate
      </div>

      <h1 className="max-w-3xl text-[2.8rem] font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
        Hon. Dr. Judith
        <span className="block text-[#f0d1a0]">Mayen Ogbara</span>
      </h1>

      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-[#efe3d4]/85 sm:mt-7 sm:text-lg md:text-xl">
        A distinguished leader committed to empowering communities, advancing
        education, and promoting inclusive governance through service, integrity,
        and lasting impact.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
        <a
          href="#about"
          className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-4 py-3 text-sm font-semibold text-[#2a1a12] shadow-[0_0_25px_rgba(212,175,120,0.25)] transition hover:scale-[1.02] hover:bg-[#e0bd89]"
        >
          About Her
        </a>

        <a
          href="#impact"
          className="inline-flex items-center justify-center rounded-full border border-[#e5c798]/45 bg-white/5 px-4 py-3 text-sm font-semibold text-[#f6ead9] backdrop-blur transition hover:bg-white/10"
        >
          View Impact
        </a>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:p-4">
          <p className="text-xl font-bold text-[#f1d3a6] sm:text-2xl">500+</p>
          <p className="mt-1 text-xs leading-5 text-[#f5ebdf]/75 sm:text-sm sm:leading-6">
            Female students supported
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:p-4">
          <p className="text-xl font-bold text-[#f1d3a6] sm:text-2xl">5,000+</p>
          <p className="mt-1 text-xs leading-5 text-[#f5ebdf]/75 sm:text-sm sm:leading-6">
            Girls empowered
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:p-4">
          <p className="text-xl font-bold text-[#f1d3a6] sm:text-2xl">50</p>
          <p className="mt-1 text-xs leading-5 text-[#f5ebdf]/75 sm:text-sm sm:leading-6">
            Women supported
          </p>
        </div>
      </div>
    </div>

    <div className="relative flex justify-center lg:justify-end">
      <div className="hero-card relative w-full max-w-[420px] sm:max-w-[480px]">
        <div className="absolute inset-0 rounded-[2rem] bg-[#d4af78]/10 blur-2xl" />
        <div className="absolute -inset-2 rounded-[2.1rem] border border-[#e8c998]/15 sm:-inset-3 sm:rounded-[2.3rem]" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="relative h-[320px] overflow-hidden rounded-[1.6rem] bg-[#5b3b27] sm:h-[450px] lg:h-[540px]">
            <Image
              src="/images/judith-hero.png"
              alt="Hon. Dr. Judith Mayen Ogbara portrait"
              fill
              priority
              className="object-cover object-top"
            />

            <div className="hero-shine absolute inset-y-0 left-[-30%] w-[35%] rotate-12 bg-white/10 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_28%),linear-gradient(to_bottom,rgba(20,11,8,0.06),rgba(20,11,8,0.3))]" />

            <div className="absolute right-4 top-4 h-12 w-12 rounded-full border border-white/20 sm:right-5 sm:top-5 sm:h-14 sm:w-14" />
            <div className="absolute bottom-5 left-5 h-14 w-14 rounded-full border border-[#f2d6ae]/20 sm:bottom-6 sm:left-6 sm:h-20 sm:w-20" />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#2a1b14]/78 px-4 py-3 backdrop-blur sm:-bottom-5 sm:w-[88%] sm:px-5 sm:py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffffff] sm:text-[11px] sm:tracking-[0.3em]">
            Before the crowd, there was the work
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
         
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }

          .hero-blob {
            animation: floatBlob 8s ease-in-out infinite;
          }

          .hero-blob-delay {
            animation: floatBlob 10s ease-in-out infinite;
          }

          .hero-blob-slow {
            animation: floatBlob 13s ease-in-out infinite;
          }

          .hero-sparkle {
            animation: sparkleFloat ease-in-out infinite;
          }

          .hero-shine {
            animation: shineMove 5.5s linear infinite;
          }

          .hero-card {
            animation: heroLift 6s ease-in-out infinite;
          }

          @keyframes floatBlob {
            0%,
            100% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            50% {
              transform: translateY(18px) translateX(12px) scale(1.04);
            }
          }

          @keyframes sparkleFloat {
            0%,
            100% {
              opacity: 0.18;
              transform: translateY(0px) scale(0.8);
            }
            50% {
              opacity: 0.95;
              transform: translateY(-10px) scale(1.15);
            }
          }

          @keyframes shineMove {
            0% {
              transform: translateX(0);
              opacity: 0;
            }
            12% {
              opacity: 0.25;
            }
            40% {
              opacity: 0.12;
            }
            100% {
              transform: translateX(380%);
              opacity: 0;
            }
          }

          @keyframes heroLift {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </section>

    <section
  id="about"
  className="relative overflow-hidden bg-[#fcfaf7] px-5 py-14 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f3e6d2] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#dcc3a0]/40 sm:-left-4 sm:-top-4" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[#f4eadf] p-3 shadow-[0_20px_60px_rgba(43,28,20,0.08)]">
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] bg-[#e8d8c5] sm:h-[410px] lg:h-[520px]">
            <Image
              src="/images/4.jpeg"
              alt="Hon. Dr. Judith Mayen Ogbara"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

       <div className="hidden sm:block absolute bottom-3 right-3 max-w-[170px] rounded-2xl border border-[#ead7bb] bg-white/94 p-3 shadow-[0_12px_40px_rgba(43,28,20,0.08)] backdrop-blur sm:bottom-4 sm:right-4 sm:max-w-[210px] sm:p-4 lg:bottom-6 lg:right-6 lg:max-w-[240px] lg:p-5">
  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:text-[11px] sm:tracking-[0.28em]">
    Profile Snapshot
  </p>
  <p className="mt-2 text-[13px] leading-6 text-[#6d5746] sm:text-sm sm:leading-7">
    A public servant and advocate whose work reflects service,
    leadership, and measurable community impact.
  </p>
</div>
</div>
      <div className="order-1 lg:order-2">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.3em]">
          About Judith
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          A Life Shaped by Service, Leadership, and Community Impact.
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

        <div className="mt-5 space-y-4">
          <p className="max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
            Hon. Dr. Judith Mayen Ogbara is a distinguished public servant,
            philanthropist, and advocate for transformative leadership.
          </p>

          <p className="max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
            Over the years, she has built a strong record of impact through
            scholarship support, women and youth-focused initiatives, governance
            advocacy, and meaningful community interventions.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <a
            href="#vision"
            className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
          >
            Mandate & Vision
          </a>

          <a
            href="#impact"
            className="inline-flex items-center justify-center rounded-full border border-[#caa77a] px-4 py-3 text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3]"
          >
            View Impact
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Public Service</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Years of visible engagement in governance and advocacy.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Education Impact</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Scholarship support and youth-focused development.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Women Empowerment</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Initiatives that uplift women through grants and mentorship.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Community Reach</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Consistent work focused on people-centered impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  id="impact"
  className="relative overflow-hidden bg-[#2a1b14] px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#241710_0%,#2f1d14_35%,#3a2418_65%,#22150f_100%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.12),transparent_28%)]" />
  <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />
  <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#d4af78]/10 blur-3xl" />
  <div className="absolute right-[10%] top-[22%] h-20 w-20 rounded-full bg-[#f1d3a6]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b07a]/80 sm:tracking-[0.3em]">
        Impact & Achievements
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl">
        Measurable Impact Rooted in Service, Education, and Empowerment.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#eadfce]/72 sm:text-lg">
        A record of visible impact through scholarships, empowerment, governance
        advocacy, and direct support for communities.
      </p>
    </div>

    {/* Top stat cards */}
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#cfa56f] sm:text-sm sm:tracking-[0.22em]">
          Education Reach
        </p>
        <p className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl">
          500+
        </p>
        <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
          Female students supported through scholarship and exam sponsorship programs.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#cfa56f] sm:text-sm sm:tracking-[0.22em]">
          Girls Empowered
        </p>
        <p className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl">
          5,000+
        </p>
        <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
          Girls reached through mentorship, educational access, and empowerment initiatives.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#cfa56f] sm:text-sm sm:tracking-[0.22em]">
          Women Supported
        </p>
        <p className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl">
          50
        </p>
        <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
          Women empowered with SME grants for business growth and financial stability.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#cfa56f] sm:text-sm sm:tracking-[0.22em]">
          Recognition
        </p>
        <p className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl">
          Multiple
        </p>
        <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
          Leadership appointments, public honors, and recognition for community impact.
        </p>
      </div>
    </div>

    {/* Hide featured note on mobile */}
    <div className="mt-8 hidden rounded-[2rem] border border-[#d4af78]/20 bg-[linear-gradient(90deg,rgba(212,175,120,0.14),rgba(255,255,255,0.03))] px-6 py-7 backdrop-blur-xl sm:block">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d9bb8d]">
        Featured Note
      </p>
      <p className="mt-3 max-w-4xl text-2xl font-semibold leading-relaxed text-white">
        “Before the Crowd, There was the Work.”
      </p>
      <p className="mt-3 max-w-4xl text-base leading-8 text-[#eadfce]/75">
        A leadership journey shaped not by noise, but by years of visible service,
        consistent action, and meaningful outcomes across communities.
      </p>
    </div>

    {/* Impact categories */}
    <div className="mt-8 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d2a96e] sm:text-sm sm:tracking-[0.28em]">
          Education & Scholarships
        </p>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
          Expanding access to learning and opportunity.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base sm:leading-8">
          Sustained scholarship support, exam sponsorship, tertiary grants, and digital
          skills initiatives have created real learning opportunities, especially for girls.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d2a96e] sm:text-sm sm:tracking-[0.28em]">
          Leadership & Governance
        </p>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
          Advocacy that strengthens systems and people.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base sm:leading-8">
          Her leadership roles reflect a commitment to accountability, inclusion,
          civic participation, and policies that improve lives.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d2a96e] sm:text-sm sm:tracking-[0.28em]">
          Women & Youth Empowerment
        </p>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
          Investing in confidence, skills, and self-reliance.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base sm:leading-8">
          From mentorship and vocational support to grants and targeted outreach,
          her work continues to uplift women and young people through practical empowerment.
        </p>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d2a96e] sm:text-sm sm:tracking-[0.28em]">
          Community Welfare & Health
        </p>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
          People-centered interventions with visible results.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base sm:leading-8">
          Healthcare outreach, welfare initiatives, educational resources, and direct
          interventions have supported underserved populations in meaningful ways.
        </p>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
      <a
        href="#vision"
        className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-4 py-3 text-sm font-semibold text-[#2a1a12] shadow-[0_0_25px_rgba(212,175,120,0.22)] transition hover:scale-[1.02] hover:bg-[#e0bd89] sm:px-7 sm:py-3.5"
      >
        Mandate & Vision
      </a>

      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full border border-[#e5c798]/35 bg-white/5 px-4 py-3 text-sm font-semibold text-[#f6ead9] backdrop-blur transition hover:bg-white/10 sm:px-7 sm:py-3.5"
      >
        Contact Team
      </a>
    </div>
  </div>
</section>

<section
  id="vision"
  className="relative overflow-hidden bg-[#fcfaf7] px-5 py-14 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-100px] top-20 h-64 w-64 rounded-full bg-[#f1e2cc] blur-3xl" />
    <div className="absolute right-[-80px] top-1/3 h-72 w-72 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#f6ecdf] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    {/* Intro */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
        Mandate & Vision
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-[#2b1c14] sm:text-4xl md:text-5xl">
        A Clear Vision Guided by Service, Integrity, and Measurable Progress.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
        Her public engagement is rooted in a people-centered vision that advances
        leadership, education, empowerment, and sustainable community development.
      </p>
    </div>

    {/* Vision + Mission */}
    <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
      <div className="rounded-[2rem] border border-[#eadac4] bg-white/90 p-5 shadow-[0_20px_60px_rgba(43,28,20,0.06)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.28em]">
          Our Vision
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14]">
          Building a future where leadership and opportunity uplift every community.
        </h3>
        <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-base">
          To build a society where leadership, education, and community empowerment
          become catalysts for sustainable development, social stability, and equal
          opportunity. A future where women, youth, and underserved populations have
          the support, access, and inspiration needed to thrive.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eadac4] bg-[linear-gradient(135deg,#f6efe6_0%,#f3e6d2_100%)] p-5 shadow-[0_20px_60px_rgba(43,28,20,0.06)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.28em]">
          Our Mission
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14]">
          Translating vision into impact through practical, people-focused action.
        </h3>
        <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-base">
          To implement strategic initiatives that strengthen governance, expand
          educational access, promote entrepreneurship, and uplift vulnerable
          communities through measurable and lasting impact. Every effort is guided
          by service, accountability, and a commitment to meaningful change.
        </p>
      </div>
    </div>

    {/* Core Mandate */}
    <div className="mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Core Mandate
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          Key focus areas shaping her work and public engagement.
        </h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Leadership & Governance",
            text: "Promoting inclusive leadership, civic participation, transparency, accountability, and stronger systems that serve the people effectively.",
          },
          {
            title: "Education & Development",
            text: "Expanding access to scholarships, academic resources, digital literacy, and long-term educational opportunity for students and young people.",
          },
          {
            title: "Community Welfare",
            text: "Delivering practical support through healthcare outreach, humanitarian interventions, and programs that strengthen vulnerable households.",
          },
          {
            title: "Youth Empowerment",
            text: "Equipping young people with vocational skills, mentorship, innovation pathways, and entrepreneurial support that build confidence and resilience.",
          },
          {
            title: "Women Advancement",
            text: "Supporting women through grants, economic opportunity, skill development, and initiatives that encourage inclusion, confidence, and independence.",
          },
          {
            title: "Sustainable Progress",
            text: "Advancing long-term solutions that combine service, institution-building, innovation, and measurable development across communities.",
            accent: true,
          },
        ].map((item, index) => {
          const isActive = activeMandateCard === index;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() =>
                setActiveMandateCard((prev) => (prev === index ? null : index))
              }
              className={`text-left rounded-[1.75rem] border p-5 shadow-sm transition duration-300 md:cursor-default ${
                item.accent
                  ? "border-[#eadac4] bg-[linear-gradient(135deg,#f8f1e8_0%,#f4e6d4_100%)]"
                  : "border-[#eadac4] bg-white"
              } ${
                isActive
                  ? "scale-[1.015] shadow-[0_18px_45px_rgba(43,28,20,0.10)]"
                  : ""
              } md:hover:-translate-y-1 md:hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]`}
            >
              <div
                className={`md:hidden mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-60"
                }`}
              />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7449] sm:tracking-[0.25em]">
                {item.title}
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
                {item.text}
              </p>
            </button>
          );
        })}
      </div>
    </div>

    {/* Guiding Values */}
    <div className="mt-10 rounded-[2rem] border border-[#eadac4] bg-white/90 p-5 shadow-[0_18px_50px_rgba(43,28,20,0.05)] backdrop-blur sm:p-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Guiding Values
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-3xl">
          Principles that define the work.
        </h3>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-5">
        <div className="rounded-2xl bg-[#faf5ee] p-4 text-center sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Integrity</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Upholding honesty and moral clarity in every decision.
          </p>
        </div>

        <div className="rounded-2xl bg-[#faf5ee] p-4 text-center sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Service</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Putting people and communities first in action and purpose.
          </p>
        </div>

        <div className="rounded-2xl bg-[#faf5ee] p-4 text-center sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Excellence</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Delivering with discipline, precision, and professionalism.
          </p>
        </div>

        <div className="rounded-2xl bg-[#faf5ee] p-4 text-center sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Compassion</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Leading with empathy, dignity, and concern for others.
          </p>
        </div>

        <div className="hidden sm:block rounded-2xl bg-[#faf5ee] p-4 text-center sm:col-span-2 xl:col-span-1 sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Innovation</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Embracing new ideas that drive real and sustainable progress.
          </p>
        </div>
      </div>
    </div>

    {/* Commitment */}
    <div className="mt-10 rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
        Commitment
      </p>
      <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
        A promise of meaningful action, visible results, and lasting service.
      </h3>
      <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
        Her commitment remains rooted in measurable impact, people-centered leadership,
        and a legacy of service that strengthens communities, expands opportunity,
        and inspires sustainable progress for future generations.
      </p>
    </div>
  </div>
</section>

<section
  id="gallery"
  className="relative overflow-hidden bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-[#f3e6d2] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
        Leadership in Action
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] md:text-4xl">
        Visible Engagement Beyond Words.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#6d5746] md:text-lg">
        Real impact is reflected through active participation, leadership presence,
        and meaningful contributions at both community and national levels.
      </p>
    </div>

    <div className="mt-10 grid gap-5 xl:grid-cols-3">
      {/* Card 1 */}
      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/action-0.jpg"
            alt="Judith serving on the APC convention medical team"
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />

          {/* subtle animated accent */}
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:rotate-6" />

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2b1c14]/40 to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449] sm:text-sm sm:tracking-[0.25em]">
            National Service
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            APC Convention Medical Team
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Serving on the medical team during the APC National Convention,
            contributing to coordination and support during a major national event.
          </p>
        </div>
      </article>

      {/* Card 2 */}
      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/3.jpg"
            alt="Judith presenting empowerment support to young women"
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:rotate-6" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2b1c14]/40 to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449] sm:text-sm sm:tracking-[0.25em]">
            Community Impact
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Women Empowerment Support
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Presenting beauty and empowerment kits to young women in Akwa Ibom State
            as part of practical support for growth and self-reliance.
          </p>
        </div>
      </article>

      {/* Card 3 */}
      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/action-2.jpg"
            alt="Judith during a crucial medical committee session"
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:rotate-6" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2b1c14]/40 to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449] sm:text-sm sm:tracking-[0.25em]">
            Leadership Presence
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Medical Committee Engagement
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Participating in a crucial medical committee session ahead of the
            convention, helping to support planning, safety, and smooth coordination.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<section
  id="contact"
  className="relative overflow-hidden bg-[#f8f4ef] px-5 py-14 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute bottom-0 right-[-80px] h-80 w-80 rounded-full bg-[#f2e4d0] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-[#2b1c14] sm:text-4xl md:text-5xl">
        Get in Touch with Her Team.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
        For official inquiries, partnerships, community initiatives, or general
        correspondence, kindly reach out through the details below.
      </p>
    </div>

    <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      {/* Left info panel */}
      <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] p-5 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
          Contact Information
        </p>

        <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
          Let’s start a meaningful conversation.
        </h3>

        <p className="mt-5 text-[15px] leading-8 text-[#eadfce]/85 sm:text-base">
          Her team welcomes respectful inquiries related to public engagement,
          leadership initiatives, partnerships, and official communication.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:p-5">
            <FaEnvelope className="mt-1 text-[#d9bb8d]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bb8d] sm:tracking-[0.25em]">
                Email
              </p>
              <p className="mt-2 text-base leading-7 text-[#fff5e8]">
                info@judithogbara.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:p-5">
            <FaPhone className="mt-1 text-[#d9bb8d]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bb8d] sm:tracking-[0.25em]">
                Phone
              </p>
              <p className="mt-2 text-base leading-7 text-[#fff5e8]">
                +234 812 497 2568 | +234 803 304 8469
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:p-5">
            <FaLocationDot className="mt-1 text-[#d9bb8d]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9bb8d] sm:tracking-[0.25em]">
                Location
              </p>
              <p className="mt-2 text-base leading-7 text-[#fff5e8]">
                85 Eket Etinan Road, Okon Eket, Akwa Ibom State
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.12]"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a>

          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.12]"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>

          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.12]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-sm" />
          </a>

          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.12]"
            aria-label="X"
          >
            <FaXTwitter className="text-sm" />
          </a>

          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.12]"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-sm" />
          </a>
        </div>
      </div>

      {/* Right form panel */}
      <div className="rounded-[2rem] border border-[#eadac4] bg-white/90 p-5 shadow-[0_20px_60px_rgba(43,28,20,0.06)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Send a Message
        </p>

        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-3xl">
          Reach out directly.
        </h3>

        <form className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-[#6d5746]">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-3 text-sm text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20 sm:py-4 sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-[#6d5746]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-3 text-sm text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20 sm:py-4 sm:text-base"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium text-[#6d5746]">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="What is this about?"
              className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-3 text-sm text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-[#6d5746]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20 sm:rows-6 sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f1d14] sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

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