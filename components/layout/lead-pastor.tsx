"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function LeadPastor() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[#C8A75A]">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">Meet Our Lead Pastor</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{}}
            viewport={{ once: true }}
            className="relative w-[140px] h-[180px] md:w-[360px] md:h-[450px]"
          >
            <div className="absolute top-4 left-4 h-full w-full rounded-2xl border-2 border-[#C8A75A]" />

            <div className="relative h-full w-full overflow-hidden rounded-2xl rotate-[-3deg]">
              <Image
                src="/assets/pastor-oreva.jpg"
                alt="Lead Pastor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-xs text-[#C8A75A]">
              Lead Pastor
            </p>

            <h3 className="mt-3 text-3xl md:text-5xl">Pastor Oreva Ogbor</h3>

            <p className="mt-6 text-white/70 leading-8">
              Every teenager carries purpose. Our calling is to help them
              discover Jesus, grow in faith and impact their generation with the
              Gospel.
            </p>

            <Link
              href="/about"
              className="inline-flex mt-8 items-center gap-2 text-[#C8A75A]"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
