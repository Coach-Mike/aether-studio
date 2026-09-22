export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="paper-page bg-paper text-ink" data-cursor="Approach">
      {children}
    </div>
  );
}
