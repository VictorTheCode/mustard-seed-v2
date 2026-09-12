"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import ParallaxImage from "@/components/ui/parallax-image";

export default function WhoWeAre() {
  return (
    <section
      id="next"
      className="relative overflow-hidden bg-[#F3F2ED] px-6 py-24 text-[#111] md:px-10 md:py-32"
    >
      {/* Background number */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          -right-10
          top-10
          select-none
          text-[18rem]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-black/[0.025]
          md:text-[25rem]
        "
      >
        01
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal x={-20}>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#31553C]">
              Who we are
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              A generation discovering
              <span className="text-[#31553C]"> who they are in Christ.</span>
            </h2>
          </Reveal>
        </div>

        {/* CONTENT */}

        <div className="mt-20 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          {/* IMAGE */}

          <Reveal y={50}>
            <div className="relative">
              <ParallaxImage
                src="/assets/pastoral.JPG"
                alt="Mustard Seed church"
                className="aspect-[4/5]"
                amount={7}
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="
                  absolute
                  -bottom-6
                  -right-3
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  bg-[#31553C]
                  text-white
                  md:-right-8
                  md:h-32
                  md:w-32
                "
              >
                <span className="text-3xl font-light">01</span>
              </motion.div>
            </div>
          </Reveal>

          {/* TEXT */}

          <div>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-xl leading-9 text-black/65 md:text-2xl md:leading-10">
                Mustard Seed church is a community of young people learning to
                follow Jesus, discover purpose and live out their faith in
                everyday life.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-base leading-8 text-black/50">
                We believe church should be a place where teenagers can ask
                questions, build genuine friendships, develop their gifts and
                encounter God without pretending to have everything figured out.
                <br />
                To provide a sanctuary where teens can grow spiritually,
                intellectually, and socially. Through radical discipleship and
                excellence in all things.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-3 border-b border-black/30 pb-3 text-xs font-medium uppercase tracking-[0.2em]"
              >
                Discover our story
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
