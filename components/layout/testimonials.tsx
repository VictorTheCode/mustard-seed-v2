"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { stories } from "@/constants";

export default function LifeChangeStories() {
  return (
    <section className="relative overflow-hidden bg-[#123B2A] text-white">
      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-20 select-none text-[18rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025]"
      >
        03
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A75A]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#C8A75A]">
                Real Stories
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Lives
              <br />
              <span className="font-serif italic text-[#D8C48A]">
                are changing.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-sm leading-7 text-white/60 sm:text-base">
              Behind every gathering, every conversation and every moment of
              worship is a story. These are some of the stories growing out of
              the Mustard Seed family.
            </p>
          </div>
        </div>

        {/* Main story */}
        <div className="mt-20 border-y border-white/15">
          <div className="grid lg:grid-cols-[1fr_1.5fr]">
            {/* Number / label */}
            <div className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:py-12">
              <div className="flex h-full flex-col justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Featured story
                </span>

                <span className="mt-10 block text-7xl font-light leading-none text-[#C8A75A]/70 lg:text-8xl">
                  01
                </span>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="py-10 lg:px-16 lg:py-16"
            >
              <span className="mb-5 block font-serif text-6xl leading-none text-[#C8A75A]">
                “
              </span>

              <blockquote className="max-w-4xl text-2xl font-light leading-[1.35] tracking-[-0.02em] sm:text-3xl lg:text-[2.7rem]">
                {stories[0].content}
              </blockquote>

              <div className="mt-10 flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em]">
                    {stories[0].author}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    {stories[0].role}
                  </p>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center border border-white/20 sm:flex">
                  <ArrowUpRight className="h-4 w-4 text-[#C8A75A]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Other stories */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              More voices
            </p>

            <span className="h-px flex-1 bg-white/10 ml-6" />
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {stories.slice(1).map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group grid gap-6 py-8 transition-colors lg:grid-cols-[80px_1fr_180px] lg:items-center"
              >
                <span className="text-sm text-[#C8A75A]/70">0{index + 2}</span>

                <div>
                  <p className="max-w-3xl text-lg font-light leading-8 text-white/80 transition-colors group-hover:text-white sm:text-xl">
                    “{story.content}”
                  </p>
                </div>

                <div className="lg:text-right">
                  <p className="text-sm font-medium uppercase tracking-[0.15em]">
                    {story.author}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/40">
                    {story.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-white/50">
            Your story could be the next one. Come grow with us, discover your
            gifts, and find your place in the family.
          </p>

          <Link
            href="/testimonies"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#C8A75A] pb-2 text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors hover:text-[#C8A75A]"
          >
            Read more stories
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
