"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export default function BeyondTheWalls() {
  return (
    <section className="relative overflow-hidden bg-[#07110d] text-white">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#174d35]/30 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#c8a75a]/10 blur-[150px]" />

      {/* Huge background typography */}
      <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 whitespace-nowrap select-none">
        <span className="text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025]">
          BEYOND
        </span>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">
        {/* Top line */}
        <Reveal direction="up">
          <div className="mb-14 flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c8a75a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
                The MSC Effect
              </span>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block">
              Beyond The Walls / 01
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <div className="relative">
          <Reveal direction="up">
            <h2 className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              Beyond
              <span className="ml-[8vw] block text-white/20">The Walls.</span>
            </h2>
          </Reveal>

          {/* Floating small mark */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-6, 0, -6],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-1/2 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 md:flex"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              MSC
            </span>
          </motion.div>
        </div>

        {/* Accent divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-white/10"
        />

        {/* Story */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Side statement */}
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="max-w-xs text-xl font-medium leading-tight text-white/80 md:text-2xl">
                Planted in His presence.
                <span className="mt-1 block text-[#c8a75a]">
                  Growing beyond expectation.
                </span>
              </p>

              <div className="mt-8 hidden h-px w-16 bg-[#c8a75a] lg:block" />
            </div>
          </Reveal>

          {/* Main text */}
          <Reveal direction="up">
            <div className="max-w-3xl space-y-8 text-[15px] leading-8 text-white/60 md:text-lg md:leading-9">
              <p>
                Mustard Seed Church is more than just a name; it is a prophetic
                statement. We believe that no matter how small a teenager feels,
                when they are planted in the presence of God, they become an
                unstoppable force.
              </p>

              <p>
                Our history at Assemblies of God Ikeja is rich with stories of
                transformation. We have seen teens who were once shy and
                uncertain become bold leaders, talented musicians, and academic
                giants. This is the{" "}
                <strong className="font-semibold text-white">
                  &ldquo;MSC Effect.&rdquo;
                </strong>
              </p>

              <p>
                Every year, we host the{" "}
                <strong className="font-semibold text-white">
                  National Teens Day
                </strong>
                , a massive gathering where thousands of teenagers across the
                nation converge to lift up the name of Jesus. It is a time of
                revival, where the fire of the Holy Spirit is ignited in the
                hearts of the youth.
              </p>

              <p>
                But our impact doesn&apos;t stop at large events. It&apos;s in the small,
                weekly Bible studies where we tackle the tough questions about
                identity, peer pressure, and mental health. It&apos;s in the{" "}
                <strong className="font-semibold text-white">
                  Love Feasts
                </strong>{" "}
                where we break bread together and build bonds that last a
                lifetime.
              </p>

              <p>
                We are a generation that is unashamed of the Gospel. We are
                tech-savvy, creative, and full of energy, but our anchor remains
                firmly in the ancient truths of the Word of God. We are the
                bridge between the heritage of the Assemblies of God and the
                future of the global church.
              </p>

              {/* Quote */}
              <div className="relative mt-12 border-l border-[#c8a75a] pl-6 md:pl-8">
                <p className="font-serif text-2xl italic leading-tight text-white md:text-4xl">
                  &ldquo;We are not just the church of tomorrow; we are the church of
                  TODAY.&rdquo;
                </p>
              </div>

              {/* CTA */}
              <div className="pt-5">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium text-white transition-colors hover:border-[#c8a75a]"
                >
                  Discover our story
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-24 flex items-end justify-between border-t border-white/10 pt-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Seed → Growth → Impact
          </span>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-10 w-10 rounded-full border border-[#c8a75a]/30"
          />
        </div>
      </div>
    </section>
  );
}
