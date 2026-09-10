"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import ParallaxImage from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";

export default function Family() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black text-white">
      {/* BACKGROUND */}

      <ParallaxImage
        src="/assets/gallery1.JPG"
        alt="Mustard Seed Teens community"
        className="absolute inset-0 h-full"
        imageClassName="scale-[1.08]"
        amount={12}
        sizes="100vw"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-6 pb-12 md:px-10 md:pb-16">
        <div className="max-w-4xl">
          <Reveal>
            <motion.p className="text-xs uppercase tracking-[0.3em] text-[#B7CFA8]">
              Join the family
            </motion.p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl">
              There&apos;s room
              <br />
              <span className="text-[#B7CFA8]">for you here.</span>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.2}>
              <p className="max-w-xl text-base leading-8 text-white/65 md:text-lg">
                Whether this is your first Sunday or you&apos;ve been with us
                for years, you&apos;re welcome here. Come meet people, worship
                with us and discover what God is doing.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  border
                  border-white/30
                  px-6
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  transition
                  hover:bg-white
                  hover:text-black
                "
              >
                Plan your visit
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* TOP LABEL */}

      <div className="absolute left-6 top-8 z-10 md:left-10">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
          Mustard Seed Teens
        </span>
      </div>
    </section>
  );
}
