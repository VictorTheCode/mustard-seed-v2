import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  HandHeart,
  MessageCircle,
  Waves,
} from "lucide-react";

const opportunities = [
  {
    number: "01",
    title: "Get Baptized",
    description:
      "Take the next step in your walk with Christ through water baptism.",
    href: "/get-involved/baptism",
    icon: Waves,
  },
  {
    number: "02",
    title: "Join Mustard Seed Teens",
    description:
      "Find a community where you can grow in faith, build friendships and become who God has called you to be.",
    href: "/get-involved/join",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Learn a Skill",
    description:
      "Discover and develop practical skills while connecting with other young people.",
    href: "/get-involved/skills",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Prayer & Testimony",
    description:
      "Share what is on your heart or tell us what God has done in your life.",
    href: "/get-involved/prayer-testimony",
    icon: MessageCircle,
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="bg-[#F4F3EF] text-[#111111]">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden bg-black text-white">
        <Image
          src="/assets/lifted-hands.jpg"
          alt="Mustard Seed Teens"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-16 md:px-10 md:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
              Get involved
            </p>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl">
              There&apos;s a place
              <br />
              <span className="text-[#B7CFA8]">for you here.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              Faith is more than something we talk about on Sundays. Find a
              place to connect, serve, learn, grow and take your next step.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#55715A]">
              Take your next step
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Don&apos;t just attend.
              <br />
              <span className="text-[#55715A]">Be part of it.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
              Mustard Seed Teens is a place to discover your faith, develop your
              gifts, build meaningful relationships and make a difference in the
              lives of others.
            </p>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="bg-[#163D2A] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Find your place
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                Get involved.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/60">
              Whether you&apos;re new to church or you&apos;ve been here for
              years, there&apos;s always another step you can take.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.number}
                  className="group grid gap-6 py-8 transition md:grid-cols-[80px_70px_1fr_40px] md:items-center"
                >
                  <span className="text-sm text-white/40">{item.number}</span>

                  <Icon
                    size={25}
                    strokeWidth={1.3}
                    className="text-[#B7CFA8]"
                  />

                  <div>
                    <h3 className="text-2xl font-medium md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={24}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVE */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-black text-white md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/assets/teens-serving.jpg"
              alt="Teens serving together"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <HandHeart
              size={30}
              strokeWidth={1.2}
              className="mb-8 text-[#B7CFA8]"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Serve with us
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
              Your gift can make room for someone else.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-white/55">
              From media and music to hospitality, graphics, photography and
              mentoring, there are many ways to use your gifts to serve God and
              people.
            </p>

            <Link
              href="/get-involved/skills"
              className="mt-8 inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              Discover your gifts
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E4E9DF] px-6 py-24 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#55715A]">
          You belong here
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
          Come as you are.
          <br />
          <span className="text-[#55715A]">Grow with us.</span>
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm uppercase tracking-widest text-white transition hover:bg-[#163D2A]"
        >
          Talk to us
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
