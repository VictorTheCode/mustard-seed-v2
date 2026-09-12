"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Megaphone } from "lucide-react";
import { motion } from "motion/react";
import { announcements } from "@/constants";

export default function AnnouncementsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-[0.7fr_2fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-white/20">
                <Megaphone className="h-4 w-4" />
              </span>

              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Stay in the loop
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
              What&apos;s
              <br />
              <span className="text-white/40">happening</span>
              <br />
              around here?
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Programs, opportunities, classes and everything else happening
              around the Mustard Seed community.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            ANNOUNCEMENT GRID
        ====================================================== */}

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={announcement.featured ? "md:row-span-2" : ""}
            >
              <Link
                href={announcement.href}
                className="group relative block h-full overflow-hidden border border-white/10 bg-[#274630]"
              >
                {/* IMAGE */}

                <div
                  className={
                    announcement.featured
                      ? "relative h-[500px] md:h-full md:min-h-[650px]"
                      : "relative h-[350px] md:h-[340px]"
                  }
                >
                  <Image
                    src={announcement.image}
                    alt={announcement.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-1000
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                  "
                  />

                  {/* TOP META */}

                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between md:left-7 md:right-7 md:top-7">
                    <span
                      className="
                      border
                      border-white/20
                      bg-black/20
                      px-3
                      py-2
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      backdrop-blur-sm
                    "
                    >
                      {announcement.type}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      {announcement.date}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    md:p-7
                  "
                  >
                    <div className="flex items-end justify-between gap-6">
                      <div className="max-w-xl">
                        <p
                          className="
                          mb-3
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-[#D8C48A]
                        "
                        >
                          Announcement
                        </p>

                        <h3
                          className="
                          text-3xl
                          font-medium
                          leading-[0.95]
                          tracking-[-0.04em]
                          md:text-4xl
                        "
                        >
                          {announcement.title}
                        </h3>

                        <p
                          className="
                          mt-4
                          max-w-lg
                          text-sm
                          leading-6
                          text-white/55
                          md:text-base
                        "
                        >
                          {announcement.description}
                        </p>
                      </div>

                      <span
                        className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/25
                        bg-black/10
                        transition-all
                        duration-300
                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-[#31553C]
                      "
                      >
                        <ArrowUpRight
                          className="
                            h-5
                            w-5
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center justify-between"
        >
          <span
            className="
            text-[10px]
            max-[567px]:hidden
            uppercase
            tracking-[0.25em]
            text-white/25
          "
          >
            04 latest updates
          </span>

          <Link
            href="/events"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b
              border-white/20
              pb-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/70
              transition
              hover:border-white
              hover:text-white
            "
          >
            All announcements
            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
