import Link from "next/link";
import { socials } from "@/constants/svgs";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Logo + Description */}

        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold">Mustard Seed Teens</h2>

          <p className="mt-5 text-white/60 leading-8">
            Raising a generation that knows God, grows together, and lives with
            purpose.
          </p>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-14 mt-20">
          {/* Location */}

          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-[#C8A75A] mb-6">
              Location
            </h4>

            <p className="text-white/70 leading-8">
              Assemblies of God Church
              <br />
              Ikeja, Lagos
              <br />
              Nigeria
            </p>
          </div>

          {/* Contact */}

          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-[#C8A75A] mb-6">
              Contact
            </h4>

            <p className="text-white/70 leading-8">
              <a href="tel:+2348025299170">+234 802 529 9170</a>

              <br />

              <a href="tel:+2347034777979">+234 703 477 7979</a>
            </p>
          </div>

          {/* Social */}

          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-[#C8A75A] mb-6">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {socials.map(({ path, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="
                  h-12
                  w-12
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#C8A75A]
                  hover:text-black
                  hover:border-[#C8A75A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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

        {/* Bottom */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mustard Seed Teens.
          </p>

          <p className="text-white/30 text-sm">
            Built with ❤️ for the Kingdom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
