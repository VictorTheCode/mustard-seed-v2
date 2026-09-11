// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import type { ReactNode } from "react";

// interface RevealProps {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
//   duration?: number;
//   y?: number;
//   x?: number;
//   direction?: "up" | "down" | "left" | "right" | "none";
//   once?: boolean;
// }

// export function Reveal({
//   children,
//   className = "",
//   delay = 0,
//   duration = 0.7,
//   y,
//   x,
//   direction = "up",
//   once = true,
// }: RevealProps) {
//   const shouldReduceMotion = useReducedMotion();

//   let initialY = 0;
//   let initialX = 0;

//   if (direction === "up") initialY = y ?? 30;
//   else if (direction === "down") initialY = y ?? -30;
//   else if (direction === "left") initialX = x ?? -30;
//   else if (direction === "right") initialX = x ?? 30;

//   if (y !== undefined) initialY = y;
//   if (x !== undefined) initialX = x;

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: shouldReduceMotion ? 0 : initialY,
//         x: shouldReduceMotion ? 0 : initialX,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         x: 0,
//       }}
//       viewport={{
//         once,
//         margin: "-80px",
//       }}
//       transition={{
//         duration: shouldReduceMotion ? 0 : duration,
//         delay: shouldReduceMotion ? 0 : delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y,
  x,
  direction = "up",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  let initialY = 0;
  let initialX = 0;

  if (direction === "up") {
    initialY = y ?? 30;
  } else if (direction === "down") {
    initialY = y ?? -30;
  } else if (direction === "left") {
    initialX = x ?? -30;
  } else if (direction === "right") {
    initialX = x ?? 30;
  }

  if (y !== undefined) initialY = y;
  if (x !== undefined) initialX = x;

  const hiddenState = {
    opacity: shouldReduceMotion ? 1 : 0,
    y: shouldReduceMotion ? 0 : initialY,
    x: shouldReduceMotion ? 0 : initialX,
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once,
        amount: 0.15,
        margin: "0px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
