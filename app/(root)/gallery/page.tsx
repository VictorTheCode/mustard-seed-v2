"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/gallery1.jpg",
    alt: "Youth Worship",
    category: "Worship",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/assets/gallery2.jpg",
    alt: "Community Games",
    category: "Community",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "/assets/gallery3.jpg",
    alt: "Bible Study",
    category: "Growth",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    src: "/assets/gallery4.jpg",
    alt: "Camp Fire",
    category: "Community",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    src: "/assets/gallery5.jpg",
    alt: "Group Photo",
    category: "Community",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    src: "/assets/gallery6.jpg",
    alt: "Prayer",
    category: "Prayer",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 7,
    src: "/assets/gallery7.jpg",
    alt: "Retreat",
    category: "Events",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 8,
    src: "/assets/teens1.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 9,
    src: "/assets/teens2.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 10,
    src: "/assets/teens3.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 11,
    src: "/assets/teens4.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 12,
    src: "/assets/teens5.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 13,
    src: "/assets/teens7.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 14,
    src: "/assets/service.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 15,
    src: "/assets/service2.jpeg",
    alt: "Teens Worship",
    category: "Worship",
    className: "md:col-span-1 md:row-span-2",
  },
];

const categories = [
  "All",
  "Worship",
  "Community",
  "Growth",
  "Prayer",
  "Events",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 py-16 md:px-8 md:py-20">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D8C48A]" />

            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Moments
            </p>
          </div>

          <h1 className="mt-7 max-w-6xl text-5xl font-medium leading-[0.82] tracking-[-0.055em] md:text-6xl lg:text-[7rem]">
            Life at
            <br />
            <span className="text-[#C8A75A]/80">Mustard Seed.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/45 md:text-base">
              Worship, friendship, laughter, service and the moments in between.
              A glimpse into life with the Mustard Seed family.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-6 md:px-8">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`shrink-0 border-b pb-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "border-[#D8C48A] text-white"
                    : "border-transparent text-white/30 hover:text-white/70"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            layout
            className="grid auto-rows-[180px] grid-cols-2 gap-[3px] bg-white/10 md:auto-rows-[220px] md:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative overflow-hidden bg-[#1a1a1a] text-left ${image.className}`}
                  aria-label={`Open ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#D8C48A]">
                        {image.category}
                      </p>

                      <p className="mt-2 text-sm text-white">{image.alt}</p>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center border border-white/30">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/25">
            <span>
              {filteredImages.length.toString().padStart(2, "0")} moments
            </span>

            <span>Click an image to explore</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#31553C]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Be part of it
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Some moments
                <br />
                are better
                <br />
                <span className="text-white/50">experienced.</span>
              </h2>
            </div>

            <a
              href="/get-involved/join"
              className="group inline-flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.2em] transition hover:border-white"
            >
              Join the family
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95"
            onClick={closeLightbox}
          >
            {/* CLOSE */}
            <button
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:text-white md:right-8 md:top-8"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* COUNTER */}
            <div className="absolute left-5 top-6 z-20 text-xs uppercase tracking-[0.2em] text-white/40 md:left-8 md:top-9">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredImages.length).padStart(2, "0")}
            </div>

            {/* IMAGE */}
            <div
              className="flex h-full w-full items-center justify-center px-16 py-20 md:px-24 md:py-16"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.div
                key={selectedImage.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* PREVIOUS */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-white/60 transition hover:border-white hover:text-white md:left-8"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* NEXT */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-white/60 transition hover:border-white hover:text-white md:right-8"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* CAPTION */}
            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D8C48A]">
                {selectedImage.category}
              </p>

              <p className="mt-2 text-lg text-white">{selectedImage.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
