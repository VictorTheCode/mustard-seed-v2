"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { socials } from "@/constants/svgs";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this to your backend / Resend / Nodemailer / Formspree etc.
    console.log("Form submitted");
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* ================= HERO ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C8A75A]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#C8A75A]">
                  Contact
                </span>
              </div>

              <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Let&apos;s
                <br />
                <span className="font-serif italic text-[#C8A75A]">talk.</span>
              </h1>
            </div>

            <p className="max-w-lg text-base leading-8 text-white/55 lg:ml-auto">
              Have a question, want to join the ministry, need someone to pray
              with you, or simply want to know more about Mustard Seed Teens?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A75A]">
                Find us
              </p>

              <h2 className="mt-5 text-3xl font-medium sm:text-4xl">
                We&apos;d love to hear from you.
              </h2>

              <div className="mt-12 space-y-9">
                {/* Location */}
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <MapPin size={18} className="text-[#C8A75A]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      Location
                    </p>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Assemblies of God Church
                      <br />
                      Ikeja, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <Phone size={18} className="text-[#C8A75A]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      Phone
                    </p>

                    <div className="mt-2 space-y-1 text-sm text-white/70">
                      <a
                        href="tel:08025299170"
                        className="block transition hover:text-[#C8A75A]"
                      >
                        0802 529 9170
                      </a>

                      <a
                        href="tel:07034777979"
                        className="block transition hover:text-[#C8A75A]"
                      >
                        0703 477 7979
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <Mail size={18} className="text-[#C8A75A]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      Email
                    </p>

                    <a
                      href="mailto:hello@mustardseedteens.com"
                      className="mt-2 block text-sm text-white/70 transition hover:text-[#C8A75A]"
                    >
                      hello@mustardseedteens.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-14 border-t border-white/10 pt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  Follow the family
                </p>

                <div className="mt-5 flex gap-3">
                  {socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#C8A75A] hover:text-[#C8A75A]"
                    >
                      <svg
                        viewBox={social.viewBox ?? "0 0 24 24"}
                        width={16}
                        height={16}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={social.path} />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="rounded-[2rem] bg-[#F3F3F0] p-7 text-[#111111] sm:p-10 lg:p-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#123B2A]">
                  Send a message
                </p>

                <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
                  How can we help?
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.15em]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="mt-3 h-13 w-full border-b border-black/20 bg-transparent px-0 text-sm outline-none transition placeholder:text-black/30 focus:border-[#123B2A]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.15em]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="mt-3 h-13 w-full border-b border-black/20 bg-transparent px-0 text-sm outline-none transition placeholder:text-black/30 focus:border-[#123B2A]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium uppercase tracking-[0.15em]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0800 000 0000"
                    className="mt-3 h-13 w-full border-b border-black/20 bg-transparent px-0 text-sm outline-none transition placeholder:text-black/30 focus:border-[#123B2A]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium uppercase tracking-[0.15em]"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="mt-3 h-13 w-full border-b border-black/20 bg-transparent px-0 text-sm outline-none focus:border-[#123B2A]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="join">Joining Mustard Seed Teens</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="baptism">Baptism</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="skills">Skills Development</option>
                    <option value="event">Event / Program</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.15em]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="mt-3 w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-[#123B2A]"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#123B2A] text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#1b523b]"
                >
                  Send Message
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP / VISIT CTA ================= */}
      <section className="border-t border-white/10 bg-[#123B2A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A75A]">
                Come visit
              </p>

              <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
                There&apos;s a seat waiting for you.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Assemblies of God Church
                <br />
                Ikeja, Lagos, Nigeria
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm transition hover:border-[#C8A75A] hover:text-[#C8A75A]"
            >
              Get Directions
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
