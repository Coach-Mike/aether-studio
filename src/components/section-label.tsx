export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: string;
}) {
  return (
    <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-brass">
      <span className="tabular-nums text-smoke">{index}</span>
      <span className="h-px w-8 bg-brass/40" aria-hidden />
      {children}
    </p>
  );
}
