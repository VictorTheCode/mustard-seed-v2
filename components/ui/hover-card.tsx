// components/ui/hover-card.tsx
import Image from "next/image";
import Link from "next/link";

export function HoverCard({
  href,
  image,
  title,
  description,
}: {
  href: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-3/4 overflow-hidden no-scrollbar"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
        <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
