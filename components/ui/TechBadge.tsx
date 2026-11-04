export default function TechBadge({ name }: { name: string }) {
  return <span className="inline-flex items-center rounded-xs border border-[#8c6d46]/40 bg-[#e8dcc6] px-2.5 py-1 font-typewriter text-xs font-bold text-[#25160e]">{name}</span>;
}
