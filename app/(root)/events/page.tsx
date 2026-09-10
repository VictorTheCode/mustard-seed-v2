import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "@/constants";
import ParallaxImage from "@/components/ui/parallax-image";

function formatDate(date: string) {
  const parsed = new Date(date);

  return {
    month: parsed
      .toLocaleDateString("en-US", {
        month: "short",
      })
      .toUpperCase(),
    day: parsed.getDate().toString().padStart(2, "0"),
  };
}

export default function EventsPage() {
  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="bg-[#111] text-white relative min-h-[90vh] overflow-hidden">
        {/* Background parallax image */}

        <ParallaxImage
          src="/assets/teens5.jpeg"
          alt="Mustard Seed Teens community"
          priority
          className="absolute inset-0 h-full w-full"
          imageClassName="scale-[1.08]"
          amount={12}
          sizes="100vw"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 py-16 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A]">
            Events
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.82] tracking-[-0.055em] md:text-7xl lg:text-8xl">
            What&apos;s
            <br />
            happening
            <br />
            <span className="text-white/40">at Mustard Seed.</span>
          </h1>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/40">
            <CalendarDays className="h-4 w-4" />
            <span>Services · Gatherings · Worship · Community</span>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex items-end justify-between border-b border-black/15 pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
                Upcoming
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Gather with us.
              </h2>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-black/30 md:block">
              03 events
            </span>
          </div>

          <div>
            {events.map((event, index) => {
              const date = formatDate(event.date);

              return (
                <Link
                  href={`/events/${event.slug}`}
                  key={event.id}
                  className="group block border-b border-black/15 py-8 md:py-12"
                >
                  <div className="grid gap-8 md:grid-cols-[100px_1fr_280px_40px] md:items-center">
                    {/* DATE */}
                    <div className="flex items-center gap-3 md:block">
                      <span className="block text-xs uppercase tracking-[0.2em] text-[#31553C]">
                        {date.month}
                      </span>

                      <span className="block text-4xl font-medium leading-none tracking-[-0.05em] md:mt-1 md:text-5xl">
                        {date.day}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#31553C] md:text-5xl">
                        {event.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-black/45">
                        {event.description}
                      </p>
                    </div>

                    {/* META */}
                    <div className="space-y-3 text-xs uppercase tracking-[0.15em] text-black/40">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-4 w-4 text-[#31553C]" />
                        {event.time}
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#31553C]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* ARROW */}
                    <div className="flex h-10 w-10 items-center justify-center border border-black/15 transition-all group-hover:border-[#31553C] group-hover:bg-[#31553C] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#31553C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Stay connected
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Don&apos;t miss
                <br />
                what&apos;s next.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
                Join the Mustard Seed community on WhatsApp for event updates,
                announcements and everything happening throughout the week.
              </p>
            </div>

            <Link
              href="#"
              className="group inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.2em] hover:border-white"
            >
              Join Our WhatsApp Community
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
