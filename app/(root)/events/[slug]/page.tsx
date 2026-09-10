import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { events } from "@/constants";

function formatDate(date: string) {
  const parsed = new Date(date);

  return {
    month: parsed
      .toLocaleDateString("en-US", {
        month: "long",
      })
      .toUpperCase(),

    shortMonth: parsed
      .toLocaleDateString("en-US", {
        month: "short",
      })
      .toUpperCase(),

    day: parsed.getDate().toString().padStart(2, "0"),

    weekday: parsed.toLocaleDateString("en-US", {
      weekday: "long",
    }),

    full: parsed.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return (
      <main className="min-h-screen bg-[#F3F2ED] text-[#111]">
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#31553C]">
            404 — Event not found
          </p>

          <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            This event
            <br />
            doesn&apos;t exist.
          </h1>

          <Link
            href="/events"
            className="mt-10 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-xs uppercase tracking-[0.2em] hover:border-[#31553C] hover:text-[#31553C]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to events
          </Link>
        </section>
      </main>
    );
  }

  const date = formatDate(event.date);

  const relatedEvents = events
    .filter((item) => item.slug !== event.slug)
    .slice(0, 2);

  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#111] text-white">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-6 py-8 md:px-8 md:py-10">
          {/* TOP */}
          <Link
            href="/events"
            className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All events
          </Link>

          {/* BOTTOM */}
          <div className="max-w-6xl pb-4 md:pb-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#D8C48A]" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                {event.category}
              </span>
            </div>

            <h1 className="max-w-5xl text-6xl font-medium leading-[0.82] tracking-[-0.055em] md:text-8xl lg:text-[9rem]">
              {event.title}
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* EVENT INFORMATION */}
      <section className="border-b border-black/10 bg-[#F3F2ED]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <InfoBlock
            icon={<CalendarDays className="h-5 w-5" />}
            label="Date"
            value={date.full}
          />

          <InfoBlock
            icon={<Clock3 className="h-5 w-5" />}
            label="Time"
            value={event.time}
          />

          <InfoBlock
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={event.location}
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* SIDE */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              About the event
            </p>

            <div className="mt-8 hidden md:block">
              <div className="text-[#31553C]">
                <span className="block text-xs uppercase tracking-[0.2em]">
                  {date.month}
                </span>

                <span className="mt-1 block text-7xl font-medium leading-none tracking-[-0.06em]">
                  {date.day}
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Come expecting something meaningful.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6">
              {event.details
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-black/55 md:text-lg"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="#"
                className="group inline-flex items-center gap-4 bg-[#31553C] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#26452F]"
              >
                I&apos;m interested
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT IMAGE */}
      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="relative mx-auto aspect-[16/8] max-w-7xl overflow-hidden">
          <Image
            src={event.image}
            alt={`${event.title} at Mustard Seed Teens`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* RELATED EVENTS */}
      {relatedEvents.length > 0 && (
        <section className="border-t border-black/10 bg-white/30 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
                  Keep exploring
                </p>

                <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                  You might also like.
                </h2>
              </div>

              <Link
                href="/events"
                className="hidden text-xs uppercase tracking-[0.2em] text-black/40 transition hover:text-[#31553C] md:block"
              >
                All events →
              </Link>
            </div>

            <div className="grid border-t border-black/15 md:grid-cols-2">
              {relatedEvents.map((related, index) => {
                const relatedDate = formatDate(related.date);

                return (
                  <Link
                    key={related.id}
                    href={`/events/${related.slug}`}
                    className={`group py-8 md:py-10 ${
                      index === 0
                        ? "border-b md:border-r md:border-b-0 md:pr-10"
                        : "md:pl-10"
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#31553C]">
                          {relatedDate.shortMonth} {relatedDate.day}
                        </p>

                        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#31553C]">
                          {related.title}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/15 transition-all group-hover:border-[#31553C] group-hover:bg-[#31553C] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="bg-[#31553C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                See you there
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                There&apos;s a place
                <br />
                <span className="text-white/50">for you here.</span>
              </h2>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.2em] transition hover:border-white"
            >
              Explore more events
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-black/10 px-6 py-8 md:border-r md:px-8 md:py-10 md:last:border-r-0">
      <div className="flex items-center gap-3 text-[#31553C]">
        {icon}

        <span className="text-[10px] uppercase tracking-[0.25em]">{label}</span>
      </div>

      <p className="mt-5 max-w-xs text-sm leading-6 text-black/60">{value}</p>
    </div>
  );
}
