"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/constants";
import { Reveal } from "@/components/ui/reveal";

export default function ProgramsSection() {
  return (
    <section className="relative bg-[#F3F2ED] flex-col text-[#111] py-24 md:py-32">
      {/* Center line dividing the page  */}
      <div className="absolute w-[80%] h-[0.5px] bg-gray-300 top-10 left-1/2 -translate-x-1/2  items-center justify-center" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="grid md:grid-cols-[0.8fr_2fr] gap-10 md:gap-20 mb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#31553C]">
              What we do
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.05em] leading-[0.9]">
                There&apos;s more
                <br />
                to church.
              </h2>

              <p className="mt-8 max-w-lg text-black/50 leading-7">
                From spiritual growth to creativity, friendship and purpose,
                there&apos;s room to explore, learn and become who God has
                called you to be.
              </p>
            </div>
          </Reveal>
        </div>

        {/* PROGRAM LIST */}
        <div className="border-t border-black/15">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <Link
                href={program.href || "#"}
                className="group grid grid-cols-[45px_1fr_auto] md:grid-cols-[80px_1fr_1fr_auto] gap-5 md:gap-10 items-center py-8 md:py-10 border-b border-black/15"
              >
                {/* NUMBER */}
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl md:text-4xl font-medium tracking-[-0.03em] group-hover:text-[#31553C] transition-colors">
                  {program.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="hidden md:block max-w-sm text-sm leading-7 text-black/45">
                  {program.description}
                </p>

                {/* ARROW */}
                <span className="w-10 h-10 border border-black/15 flex items-center justify-center group-hover:bg-[#31553C] group-hover:border-[#31553C] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex justify-between items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-black/30">
            Explore Mustard Seed
          </span>

          <Link
            href="/activities"
            className="text-sm uppercase tracking-[0.18em] text-[#31553C] border-b border-[#31553C]/30 pb-1 hover:border-[#31553C] transition"
          >
            See all activities
          </Link>
        </div>
      </div>
    </section>
  );
}
