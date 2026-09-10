"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#111]"
    >
      {/* IMAGE */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-[8%] h-[116%]"
      >
        <Image
          src="/assets/pastoral.JPG"
          alt="Mustard Seed Teens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* IMAGE TREATMENT */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#111]/95 via-[#111]/20 to-black/10" />

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 py-6 md:px-8 md:py-12 flex flex-col justify-between mt-32"
      >
        {/* MAIN CONTENT */}
        <div className="pb-8 md:pb-10">
          <div className="max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D8C48A]"
            >
              Mustard Seed Church
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="
                text-white
                text-[clamp(3.5rem,7vw,6.8rem)]
                leading-[0.82]
                tracking-[-0.055em]
                font-medium
                max-w-5xl
              "
            >
              A generation
              <br />
              <span className="text-white/55">that knows</span>
              <br />
              Jesus.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-8 flex flex-col md:flex-row md:items-end gap-8"
            >
              <p className="max-w-md text-sm md:text-base leading-7 text-white/65">
                A community of teenagers discovering faith, purpose, friendship
                and the courage to live for Christ.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/get-involved/join"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-white
                    border-b
                    border-white/40
                    pb-2
                    hover:border-[#D8C48A]
                    transition-colors
                  "
                >
                  Join the family
                  <ArrowUpRight
                    className="
                      w-4 h-4
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>

                <Link
                  href="/about"
                  className="
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                    hover:text-white
                    transition-colors
                  "
                >
                  Our story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="border-t border-white/15 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/35">
              Sundays
            </span>

            <span className="hidden sm:block w-px h-3 bg-white/20" />
          </div>

          <motion.a
            href="#next"
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
          >
            <span className="hidden md:block text-[10px] uppercase tracking-[0.25em]">
              Explore
            </span>

            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
