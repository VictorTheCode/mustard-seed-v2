"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export default function LeadPastor() {
  return (
    <section className="overflow-hidden bg-[#111] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Leadership
            </p>

            <span className="text-xs text-white/30">02</span>
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-16 md:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* IMAGE */}

          <Reveal x={-50} duration={0.9}>
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="absolute -bottom-5 -right-5 h-full w-full border border-[#6E8B73] md:-bottom-7 md:-right-7"
              />

              <motion.div
                whileHover={{
                  rotate: -1,
                  scale: 1.01,
                }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] rotate-[-2deg] overflow-hidden"
              >
                <Image
                  src="/assets/pastor-oreva.jpg"
                  alt="Pastor Oreva Ogbor"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute -bottom-5 left-5 bg-[#31553C] px-5 py-4 text-xs uppercase tracking-[0.2em]">
                Lead Pastor
              </div>
            </div>
          </Reveal>

          {/* CONTENT */}

          <div>
            <Reveal delay={0.15}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8BA68E]">
                Pastor
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Oreva
                <br />
                Ogbor.
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 h-px w-20 bg-[#6E8B73]" />
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 max-w-xl text-lg leading-9 text-white/60">
                Every teenager carries purpose. Our calling is to help them
                discover Jesus, grow in faith and impact their generation with
                the Gospel.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/40">
                Through teaching, mentorship and genuine community, we want to
                raise young people who know God and understand who He has called
                them to become.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-xs uppercase tracking-[0.2em]"
              >
                Meet our leadership
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
