"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { values } from "@/constants";

export default function JoinPage() {
  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="bg-[#111] text-white min-h-[75vh]">
        <div className="max-w-7xl mx-auto min-h-[75vh] px-6 grid md:grid-cols-2">
          <div className="flex flex-col justify-end py-20 md:py-24 md:pr-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A] mb-6">
              Find your people
            </p>

            <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.05em] leading-[0.9]">
              You belong
              <br />
              <span className="text-white/40">here.</span>
            </h1>

            <p className="mt-8 max-w-lg text-white/60 leading-8">
              Mustard Seed is a family. A place to build friendships, grow in
              Christ and discover what God has placed inside you.
            </p>
          </div>

          <div className="relative min-h-[400px]">
            <Image
              src="/assets/gallery1.jpg"
              alt="Mustard Seed community"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
            More than a service
          </p>

          <h2 className="mt-5 max-w-5xl text-4xl md:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
            Church becomes different when you stop coming as a visitor and start
            becoming part of the family.
          </h2>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="py-12 md:py-16 md:px-10 first:md:pl-0 border-b md:border-b-0 md:border-r last:border-0 border-black/10"
                >
                  <span className="text-xs text-black/30">0{index + 1}</span>

                  <Icon
                    className="mt-12 w-7 h-7 text-[#31553C]"
                    strokeWidth={1.4}
                  />

                  <h3 className="mt-7 text-2xl font-medium">{item.title}</h3>

                  <p className="mt-4 text-black/50 leading-7">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              Join us
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-medium tracking-[-0.04em]">
              Let&apos;s get to know you.
            </h2>

            <p className="mt-6 text-black/55 leading-7">
              Tell us a little about yourself and we&apos;ll help you find your
              place within the Mustard Seed family.
            </p>
          </div>

          <form className="border-t border-black/15">
            <div className="grid md:grid-cols-2">
              <Field label="First name" name="firstName" />
              <Field label="Last name" name="lastName" />
            </div>

            <div className="grid md:grid-cols-2">
              <Field label="Email address" name="email" type="email" />
              <Field label="Phone number" name="phone" type="tel" />
            </div>

            <div className="border-b border-black/15">
              <label className="block pt-6 text-xs uppercase tracking-[0.2em] text-black/40">
                How did you find us?
              </label>

              <select
                name="source"
                className="w-full bg-transparent py-5 outline-none text-lg"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="friend">A friend</option>
                <option value="social">Social media</option>
                <option value="event">An event</option>
                <option value="online">Online search</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Field label="Tell us about yourself" name="message" textarea />

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 bg-[#31553C] text-white px-7 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#163D2A] transition"
            >
              Join the family
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#31553C] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D8C48A]">
              Want to serve?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              There&apos;s a place for your gifts too.
            </h2>
          </div>

          <Link
            href="/get-involved/skills"
            className="inline-flex items-center gap-2 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.18em]"
          >
            Explore your skills
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const className =
    "w-full bg-transparent border-0 outline-none px-0 py-5 text-lg placeholder:text-black/30";

  return (
    <div className="border-b border-black/15 px-0 md:px-6 first:md:border-r">
      <label className="block pt-6 text-xs uppercase tracking-[0.2em] text-black/40">
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className={className}
          placeholder="Tell us a little more..."
        />
      ) : (
        <input type={type} name={name} className={className} />
      )}
    </div>
  );
}
