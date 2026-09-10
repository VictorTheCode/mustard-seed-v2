"use client";

import { coordinators } from "@/constants";
import Image from "next/image";
import { motion } from "motion/react";

const Coordinators = () => {
  return (
    <section className="bg-[#F3F2ED] px-6 py-24 text-[#111] md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              The team
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-6xl">
              People who
              <br />
              <span className="text-[#31553C]">serve the vision.</span>
            </h2>
          </div>

          <p className="max-w-md self-end text-base leading-8 text-black/50 md:justify-self-end">
            Our coordinators help create a place where teenagers can connect,
            grow, discover their gifts and become part of something bigger than
            themselves.
          </p>
        </div>

        {/* PEOPLE */}
        <div className="mt-20 border-t border-black/10">
          {coordinators.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group grid grid-cols-[45px_90px_1fr] items-center gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr_180px]"
            >
              {/* NUMBER */}
              <span className="text-xs text-black/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* IMAGE */}
              <div className="relative h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* NAME */}
              <div>
                <h3 className="text-xl font-medium md:text-3xl">
                  {person.name}
                </h3>

                <p className="mt-2 text-sm text-[#31553C] md:hidden">
                  {person.role}
                </p>
              </div>

              {/* ROLE */}
              <p className="hidden text-right text-sm text-black/45 md:block">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
