"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "Contact", href: "/contact" },
];

const leadershipTabs = [
  {
    id: "governance",
    label: "Governance",
    title: "Leadership shaped by structure, accountability, and measurable outcomes.",
    text:
      "Hon. Judith’s leadership style is rooted in order, responsibility, and a steady focus on results that can be seen and felt. It reflects a way of working that values systems, people, and long-term progress.",
    stat: "Strategic leadership across public, social, and development-focused structures.",
  },
  {
    id: "advocacy",
    label: "Advocacy",
    title: "A public voice committed to safety, dignity, and opportunity.",
    text:
      "Hon. Judith’s advocacy work continues to speak to the protection of women and girls, student welfare, and stronger support systems for people whose needs are too often ignored or delayed.",
    stat: "Visible engagement on student welfare, empowerment, and social protection.",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    title: "Building collaborative pathways for wider and lasting impact.",
    text:
      "Hon. Judith’s leadership also shows in the partnerships she helps build, bringing together people, institutions, and ideas in ways that expand opportunity and deepen impact.",
    stat: "Partnership-driven work that expands reach and deepens impact.",
  },
];

const roleCards = [
  {
    title: "GEEEEP Advisory Leadership",
    text: "Federal-level leadership within a gender-focused education and empowerment initiative.",
  },
  {
    title: "AAE Foundation",
    text: "Platform for advocacy, educational support, grants, and community-centered development.",
  },
  {
    title: "Youth & Employment Engagement",
    text: "Leadership participation in youth-focused structures and job-creation conversations.",
  },
];

const profileHighlights = [
  {
    title: "Corporate Leadership Foundation",
    text: "Hon. Judith’s leadership background was shaped over many years within the Nigerian oil and gas industry, where she gained deep exposure to structure, systems, and executive responsibility.",
  },
  {
    title: "Institution Builder",
    text: "Her journey reflects more than position. It reflects the ability to build systems, strengthen governance, and contribute to environments where growth can be sustained.",
  },
  {
    title: "Community-Focused Public Figure",
    text: "Beyond formal leadership spaces, Hon. Judith has remained closely connected to education, empowerment, local development, and mentorship within community life.",
  },
  {
    title: "Global Learning Exposure",
    text: "Her academic and leadership journey includes formal study, business learning, and wider professional exposure that continue to shape her public voice and leadership judgment.",
  },
];

const leadershipMoments = [
  {
    image: "/images/action-02.jpg",
    title: "Leadership in National Engagement",
    caption:
      "Visible presence in public-facing responsibilities that reflect coordination, representation, and active participation.",
  },
  {
    image: "/images/action-2.jpg",
    title: "Leadership in Committee Service",
    caption:
      "Participation in high-level committee engagement with a focus on responsibility, structure, and collective outcomes.",
  },
  {
    image: "/images/rise-training.jpg",
    title: "Leadership Through Youth Development",
    caption:
      "Engagement with students and young people through initiatives that promote skills, confidence, and future opportunity.",
  },
  {
    image: "/images/pads-donation1.jpg",
    title: "Leadership Through Empowerment",
    caption:
      "Supporting women and communities through practical interventions that translate care into visible action.",
  },
];

const movingRoleImages = [
  "/images/action-2.jpg",
  "/images/action-02.jpg",
  "/images/rise-training.jpg",
  "/images/pads-donation1.jpg",
  "/images/judith-hero.jpg",
];

