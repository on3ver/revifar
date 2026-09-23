import { processSteps } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="processo" className="section-space border-b border-white/8 bg-panel/50">
      <div className="container-shell">
        <Reveal>
          <SectionLabel>Processo</SectionLabel>
          <h2 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-extrabold uppercase leading-[.88] tracking-[-.06em]">Um processo.<br/>Várias etapas.<br/><span className="text-amber">Um resultado visível.</span></h2>
        </Reveal>
        <div className="mt-16 border-t border-white/10">
          {processSteps.map(([num, title, text], i) => (
            <Reveal key={title} delay={i*.04} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[100px_.8fr_1.2fr] md:items-center">
              <span className="font-mono text-xs tracking-[.18em] text-amber">{num}</span>
              <h3 className="text-2xl font-bold uppercase tracking-[-.03em] md:text-3xl">{title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-technical">As etapas são apresentadas como estrutura editorial da página e devem ser ajustadas caso o processo operacional real da REVIFAR utilize outra sequência.</p>
      </div>
    </section>
  );
}
