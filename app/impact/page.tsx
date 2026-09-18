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
  FaArrowRight,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Awards", href: "/awards" },
  { label: "Leadership", href: "/leadership" },
  {
    label: "G4EP",
    href: "https://www.geeeep.com",
    external: true,
  },
  {
    label: "AAE Foundation",
    href: "https://www.aaefoundation.org.ng",
    external: true,
  },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const impactFocus = [
  {
    id: "education",
    label: "Education",
    title: "Opening doors through scholarship, learning support, and opportunity.",
    text:
      "From examination sponsorship to learning materials and tertiary support, her work in education has helped many young people, especially girls, stay encouraged and keep moving forward.",
    stat: "500+ female students supported",
    image: "/images/learning-materials.jpg",
    badge: "Education Reach",
  },
  {
    id: "women",
    label: "Women",
    title: "Practical support that helps women grow with confidence and dignity.",
    text:
      "Her empowerment work has focused on practical help, business support, useful tools, and interventions that make real difference in the everyday lives of women.",
    stat: "50 women supported with SME grants",
    image: "/images/makeup-kits1.jpg",
    badge: "Women Empowered",
  },
  {
    id: "youth",
    label: "Youth",
    title: "Helping young people build skills, confidence, and a stronger future.",
    text:
      "Through mentorship, training, and youth-centered development initiatives like the RISE program, she continues to invest in the growth and direction of young people.",
    stat: "5,000+ girls reached through outreach",
    image: "/images/rise-training.jpg",
    badge: "Youth Development",
  },
  {
    id: "community",
    label: "Community",
    title: "Service that stays close to people and responds to real needs.",
    text:
      "Whether through healthcare outreach, dignity support, school assistance, or practical community interventions, her work continues to touch lives where it matters most.",
    stat: "Multiple recognitions for community impact",
    image: "/images/pads-donation1.jpg",
    badge: "Community Support",
  },
];

export default function ImpactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFocus, setActiveFocus] = useState(impactFocus[0]);
const [activeActionCard, setActiveActionCard] = useState(0);

const actionCards = [
  {
    category: "Community Support",
    title: "Dignity Support for Young Girls",
    description:
      "Providing sanitary pads to support the health, confidence, and well-being of young girls in school and in the community.",
    image: "/images/pads-donation1.jpg",
    alt: "Judith donating sanitary pads",
  },
  {
    category: "Education Support",
    title: "Supporting Learning with Essential Materials",
    description:
      "Distributing books and educational materials to help students learn better and stay encouraged in their studies.",
    image: "/images/learning-materials.jpg",
    alt: "Judith distributing learning materials",
  },
  {
    category: "Women Empowerment",
    title: "Empowerment Support for Young Women",
    description:
      "Presenting practical empowerment kits to young women as part of efforts that encourage confidence, growth, and self-reliance.",
    image: "/images/makeup-kits1.jpg",
    alt: "Judith presenting makeup kits to young women",
  },
  {
    category: "Skills Development",
    title: "Building Skills Through the RISE Training Program",
    description:
      "Engaging with students during the RISE training initiative, focused on digital skills, creativity, and future opportunity.",
    image: "/images/rise-training.jpg",
    alt: "Judith with students during RISE training",
  },
];

