import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    number: "01",
    title: "Career Growth",
    description:
      "We help young people discover opportunities, develop useful skills and prepare for the future.",
    image: "/assets/activities/career.jpg",
  },
  {
    number: "02",
    title: "Pastoral Care",
    description:
      "A safe community where teenagers can talk, receive guidance, pray and grow together.",
    image: "/assets/activities/pastoral.jpg",
  },
  {
    number: "03",
    title: "Games & Sports",
    description:
      "From football to indoor games, we believe friendship and healthy competition are part of community.",
    image: "/assets/activities/sports.jpg",
  },
  {
    number: "04",
    title: "Worship",
    description:
      "We create room for young people to encounter God through worship, prayer and the Word.",
    image: "/assets/activities/worship.jpg",
  },
  {
    number: "05",
    title: "Outreach",
    description:
      "We take what we learn beyond the church walls by serving people and sharing the love of Christ.",
    image: "/assets/activities/outreach.jpg",
  },
  {
    number: "06",
    title: "Creative Skills",
    description:
      "Photography, graphics, programming, animation, sound engineering and other practical skills.",
    image: "/assets/activities/creative.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="bg-[#F4F3EF] text-[#111111]">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden bg-black text-white">
        <Image
          src="/assets/msc4.jpg"
          alt="Mustard Seed Teens activities"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 md:px-10 md:pb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Life at Mustard Seed
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Faith.
              <br />
              <span className="text-[#B7CFA8]">Friendship.</span>
              <br />
              Purpose.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              More than a Sunday gathering.
            </h2>

            <div className="md:pt-3">
              <p className="max-w-xl text-base leading-8 text-black/60 md:text-lg">
                There is always something happening at Mustard Seed Teens. From
                worship and discipleship to sports, creative skills, outreach
                and career development, we want every teenager to have somewhere
                to belong and something meaningful to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((activity, index) => (
              <article
                key={activity.number}
                className={`group overflow-hidden rounded-[1.5rem] bg-white ${
                  index === 0 || index === 3 ? "md:translate-y-12" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white/70">
                    {activity.number}
                  </span>

                  <h3 className="absolute bottom-5 left-5 text-3xl font-medium text-white md:text-4xl">
                    {activity.title}
                  </h3>
                </div>

                <div className="flex items-start justify-between gap-6 p-6">
                  <p className="max-w-lg text-sm leading-7 text-black/55">
                    {activity.description}
                  </p>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-black/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
