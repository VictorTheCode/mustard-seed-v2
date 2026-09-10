"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { previewImages } from "@/constants";
import { Reveal } from "@/components/ui/reveal";

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#111] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal x={-20}>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A]">
                Moments
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Life at
                <br />
                Mustard Seed.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-sm">
              <p className="text-sm leading-7 text-white/45">
                Worship, friendships, laughter, service and the moments in
                between.
              </p>

              <Link
                href="/gallery"
                className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-xs uppercase tracking-[0.2em] transition hover:border-[#D8C48A]"
              >
                View full gallery
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* GRID */}

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-[2px] bg-white/10 md:auto-rows-[180px] md:grid-cols-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden bg-[#222] ${image.className}`}
            >
              <Image
                src={image.src}
                alt="Mustard Seed Teens moment"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />

              <motion.div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/30">
          <span>01 — 07</span>

          <span>Mustard Seed Teens · Ikeja</span>
        </div>
      </div>
    </section>
  );
}
