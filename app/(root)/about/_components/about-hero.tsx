"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const AboutHero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex flex-col justify-end overflow-hidden px-6 pb-12 md:px-12 md:pb-24">
      <Image
        src="/assets/community.JPG"
        alt="Mustard Seed Teens gathered in worship"
        fill
        priority
        className="object-cover object-top scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Typography signature: Mixing stark uppercase sans with elegant lowercase serif */}
          <h1 className="text-5xl sm:text-6xl md:text-[6vw] leading-[0.85] tracking-tighter font-black text-white uppercase">
            Find your <br />
            <span className="font-serif italic font-light text-[#D4AF37] tracking-normal normal-case">
              purpose
            </span>{" "}
            in him.
          </h1>

          <p className="mt-8 max-w-md text-[#F4F0EA]/70 text-lg md:text-xl leading-relaxed font-light">
            We aren&apos;t a waiting room for adult faith. We are a
            Christ-centred community building lifelong friendships and
            passionate followers of Jesus today.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-none bg-[#D4AF37] px-8 py-4 font-bold text-[#0A0F0D] transition-transform hover:scale-[1.02]"
            >
              Join Next Service
              {/* Subtle hover arrow reveal */}
              <span className="ml-0 max-w-0 opacity-0 transition-all duration-300 ease-out group-hover:ml-3 group-hover:max-w-xs group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-white uppercase tracking-widest text-xs font-semibold border-b border-white/20 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
