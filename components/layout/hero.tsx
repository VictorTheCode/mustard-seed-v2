// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";

// const HeroSection = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   return (
//     <section ref={ref} className="relative w-full h-screen overflow-hidden">
//       <motion.div style={{ y }} className="absolute inset-0">
//         <Image
//           src="/assets/hero.JPG"
//           alt="Mustard Seed Church hero"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </motion.div>

//       <div className="absolute inset-0 bg-black/80" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center"
//       >
//         <h1 className="text-gray-200 text-4xl md:text-7xl font-semibold tracking-widest">
//           Welcome to
//           <br />
//           <span className="text-green-600 italic font-base mx-4">
//             Mustard
//           </span>{" "}
//           Seed Church
//         </h1>
//         <Link
//           href="/about"
//           className="border border-transparent bg-green-700 text-lg uppercase tracking-widest font-light px-8 py-4 w-45 my-12 "
//         >
//           Join Us
//         </Link>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background */}

      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/assets/hero.JPG"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#111111]" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}

            <p className="max-md:hidden uppercase tracking-[0.35em] text-[#C8A75A] text-xs mb-6">
              Mustard Seed Church
            </p>

            {/* Heading */}

            <h1 className="text-white text-5xl md:text-6xl xl:text-8xl leading-[0.9] font-medium">
              Raising A
              <br />
              Generation
              <br />
              That Loves
              <br />
              Jesus.
            </h1>

            {/* Description */}

            <p className="text-white/70 mt-8 text-lg leading-8 max-w-xl">
              A community where teenagers grow in faith, discover purpose, build
              friendships and impact their world for Christ.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/join"
                className="
                h-14
                px-8
                rounded-full
                bg-[#C8A75A]
                text-black
                font-medium
                flex
                items-center
                hover:scale-105
                transition
                "
              >
                Join Our Family
              </Link>

              <Link
                href="/about"
                className="
                h-14
                px-8
                rounded-full
                border
                border-white/20
                text-white
                flex
                items-center
                hover:bg-white/10
                transition
                "
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        ↓
      </motion.div>
    </section>
  );
}
