"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navGroups } from "@/constants";

const navlinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <div className="hidden md:flex gap-4">
          {navlinks.map((link, i) => (
            <div
              className="uppercase font-light text-xs tracking-[0.25em] text-gray-300"
              key={i}
            >
              <Link href={link.href}>{link.label}</Link>
            </div>
          ))}
        </div>

        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="text-white md:size-8" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col md:flex-row items-start justify-between p-10 gap-10 overflow-y-auto"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
              aria-label="Close menu"
            >
              <X />
            </button>

            <div className="flex flex-col gap-5 font-bold mt-16 md:mt-0">
              {navGroups.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl md:text-5xl  uppercase hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
