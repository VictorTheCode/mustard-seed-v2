"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center">
      {/* Background */}

      <Image
        src="/assets/community.jpg"
        alt="Mustard Seed Teens"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#111111]" />

      {/* Decorative Glow */}

      <div className="absolute -top-52 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#C8A75A]/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl"
        >
          {/* Heading */}
          <div className="text-5xl md:text-6xl lg:text-8xl leading-[0.95] tracking-widest text-center uppercase font-bold">
            About Us
          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl text-white/70 text-lg leading-8">
            We exist to create a Christ-centred community where teenagers
            discover purpose, build meaningful friendships, and become
            passionate followers of Jesus.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="rounded-full bg-[#C8A75A] px-8 py-4 font-medium text-black transition hover:scale-105"
            >
              Join Our Next Service
            </Link>

            <Link
              href="/gallery"
              className="rounded-full border border-white/15 px-8 py-4 text-white transition hover:bg-white/10"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <p className="uppercase tracking-[0.3em] text-[10px] text-white/50">
            Scroll
          </p>

          <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