export default function LeadershipPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("governance");
  const [activeMoment, setActiveMoment] = useState(0);

  const activeLeadershipTab = useMemo(
    () => leadershipTabs.find((tab) => tab.id === activeTab) ?? leadershipTabs[0],
    [activeTab]
  );

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
<header className="sticky top-0 z-50 w-full">
  <div className="border-b border-white/10 bg-[#160f0c]/90 backdrop-blur-xl px-4 py-3 sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-7xl items-center justify-between">

      {/* Logo (UNCHANGED) */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.03]">
          <Image
            src="/images/judith-logo2.png"
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
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = item.href === "/leadership";

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

      {/* CTA */}
      <Link
        href="/contact"
        className="hidden rounded-full bg-[#d4af78] px-6 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89] md:inline-flex"
      >
        Get in Touch
      </Link>

      {/* Hamburger */}
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

  {/* Mobile Drawer (UNCHANGED STRUCTURE, JUST CLEAN COLORS) */}
  <div
    className={`fixed inset-0 z-[60] md:hidden ${
      mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
    }`}
  >
    <div
      className={`absolute inset-0 bg-black/50 transition-opacity ${
        mobileMenuOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setMobileMenuOpen(false)}
    />

    <div
      className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-[#fcfaf7] shadow-[0_20px_80px_rgba(0,0,0,0.22)] transition-transform ${
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
                item.href === "/leadership"
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

     {/* Unique Hero */}
<section className="relative overflow-hidden bg-[#160f0c] px-5 py-8 text-white sm:px-6 lg:px-10 lg:py-16">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.08),transparent_30%)]" />
  <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
  <div className="absolute left-[-80px] top-12 h-72 w-72 rounded-full bg-[#b7864a]/10 blur-3xl" />
  <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-[#d4af78]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-start gap-5 lg:grid-cols-[1fr_1.02fr] lg:gap-12">
      {/* Left text + tabs */}
      <div>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a] sm:text-left sm:tracking-[0.3em]">
          Leadership Profile
        </p>

        <h1 className="mt-3 text-center text-[2.85rem] font-bold leading-[0.96] text-white sm:text-left sm:text-5xl lg:max-w-3xl lg:text-6xl">
          Leadership defined by structure, advocacy, and visible public engagement.
        </h1>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent sm:mx-0" />

        <p className="mx-auto mt-4 max-w-[34rem] text-center text-[14px] leading-7 text-[#eadfce]/85 sm:mx-0 sm:text-left sm:text-lg sm:leading-8">
          Hon. Judith’s leadership reflects substance, responsibility, and visible commitment to people.
        </p>

        <p className="mt-3 hidden max-w-2xl text-[15px] leading-8 text-[#eadfce]/78 lg:block">
          From public advocacy and community-facing leadership to institutional engagement and partnership-building, Hon. Judith continues to show that leadership is strongest when it carries both structure and humanity.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {leadershipTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#d4af78] text-[#1d130e]"
                    : "border border-white/15 bg-white/[0.04] text-[#f0e1cf] hover:bg-white/[0.08]"
                }`}
              >
                <span className="block truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-[1.45rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8b07a]">
            Focus Area
          </p>

          <h3 className="mt-3 text-[1.7rem] font-bold leading-tight text-white sm:text-2xl">
            {activeLeadershipTab.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#eadfce]/78 sm:text-base sm:leading-8">
            {activeLeadershipTab.text}
          </p>

          <div className="mt-4 hidden items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4 lg:flex">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d4af78]" />
            <p className="text-sm leading-7 text-[#f2e7d9]/78">
              {activeLeadershipTab.stat}
            </p>
          </div>
        </div>
      </div>

      {/* Right image collage */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-4">
          <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr] sm:gap-4">
            <div className="relative h-[270px] overflow-hidden rounded-[1.35rem] bg-[#3a2418] sm:h-[500px]">
              <Image
                src="/images/1.jpeg"
                alt="Judith Ogbara leadership portrait"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="grid gap-3 sm:gap-4">
              <div className="hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8b07a]">
                  Leadership Snapshot
                </p>
                <p className="mt-3 text-sm leading-7 text-[#f1e6d7]/80">
                  A public profile shaped by governance, advocacy, community engagement, and visible responsibility.
                </p>
              </div>

              <div className="relative h-[120px] overflow-hidden rounded-[1.25rem] border border-white/10 sm:h-[150px]">
                <Image
                  src="/images/action-2.jpg"
                  alt="Leadership moment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs font-medium leading-5 text-white">
                  Active participation in committee and leadership spaces.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,120,0.18),rgba(255,255,255,0.03))] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f0d39d]">
                  Public Profile
                </p>
                <p className="mt-3 text-lg font-bold leading-tight text-white sm:text-2xl">
                  Leadership with reach, relevance, and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-3">
          {roleCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
            >
              <p className="text-sm font-semibold leading-6 text-[#f3dcc1]">
                {card.title}
              </p>
              <p className="mt-2 text-xs leading-6 text-[#eadfce]/72">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Profile foundation */}
      <section className="bg-white px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Leadership Foundation
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              A journey shaped by experience, enterprise, and people-centered leadership.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {profileHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key roles */}
<section className="bg-[#fcfaf7] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Left column */}
      <div className="flex h-full flex-col">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Key Roles & Appointments
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          Leadership positions that reflect trust, relevance, and influence.
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

        <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
          These roles reflect the breadth of Hon. Judith’s leadership engagement across education, empowerment, social impact, and development-focused advocacy.
        </p>

        {/* Mobile: static grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 rounded-[1.45rem] border border-[#eadac4] bg-white p-3 shadow-sm lg:hidden">
          {movingRoleImages.slice(0, 4).map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-[120px] overflow-hidden rounded-[1rem]"
            >
              <Image
                src={src}
                alt="Leadership moment"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: gentle motion strip */}
        <div className="mt-6 hidden overflow-hidden rounded-[1.6rem] border border-[#eadac4] bg-white p-3 shadow-sm lg:block">
          <div className="leadership-strip flex gap-3">
            {[...movingRoleImages, ...movingRoleImages].map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-[150px] w-[185px] shrink-0 overflow-hidden rounded-[1.05rem]"
              >
                <Image
                  src={src}
                  alt="Leadership moment"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="flex h-full flex-col gap-4">
        <div className="flex-1 rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
            GEEEEP Advisory Leadership
          </p>
          <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
            Hon. Judith was appointed to leadership responsibility within a federal-level education, engagement, empowerment, and entrepreneurship initiative focused on development and opportunity.
          </p>
        </div>

        <div className="flex-1 rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
            AAE Foundation
          </p>
          <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
            Through the AAE Foundation, Hon. Judith continues to support advocacy, educational access, practical community-centered support, and wider social impact initiatives.
          </p>
        </div>

        <div className="flex-1 rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
            Youth & Employment Engagement
          </p>
          <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
            Hon. Judith has also been recognized within youth-oriented structures and leadership conversations focused on empowerment, employment, and opportunity creation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Advocacy + image moments interactive */}
