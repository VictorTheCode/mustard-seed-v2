"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { values } from "@/constants";
import { WHATSAPP_LINK, WhatsAppIcon } from "@/constants/svgs";
import { FormField } from "../_components/form-field";


export default function JoinPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormFilled =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Save the data – actual endpoint will be wired up with the backend later
      await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Non-blocking: still redirect even if the save fails for now
      console.warn("Could not persist form data; backend not yet connected.");
    } finally {
      setSubmitting(false);
    }

    // Redirect to the WhatsApp community group
    router.push(WHATSAPP_LINK);
  }

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
              className="object-cover w-full"
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

          <form className="border-t border-black/15" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2">
              <FormField label="First name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormField label="Last name" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="grid md:grid-cols-2">
              <FormField label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} />
              <FormField label="Phone number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="border-b border-black/15">
              <label className="block pt-6 text-xs uppercase tracking-[0.2em] text-black/40">
                How did you find us?
              </label>

              <select
                name="source"
                className="w-full bg-transparent py-5 outline-none text-lg"
                value={formData.source}
                onChange={handleChange}
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

            <FormField label="Tell us about yourself" name="message" textarea value={formData.message} onChange={handleChange} />

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting || !isFormFilled}
              className="mt-8 inline-flex items-center gap-3 bg-[#31553C] text-white px-7 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#163D2A] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "Joining…" : "Join community"}
              <WhatsAppIcon className="w-5 h-5" />
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
