"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { journeyPeople } from "@/constants";

export default function OurJourney() {
  return (
    <section className="relative overflow-hidden bg-[#080a09] py-24 text-white md:py-32 lg:py-40">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#174d35]/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#c8a75a]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Section intro */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <Reveal direction="up">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c8a75a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45">
                  Our Journey
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]">
                From a small
                <span className="block font-serif italic font-normal text-white/40">
                  gathering...
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.15}>
            <div className="max-w-xs md:pb-2">
              <p className="text-sm leading-6 text-white/45">
                The people, faith and vision behind the Mustard Seed movement.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* ARCHIVAL COLLAGE */}
          <Reveal direction="left">
            <div className="relative mx-auto aspect-[0.9] w-full max-w-[620px]">
              {/* Decorative large typography */}
              <span className="pointer-events-none absolute -left-5 top-1/2 z-0 -translate-y-1/2 text-[11rem] font-black leading-none tracking-[-0.1em] text-white/[0.025] md:text-[15rem]">
                01
              </span>

              {/* Main founder image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute left-1/2 top-1/2 z-20 w-[58%] -translate-x-1/2 -translate-y-1/2"
              >
                {/* Offset frame */}
                <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#c8a75a]/50" />

                <div className="relative aspect-[4/5] overflow-hidden border border-white/20 bg-[#171918]">
                  <Image
                    src="/assets/man.jpg"
                    alt="Late Barrister Ben Ukadike"
                    fill
                    className="object-cover grayscale-[15%] transition-transform duration-1000 hover:scale-105"
                    sizes="(max-width: 1024px) 55vw, 30vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                      Founder / Pioneer
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Late Barrister Ben Ukadike
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Smaller historical portraits */}
              {journeyPeople.map((person, index) => (
                <motion.div
                  key={person.src}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      delay: index * 0.08,
                    },
                    scale: {
                      duration: 0.6,
                      delay: index * 0.08,
                    },
                    y: {
                      duration: 4 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: person.delay,
                    },
                  }}
                  viewport={{ once: true }}
                  className={`absolute ${person.position} ${person.size} ${person.rotate} z-10 overflow-hidden border border-white/25 bg-[#161817] p-1 shadow-2xl`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={person.src}
                      alt={person.alt}
                      fill
                      className="object-cover grayscale-[10%] transition-all duration-700 hover:scale-110 hover:grayscale-0"
                      sizes="160px"
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute bottom-1 right-2 text-[7px] font-semibold tracking-widest text-white/60">
                    0{index + 2}
                  </span>
                </motion.div>
              ))}

              {/* Connecting editorial lines */}
              <div className="pointer-events-none absolute left-[14%] top-[25%] z-0 h-px w-[72%] rotate-[20deg] bg-white/[0.08]" />

              <div className="pointer-events-none absolute left-[12%] top-[72%] z-0 h-px w-[76%] -rotate-[17deg] bg-white/[0.08]" />
            </div>
          </Reveal>

          {/* STORY */}
          <div>
            <Reveal direction="up">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a75a]">
                  It Started as a Gathering
                </span>

                <span className="h-px flex-1 bg-white/10" />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <div className="space-y-7 text-[15px] leading-7 text-white/55 md:text-base md:leading-8">
                <p>
                  In the heart of Ikeja, a small group of teenagers began to
                  meet. They were looking for more than just a Sunday routine;
                  they were looking for a home, a purpose, and a real connection
                  with God.
                </p>

                <p>
                  What began as a simple gathering of seeds soon blossomed into
                  an{" "}
                  <strong className="font-semibold text-white">
                    Explosive Encounter
                  </strong>
                  . Under the leadership of the{" "}
                  <strong className="font-semibold text-white">
                    Late Barrister Ben Ukadike
                  </strong>
                  , alongside faithful pioneers such as{" "}
                  <strong className="font-semibold text-white">
                    Reverend Emma Ossai, Pastor James and Mrs. Chichi Okereke,
                    Deacon Patrick Ajah and Deaconess Cynthia Ajah, Mrs Stella
                    Chamberlain, Mr. and Mrs. Omobare, and Mr. and Mrs. John
                    Obasi Kalu
                  </strong>
                  , among many others,{" "}
                  <strong className="font-semibold text-white">
                    The Mustard Seed Church (MSC)
                  </strong>{" "}
                  was birthed with a singular, burning vision:{" "}
                  <em className="text-white">
                    to sow seeds of faith and raise giants for the Kingdom of
                    God.
                  </em>
                </p>

                <p>
                  Today, MSC stands as a vibrant beacon of hope within
                  Assemblies of God Ikeja. We are a generation that refuses to
                  be silent, a movement that is rewriting the narrative of what
                  it means to be a Christian teenager in the modern world.
                </p>
              </div>
            </Reveal>

            {/* Vision statement */}
            <Reveal direction="up" delay={0.18}>
              <div className="mt-12 border-l border-[#c8a75a] pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-white/85 md:text-2xl">
                  &quot;To sow seeds of faith and raise giants for the Kingdom
                  of God.&quot;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