<section className="bg-white px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
          Public Voice & Advocacy
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
          Leadership that speaks to safety, dignity, and institutional responsibility.
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

        <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
          <p>
            Hon. Judith’s public engagement often touches issues of educational safety, protection for women and girls, and stronger support systems within learning and community spaces.
          </p>
          <p>
            Through public advocacy, institutional dialogue, and development-focused action, Hon. Judith continues to emphasize that vulnerability, insecurity, and limited access should never be treated lightly.
          </p>
        </div>

        <div className="mt-6 rounded-[1.6rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
            Special Initiative
          </p>
          <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
            Hon. Judith’s leadership attention has also extended to practical interventions linked to student welfare, empowerment, and reducing social vulnerability through education, mentorship, and opportunity-based support.
          </p>
        </div>
      </div>

      <div>
        <div className="overflow-hidden rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] p-3 shadow-[0_20px_60px_rgba(43,28,20,0.08)] sm:p-4">
          <div className="relative h-[250px] overflow-hidden rounded-[1.45rem] sm:h-[360px]">
            <Image
              src={leadershipMoments[activeMoment].image}
              alt={leadershipMoments[activeMoment].title}
              fill
              className="object-cover object-top transition duration-500"
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {leadershipMoments.map((moment, index) => {
              const isActive = activeMoment === index;
              return (
                <button
                  key={moment.title}
                  type="button"
                  onClick={() => setActiveMoment(index)}
                  className={`overflow-hidden rounded-[1.15rem] border text-left transition ${
                    isActive
                      ? "border-[#b7864a] shadow-[0_16px_40px_rgba(43,28,20,0.12)]"
                      : "border-[#eadac4]"
                  }`}
                >
                  <div className="relative h-[96px] sm:h-[200px]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/12" />
                  </div>
                  <div className="bg-white p-3">
                    <p className="text-sm font-semibold leading-6 text-[#2b1c14]">
                      {moment.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Closing strip */}
      <section className="bg-[#fcfaf7] px-5 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Leadership Statement
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              Leadership gains meaning when it is reflected in people, systems, and the lasting value it creates.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Hon. Judith’s public and institutional journey continues to reflect
              a blend of experience, advocacy, and practical impact that speaks
              to both structure and humanity.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89]"
              >
                Explore Impact <FaArrowRight className="text-xs" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Judith
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

<style jsx>{`
  .leadership-strip {
    width: max-content;
    animation: leadershipScroll 22s linear infinite;
  }

  @keyframes leadershipScroll {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-140px);
    }
    100% {
      transform: translateX(0);
    }
  }
`}</style>
    </main>
  );
}