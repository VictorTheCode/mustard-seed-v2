"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { FormField } from "../_components/form-field";

const testimonies = [
  {
    name: "Anonymous",
    category: "Faith",
    story:
      "I came into Mustard Seed feeling completely disconnected from God. Through the people I met and the things I experienced, I found myself wanting to know Jesus for myself.",
  },
  {
    name: "Anonymous",
    category: "Growth",
    story:
      "I used to be afraid to speak about my faith. Being around other young people who were serious about following Christ helped me become much more confident.",
  },
  {
    name: "Anonymous",
    category: "Prayer",
    story:
      "There was a season when I was carrying something I couldn't explain to anyone. I asked for prayer and slowly began to see God change both my situation and my heart.",
  },
];

export default function PrayerTestimonyPage() {
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  const [testimonySubmitted, setTestimonySubmitted] = useState(false);

  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#111] text-white">
        <Image
          src="/assets/testimony.jpg"
          alt="Mustard Seed Teens"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-6 py-12 md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A]">
            Prayer & Testimonies
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-medium leading-[0.85] tracking-[-0.055em] md:text-8xl">
            God is still
            <br />
            <span className="text-white/50">writing stories.</span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-white/60 md:text-base">
            Whatever you are carrying, you can bring it to God. And whatever He
            has done, your story might be exactly what someone else needs to
            hear.
          </p>
        </div>
      </section>

      {/* PRAYER */}
      <section className="bg-[#111] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A]">
                  01 — Prayer
                </p>

                <h2 className="mt-6 text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                  You don&apos;t
                  <br />
                  have to carry
                  <br />
                  it alone.
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                  Share what&apos;s on your heart. Our team will pray with you
                  and believe with you.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPrayerSubmitted(true);
                }}
                className="border-t border-white/15"
              >
                <FormField
                  label="Name"
                  className="border-b border-white/15"
                  inputClassName="text-white placeholder:text-white/25"
                  labelClassName="text-white/35"
                  name="name"
                  placeholder="Your name"
                />

                <FormField
                  label="Email"
                  className="border-b border-white/15"
                  inputClassName="text-white placeholder:text-white/25"
                  labelClassName="text-white/35"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />

                <FormField
                  label="Phone"
                  className="border-b border-white/15"
                  inputClassName="text-white placeholder:text-white/25"
                  labelClassName="text-white/35"
                  name="phone"
                  placeholder="+234..."
                />

                <div className="border-b border-white/15 py-6">
                  <label
                    htmlFor="prayer"
                    className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35"
                  >
                    Prayer request
                  </label>

                  <textarea
                    id="prayer"
                    name="prayer"
                    required
                    rows={6}
                    placeholder="Tell us what you would like us to pray about..."
                    className="w-full resize-none bg-transparent text-base text-white outline-none placeholder:text-white/20"
                  />
                </div>

                <label className="flex items-start gap-3 py-6 text-sm text-white/45">
                  <input
                    type="checkbox"
                    name="anonymous"
                    className="mt-1 accent-[#31553C]"
                  />
                  <span>Keep my request anonymous.</span>
                </label>

                {prayerSubmitted ? (
                  <div className="flex items-center gap-3 border border-[#31553C] bg-[#31553C]/20 px-5 py-4 text-sm text-white/80">
                    <Check className="h-4 w-4 text-[#8FAF96]" />
                    Your prayer request has been received. We&apos;ll be praying
                    with you.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-xs uppercase tracking-[0.2em] transition hover:border-[#D8C48A]"
                  >
                    Send prayer request
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIES INTRO */}
      <section className="bg-[#F3F2ED] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#31553C]">
              02 — Testimonies
            </p>

            <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                Look what
                <br />
                God has done.
              </h2>

              <p className="max-w-md text-sm leading-7 text-black/50 md:justify-self-end">
                Every testimony is a reminder that God is present, God is
                working and no story is too ordinary for Him to transform.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONY STORIES */}
      <section className="bg-[#F3F2ED] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="border-t border-black/15">
            {testimonies.map((testimony, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <article className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[100px_1fr_220px] md:py-14">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <blockquote className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-4xl">
                      &ldquo;{testimony.story}&rdquo;
                    </blockquote>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm font-medium">{testimony.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#31553C]">
                      {testimony.category}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE TESTIMONY */}
      <section className="bg-[#31553C] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  03 — Share your story
                </p>

                <h2 className="mt-6 text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
                  Your story
                  <br />
                  matters.
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/60">
                  Tell us what God has done in your life. With your permission,
                  we may share your testimony to encourage others.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTestimonySubmitted(true);
                }}
                className="border-t border-white/20"
              >
                <FormField
                  label="Name"
                  className="border-b border-white/20"
                  inputClassName="text-white placeholder:text-white/25"
                  labelClassName="text-white/40"
                  name="testimonyName"
                  placeholder="Your name"
                />

                <FormField
                  label="Email"
                  className="border-b border-white/20"
                  inputClassName="text-white placeholder:text-white/25"
                  labelClassName="text-white/40"
                  name="testimonyEmail"
                  type="email"
                  placeholder="you@example.com"
                />

                <div className="border-b border-white/20 py-6">
                  <label
                    htmlFor="testimony"
                    className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/40"
                  >
                    Your testimony
                  </label>

                  <textarea
                    id="testimony"
                    name="testimony"
                    required
                    rows={8}
                    placeholder="Tell us what God has done..."
                    className="w-full resize-none bg-transparent text-base text-white outline-none placeholder:text-white/25"
                  />
                </div>

                <label className="flex items-start gap-3 py-6 text-sm text-white/60">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#D8C48A]"
                  />
                  <span>
                    I give permission for my testimony to be shared by Mustard
                    Seed Teens.
                  </span>
                </label>

                {testimonySubmitted ? (
                  <div className="flex items-center gap-3 border border-white/20 bg-white/10 px-5 py-4 text-sm">
                    <Check className="h-4 w-4" />
                    Thank you for sharing your story.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 border-b border-white/40 pb-3 text-xs uppercase tracking-[0.2em] hover:border-white"
                  >
                    Share my testimony
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
