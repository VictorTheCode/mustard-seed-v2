"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FormField } from "../_components/form-field";

const skills = [
  "Music & Worship",
  "Media & Production",
  "Photography",
  "Videography",
  "Graphic Design",
  "Technology",
  "Social Media",
  "Hospitality",
  "Leadership",
  "Creative Arts",
  "Writing",
  "Event Support",
];

export default function SkillsPage() {
  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="relative min-h-[80vh] bg-[#31553C] text-white overflow-hidden">
        <Image
          src="/assets/teens-serving.jpg"
          alt="Teens serving at Mustard Seed"
          fill
          priority
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-[#163D2A]/80" />

        <div className="relative z-10 max-w-7xl mx-auto min-h-[80vh] px-6 py-24 flex flex-col justify-end">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A]">
            Serve with us
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-medium tracking-[-0.05em] leading-[0.9] max-w-5xl">
            There&apos;s
            <br />
            something
            <br />
            <span className="text-white/50">in you.</span>
          </h1>

          <p className="mt-8 max-w-xl text-white/70 text-lg leading-8">
            Your creativity, your skills and your willingness can become part of
            something bigger than yourself.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[0.7fr_1.5fr] gap-12 md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              Use what you have
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-[1]">
              You don&apos;t need to be perfect. You just need to be willing.
            </h2>

            <p className="mt-8 max-w-2xl text-lg text-black/55 leading-8">
              Maybe you&apos;re already experienced. Maybe you&apos;re still
              learning. Either way, there is room to grow while serving.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-[#111] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/15 pb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D8C48A]">
                Areas to serve
              </p>

              <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.04em]">
                Bring your gift.
              </h2>
            </div>

            <p className="max-w-sm text-white/45 leading-7">
              Don&apos;t see your exact skill? Apply anyway. We&apos;re more
              interested in your willingness than a perfect job description.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group py-7 border-b border-white/10 md:border-r md:px-6 first:pl-0"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <span className="text-xs text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg text-white/75 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-white/25 group-hover:text-[#D8C48A] transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              Skills application
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-medium tracking-[-0.04em]">
              Let&apos;s build together.
            </h2>

            <p className="mt-6 max-w-xl text-black/50 leading-7">
              Tell us what you can do, what you&apos;re interested in learning,
              and where you&apos;d love to serve.
            </p>
          </div>

          <form className="border-t border-black/15">
            <div className="grid md:grid-cols-2">
              <FormField label="First name" name="firstName" />
              <FormField label="Last name" name="lastName" />
            </div>

            <div className="grid md:grid-cols-2">
              <FormField label="Email address" name="email" type="email" />
              <FormField label="Phone number" name="phone" type="tel" />
            </div>

            <div className="border-b border-black/15 py-8">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">
                What would you like to serve in?
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center gap-3 border border-black/10 px-4 py-4 cursor-pointer hover:border-[#31553C] transition"
                  >
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      className="accent-[#31553C]"
                    />

                    <span className="text-sm text-black/65">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <FormField
              label="Tell us about your experience"
              name="experience"
              textarea
            />

            <FormField
              label="Anything else you want us to know?"
              name="message"
              textarea
            />

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 bg-[#31553C] text-white px-7 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#163D2A] transition"
            >
              Submit application
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
