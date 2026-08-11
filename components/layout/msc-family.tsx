import Link from "next/link";
import Image from "next/image";

const Family = () => {
  return (
    <div>
      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#C8A75A] mb-4">
            Join Our Family
          </p>

          <h2 className="text-4xl font-medium leading-tight">
            We&apos;d love to meet you this Sunday.
          </h2>

          <p className="text-white/60 font-light mt-5 max-w-xl mx-auto leading-8">
            Whether you&apos;re visiting for the first time or looking for a
            community to grow in Christ, there&apos;s a place for you here.
          </p>

          <div className="relative w-full h-[300px] md:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden mt-12 mb-12 shadow-2xl group">
            <Image
              src="/assets/gallery1.jpg"
              alt="Mustard Seed Church Community"
              fill
              sizes="(max-w-1200px) 100vw, 1200px"
              className="object-cover"
            />
            {/* Elegant overlay to enhance readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            {/* Content at bottom left */}
            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-left max-w-lg md:max-w-xl z-10">
              <span className="text-[#C8A75A] text-xs font-semibold tracking-[0.25em] uppercase block mb-3">
                A Place to Belong
              </span>
              <blockquote className="text-white text-base md:text-lg font-light leading-relaxed italic">
                &ldquo;Every Sunday we gather not just as a congregation, but as
                a family. Real people, real friendships, and a real pursuit of
                Jesus.&rdquo;
              </blockquote>
            </div>
          </div>

          <Link
            href="/join"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#C8A75A] text-black font-medium hover:scale-105 transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Family;
