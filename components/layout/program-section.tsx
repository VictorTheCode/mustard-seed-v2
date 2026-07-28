import { HoverCard } from "@/components/ui/hover-card";
import { Reveal } from "@/components/ui/reveal";
import { programs } from "@/constants";

export default function ProgramsSection() {
  return (
    <section className="py-24 px-6 bg-[var(--bg)] text-[var(--fg)]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            How We Grow Together
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <HoverCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