const currentActionCard = actionCards[activeActionCard];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const [showAllAchievements, setShowAllAchievements] = useState(false);
  return (
     <main className="min-h-screen bg-brown text-[#2b1c14]">
         {/* Header */}
     <header className="sticky top-0 z-50 w-full px-0 pt-0">
  <div className="border-b border-white/10 bg-[#2a1b14]/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <a href="#home" className="flex items-center gap-3">
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-[#ffffff]/30 bg-gold/10">
          <Image
            src="/images/judith-logo2.png"
            alt="Judith Ogbara logo"
            fill
            className="object-cover p-0"
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

      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = item.href === "/impact";

          return (
            <Link
        key={item.href}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={`group relative rounded-full px-2 py-2 text-sm font-bold transition ${
          isActive
            ? "bg-[#d4af78]/15 text-[#f3d7aa]"
            : "text-white/80 hover:text-white"
        }`}
      >
        <span className="relative z-10">{item.label}</span>

        <span
          className={`absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-[#b7864a] to-[#f2d4a8] transition-transform duration-300 ${
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
        className="group relative hidden overflow-hidden rounded-full border border-[#d8b07a]/45 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-[#f5e5cc] backdrop-blur transition md:inline-flex"
      >
        <span className="relative z-10 transition duration-300 group-hover:text-[#24160f]">
          Get in Touch
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#d4af78] to-[#f0d2a4] opacity-0 transition duration-300 group-hover:opacity-100" />
      </Link>

      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8b07a]/40 bg-white/[0.06] text-[#f5e5cc] backdrop-blur transition hover:bg-white/[0.12] md:hidden"
        aria-label="Open navigation menu"
      >
        <div className="flex h-5 w-6 flex-col items-center justify-between">
          <span className="h-[2.5px] w-6 rounded-full bg-[#f5e5cc]" />
          <span className="h-[2.5px] w-6 rounded-full bg-[#f5e5cc]" />
          <span className="h-[2.5px] w-6 rounded-full bg-[#f5e5cc]" />
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
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-4 text-[1.05rem] font-semibold ${
                item.href === "/impact" ? "text-[#8b6438]" : "text-[#1f1f1f]"
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
<section className="relative overflow-hidden bg-[#251912] px-5 py-8 text-white sm:px-6 sm:py-10 lg:px-10 lg:py-10">
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#1d120d_0%,#2a1b14_38%,#3a2418_68%,#24150f_100%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.11),transparent_28%)]" />
  <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:58px_58px]" />

  <div className="pointer-events-none absolute left-[-60px] top-10 h-52 w-52 rounded-full bg-[#d4af78]/10 blur-3xl" />
  <div className="pointer-events-none absolute right-[-50px] bottom-0 h-56 w-56 rounded-full bg-[#b7864a]/12 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.04fr] lg:gap-8">
      {/* Left side */}
      <div className="lg:pt-2">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b07a] sm:text-left sm:tracking-[0.3em]">
          Impact & Achievements
        </p>

        <h1 className="mt-3 text-center text-[2.05rem] font-bold leading-[1.01] text-white sm:text-left sm:text-2xl lg:max-w-4xl lg:text-[2.7rem]">
          A record of visible work, measurable outcomes, and people-centered impact.
        </h1>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent sm:mx-0" />

        <p className="mx-auto mt-3 max-w-[34rem] text-center text-[14px] leading-7 text-[#eadfce]/84 sm:mx-0 sm:text-left sm:text-lg sm:leading-8 lg:max-w-2xl">
          Across education, women empowerment, youth development, and
          community support, her work has remained practical, visible,
          and deeply rooted in people.
        </p>

        {/* 4 buttons on one line on mobile */}
        <div className="mt-5 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {impactFocus.map((item) => {
            const isActive = activeFocus.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFocus(item)}
                className={`min-w-0 rounded-xl px-2 py-2 text-[12px] font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-[#d4af78] text-[#24150f]"
                    : "border border-white/12 bg-white/[0.04] text-[#f3e6d8] hover:bg-white/[0.08]"
                }`}
              >
                <span className="block truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden sm:grid mt-5 grid grid-cols-4 gap-3 sm:max-w-[520px]">
          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Education Reach
            </p>
            <p className="mt-2 text-2xl font-bold text-white sm:text-xl">
              500+
            </p>
            <p className="mt-1 text-xs leading-6 text-[#eadfce]/76 sm:text-sm">
              Female students supported
            </p>
          </div>

          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Girls Reached
            </p>
            <p className="mt-2 text-2xl font-bold text-white sm:text-xl">
              5,000+
            </p>
            <p className="mt-1 text-xs leading-6 text-[#eadfce]/76 sm:text-sm">
              Mentorship and outreach
            </p>
          </div>

          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Women Supported
            </p>
            <p className="mt-2 text-2xl font-bold text-white sm:text-xl">
              50
            </p>
            <p className="mt-1 text-xs leading-6 text-[#eadfce]/76 sm:text-sm">
              SME grants and support
            </p>
          </div>

          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Recognition
            </p>
            <p className="mt-2 text-2xl font-bold text-white sm:text-xl">
              Multiple
            </p>
            <p className="mt-1 text-xs leading-6 text-[#eadfce]/76 sm:text-sm">
              Awards and appointments
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="relative">
        {/* Mobile */}
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:hidden">
          <div className="relative h-[230px] overflow-hidden rounded-[1.35rem]">
            <Image
              src={activeFocus.image}
              alt={activeFocus.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2d7ad] backdrop-blur">
              {activeFocus.badge}
            </div>
          </div>

          <div className="mt-2 rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Focus This Moment
            </p>
            <h3 className="mt-2 text-md font-bold leading-tight text-white">
              {activeFocus.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#eadfce]/78">
              {activeFocus.text}
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:block">
          <div className="relative h-[365px] overflow-hidden rounded-[1.5rem]">
            <Image
              src={activeFocus.image}
              alt={activeFocus.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2d7ad] backdrop-blur">
              {activeFocus.badge}
            </div>
          </div>

          <div className="mt-3 rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8b07a]">
              Focus This Moment
            </p>
            <h3 className="mt-2 text-[1.04rem] font-bold leading-tight text-white">
              {activeFocus.title}
            </h3>
            <p className="mt-3 text-sm leading-8 text-[#eadfce]/78">
              {activeFocus.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Impact categories */}
      <section className="bg-[#fcfaf7] px-5 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Key Impact Areas
            </p>
            <h2 className="mt-2 text-xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              The major areas where her work continues to leave visible results.
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-3 grid gap-4 lg:grid-cols-4">
            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-md text-[#9a7449]">
                Education & Scholarships
              </p>
              <h3 className="mt-2 text-sm font-bold text-[#2b1c14] sm:text-xl">
                Expanding access to education and opportunity.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5746] sm:text-base">
                Through scholarship support, WAEC and JAMB sponsorship,
                tertiary education grants, and learning resources, her work has
                helped many girls and young people stay hopeful and keep moving.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-md text-[#9a7449]">
                Women Empowerment
              </p>
              <h3 className="mt-2 text-sm font-bold text-[#2b1c14] sm:text-xl">
                Practical support for confidence, growth, and self-reliance.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5746] sm:text-base">
                Her empowerment work has included grants, support tools,
                practical resources, and interventions designed to strengthen
                confidence and economic independence for women.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-md text-[#9a7449]">
                Youth Development
              </p>
              <h3 className="mt-2 text-sm font-bold text-[#2b1c14] sm:text-xl">
                Investing in potential through training and mentorship.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5746] sm:text-base">
                Her youth-focused work encourages growth through mentorship,
                digital skills training, vocational direction, and practical
                programs that prepare young people for meaningful progress.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-md text-[#9a7449]">
                Community Welfare & Health
              </p>
              <h3 className="mt-2 text-sm font-bold text-[#2b1c14] sm:text-xl">
                People-centered interventions that directly touch lives.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5746] sm:text-base">
                Through welfare support, health outreach, school assistance, and
                practical community interventions, her work continues to meet
                real needs in direct and visible ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in action */}
      <section className="bg-white px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Impact in Action
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Real moments that show service, care, and presence where it matters.
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
            <p className="mt-3 text-[15px] leading-7 text-[#6d5746] sm:text-lg">
              Beyond numbers and recognition, these moments reflect practical
              support, direct engagement, and the human side of impact.
            </p>
          </div>

          <div className="mt-5">
  {/* Mobile carousel */}
  <div className="relative md:hidden">
    <article className="group overflow-hidden rounded-[1.6rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_14px_35px_rgba(43,28,20,0.05)]">
      <div className="relative h-[230px] overflow-hidden sm:h-[290px]">
        <Image
          src={currentActionCard.image}
          alt={currentActionCard.alt}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
          {currentActionCard.category}
        </p>

        <h3 className="mt-2 text-md font-bold leading-tight sm:text-xl text-[#2b1c14]">
          {currentActionCard.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          {currentActionCard.description}
        </p>
      </div>
    </article>

    {/* Previous button */}
    <button
      type="button"
      aria-label="Previous impact card"
      onClick={() =>
        setActiveActionCard((current) =>
          current === 0 ? actionCards.length - 1 : current - 1
        )
      }
      className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#2b1c14]/85 text-2xl text-white shadow-lg backdrop-blur transition hover:bg-[#4a2f21]"
    >
      ‹
    </button>

    {/* Next button */}
    <button
      type="button"
      aria-label="Next impact card"
      onClick={() =>
        setActiveActionCard((current) =>
          current === actionCards.length - 1 ? 0 : current + 1
        )
      }
      className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#2b1c14]/85 text-2xl text-white shadow-lg backdrop-blur transition hover:bg-[#4a2f21]"
    >
      ›
    </button>

    {/* Carousel dots */}
    <div className="mt-4 flex justify-center gap-2">
      {actionCards.map((card, index) => (
        <button
          key={card.category}
          type="button"
          aria-label={`Show ${card.category}`}
          onClick={() => setActiveActionCard(index)}
          className={`h-2 rounded-full transition-all ${
            activeActionCard === index
              ? "w-6 bg-[#b7864a]"
              : "w-2 bg-[#d9c3a8]"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Tablet and desktop grid */}
  <div className="hidden gap-4 md:grid md:grid-cols-2">
    {actionCards.map((card) => (
      <article
        key={card.category}
        className="group overflow-hidden rounded-[1.6rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_14px_35px_rgba(43,28,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(43,28,20,0.08)] active:scale-[0.99]"
      >
        <div className="relative h-[230px] overflow-hidden sm:h-[290px]">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
        </div>

        <div className="p-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
            {card.category}
          </p>

          <h3 className="mt-2 text-xl font-bold leading-tight text-[#2b1c14]">
            {card.title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#6d5746]">
            {card.description}
          </p>
        </div>
      </article>
    ))}
  </div>
</div>
          </div>
        
      </section>

      {/* Achievements */}
<section className="bg-[#fcfaf7] px-5 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
        Notable Achievements
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
        Key milestones across service, leadership, and humanitarian impact.
      </h2>

      <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
    </div>

    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* Achievement 1 */}
      <div className="rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          Scholarship Reach
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Over the years, hundreds of female students have benefited from
          scholarship support and examination sponsorship initiatives.
        </p>
      </div>

      {/* Achievement 2 */}
      <div className="rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          Girls Mentorship
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Thousands of girls have been reached through mentorship,
          empowerment, and educational support initiatives.
        </p>
      </div>

      {/* Achievement 3 */}
      <div className="rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          SME Grants
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Women have received practical financial support through SME grant
          initiatives designed to promote growth and resilience.
        </p>
      </div>

      {/* Achievement 4 */}
      <div
        className={`rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm ${
          showAllAchievements ? "block" : "hidden md:block"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          National Appointments
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Her leadership journey includes notable appointments and roles in
          national and development-focused structures.
        </p>
      </div>

      {/* Achievement 5 */}
      <div
        className={`rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm ${
          showAllAchievements ? "block" : "hidden md:block"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          Humanitarian Recognition
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Her work has received recognition for its consistency, service,
          and meaningful impact across communities.
        </p>
      </div>

      {/* Achievement 6 */}
      <div
        className={`rounded-[1.45rem] border border-[#eadac4] bg-white p-5 shadow-sm ${
          showAllAchievements ? "block" : "hidden md:block"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm text-[#9a7449]">
          Community Outreach
        </p>

        <p className="mt-2 text-sm leading-6 text-[#6d5746]">
          Through direct engagement and practical interventions, her work
          continues to touch lives at both community and broader levels.
        </p>
      </div>
    </div>

    {/* Mobile Load More / See Less */}
    <div className="mt-7 flex justify-center md:hidden">
      <button
        type="button"
        onClick={() => setShowAllAchievements((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-full border border-[#b7864a] px-6 py-3 text-sm font-semibold text-[#8a6337] transition hover:bg-[#b7864a] hover:text-white"
      >
        {showAllAchievements ? "See Less" : "Load More"}
      </button>
    </div>
  </div>
</section>

      {/* Recognition strip */}
      <section className="bg-white px-3 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.9rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-4 py-7 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em] sm:text-center">
              Recognition & Legacy
            </p>
            <h2 className="mt-2 max-w-4xl text-xl font-bold leading-tight sm:text-4xl sm:text-center sm:mx-auto">
              Impact becomes stronger when people can see it, feel it, and remember it.
            </h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-[#eadfce]/85 sm:text-base sm:leading-7 sm:text-center mx-auto">
              Her public story continues to reflect measurable service,
              practical leadership, and a legacy of action that reaches beyond
              words into real outcomes.
            </p>
          </div>
        </div>
      </section>

      
      {/* Footer */}
     <footer className="bg-[#1f130d] px-5 py-14 text-[#e8dccb] sm:px-6 lg:px-10 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr]">
      
      {/* Brand */}
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

      {/* Navigation */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af78]">
          Navigation
        </p>

        <ul className="mt-5 space-y-3 text-sm text-[#cbb89f]">
          <li>
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#impact"
              className="transition hover:text-white"
            >
              Impact
            </a>
          </li>

          <li>
            <a
              href="#vision"
              className="transition hover:text-white"
            >
              Mandate & Vision
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="transition hover:text-white"
            >
              Leadership in Action
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af78]">
          Contact
        </p>

        <div className="mt-5 space-y-4 text-sm text-[#cbb89f]">
          <p>info@judithogbara.com</p>

          <p>
            +234 812 497 2568 | +234 803 304 8469
          </p>

          <p>
            85 Eket Etinan Road, Okon Eket, Akwa Ibom State
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-6 flex gap-3">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/judith.ogbara.7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/judithogbara/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/judith-ogbara-b3352856/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-sm" />
          </a>

          {/* X */}
          <a
            href="https://x.com/JudithOgbara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
            aria-label="X"
          >
            <FaXTwitter className="text-sm" />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-[#a89377]">
      © {new Date().getFullYear()} Judith Ogbara. All rights reserved.
    </div>
  </div>
</footer>
    </main>
  );
}