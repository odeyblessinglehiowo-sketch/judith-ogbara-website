"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
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
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#241710]/85 backdrop-blur-xl">
  <div className="mx-auto max-w-7xl px-0 sm:px-0 lg:px-6">
    <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:rounded-none lg:border-none lg:bg-transparent lg:px-4 lg:py-5">
      <a href="#home" className="flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d9bb8d]/30 bg-white/10">
          <Image
            src="/images/judith-logo.png"
            alt="Judith Ogbara logo"
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f3ddbc] lg:tracking-[0.38em]">
            Judith Ogbara
          </p>
          <p className="mt-0.5 text-xs text-[#f8ede0]/60">
            Official Profile
          </p>
        </div>
      </a>

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

      <a
        href="#contact"
        className="group relative hidden overflow-hidden rounded-full border border-[#d8b07a]/45 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-[#f5e5cc] backdrop-blur md:inline-flex"
      >
        <span className="relative z-10 transition duration-300 group-hover:text-[#24160f]">
          Get in Touch
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#d4af78] to-[#f0d2a4] opacity-0 transition duration-300 group-hover:opacity-100" />
      </a>

      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b07a]/35 bg-white/[0.05] text-[#f5e5cc] backdrop-blur transition hover:bg-white/[0.1] md:hidden"
        aria-label="Open navigation menu"
      >
        <div className="relative flex h-4 w-5 flex-col items-center justify-center">
          <span className="absolute h-[2px] w-5 -translate-y-[6px] rounded-full bg-current" />
          <span className="absolute h-[2px] w-5 rounded-full bg-current" />
          <span className="absolute h-[2px] w-5 translate-y-[6px] rounded-full bg-current" />
        </div>
      </button>
    </div>
  </div>

  {/* Mobile side drawer */}
 <div
  className={`fixed inset-0 z-[110] md:hidden ${
    mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
  <div
    onClick={() => setMobileMenuOpen(false)}
    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
      mobileMenuOpen ? "opacity-100" : "opacity-0"
    }`}
  />

  <aside
    className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-[#fcfaf7] shadow-[-10px_0_40px_rgba(0,0,0,0.18)] transition-transform duration-300 ${
      mobileMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between border-b border-[#eadac4] px-6 py-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7449]">
          Menu
        </p>
        <p className="mt-2 text-2xl font-bold text-[#2b1c14]">
          Judith Ogbara
        </p>
      </div>

      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dcc3a0] text-[#2b1c14]"
        aria-label="Close navigation menu"
      >
        <span className="text-3xl leading-none">×</span>
      </button>
    </div>

    <nav className="px-6 py-3">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className="block border-b border-[#eadac4] py-5 text-[1.2rem] font-semibold text-[#1f2435] transition hover:text-[#9a7449]"
        >
          {item.label}
        </a>
      ))}

      <a
        href="#contact"
        onClick={() => setMobileMenuOpen(false)}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3.5 text-sm font-semibold text-white"
      >
        Get in Touch
      </a>
    </nav>
  </aside>
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

      <h1 className="max-w-3xl text-[2.8rem] font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
        Hon. Dr. Judith
        <span className="block text-[#f0d1a0]">Mayen Ogbara</span>
      </h1>

      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-[#efe3d4]/85 sm:mt-7 sm:text-lg md:text-xl">
        A distinguished leader committed to empowering communities,
        advancing education, and promoting inclusive governance through
        service, integrity, and lasting impact.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
        <a
          href="#about"
          className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-4 py-3 text-sm font-semibold text-[#2a1a12] shadow-[0_0_25px_rgba(212,175,120,0.25)] transition hover:scale-[1.02] hover:bg-[#e0bd89] sm:px-7"
        >
          About Her
        </a>

        <a
          href="#impact"
          className="inline-flex items-center justify-center rounded-full border border-[#e5c798]/45 bg-white/5 px-4 py-3 text-sm font-semibold text-[#f6ead9] backdrop-blur transition hover:bg-white/10 sm:px-7"
        >
          View Impact
        </a>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-10 xl:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <p className="text-[1.9rem] font-bold leading-none text-[#f1d3a6]">500+</p>
          <p className="mt-2 text-[13px] leading-5 text-[#f5ebdf]/75">
            Female students supported
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <p className="text-[1.9rem] font-bold leading-none text-[#f1d3a6]">5,000+</p>
          <p className="mt-2 text-[13px] leading-5 text-[#f5ebdf]/75">
            Girls empowered through outreach
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <p className="text-[1.9rem] font-bold leading-none text-[#f1d3a6]">50</p>
          <p className="mt-2 text-[13px] leading-5 text-[#f5ebdf]/75">
            Women supported with SME grants
          </p>
        </div>
      </div>
    </div>

    <div className="relative flex justify-center lg:justify-end">
      <div className="hero-card relative w-full max-w-[420px] sm:max-w-[480px]">
        <div className="absolute inset-0 rounded-[2rem] bg-[#d4af78]/10 blur-2xl" />
        <div className="absolute -inset-2 rounded-[2.1rem] border border-[#e8c998]/15 sm:-inset-3 sm:rounded-[2.3rem]" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="relative h-[360px] overflow-hidden rounded-[1.6rem] bg-[#5b3b27] sm:h-[460px] lg:h-[540px]">
            <Image
              src="/images/judith-hero.jpg"
              alt="Hon. Dr. Judith Mayen Ogbara portrait"
              fill
              priority
              className="object-cover object-top"
            />

            <div className="hero-shine absolute inset-y-0 left-[-30%] w-[35%] rotate-12 bg-white/10 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_28%),linear-gradient(to_bottom,rgba(20,11,8,0.06),rgba(20,11,8,0.3))]" />

            <div className="absolute right-4 top-4 h-12 w-12 rounded-full border border-white/20 sm:right-5 sm:top-5 sm:h-14 sm:w-14" />
            <div className="absolute bottom-5 left-5 h-16 w-16 rounded-full border border-[#f2d6ae]/20 sm:bottom-6 sm:left-6 sm:h-20 sm:w-20" />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#2a1b14]/78 px-4 py-3 backdrop-blur sm:-bottom-5 sm:w-[88%]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9bb8d] sm:text-[11px] sm:tracking-[0.3em]">
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
  className="relative overflow-hidden bg-[#fcfaf7] px-5 py-16 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f3e6d2] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#dcc3a0]/40 sm:-left-4 sm:-top-4" />

        <div className="relative order-2 lg:order-1">
  <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#dcc3a0]/40 sm:-left-4 sm:-top-4" />

  <div className="relative overflow-hidden rounded-[2rem] bg-[#f4eadf] p-3 shadow-[0_20px_60px_rgba(43,28,20,0.08)]">
    <div className="relative h-[330px] overflow-hidden rounded-[1.5rem] bg-[#e8d8c5] sm:h-[420px] lg:h-[520px]">
      <Image
        src="/images/4.jpeg"
        alt="Hon. Dr. Judith Mayen Ogbara"
        fill
        className="object-cover object-top"
      />
    </div>
  </div>

  <div className="absolute bottom-4 right-4 max-w-[185px] rounded-2xl border border-[#ead7bb] bg-white/94 p-4 shadow-[0_12px_40px_rgba(43,28,20,0.08)] backdrop-blur sm:-bottom-5 sm:right-6 sm:max-w-[240px] sm:p-5">
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a7449] sm:tracking-[0.28em]">
      Profile Snapshot
    </p>
    <p className="mt-3 text-sm leading-7 text-[#6d5746]">
      A public servant and advocate whose work reflects service,
      leadership, and measurable community impact.
    </p>
  </div>
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
            philanthropist, and advocate for transformative leadership. Her work is
            rooted in integrity, compassion, and a clear commitment to improving
            lives through education, empowerment, and inclusive governance.
          </p>

          <p className="max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
            Over the years, she has built a strong record of impact through
            scholarship support, youth and women-focused initiatives, governance
            advocacy, and community-based interventions that create meaningful and
            lasting change.
          </p>

          <p className="hidden max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:block sm:text-lg">
            Her public engagement continues to reflect a deep sense of duty to the
            people, especially through efforts that strengthen opportunity,
            accountability, and sustainable development across communities.
          </p>
        </div>

       <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
  <a
    href="#vision"
    className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14] sm:px-6"
  >
    Explore Mandate & Vision
  </a>

  <a
    href="#impact"
    className="inline-flex items-center justify-center rounded-full border border-[#caa77a] px-4 py-3 text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3] sm:px-6"
  >
    View Impact
  </a>
