import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/constants/svgs";

const Footer = () => {
  return (
    <footer className="bg-[#0A0D0B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {/* TOP */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8BA68E]">
              Mustard Seed Teens
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
              Raising a generation
              <br />
              <span className="text-[#6E8B73]">with purpose.</span>
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-sm text-sm leading-7 text-white/45">
              A community of young people growing in Christ, discovering purpose
              and living out their faith together.
            </p>

            <Link
              href="/get-involved"
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-xs uppercase tracking-[0.2em]"
            >
              Get involved
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* DETAILS */}
        <div className="grid gap-12 py-14 md:grid-cols-3">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Location
            </p>

            <p className="text-sm leading-7 text-white/60">
              Assemblies of God Church
              <br />
              Ikeja, Lagos
              <br />
              Nigeria
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Contact
            </p>

            <div className="flex flex-col gap-2 text-sm text-white/60">
              <a
                href="tel:+2348025299170"
                className="transition hover:text-white"
              >
                +234 802 529 9170
              </a>

              <a
                href="tel:+2347034777979"
                className="transition hover:text-white"
              >
                +234 703 477 7979
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Follow us
            </p>

            <div className="flex gap-3">
              {socials.map(({ path, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social media ${i + 1}`}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 transition hover:border-[#6E8B73] hover:bg-[#31553C]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-[11px] text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Mustard Seed Teens. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
