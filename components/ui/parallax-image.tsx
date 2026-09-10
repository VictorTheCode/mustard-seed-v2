"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  amount?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  priority = false,
  amount = 10,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : [`-${amount}%`, `${amount}%`],
  );

  const isPositioned = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div
      ref={ref}
      className={`${isPositioned ? "" : "relative "}overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-[15%] h-[130%] w-[130%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}
