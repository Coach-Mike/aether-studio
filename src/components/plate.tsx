import Image from "next/image";

export function Plate({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  cursor,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  cursor?: string;
}) {
  return (
    <figure className={`group ${className}`} data-cursor={cursor ?? caption ?? alt}>
      <div className="relative aspect-[3/2] overflow-hidden bg-field">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-smoke">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
