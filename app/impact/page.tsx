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


export default function ImpactPage() {
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

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/impact";

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
                      item.href === "/impact" ? "text-[#8b6438]" : "text-[#1f1f1f]"
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
      <section className="relative overflow-hidden bg-[#2a1b14] px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#241710_0%,#2f1d14_35%,#3a2418_65%,#22150f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,120,0.12),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b07a] sm:tracking-[0.3em]">
                Impact & Achievements
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                A record of measurable impact shaped by service and action.
              </h1>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#eadfce]/85 sm:text-lg">
                Across education, youth development, women empowerment,
                governance, and community welfare, her work reflects visible
                results and people-centered leadership.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#gallery"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2a1a12] transition hover:bg-[#e0bd89]"
                >
                  Leadership in Action
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#e5c798]/35 bg-white/5 px-5 py-3 text-sm font-semibold text-[#f6ead9] transition hover:bg-white/10"
                >
                  About Judith
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f]">
                  Education Reach
                </p>
                <p className="mt-4 text-4xl font-bold text-white">500+</p>
                <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
                  Female students supported
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f]">
                  Girls Empowered
                </p>
                <p className="mt-4 text-4xl font-bold text-white">5,000+</p>
                <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
                  Through outreach and mentorship
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f]">
                  Women Supported
                </p>
                <p className="mt-4 text-4xl font-bold text-white">50</p>
                <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
                  SME grants and empowerment support
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfa56f]">
                  Recognition
                </p>
                <p className="mt-4 text-4xl font-bold text-white">Multiple</p>
                <p className="mt-2 text-sm leading-7 text-[#eadfce]/75">
                  Awards, appointments, and honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured statement */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Featured Note
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              “Before the crowd, there was the work.”
            </h2>
            <p className="mt-5 max-w-4xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
              Her public story is defined not only by visibility, but by years of
              consistent action, measurable service, and meaningful contributions
              across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact categories */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Key Impact Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              The major areas where her work continues to create visible results.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Education & Scholarships
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#2b1c14]">
                Expanding access to education and opportunity.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#6d5746] sm:text-base">
                Through scholarship support, WAEC and JAMB sponsorship,
                educational resources, and targeted learning initiatives, her work
                has helped create pathways for girls and young people to pursue
                brighter futures.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Women Empowerment
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#2b1c14]">
                Practical support for growth, confidence, and self-reliance.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#6d5746] sm:text-base">
                Her initiatives have supported women through grants, skill-based
                support, empowerment programs, and targeted interventions that
                strengthen economic opportunity and independence.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Youth Development
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#2b1c14]">
                Investing in potential through training and mentorship.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#6d5746] sm:text-base">
                Her work in youth-focused development continues to encourage
                growth through mentorship, skill acquisition, digital training,
                and pathways that prepare young people for meaningful progress.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Community Welfare & Health
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#2b1c14]">
                People-centered interventions that directly touch lives.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#6d5746] sm:text-base">
                Through welfare support, health outreach, educational resources,
                and humanitarian interventions, her work continues to meet real
                needs and strengthen communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
        Impact in Action
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
        Real moments that reflect visible service and community impact.
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
      <p className="mt-5 text-[15px] leading-8 text-[#6d5746] sm:text-lg">
        Beyond statistics and recognition, these moments reflect practical support,
        direct engagement, and meaningful presence in the lives of people and communities.
      </p>
    </div>

    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)] active:scale-[0.99]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/pads-donation.jpg"
            alt="Judith donating sanitary pads"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
            Community Support
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Dignity Support for Young Girls
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Providing sanitary pads to support the health, confidence, and well-being
            of young girls in school and in the community.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)] active:scale-[0.99]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/learning-materials.jpg"
            alt="Judith distributing learning materials"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
            Education Support
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Supporting Learning with Essential Materials
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Distributing books and educational materials to help students learn better
            and stay encouraged in their studies.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)] active:scale-[0.99]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/makeup-kits.jpg"
            alt="Judith presenting makeup kits to young women"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
            Women Empowerment
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Empowerment Support for Young Women
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Presenting practical empowerment kits to young women as part of efforts
            that promote confidence, growth, and self-reliance.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadac4] bg-[#fcfaf7] shadow-[0_18px_50px_rgba(43,28,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,28,20,0.1)] active:scale-[0.99]">
        <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
          <Image
            src="/images/rise-training.jpg"
            alt="Judith with students during RISE training"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c14]/30 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9a7449]">
            Skills Development
          </p>
          <h3 className="mt-3 text-xl font-bold leading-tight text-[#2b1c14]">
            Building Skills Through the RISE Training Program
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6d5746]">
            Engaging with students during the RISE training initiative, focused on
            digital skills, creativity, and opportunity for the future.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* Achievement cards */}
      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Notable Achievements
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Key milestones across service, leadership, and humanitarian impact.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Scholarship Reach
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Over the years, hundreds of female students have benefited from
                scholarship support and examination sponsorship initiatives.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Girls Mentorship
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Thousands of girls have been reached through mentorship,
                empowerment, and educational support initiatives.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                SME Grants
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Women have received practical financial support through SME grant
                initiatives designed to promote growth and resilience.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                National Appointments
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Her leadership journey includes notable appointments and roles in
                national and development-focused structures.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Humanitarian Recognition
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Her work has received recognition for its consistency, service,
                and meaningful impact across communities.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Community Outreach
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746]">
                Through direct engagement and practical interventions, her work
                continues to touch lives at both community and broader levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition strip */}
      <section className="bg-[#fcfaf7] px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Recognition & Legacy
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              Impact is strongest when it is visible in people, communities, and lasting outcomes.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              Her public story continues to reflect a commitment to measurable
              service, meaningful leadership, and a legacy of action that extends
              beyond words into real results.
            </p>
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
              Explore the vision, values, and leadership story behind the impact.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
              Learn more about the principles, priorities, and public service
              journey that continue to shape her work and engagement.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
              >
                About Judith
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
                <li><Link href="/impact" className="transition hover:text-white">Impact</Link></li>
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