</div>

        <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Public Service</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Years of visible engagement in governance, empowerment, and advocacy.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Education Impact</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Scholarship support, learning access, and youth-focused development.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Women Empowerment</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Initiatives that uplift women through grants, mentorship, and opportunity.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadac4] bg-white p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-[#8a653f]">Community Reach</p>
            <p className="mt-2 text-sm leading-7 text-[#6d5746]">
              Consistent work focused on people-centered and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  id="impact"
  className="relative overflow-hidden bg-[#2a1b14] px-5 py-16 text-white sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#241710_0%,#2f1d14_35%,#3a2418_65%,#22150f_100%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.12),transparent_28%)]" />
  <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />
  <div className="absolute left-[8%] top-[16%] h-28 w-28 rounded-full bg-[#d4af78]/10 blur-3xl" />
  <div className="absolute right-[10%] top-[22%] h-24 w-24 rounded-full bg-[#f1d3a6]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a]/80 sm:tracking-[0.3em]">
        Impact & Achievements
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl">
        Measurable Impact Rooted in Service, Education, and Empowerment.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#eadfce]/70 sm:text-lg">
        Over the years, Dr. Judith Ogbara’s initiatives have touched lives
        through scholarships, youth development, women empowerment, governance
        advocacy, and direct community support.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f] sm:tracking-[0.22em]">
          Education Reach
        </p>
        <p className="mt-4 text-4xl font-bold text-white">500+</p>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base">
          Female students supported through scholarship and examination sponsorship initiatives.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f] sm:tracking-[0.22em]">
          Girls Empowered
        </p>
        <p className="mt-4 text-4xl font-bold text-white">5,000+</p>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base">
          Girls reached through mentorship, educational access, and empowerment-focused programs.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f] sm:tracking-[0.22em]">
          Women Supported
        </p>
        <p className="mt-4 text-4xl font-bold text-white">50</p>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base">
          Women empowered with SME business grants to support growth and financial stability.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f] sm:tracking-[0.22em]">
          National Recognition
        </p>
        <p className="mt-4 text-4xl font-bold text-white">Multiple</p>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base">
          Leadership appointments, humanitarian honors, and public recognition for community impact.
        </p>
      </div>
    </div>

    <div className="mt-6 rounded-[2rem] border border-[#d4af78]/20 bg-[linear-gradient(90deg,rgba(212,175,120,0.14),rgba(255,255,255,0.03))] px-5 py-5 backdrop-blur-xl sm:mt-8 sm:px-6 sm:py-7">
    <div className="mt-8 hidden rounded-[2rem] ... lg:block"></div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d9bb8d] sm:tracking-[0.3em]">
        Featured Note
      </p>
      <p className="mt-3 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
        “Before the Crowd, There was the Work.”
      </p>
     
      <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:text-base sm:leading-8">
        A leadership journey shaped not by noise, but by years of visible service,
        consistent action, and meaningful outcomes across communities.
      </p>
    </div>
 

    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d2a96e]">
          Education & Scholarships
        </p>
        <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">
          Expanding access to learning and opportunity.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:mt-4 sm:text-base sm:leading-8">
          Through sustained scholarship support, WAEC and JAMB sponsorship,
          tertiary education grants, and digital skills initiatives, her work has
          created pathways for students, especially girls, to pursue meaningful futures.
        </p>
      </div>

      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d2a96e]">
          Leadership & Governance
        </p>
        <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">
          Advocacy that strengthens systems and people.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:mt-4 sm:text-base sm:leading-8">
          Her leadership roles across youth and empowerment structures reflect a
          commitment to accountability, inclusion, civic participation, and the
          advancement of policies that improve lives.
        </p>
      </div>

      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d2a96e]">
          Women & Youth Empowerment
        </p>
        <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">
          Investing in confidence, skills, and self-reliance.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:mt-4 sm:text-base sm:leading-8">
          From mentorship and vocational support to entrepreneurial funding and
          targeted outreach, her initiatives continue to uplift women and young people
          through practical empowerment.
        </p>
      </div>

      <div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af78]/30 hover:bg-white/[0.06] sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d2a96e]">
          Community Welfare & Health
        </p>
        <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">
          People-centered interventions with visible results.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#eadfce]/75 sm:mt-4 sm:text-base sm:leading-8">
          Her outreach efforts have provided direct support through healthcare
          programs, community welfare initiatives, educational resources, and practical
          interventions for underserved populations.
        </p>
      </div>
    </div>

    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
      <a
        href="#vision"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af78] px-7 py-3.5 text-sm font-semibold text-[#2a1a12] shadow-[0_0_25px_rgba(212,175,120,0.22)] transition hover:scale-[1.02] hover:bg-[#e0bd89] sm:w-auto"
      >
        Explore Mandate & Vision
      </a>

      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center rounded-full border border-[#e5c798]/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-[#f6ead9] backdrop-blur transition hover:bg-white/10 sm:w-auto"
      >
        Contact Her Team
      </a>
    </div>
  </div>
</section>

<section
  id="vision"
  className="relative overflow-hidden bg-[#fcfaf7] px-5 py-16 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-100px] top-20 h-64 w-64 rounded-full bg-[#f1e2cc] blur-3xl" />
    <div className="absolute right-[-80px] top-1/3 h-72 w-72 rounded-full bg-[#ead7bb] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.3em]">
        Mandate & Vision
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.12] text-[#2b1c14] sm:text-4xl md:text-5xl">
        A Clear Vision Guided by Service, Integrity, and Measurable Progress.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
        Her public engagement is rooted in a people-centered vision that advances
        leadership, education, empowerment, and sustainable community development.
      </p>
    </div>

    <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
      <div className="rounded-[2rem] border border-[#eadac4] bg-white/90 p-5 shadow-[0_20px_60px_rgba(43,28,20,0.06)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.28em]">
          Our Vision
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-2xl">
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
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.28em]">
          Our Mission
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-2xl">
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

       <div className="mt-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.3em]">
          Core Mandate
        </p>
        <h3 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          Key focus areas shaping her work and public engagement.
        </h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Leadership & Governance
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Promoting inclusive leadership, civic participation, transparency,
            accountability, and stronger systems that serve the people effectively.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Education & Development
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Expanding access to scholarships, academic resources, digital literacy,
            and long-term educational opportunity for students and young people.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Community Welfare
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Delivering practical support through healthcare outreach, humanitarian
            interventions, and programs that strengthen vulnerable households.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Youth Empowerment
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Equipping young people with vocational skills, mentorship, innovation
            pathways, and entrepreneurial support that build confidence and resilience.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Women Advancement
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Supporting women through grants, economic opportunity, skill development,
            and initiatives that encourage inclusion, confidence, and independence.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#eadac4] bg-[linear-gradient(135deg,#f8f1e8_0%,#f4e6d4_100%)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(43,28,20,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449] sm:tracking-[0.25em]">
            Sustainable Progress
          </p>
          <p className="mt-4 text-[15px] leading-8 text-[#6d5746] sm:text-base">
            Advancing long-term solutions that combine service, institution-building,
            innovation, and measurable development across communities.
          </p>
        </div>
      </div>
    </div>

        <div className="mt-10 rounded-[2rem] border border-[#eadac4] bg-white/90 p-5 shadow-[0_18px_50px_rgba(43,28,20,0.05)] backdrop-blur sm:p-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449] sm:tracking-[0.3em]">
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

        <div className="rounded-2xl bg-[#faf5ee] p-4 text-center sm:col-span-2 xl:col-span-1 sm:p-5">
          <p className="text-base font-semibold text-[#8a653f]">Innovation</p>
          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            Embracing new ideas that drive real and sustainable progress.
          </p>
        </div>
      </div>
    </div>
  

    <div className="mt-12 rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9bb8d]">
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
  className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-[#f3e6d2] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7449]">
        Leadership in Action
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] md:text-4xl">
        Visible Engagement Beyond Words.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-base leading-8 text-[#6d5746] md:text-lg">
        Real impact is reflected through active participation, leadership presence,
        and meaningful contributions at both community and national levels.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
          <Image
            src="/images/action-1.jpg"
            alt="Judith serving on the APC convention medical team"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/25 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-300 group-hover:scale-110" />
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7449]">
            National Service
          </p>
          <h3 className="mt-3 text-xl font-bold text-[#2b1c14]">
            APC Convention Medical Team
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Serving on the medical team during the APC National Convention,
            contributing to coordination and support during a major national event.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
          <Image
            src="/images/3.jpg"
            alt="Judith presenting empowerment support to young women"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/25 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-300 group-hover:scale-110" />
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7449]">
            Community Impact
          </p>
          <h3 className="mt-3 text-xl font-bold text-[#2b1c14]">
            Women Empowerment Support
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Presenting beauty and empowerment kits to young women in Akwa Ibom State
            as part of practical support for growth and self-reliance.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-white shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)]">
        <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
          <Image
            src="/images/action-2.jpg"
            alt="Judith during a crucial medical committee session"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1c14]/25 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/50 bg-white/15 backdrop-blur-sm transition duration-300 group-hover:scale-110" />
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7449]">
            Leadership Presence
          </p>
          <h3 className="mt-3 text-xl font-bold text-[#2b1c14]">
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
  className="relative overflow-hidden bg-[#f8f4ef] px-5 py-20 text-[#2b1c14] sm:px-6 lg:px-10 lg:py-24"
