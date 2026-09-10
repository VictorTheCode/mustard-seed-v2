"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    id: 1,
    date: "07",
    month: "SEP",
    title: "Teen Service",
    description:
      "A time of worship, the Word, friendship and growing together in Christ.",
    time: "10:00 AM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/teen-service",
  },
  {
    id: 2,
    date: "14",
    month: "SEP",
    title: "Bible Study",
    description:
      "Come with your questions as we explore Scripture and grow deeper in our faith.",
    time: "10:00 AM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/bible-study",
  },
  {
    id: 3,
    date: "05",
    month: "OCT",
    title: "Worship Night",
    description:
      "An evening set apart for worship, prayer and encountering God together.",
    time: "5:00 PM",
    location: "Assemblies of God Church, Ikeja",
    href: "/events/worship-night",
  },
];

export default function EventsPreview() {
  return (
    <section className="bg-[#F3F2ED] text-[#111] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.7fr_2fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#31553C]">
              What&apos;s happening
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Don&apos;t just
              <br />
              <span className="text-black/35">hear about it.</span>
              <br />
              Be there.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-black/50 md:text-base">
              From weekly services to special gatherings, there&apos;s always
              something happening at Mustard Seed.
            </p>
          </div>
        </div>

        {/* Events */}
        <div className="mt-20 border-t border-black/15">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group border-b border-black/15 py-8 md:py-10"
            >
              <Link
                href={event.href}
                className="grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-center md:gap-12"
              >
                {/* Date */}
                <div className="flex items-end gap-3 md:block">
                  <span className="block text-5xl font-medium leading-none tracking-[-0.05em] md:text-6xl">
                    {event.date}
                  </span>

                  <span className="text-xs uppercase tracking-[0.25em] text-[#31553C] md:mt-2 md:block">
                    {event.month}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-black/30">
                      Event {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-8 bg-black/15" />
                  </div>

                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#31553C] md:text-4xl">
                    {event.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-black/45">
                    {event.description}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 text-xs uppercase tracking-[0.15em] text-black/40 sm:flex-row sm:gap-6">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {event.time}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <span className="flex h-12 w-12 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-[#31553C] group-hover:bg-[#31553C] group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-black/30">
            {events.length.toString().padStart(2, "0")} upcoming events
          </span>

          <Link
            href="/events"
            className="group inline-flex items-center gap-3 border-b border-black/20 pb-2 text-xs uppercase tracking-[0.2em] text-[#31553C] transition hover:border-[#31553C]"
          >
            View all events
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
