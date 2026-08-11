import { coordinators } from "@/constants";
import Image from "next/image";
import React from "react";

const Coordinators = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-[#C8A75A]">
            Meet The Team
          </p>

          <h2 className="mt-4 text-4xl">Our Coordinators</h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {coordinators.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative mx-auto h-36 w-36 md:h-48 md:w-48">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="mt-6">{person.name}</h3>

              <p className="text-[#C8A75A] text-sm mt-2">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
