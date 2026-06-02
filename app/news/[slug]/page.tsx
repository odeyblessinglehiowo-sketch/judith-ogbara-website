import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Awards", href: "/awards" },
  { label: "Leadership", href: "/leadership" },
  { label: "Leadership in Action", href: "/leadership-in-action" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type FlexibleArticle = {
  slug: string;
  title: string;
  date: string;
  byline: string;
  intro: string;
  image: string;
  body?: string[];
  gallery?: GalleryItem[];
  video?: {
    src: string;
    poster?: string;
    caption?: string;
  };
  blocks?: Array<
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "video"; src: string; poster?: string; caption?: string }
  >;
};

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug) as FlexibleArticle | undefined;

  if (!article) {
    return { title: "News Story" };
  }

  return {
    title: article.title,
    description: article.intro,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug) as FlexibleArticle | undefined;

  if (!article) {
    notFound();
  }

  const bodyParagraphs =
    article.body ??
    article.blocks
      ?.filter((block) => block.type === "paragraph")
      .map((block) => block.text) ??
    [];

  const galleryImages =
    article.gallery ??
    article.blocks
      ?.filter((block) => block.type === "image")
      .map((block) => ({
        src: block.src,
        alt: block.alt,
        caption: block.caption,
      })) ??
    [];

  const video =
    article.video ??
    article.blocks?.find((block) => block.type === "video") ??
    undefined;

  const suggestedStories = newsItems
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#2b1c14]">
      {/* HEADER - same as News page */}
      <header className="sticky top-0 z-50 w-full px-0 pt-0">
        <div className="border-b border-white/10 bg-[#160f0c]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/news#home" className="flex items-center gap-3">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/judith-logo2.png"
                  alt="Judith Ogbara logo"
                  fill
                  sizes="80px"
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

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === "/news";

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

            <details className="relative md:hidden">
              <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-white transition hover:bg-white/[0.08]">
                <div className="flex h-4 w-5 flex-col items-center justify-between">
                  <span className="h-[2px] w-5 rounded-full bg-white" />
                  <span className="h-[2px] w-5 rounded-full bg-white" />
                  <span className="h-[2px] w-5 rounded-full bg-white" />
                </div>
              </summary>

              <div className="absolute right-0 mt-3 w-[84vw] max-w-[360px] rounded-[1.25rem] bg-[#fcfaf7] shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
                <div className="border-b border-[#eadac4] px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9a7449]">
                    Menu
                  </p>
                  <p className="mt-1 text-sm text-[#6d5746]">Judith Ogbara</p>
                </div>

                <nav className="px-5 py-4">
                  <div className="flex flex-col divide-y divide-[#eee3d5]">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`py-5 text-[1.05rem] font-semibold transition ${
                          item.href === "/news"
                            ? "text-[#8b6438]"
                            : "text-[#2b1c14] hover:text-[#8b6438]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#4a2f21] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2f1d14]"
                  >
                    Get in Touch
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* HERO - same news/update style */}
      <section
        id="home"
        className="scroll-mt-28 bg-[#2b1c14] px-5 py-14 sm:px-6 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4af78]">
            News & Updates
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Latest stories, milestones, and public moments.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#eadfce]/82 sm:text-base sm:leading-8">
            Stay informed on Hon. Dr. Judith Mayen Ogbara’s recent activities,
            recognitions, community engagements, and leadership updates.
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-5 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <Link
              href="/news"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af78] hover:text-[#f0cf95]"
            >
              ← Back to News & Updates
            </Link>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#2b1c14] sm:text-4xl">
              {article.title}
            </h2>

            <p className="mt-4 text-sm text-[#8a653f]">
              {article.date} • {article.byline}
            </p>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#6d5746] sm:text-base sm:leading-8">
              {article.intro}
            </p>
          </div>

          {/* IMAGE GRID */}
          {galleryImages.length > 0 && (
            <section className="mt-10">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {galleryImages.map((image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className="overflow-hidden bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/4] bg-[#f3ede4]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {image.caption ? (
                      <figcaption className="px-4 py-3 text-sm text-[#8a653f]">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* MAIN STORY */}
          <section className="mt-10">
            <div className="overflow-hidden bg-white shadow-sm">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="max-w-6xl space-y-6 text-[18px] leading-10 text-[#6d5746]">
                  {bodyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* VIDEO AT THE END */}
          {video ? (
            <section className="mt-10">
              <div className="overflow-hidden bg-white shadow-sm">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449]">
                    Video
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="relative aspect-video overflow-hidden rounded-[0.75rem]">
  <video
    controls
    playsInline
    poster={"poster" in video ? video.poster : undefined}
    className="h-full w-full object-cover"
  >
    <source src={"src" in video ? video.src : ""} type="video/mp4" />
  </video>
</div>

                    {"caption" in video && video.caption ? (
                      <p className="text-sm text-[#8a653f]">{video.caption}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* SUGGESTED STORIES */}
          <section className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7449]">
                  Suggested Stories
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#2b1c14]">
                  More updates to explore
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
              {suggestedStories.map((item) => (
                <article key={item.slug} className="overflow-hidden bg-white shadow-sm">
                  <Link href={`/news/${item.slug}`} className="block">
                    <div className="relative aspect-[4/4] overflow-hidden bg-[#f3ede4]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <h4 className="text-sm font-bold leading-snug text-[#2b1c14] sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#8a653f]">{item.date}</p>
                    <Link
                      href={`/news/${item.slug}`}
                      className="mt-3 inline-flex text-sm font-semibold text-[#8a653f] hover:text-[#4a2f21]"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}