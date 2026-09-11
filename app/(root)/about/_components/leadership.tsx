"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const coordinators = [
  {
    number: "01",
    name: "Bro Ifeanyi Ezechi",
    role: "Teens Coordinator",
  },
  {
    number: "02",
    name: "Bro Stephen David",
    role: "Assistant Coordinator",
  },
  {
    number: "03",
    name: "Minister Seth Ozoemena",
    role: "Assistant Coordinator",
  },
  {
    number: "04",
    name: "Sis Blessing Ukachi",
    role: "Program Coordinator",
  },
  {
    number: "05",
    name: "Bro. Wisdom Chidiebere",
    role: "Media Coordinator",
  },
  {
    number: "06",
    name: "Bro Christian Nwagbara",
    role: "Music Coordinator",
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#111] py-24 text-white md:py-32">
      {/* Ambient background mark */}
      <div className="pointer-events-none absolute -right-16 top-20 select-none text-[12rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025] md:text-[20rem]">
        MSC
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="mb-16 grid gap-10 md:grid-cols-[0.75fr_2fr] md:gap-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c8a75a]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
                Leadership
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl">
                The people
                <br />
                <span className="font-serif font-normal italic text-white/40">
                  behind the movement.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                A team committed to serving, guiding and raising a generation
                that knows God, grows together and lives with purpose.
              </p>
            </div>
          </Reveal>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* COLLAGE */}
          <Reveal direction="left">
            <div className="relative">
              {/* Gold offset frame */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#c8a75a]/50" />

              <div className="relative aspect-[6/5] overflow-hidden bg-white/5">
                <Image
                  src="/assets/teen-cordinate.jpg"
                  alt="Mustard Seed Teens coordinators"
                  height={400}
                  width={1024}
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  className="object-contain transition-transform duration-1000 hover:scale-[1.02]"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Image label */}
              <div className="absolute -bottom-8 -left-3 bg-[#c8a75a] px-5 py-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#111]">
                  Mustard Seed Teens
                </span>
              </div>
            </div>
          </Reveal>

          {/* COORDINATORS */}
          <div className="lg:pt-2">
            <Reveal>
              <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                  Coordinators
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Our Team
                </span>
              </div>
            </Reveal>

            <div>
              {coordinators.map((person, index) => (
                <Reveal
                  key={`${person.number}-${person.name}`}
                  delay={index * 0.06}
                >
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="group grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-white/10 py-5 md:grid-cols-[50px_1fr_auto] md:gap-6"
                  >
                    {/* NUMBER */}
                    <span className="text-[10px] font-medium tracking-[0.15em] text-white/25">
                      {person.number}
                    </span>

                    {/* NAME + ROLE */}
                    <div>
                      <h3 className="text-lg font-medium tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#c8a75a] md:text-xl">
                        {person.name}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {person.role}
                      </p>
                    </div>

                    {/* ARROW */}
                    <ArrowUpRight className="h-4 w-4 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c8a75a]" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-white/10 pt-8 md:mt-28 md:flex md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/40">
              Leadership is more than a position. It is a responsibility to
              serve, influence and help others discover who God has called them
              to become.
            </p>

            <span className="mt-6 block text-[10px] uppercase tracking-[0.3em] text-[#c8a75a] md:mt-0">
              Raising Giants
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
