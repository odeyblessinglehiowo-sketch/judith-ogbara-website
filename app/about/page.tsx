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

export default function AboutPage() {
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

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = item.href === "/about";

          return (
            <Link
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
            </Link>
          );
        })}
      </nav>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className="group relative hidden overflow-hidden rounded-full border border-[#d8b07a]/45 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-[#f5e5cc] backdrop-blur transition md:inline-flex"
      >
        <span className="relative z-10 transition duration-300 group-hover:text-[#24160f]">
          Get in Touch
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#d4af78] to-[#f0d2a4] opacity-0 transition duration-300 group-hover:opacity-100" />
      </Link>

      {/* Mobile hamburger */}
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
          <p className="mt-1 text-sm text-[#6d5746]">Hon. Dr. Judith Ogbara</p>
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
              className={`py-4 text-[1.05rem] font-semibold ${
                item.href === "/about" ? "text-[#8b6438]" : "text-[#1f1f1f]"
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

      {/* Page Hero */}
     <section className="relative overflow-hidden bg-[#2b1c14] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-18">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-100px] top-10 h-64 w-64 rounded-full bg-[#b7864a]/20 blur-3xl" />
    <div className="absolute right-[-80px] top-1/3 h-72 w-72 rounded-full bg-[#f0cf95]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

      {/* TEXT */}
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af78] sm:tracking-[0.3em]">
          About Judith
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          A life shaped by service, discipline, and a steady commitment to people.
        </h1>

        {/* Line */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent lg:mx-0" />

        {/* Paragraph */}
        <p className="mt-5 mx-auto max-w-2xl text-[15px] leading-7 text-[#eadfce]/85 sm:text-lg sm:leading-8 lg:mx-0">
          Hon. Dr. Judith Mayen Ogbara is a public servant, philanthropist,
          and governance advocate whose journey reflects compassion,
          structure, and a deep sense of responsibility to people and community.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 w-full max-w-md justify-center lg:justify-start">

          <Link
            href="/impact"
            className="flex 1 inline-flex w-full items-center justify-center rounded-full bg-[#d4af78] px-5 py-3 text-sm font-semibold text-[#2b1c14] transition hover:bg-[#e2bf8c] sm:w-auto"
          >
            View Impact
          </Link>

          <Link
            href="/#vision"
            className="flex 1inline-flex w-full items-center justify-center rounded-full border border-[#d4af78]/50 px-5 py-3 text-sm font-semibold text-[#f0cf95] transition hover:bg-white/5 sm:w-auto"
          >
            Mandate & Vision
          </Link>

        </div>
      </div>

            {/* Hero image hidden on mobile for a tighter first view */}
           <div className="relative mt-8 md:mt-0">
  <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#dcc3a0]/30" />

  <div className="relative overflow-hidden rounded-[2rem] bg-[#3a2418] p-2 sm:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
    
    {/* IMAGE HEIGHT CONTROL */}
    <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[480px] overflow-hidden rounded-[1.5rem]">
      <Image
        src="/images/judith -about.jpg"
        alt="Hon. Dr. Judith Mayen Ogbara"
        fill
        className="object-cover object-top"
      />
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 to-transparent" />
  </div>
</div>
</div>
</div>
      </section>

      {/* Biography */}
      <section className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[0.74fr_1.06fr] lg:gap-12">
            {/* Write-up first on mobile, second on desktop */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
                Biography
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
                A public story built on experience, service, and steady human impact.
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-transparent" />

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#6d5746] sm:text-[16px]">
                <p>
                  Judith’s professional journey started in the Nigerian oil and gas
                  industry, where she developed a reputation for discipline,
                  structure, and calm leadership. Her early years at NLNG exposed
                  her to executive coordination, institutional systems, and the kind
                  of responsibility that shapes long-term leaders.
                </p>

                <p>
                  Over time, she moved into wider leadership roles, including the
                  founding of Rosem Energy Ltd. and later executive responsibilities
                  within business and governance-focused spaces. Those years gave her
                  more than experience, they gave her a practical understanding of
                  people, systems, accountability, and how leadership affects lives
                  beyond boardrooms.
                </p>

                <p>
                  But what makes her story personal is that she never left service
                  behind. Alongside her corporate and institutional work, she stayed
                  close to community needs, supporting students, mentoring young
                  people, and standing with women and families who needed real help,
                  not just words.
                </p>

                <p>
                  Her academic path also reflects that same seriousness. From Queens
                  College, Yaba, to studies in Mass Communication and a Bachelor of
                  Arts from the University of Calabar, followed by advanced business
                  and leadership training, she built herself deliberately, not for
                  applause, but for purpose.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <Link
                  href="/impact"
                  className="inline-flex items-center justify-center rounded-full bg-[#4a2f21] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
                >
                  Explore Impact
                </Link>

                <Link
                  href="/#vision"
                  className="inline-flex items-center justify-center rounded-full border border-[#caa77a] px-4 py-3 text-center text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3]"
                >
                  Mandate & Vision
                </Link>
              </div>
            </div>

            {/* Portrait second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[370px] sm:max-w-[410px]">
                <div className="absolute left-3 top-3 h-full w-full rounded-[0.9rem] border-2 border-[#b7864a]/35" />

                <div className="relative rounded-[0.9rem] bg-white p-3 shadow-[0_22px_50px_rgba(43,28,20,0.16)] sm:p-4">
                  <div className="rounded-[0.55rem] border-[3px] border-[#2f7d32] p-3">
                    <div className="rounded-[0.35rem] border-[3px] border-[#d6b24d] p-2">
                      <div className="relative overflow-hidden rounded-[0.3rem] bg-[#f5efe7]">
                        <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
                          <Image
                            src="/images/4.jpeg"
                            alt="Hon. Dr. Judith Mayen Ogbara"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-[1rem] font-extrabold uppercase leading-tight text-[#16110d] sm:text-[1.15rem]">
                      Hon. Dr. Judith Mayen Ogbara
                    </p>
                    <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[#3b2a20] sm:text-sm">
                      Public Servant • Philanthropist • Governance Advocate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact background highlights */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Corporate Leadership
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6d5746]">
                Years of practical leadership across business, governance,
                institutional building, and executive responsibility.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Public Service
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6d5746]">
                A visible commitment to education, women’s support, youth
                development, and people-centered advocacy.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Education & Learning
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6d5746]">
                Built on formal study, business training, and continuous leadership
                development over the years.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadac4] bg-[#fcfaf7] p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Community Roots
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6d5746]">
                Deeply connected to Eket and the wider community through practical
                support, mentorship, and meaningful local engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4a2f21_0%,#2f1d14_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(43,28,20,0.18)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bb8d] sm:tracking-[0.3em]">
              Leadership Philosophy
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              For her, leadership has always been less about attention and more about responsibility.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-[#eadfce]/85 sm:text-base sm:leading-8">
              That is why her work often feels personal to people. Whether she is
              supporting students, speaking up for safer learning spaces, mentoring
              young people, or building partnerships that can help communities,
              the thread is the same: service must be practical, and leadership
              must mean something in real life.
            </p>
          </div>
        </div>
      </section>

      {/* Service & public life */}
      <section className="bg-[#fcfaf7] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Service & Public Life
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              The work people know her for is grounded in care, not performance.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Education Support
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                She has supported the education of hundreds of female students
                through WAEC and JAMB sponsorship, learning resources, and wider
                opportunities that help young people stay hopeful about their future.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Women & Youth Empowerment
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                From business support for women to mentorship and skills-focused
                engagement for young people, her work continues to be rooted in
                helping others stand stronger on their own.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Advocacy & Public Voice
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                Her leadership also shows in the issues she chooses to speak on,
                especially around student welfare, safer learning environments,
                and the dignity and protection of women and girls.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#eadac4] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7449]">
                Partnerships & Broader Reach
              </p>
              <p className="mt-3 text-sm leading-8 text-[#6d5746] sm:text-base">
                Through platforms like the AAE Foundation and wider strategic
                collaborations, she continues to look for ways impact can reach
                more people and last longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Core Values
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Principles that continue to guide the work.
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#b7864a] via-[#f0cf95] to-[#b7864a]" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-5">
            <div className="rounded-2xl bg-[#fcfaf7] p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Integrity</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Doing the right thing with honesty and moral clarity.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fcfaf7] p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Service</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Putting people and community before personal attention.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fcfaf7] p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Excellence</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Working with discipline, care, and professional seriousness.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fcfaf7] p-4 text-center shadow-sm sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Compassion</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Staying human, present, and genuinely concerned about others.
              </p>
            </div>

            {/* Hidden on mobile to keep only 4 cards */}
            <div className="hidden rounded-2xl bg-[#fcfaf7] p-4 text-center shadow-sm sm:block sm:p-5">
              <p className="text-base font-semibold text-[#8a653f]">Innovation</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5746]">
                Embracing fresh ideas that can create lasting progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadac4] bg-[#fcfaf7] px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449] sm:tracking-[0.3em]">
              Continue Exploring
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              Explore her impact, vision, and ongoing leadership story.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#6d5746] sm:text-lg">
              Learn more about the initiatives, values, and measurable outcomes
              that continue to shape her public engagement and service journey.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/impact"
                className="flex 1 items-center justify-center rounded-full bg-[#4a2f21] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
              >
                Explore Impact
              </Link>

              <Link
                href="/leadership-in-action"
                className="flex 1 items-center justify-center rounded-full border border-[#caa77a] px-4 py-3 text-center text-sm font-semibold text-[#8a653f] transition hover:bg-[#f5ede3]"
              >
                Gallery
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
    </main>
  );
}