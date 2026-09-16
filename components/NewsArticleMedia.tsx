
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type VideoItem = {
  src: string;
  poster?: string;
  caption?: string;
};

type MediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      caption?: string;
    };

type NewsArticleMediaProps = {
  images: GalleryItem[];
  video?: VideoItem;
};

export default function NewsArticleMedia({
  images,
  video,
}: NewsArticleMediaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const media: MediaItem[] = [
    ...images.map((image) => ({
      type: "image" as const,
      src: image.src,
      alt: image.alt,
      caption: image.caption,
    })),

    ...(video
      ? [
          {
            type: "video" as const,
            src: video.src,
            poster: video.poster,
            caption: video.caption,
          },
        ]
      : []),
  ];

  const activeMedia = media[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? media.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === media.length - 1 ? 0 : current + 1,
    );
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxOpen]);

  if (media.length === 0) return null;

  return (
    <>
      {/* MEDIA GALLERY */}
      <section className="mt-9">
        {/* DESKTOP GRID */}
        <div className="hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
          {media.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden bg-white text-left shadow-sm"
              aria-label={`Open media ${index + 1}`}
            >
              <div className="relative aspect-[4/4] overflow-hidden bg-[#f3ede4]">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <video
                      muted
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                      className="h-full w-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>

                    {/* VIDEO PLAY ICON */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#2b1c14] shadow-lg transition group-hover:scale-110">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </>
                )}

                {/* OPEN ICON */}
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition group-hover:opacity-100">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" />
                    <path d="M3 8l6-5M21 8l-6-5M3 16l6 5M21 16l-6 5" />
                  </svg>
                </span>
              </div>

              {item.caption ? (
                <p className="px-4 py-3 text-sm text-[#8a653f]">
                  {item.caption}
                </p>
              ) : null}
            </button>
          ))}
        </div>

        {/* MOBILE SINGLE-COLUMN CAROUSEL */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden bg-white shadow-sm">
            <button
              type="button"
              onClick={() => openLightbox(activeIndex)}
              className="group block w-full text-left"
              aria-label={`Open media ${activeIndex + 1} in full screen`}
            >
              <div className="relative aspect-square overflow-hidden bg-[#f3ede4]">
                {activeMedia.type === "image" ? (
                  <Image
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <video
                      muted
                      playsInline
                      preload="metadata"
                      poster={activeMedia.poster}
                      className="h-full w-full object-cover"
                    >
                      <source
                        src={activeMedia.src}
                        type="video/mp4"
                      />
                    </video>

                    <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#2b1c14] shadow-lg">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </>
                )}
              </div>
            </button>

            {activeMedia.caption ? (
              <p className="px-4 py-3 text-sm text-[#8a653f]">
                {activeMedia.caption}
              </p>
            ) : null}

            {/* PREVIOUS / NEXT */}
            {media.length > 1 ? (
              <div className="flex items-center justify-between border-t border-[#eadac4] px-4 py-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c4aa] text-xl text-[#6d5746] transition hover:bg-[#f3ede4]"
                  aria-label="Previous media"
                >
                  ←
                </button>

                <span className="text-sm text-[#8a653f]">
                  {activeIndex + 1} / {media.length}
                </span>

                <button
                  type="button"
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c4aa] text-xl text-[#6d5746] transition hover:bg-[#f3ede4]"
                  aria-label="Next media"
                >
                  →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && activeMedia ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close media viewer"
          >
            ×
          </button>

          {/* COUNTER */}
          <div className="absolute left-4 top-5 z-20 text-sm text-white/70 sm:left-8">
            {activeIndex + 1} / {media.length}
          </div>

          {/* PREVIOUS */}
          {media.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Previous media"
            >
              ←
            </button>
          ) : null}

          {/* NEXT */}
          {media.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Next media"
            >
              →
            </button>
          ) : null}

          {/* MEDIA */}
          <div
            className="flex max-h-[90vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeMedia.type === "image" ? (
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                width={1600}
                height={1200}
                sizes="92vw"
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
            ) : (
              <video
                key={activeMedia.src}
                controls
                autoPlay
                playsInline
                poster={activeMedia.poster}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              >
                <source src={activeMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* CAPTION */}
          {activeMedia.caption ? (
            <p className="absolute bottom-5 left-1/2 max-w-[85vw] -translate-x-1/2 text-center text-sm text-white/80">
              {activeMedia.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}