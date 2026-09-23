export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-amber" />
      <span className="tech-label text-amberSoft">{children}</span>
    </div>
  );
}
