export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const content = (
    <div className="flex items-center gap-12 pr-12">
      {items.map((it, i) => (
        <span key={i} className="font-display text-3xl md:text-5xl text-white whitespace-nowrap">
          {it}
          <span className="text-charcoal mx-8">•</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee py-6 border-y border-[#1A1A1A]">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {content}
        {content}
      </div>
    </div>
  );
}
