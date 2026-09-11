"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navlinks, navGroups } from "@/constants";
import { useScrolled } from "@/hooks/use-scrolled";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-5 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-black/10 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <Image
            src="/assets/LOGO.png"
            alt="Mustard Seed Church"
            width={140}
            height={100}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-6">
          {navlinks.map((link, i) => (
            <div
              className="uppercase font-light text-xs tracking-[0.25em] text-gray-300"
              key={i}
            >
              <Link
                href={link.href}
                className="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[#C8A75A] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-white/20
    bg-black/[0.03]
    px-4
    py-2
    text-white/80
    transition
    hover:bg-black/[0.06]
    md:border-white/10
    md:bg-white/5
    md:text-white
    md:hover:bg-white/10
  "
        >
          <span className="hidden sm:block text-xs uppercase tracking-[0.25em]">
            Menu
          </span>

          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#111111] text-white overflow-y-auto no-scrollbar"
          >
            <div className="flex min-h-full flex-col px-6 py-6">
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/assets/LOGO.png"
                    alt="Logo"
                    width={120}
                    height={80}
                  />
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 p-3 hover:bg-white/10 transition"
                >
                  <X size={22} />
                </button>
              </div>

              {/* NAV */}

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex-1 flex flex-col py-4 justify-center"
              >
                <div className="space-y-6">
                  {navGroups.map((link) => (
                    <motion.div key={link.href} variants={item}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                    text-4xl
                    font-medium
                    tracking-tight
                    hover:text-[#C8A75A]
                    transition-colors
                  "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FOOTER */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t border-white/10 pt-8"
              >
                <p className="uppercase text-xs tracking-[0.35em] text-[#C8A75A] mb-5">
                  Follow Us
                </p>

                <div className="flex gap-6 text-sm text-white/70">
                  <Link href="https://instagram.com/mustardseedchurch">
                    Instagram
                  </Link>

                  <Link href="#">YouTube</Link>

                  <Link href="#">TikTok</Link>
                </div>

                <p className="mt-8 max-w-xs text-sm leading-7 text-white/40">
                  Raising a generation that knows God, grows together and lives
                  with purpose.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
