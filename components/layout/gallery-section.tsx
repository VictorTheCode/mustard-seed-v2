import { Reveal } from "@/components/ui/reveal";
import { HoverCard } from "@/components/ui/hover-card";
import { photos } from "@/constants";

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-[var(--accent-soft)]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Life at Mustard Seed
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <HoverCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
