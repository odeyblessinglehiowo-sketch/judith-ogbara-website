"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Awards", href: "/awards" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "Contact", href: "/contact" },
];

const awards = [
  {
    image: "/images/AWARD1.jpeg",
    caption: "Recognized for outstanding service and national impact",
  },
  {
    image: "/images/AWARD2.jpeg",
    caption: "Honored for empowering women and advancing education",
  },
  {
    image: "/images/AWARD3.jpeg",
    caption: "Awarded for leadership in youth and student development",
  },
  {
    image: "/images/AWARD4.jpeg",
    caption: "Celebrated for excellence in governance and public service",
  },
  {
    image: "/images/AWARD5.jpeg",
    caption: "Acknowledged for unwavering commitment to community development",
  },
  {
    image: "/images/AWARD6.jpeg",
    caption: "Recognized for impactful leadership and humanitarian contributions",
  },
  {
    image: "/images/AWARD7.jpeg",
    caption: "Honored for dedication to justice and community service",
  },
  {
    image: "/images/AWARD8.jpeg",
    caption: "Awarded for inspiring leadership and national youth empowerment",
  },
  {
    image: "/images/AWARD9.jpeg",
    caption: "Recognized for excellence in advocacy and social impact",
  },
];

const MiniAward = ({ src }: { src: string }) => {
  return (
    <div className="w-[120px]">

      {/* Frame */}
      <div className="rounded-[1.2rem] bg-[#3a2418] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">

        <div className="rounded-[1rem] border-[2px] border-[#d4af78] p-[3px]">

          <div className="rounded-[0.8rem] border border-[#f0d2a4] p-[3px] bg-[#1f130d]">

            <div className="relative h-[100px] w-full overflow-hidden rounded-[0.6rem]">
              <Image
                src={src}
                alt="Award"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default function AwardsPage() {
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
const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-brown text-[#2b1c14]">
      {/* HEADER (same as About page) */}
     <header className="sticky top-0 z-50 w-full px-0 pt-0">
  <div className="border-b border-white/10 bg-[#2a1b14]/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-[#d4af78]/40 bg-gradient-to-br from-[#2a1b14] to-[#1a120d] shadow-[0_0_20px_rgba(212,175,120,0.15)]">
          <Image
            src="/images/judith-logo2.png"
            alt="Judith Ogbara logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f0d39d]">
            Judith Ogbara
          </p>
          <p className="mt-0.5 text-xs text-[#eadfce]/70">
            Official Profile
          </p>
        </div>
      </Link>

      {/* NAV */}
      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = item.href === "/awards"; // 👈 important

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#d4af78]/25 to-[#f2d4a8]/20 text-[#f6e2c5] shadow-[0_4px_18px_rgba(212,175,120,0.2)]"
                  : "text-[#f1e7da]/75 hover:text-white"
              }`}
            >
              <span className="relative z-10">{item.label}</span>

              {/* underline glow */}
              <span
                className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent transition-transform duration-300 ${
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* CTA */}
      <Link
        href="/contact"
        className="hidden md:inline-flex rounded-full bg-gradient-to-r from-[#d4af78] to-[#f0d2a4] px-6 py-3 text-sm font-semibold text-[#2a1a12] shadow-[0_6px_20px_rgba(212,175,120,0.3)] transition hover:brightness-105"
      >
        Get in Touch
      </Link>

      {/* MOBILE BUTTON */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#d4af78]/30 bg-[#1a120d] text-[#f5e5cc] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#24160f] md:hidden"
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
</header>
{mobileMenuOpen && (
  <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden">

    <div className="absolute right-0 top-0 h-full w-[75%] bg-[#1a120d] p-6 shadow-xl">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setMobileMenuOpen(false)}
        className="mb-8 text-white text-2xl"
      >
        ×
      </button>

      {/* NAV ITEMS */}
      <nav className="flex flex-col gap-6 text-[#f1e7da]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </div>
)}
      {/* HERO */}
<section className="relative overflow-hidden bg-[#2b1c14] px-5 py-8 sm:py-10">

  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-80px] top-10 h-64 w-64 rounded-full bg-[#d4af78]/20 blur-3xl" />
    <div className="absolute right-[-60px] top-1/3 h-72 w-72 rounded-full bg-[#f0cf95]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-5xl text-center">

  {/* FRAME - THICK CLASSIC AWARD STYLE */}
<div className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px]">

  {/* OUTER SHADOW / DEPTH */}
  <div className="absolute -inset-6 bg-black/40 blur-2xl opacity-50" />

  {/* MAIN FRAME */}
  <div className="relative p-[18px] bg-gradient-to-br from-[#3a2418] via-[#2b1c14] to-[#1a120d] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">

    {/* GOLD BEVEL FRAME */}
    <div className="p-[10px] bg-gradient-to-br from-[#f0d2a4] via-[#d4af78] to-[#8a5a2b]">

      {/* INNER SHADOW (creates that carved look) */}
      <div className="p-[10px] bg-[#2b1c14] shadow-inner">

        {/* LIGHT INNER BORDER */}
        <div className="p-[6px] border border-[#f0d2a4]/60 bg-[#1f130d]">

          {/* IMAGE */}
          <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] w-full overflow-hidden">
            <Image
              src="/images/j1.jpeg"
              alt="Hon. Judith Ogbara"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
          
{/* FLOATING MINI AWARDS - DESKTOP ONLY */}
<div className="pointer-events-none absolute inset-0 hidden lg:block">

  {/* LEFT SIDE */}
  <div className="absolute left-4 top-10 rotate-[-8deg]">
    <MiniAward src="/images/4.jpeg" />
  </div>

  <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-[6deg]">
    <MiniAward src="/images/p64.jpeg" />
  </div>

  <div className="absolute left-4 bottom-10 rotate-[-4deg]">
    <MiniAward src="/images/p8.jpeg" />
  </div>

  {/* RIGHT SIDE */}
  <div className="absolute right-4 top-12 rotate-[7deg]">
    <MiniAward src="/images/action-02.jpg" />
  </div>

  <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-[-6deg]">
    <MiniAward src="/images/judith -about.jpg" />
  </div>

  <div className="absolute right-4 bottom-12 rotate-[5deg]">
    <MiniAward src="/images/p3.jpeg" />
  </div>

</div>
    {/* TEXT UNDER */}
    <div className="mt-8">

      <p className="text-sm uppercase tracking-[0.3em] text-[#d4af78]">
        Recognition
      </p>

      <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Awards & Honors
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#eadfce]/80 leading-7">
        A reflection of consistent service, leadership, and impact
        across communities, institutions, and national platforms.
      </p>

    </div>
  </div>
</section>

      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10">
  <div className="mx-auto max-w-7xl grid grid-cols-2 gap-5 lg:grid-cols-3">

    {awards.map((award, index) => (
      <div key={index} className="group">

        {/* IMAGE FRAME */}
        <div
          onClick={() => setActiveImage(award.image)}
          className="cursor-pointer hover:-translate-y-1 transition"
        >
          <div className="bg-[#3a2418] p-[2px] shadow-sm">

            <div className="border border-[#d4af78]/70 p-[2px]">

              <div className="border border-[#f0d2a4]/60 p-[2px] bg-white">

                {/* IMAGE */}
                <div className="relative h-[170px] sm:h-[220px] overflow-hidden">
                  <Image
                    src={award.image}
                    alt="Award"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CAPTION BELOW */}
        <p className="mt-3 text-[12.5px] sm:text-sm leading-5 text-[#6d5746] text-center px-2">
          {award.caption}
        </p>

      </div>
    ))}

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
     {activeImage && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    onClick={() => setActiveImage(null)}
  >
    <div
      className="relative w-full max-w-sm"
      onClick={(e) => e.stopPropagation()}
    >
      {/* FRAME */}
      <div className="bg-[#3a2418] p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="border border-[#d4af78] p-[4px]">
          <div className="border border-[#f0d2a4] p-[4px] bg-white">

            <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden">
              <Image
                src={activeImage}
                alt="Award preview"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setActiveImage(null)}
        className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-[#2b1c14] font-bold shadow"
      >
        ×
      </button>
    </div>
  </div>
)}
    </main>
  );
}