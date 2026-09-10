"use client";

import { motion } from "motion/react";
import { Flame, Users, Compass } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Know God",
    subtitle: "Worship & Personal Relationship",
    description:
      "It is more than just attending service. We guide teens into a passionate, personal, and authentic relationship with Jesus through worship, prayer, and deep study of the Word.",
    reference: "Philippians 3:10",
    icon: Flame,
  },
  {
    number: "02",
    title: "Grow Together",
    subtitle: "Community & Fellowship",
    description:
      "No one was meant to walk alone. We foster an open, fun, and loving community where teens build lifelong friendships, find mentors, and support one another in faith.",
    reference: "Proverbs 27:17",
    icon: Users,
  },
  {
    number: "03",
    title: "Live with Purpose",
    subtitle: "Mission & Calling",
    description:
      "You are called to make a difference now. We equip and empower teens to discover their unique gifts, serve their schools and communities, and live out the Gospel daily.",
    reference: "1 Timothy 4:12",
    icon: Compass,
  },
];

export default function OurMission() {
  return (
    <section className="relative min-h-screen py-24 md:py-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/newbg.jpg"
          alt="Youth at Worship"
          fill
          className="object-cover opacity-40"
        />
        {/* Deep overlay so text remains readable */}
        <div className="absolute inset-0 bg-[#0A0F0D]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4">
            Our DNA
          </h2>
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
            Raising a generation that loves Jesus, grows together, and lives on
            mission.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <div className="flex justify-between items-start mb-8">
                <pillar.icon className="w-8 h-8 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110" />
                <span className="font-mono text-white/20 text-xl">
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">
                {pillar.subtitle}
              </p>

              <p className="text-[#F4F0EA]/60 leading-relaxed font-light mb-8">
                {pillar.description}
              </p>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <span className="text-sm font-serif italic text-white/40">
                  {pillar.reference}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
