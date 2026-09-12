"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Copy,
  CreditCard,
  Heart,
  Landmark,
} from "lucide-react";
import { bankAccounts } from "@/constants";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

const Give = () => {
  const { copy, isCopied } = useCopyToClipboard(2000);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="relative flex min-h-[75vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/bgcoordinators.jpg"
            alt="Giving background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/30 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C8A75A]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#C8A75A]">
                Give
              </span>
            </div>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Give with
              <br />
              <span className="font-serif italic text-[#C8A75A]">purpose.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Your generosity helps us create spaces where teenagers can
              discover Christ, develop their gifts, build meaningful
              relationships, and grow into who God has called them to be.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-t border-white/10 bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A75A]">
                Why we give
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
                Building a generation that knows they belong.
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-base leading-8 text-white/60 sm:text-lg">
                Giving is one of the ways we participate in the work God is
                doing through this ministry. Every contribution can help provide
                resources for programs, outreach, events, skills development,
                welfare, and the everyday work of serving our teens.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                Whether it is a little or a lot, we are grateful for every
                person who chooses to support what we are building together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WAYS TO GIVE ================= */}
      <section className="bg-[#F3F3F0] text-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#123B2A]" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#123B2A]">
                Ways to give
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Choose how you&apos; d like to support.
            </h2>
          </div>

          {/* Payment options */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Bank transfer */}
            <div className="rounded-[2rem] bg-white p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123B2A] text-white">
                <Landmark size={20} />
              </div>

              <h3 className="mt-7 text-2xl font-medium">Bank Transfer</h3>

              <p className="mt-3 text-sm leading-7 text-black/55">
                Transfer directly to one of our ministry accounts.
              </p>

              <div className="mt-8 space-y-4">
                {bankAccounts.map((account) => (
                  <div
                    key={account.bank}
                    className="border border-black/10 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold">{account.bank}</p>

                      <Landmark size={16} className="text-[#123B2A]" />
                    </div>

                    <div className="mt-5 space-y-3 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-black/40">
                          Account Name
                        </p>
                        <p className="mt-1 font-medium">
                          {account.accountName}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-black/40">
                          Account Number
                        </p>

                        <div className="mt-1 flex items-center justify-between gap-3">
                          <p className="font-mono text-lg font-medium">
                            {account.accountNumber}
                          </p>

                          <button
                            type="button"
                            onClick={() => copy(account.accountNumber)}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 transition hover:bg-[#123B2A] hover:text-white"
                            aria-label="Copy account number"
                          >
                            {isCopied(account.accountNumber) ? (
                              <Check size={16} />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                        </div>

                        {isCopied(account.accountNumber) && (
                          <p className="mt-2 text-xs text-[#123B2A]">
                            Account number copied.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online giving */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#123B2A] p-7 text-white sm:p-9">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <CreditCard size={20} />
                </div>

                <h3 className="mt-7 text-2xl font-medium">Give Online</h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
                  Give securely using your preferred payment method. You&apos;ll
                  be redirected to our secure payment provider to complete your
                  donation.
                </p>

                {/* Connect this button to Paystack/Flutterwave */}
                <Link
                  href="#"
                  className="mt-10 inline-flex h-13 items-center gap-4 rounded-full bg-[#C8A75A] px-7 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  Give Online
                  <ArrowUpRight size={17} />
                </Link>

                <p className="mt-5 text-xs text-white/35">
                  Secure payment processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="bg-[#0B0B0B]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:py-32">
          <Heart
            className="mx-auto text-[#C8A75A]"
            size={28}
            strokeWidth={1.5}
          />

          <h2 className="mt-7 text-4xl font-medium sm:text-5xl">
            Thank you for investing in the next generation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
            Every gift is an opportunity to make an impact in the life of a
            young person.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Give;