>
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[#ead7bb] blur-3xl" />
    <div className="absolute bottom-0 right-[-80px] h-80 w-80 rounded-full bg-[#f2e4d0] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7449]">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.15] text-[#2b1c14] sm:text-4xl md:text-5xl">
        Get in Touch with Her Team.
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />

      <p className="mt-5 text-base leading-8 text-[#6d5746] sm:text-lg">
        For official inquiries, collaborations, speaking engagements, community
        initiatives, or general correspondence, kindly reach out through the
        contact details below.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] p-6 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9bb8d]">
          Contact Information
        </p>

        <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
          Let’s start a meaningful conversation.
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
          Her team welcomes respectful inquiries related to public engagement,
          leadership initiatives, partnerships, and official communication.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <FaEnvelope className="mt-1 text-[#d9bb8d]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9bb8d]">
                Email
              </p>
              <p className="mt-2 text-base text-[#fff5e8]">info@judithogbara.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9bb8d]">
                Phone
              </p>
              <p className="mt-2 text-base text-[#fff5e8]">+234 812 497 2568 | +234 803 304 8469</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <FaLocationDot className="mt-1 text-[#d9bb8d]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9bb8d]">
                Location
              </p>
              <p className="mt-2 text-base text-[#fff5e8]">
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
            aria-label="Linkedin"
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
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="text-sm" />
          </a>

        </div>
      </div>

      <div className="rounded-[2rem] border border-[#eadac4] bg-white/90 p-6 shadow-[0_20px_60px_rgba(43,28,20,0.06)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7449]">
          Send a Message
        </p>

        <h3 className="mt-4 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-3xl">
          Reach out directly.
        </h3>

        <form className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-[#6d5746]">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-4 text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20"
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
                className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-4 text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20"
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
              className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-4 text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-[#6d5746]">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
              className="mt-2 w-full rounded-2xl border border-[#e6d7c2] bg-[#fcfaf7] px-5 py-4 text-[#2b1c14] outline-none transition focus:border-[#b88b58] focus:ring-2 focus:ring-[#d4af78]/20"
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