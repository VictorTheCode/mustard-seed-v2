import { HoverCard } from "@/components/ui/hover-card";
import { Reveal } from "@/components/ui/reveal";
import { programs } from "@/constants";

export default function ProgramsSection() {
  return (
    <section className="py-24 px-6">
      <div className="bg-[#C8A75A] mb-19 text-center mx-auto w-50 px-4 py-4 rounded-full text-sm font-light text-black uppercase tracking-wider  ">
        Our Project
      </div>
      <div className="max-w-6xl flex flex-col justify-start mx-auto ">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.35em] text-[--fg] mb-7">
            Welcome Home!
          </h2>

          <p className="text-gray-300 text-sm text-left w-4/5 md:w-1/3 mb-12">
            Dive into our community, teachings and events. Your journey of faith
            begins here.
          </p>
        </Reveal>
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {programs.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="w-[85vw] flex-shrink-0 snap-center md:w-auto"
            >
              <HoverCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
