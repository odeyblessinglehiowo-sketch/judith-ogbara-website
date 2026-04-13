"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
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
    text: "Her leadership journey reflects a strong commitment to institutional order, people-centered decision-making, and systems that create sustainable progress across communities and organizations.",
    stat: "Strategic leadership across public, social, and development-focused structures.",
  },
  {
    id: "advocacy",
    label: "Advocacy",
    title: "A public voice committed to safety, dignity, and opportunity.",
    text: "Her advocacy continues to address issues that affect women, girls, students, and vulnerable communities, with a focus on safer spaces, educational opportunity, and inclusive development.",
    stat: "Visible engagement on student welfare, empowerment, and social protection.",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    title: "Building collaborative pathways for wider and lasting impact.",
    text: "Through strategic partnerships and leadership engagement, she continues to strengthen initiatives that connect policy, philanthropy, education, and community development.",
    stat: "Partnership-driven work that expands reach and deepens impact.",
  },
];

const roleCards = [
  {
    title: "G4EP / GEEEEP Advisory Leadership",
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
    text: "A long-standing leadership background shaped by years of experience across the Nigerian oil and gas industry, with strong exposure to upstream, midstream, and downstream systems.",
  },
  {
    title: "Institution Builder",
    text: "Recognized for helping build operational structure, governance systems, and growth-focused frameworks within leadership and business environments.",
  },
  {
    title: "Community-Focused Public Figure",
    text: "Deeply connected to educational advancement, local development, empowerment support, and mentorship across communities.",
  },
  {
    title: "Global Learning Exposure",
    text: "Her educational and professional path includes formal academic advancement and leadership training across respected institutions in Nigeria and abroad.",
  },
];

const leadershipMoments = [
  {
    image: "/images/action-1.jpg",
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
    image: "/images/8.jpg",
    title: "Leadership Through Empowerment",
    caption:
      "Supporting women and communities through practical interventions that translate care into visible action.",
  },
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
                const isActive = item.href === "/leadership";

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
                      item.href === "/leadership" ? "text-[#8b6438]" : "text-[#1f1f1f]"
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

      {/* Unique Hero */}
      <section className="relative overflow-hidden bg-[#160f0c] px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-[-80px] top-12 h-72 w-72 rounded-full bg-[#b7864a]/10 blur-3xl" />
        <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-[#d4af78]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
            {/* Left text + interactive tabs */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#d8b07a] sm:tracking-[0.3em]">
                Leadership Profile
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Leadership defined by structure, advocacy, and visible public engagement.
              </h1>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#eadfce]/85 sm:text-lg">
                From public leadership and community-focused advocacy to strategic
                partnerships and institutional influence, her journey reflects
                more than visibility — it reflects substance.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {leadershipTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#d4af78] text-[#1d130e]"
                          : "border border-white/15 bg-white/[0.04] text-[#f0e1cf] hover:bg-white/[0.08]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8b07a]">
                  Focus Area
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                  {activeLeadershipTab.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#eadfce]/78 sm:text-base">
                  {activeLeadershipTab.text}
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d4af78]" />
                  <p className="text-sm leading-7 text-[#f2e7d9]/78">
                    {activeLeadershipTab.stat}
                  </p>
                </div>
              </div>
            </div>

            {/* Right image collage */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[#3a2418] sm:h-[520px]">
                    <Image
                      src="/images/judith-hero.jpg"
                      alt="Judith Ogbara leadership portrait"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8b07a]">
                        Leadership Snapshot
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#f1e6d7]/80">
                        A profile shaped by governance, advocacy, community engagement,
                        and measurable public presence.
                      </p>
                    </div>

                    <div className="relative h-[160px] overflow-hidden rounded-[1.4rem] border border-white/10">
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

                    <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,120,0.18),rgba(255,255,255,0.03))] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f0d39d]">
                        Public Profile
                      </p>
                      <p className="mt-3 text-2xl font-bold text-white">
                        Leadership with reach, relevance, and responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating role cards */}
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {roleCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
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
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {profileHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-8 text-[#6d5746] sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key roles */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
                Key Roles & Appointments
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
                Leadership positions that reflect trust, relevance, and influence.
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />
              <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
                These roles reflect the breadth of her leadership engagement across
                education, empowerment, social impact, and development-focused advocacy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  G4EP / GEEEEP Advisory Leadership
                </p>
                <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                  Appointed to leadership responsibility within a federal-level
                  education, engagement, empowerment, and entrepreneurship initiative
                  focused on development and opportunity.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  AAE Foundation
                </p>
                <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                  Leadership through a foundation platform that supports advocacy,
                  educational access, community-based support, and wider social impact.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[#eadac4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  Youth & Employment Engagement
                </p>
                <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                  Recognized within youth-oriented structures and leadership conversations
                  focused on opportunity, empowerment, and job creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy + image moments interactive */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
                Public Voice & Advocacy
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
                Leadership that speaks to safety, dignity, and institutional responsibility.
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
                <p>
                  Her public engagement often intersects with issues of educational
                  safety, protection for women and girls, and stronger support systems
                  within learning and community spaces.
                </p>
                <p>
                  Through public advocacy, institutional dialogue, and development-driven
                  initiatives, she has continued to emphasize that vulnerability, insecurity,
                  and limited access must be addressed with urgency and responsibility.
                </p>
              </div>

              <div className="mt-7 rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                  Special Initiative
                </p>
                <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                  Leadership attention has also extended to practical interventions linked
                  to student welfare, empowerment, and reducing social vulnerability through
                  education, mentorship, and opportunity-based support.
                </p>
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] p-4 shadow-[0_20px_60px_rgba(43,28,20,0.08)]">
                <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                  <Image
                    src={leadershipMoments[activeMoment].image}
                    alt={leadershipMoments[activeMoment].title}
                    fill
                    className="object-cover object-top transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
                      Featured Moment
                    </p>
                    <p className="mt-2 text-lg font-bold leading-tight text-[#2b1c14]">
                      {leadershipMoments[activeMoment].title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                      {leadershipMoments[activeMoment].caption}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {leadershipMoments.map((moment, index) => {
                    const isActive = activeMoment === index;
                    return (
                      <button
                        key={moment.title}
                        type="button"
                        onClick={() => setActiveMoment(index)}
                        className={`overflow-hidden rounded-[1.2rem] border text-left transition ${
                          isActive
                            ? "border-[#b7864a] shadow-[0_16px_40px_rgba(43,28,20,0.12)]"
                            : "border-[#eadac4]"
                        }`}
                      >
                        <div className="relative h-[110px]">
                          <Image
                            src={moment.image}
                            alt={moment.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/15" />
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
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Leadership Statement
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              Leadership gains meaning when it is reflected in people, systems, and the lasting value it creates.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Her public and institutional journey continues to reflect a blend of
              experience, advocacy, and practical impact that speaks to both structure
              and humanity.
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
                <li><Link href="/#vision" className="transition hover:text-white">Mandate & Vision</Link></li>
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