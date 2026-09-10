"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, ArrowDown } from "lucide-react";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          DESKTOP IMAGE
      ===================================================== */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-0 hidden md:block"
      >
        <Image
          src="/assets/main-image.JPG"
          alt="Mustard Seed Teens Church"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Image treatment */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/25" />
      </motion.div>

      {/* =====================================================
          MOBILE IMAGE
      ===================================================== */}

      <div className="relative block h-[48vh] min-h-[360px] w-full md:hidden">
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/hero.JPG"
            alt="Mustard Seed Teens Church"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Fade naturally into content */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#050505]" />
        </motion.div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative z-10
          -mt-1
          flex
          min-h-[52vh]
          items-end
          px-6
          pb-24
          md:min-h-screen
          md:items-end
          md:px-10
          md:pb-20
          lg:px-12
          lg:pb-24
        "
      >
        <div className="w-full max-w-5xl">
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Welcome Home
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="
              max-w-4xl
              font-bold
              leading-[0.88]
              tracking-[-0.055em]
              text-white
              text-[clamp(3.5rem,8vw,7rem)]
            "
          >
            <span className="block text-[0.42em] font-medium leading-none tracking-[-0.02em] text-white/75">
              Welcome to
            </span>

            <span className="mt-2 block text-[#C8A75A] font-serif italic">
              Mustard Seed
            </span>

            <span className="mt-1 max-md:text-5xl block text-white/75">
              Teens Church.
            </span>
          </motion.h1>

          {/* Bottom content row */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              variants={item}
              className="
                max-w-[500px]
                text-[15px]
                leading-7
                text-white/65
                md:text-base
              "
            >
              A family in Ikeja, Lagos where teenagers discover faith, purpose,
              friendship, and the courage to live for Christ.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/get-involved/join"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-emerald-600
                  px-7
                  py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-500
                "
              >
                Join Us This Sunday
              </Link>

              <Link
                href="/sermons"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-white/30
                  bg-black/10
                  px-7
                  py-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/70
                  hover:bg-white/10
                "
              >
                <Play className="h-3.5 w-3.5" fill="currentColor" />
                Watch Online
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          SCROLL
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="
          absolute
          bottom-7
          right-8
          z-20
          hidden
          items-center
          gap-3
          md:flex
          lg:right-12
        "
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4 text-white/40" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
