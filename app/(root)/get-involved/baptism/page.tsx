"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { FormField } from "../_components/form-field";

const expectations = [
  "A short conversation with our team before the baptism.",
  "A simple explanation of what baptism means and why we do it.",
  "An opportunity to invite your family and friends.",
  "Guidance from our team throughout the process.",
];

export default function BaptismPage() {
  return (
    <main className="bg-[#F3F2ED] text-[#111]">
      {/* HERO */}
      <section className="relative min-h-[75vh] bg-[#31553C] text-white overflow-hidden">
        <Image
          src="/assets/baptism.jpg"
          alt="Baptism at Mustard Seed"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-[#163D2A]/75" />

        <div className="relative z-10 min-h-[75vh] max-w-7xl mx-auto px-6 py-24 flex flex-col justify-end">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D8C48A] mb-6">
            Your Next Step
          </p>

          <h1 className="text-6xl md:text-8xl font-medium tracking-[-0.05em] leading-[0.9] max-w-5xl">
            Take the
            <br />
            <span className="text-white/55">next step.</span>
          </h1>

          <p className="mt-8 max-w-xl text-white/70 text-lg leading-8">
            Baptism is a public declaration of your decision to follow Jesus. If
            you&apos;re ready, we&apos;d love to walk through this step with
            you.
          </p>

          <a
            href="#registration"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] w-fit border-b border-white/40 pb-2 hover:border-white transition"
          >
            Register for baptism
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WHAT IT MEANS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[0.7fr_1.5fr] gap-12 md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              What it means
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-[1]">
              A decision made public.
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-black/60 text-lg leading-8">
              <p>
                Baptism represents the death of our old life and the beginning
                of a new life in Christ.
              </p>

              <p>
                It doesn&apos;t make you a Christian. Rather, it is an outward
                expression of an inward decision to follow Jesus.
              </p>

              <p>
                If you&apos;ve decided to follow Christ and feel ready to take
                this step, we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE + EXPECTATIONS */}
      <section className="bg-[#31553C] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="relative min-h-[450px] md:min-h-[650px]">
            <Image
              src="/assets/baptism.jpg"
              alt="Baptism"
              fill
              className="object-cover"
            />
          </div>

          <div className="px-6 py-20 md:px-16 lg:px-24 flex items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D8C48A]">
                What to expect
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-medium tracking-[-0.03em]">
                We&apos;ll walk with you.
              </h2>

              <div className="mt-10">
                {expectations.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 py-6 border-t border-white/15"
                  >
                    <span className="text-xs text-[#D8C48A]">0{index + 1}</span>

                    <p className="text-white/70 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="registration" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#31553C]">
              Baptism registration
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-medium tracking-[-0.04em]">
              Ready to take the step?
            </h2>

            <p className="mt-6 text-black/55 leading-7">
              Fill in your details and someone from our team will reach out with
              the next steps.
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

            <FormField
              label="Why do you want to be baptized?"
              name="message"
              textarea
            />

            <label className="flex items-start gap-3 py-6 text-sm text-black/55">
              <input
                type="checkbox"
                name="guardianConsent"
                className="mt-1 accent-[#31553C]"
              />
              <span>
                I understand that someone from the Mustard Seed team may contact
                me regarding baptism.
              </span>
            </label>

            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 bg-[#31553C] text-white px-7 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#163D2A] transition"
            >
              Submit registration
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* BACK */}
      <section className="bg-[#111] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-white/40 text-sm">Have another question?</p>

          <Link
            href="/get-involved"
            className="text-sm uppercase tracking-[0.18em] hover:text-[#D8C48A] transition"
          >
            Back to Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}
