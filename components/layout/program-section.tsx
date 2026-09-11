"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const activities = [
  {
    number: "01",
    title: "Membership Classes",
    description:
      "Scripture-based teachings designed to build a strong foundation for spiritual growth.",
    image: "/assets/membership.webp",
  },
  {
    number: "02",
    title: "Celebrations",
    description:
      "Moments of worship, thanksgiving and community where we celebrate what God is doing.",
    image: "/assets/msc9.jpg",
  },
  {
    number: "03",
    title: "Counselling",
    description:
      "A safe place to talk, pray and receive biblical guidance without judgment.",
    image: "/assets/counselling.jpg",
  },
  {
    number: "04",
    title: "Bible Study",
    description:
      "We explore God's Word together and ask the real questions that shape our everyday lives.",
    image: "/assets/teens2.jpeg",
  },
  {
    number: "05",
    title: "Fellowship",
    description:
      "Building genuine friendships, sharing experiences and growing together as a family.",
    image: "/assets/service.jpeg",
  },
  {
    number: "06",
    title: "Outreach",
    description:
      "Taking the Gospel beyond our walls and becoming a light to our communities.",
    image: "/assets/outreach2.webp",
  },
];

export default function Activities() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background mark */}
      <div className="pointer-events-none absolute -right-16 top-16 select-none text-[12rem] font-bold leading-none tracking-[-0.08em] text-black/[0.025] md:text-[18rem]">
        MSC
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal direction="up">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c8a75a]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/50">
                  What We Do
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#111] sm:text-5xl md:text-6xl">
                More than a service.
                <span className="block font-serif font-normal italic text-black/45">
                  A place to belong.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.14}>
            <p className="max-w-sm text-sm leading-6 text-black/55 md:text-right">
              From learning the Word to serving our community, there is always a
              place for you to grow, connect and make an impact.
            </p>
          </Reveal>
        </div>

        {/* Activities */}
        <div
          className="
            -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6
            no-scrollbar
            md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-14 md:overflow-visible md:px-0 md:pb-0
            lg:grid-cols-3
          "
        >
          {activities.map((activity, index) => (
            <Reveal
              key={activity.number}
              direction="up"
              delay={index * 0.06}
              className="
                min-w-[82vw] snap-center
                sm:min-w-[70vw]
                md:min-w-0
              "
            >
              <div className="group block">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e9e5]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="
                      (max-width: 768px) 82vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-white/40 bg-black/10 text-[10px] font-medium tracking-[0.15em] text-white backdrop-blur-sm">
                    {activity.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111]">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                    {activity.description}
                  </p>

                  <div className="mt-5 h-px w-full bg-black/10 transition-colors duration-300 group-hover:bg-[#c8a75a]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <div className="mt-3 flex items-center justify-between md:hidden">
          <span className="text-[9px] uppercase tracking-[0.25em] text-black/35">
            Swipe to explore
          </span>

          <span className="h-px w-16 bg-black/15" />
        </div>
      </div>
    </section>
  );
}
