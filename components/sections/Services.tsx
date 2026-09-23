import { ArrowDownRight, MessageCircle, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl } from "@/lib/config";

export function Services() {
  return (
    <section id="servico" className="section-space border-b border-white/8">
      <div className="container-shell">
        <Reveal>
          <SectionLabel>Serviços</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-extrabold uppercase leading-[.88] tracking-[-.06em]">Recupere a transparência.<br/><span className="text-amber">Preserve a presença.</span></h2>
            <p className="max-w-xl text-base leading-7 text-muted">Foco em revitalização estética do conjunto óptico, atendimento local e avaliação inicial pelo WhatsApp. Sem promessas artificiais, sem pacote genérico.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid border-y border-white/10 lg:grid-cols-3">
          <Reveal className="min-h-[360px] border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between"><span className="tech-label">Service / 01</span><Sparkles className="text-amber" /></div>
            <div className="mt-24 text-4xl font-extrabold uppercase tracking-[-.04em]">Revitalização<br/>de faróis</div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Recuperação estética da superfície para faróis que apresentam desgaste, opacidade ou amarelamento.</p>
          </Reveal>
          <Reveal delay={.05} className="min-h-[360px] border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between"><span className="tech-label">Service / 02</span><ArrowDownRight className="text-amber" /></div>
            <div className="mt-24 text-4xl font-extrabold uppercase tracking-[-.04em]">Lanternas</div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Tratamento estético de lanternas quando a condição da peça e o tipo de desgaste permitem intervenção.</p>
          </Reveal>
          <Reveal delay={.1} className="min-h-[360px] p-8">
            <div className="flex items-center justify-between"><span className="tech-label">Contact / 03</span><MessageCircle className="text-amber" /></div>
            <div className="mt-24 text-4xl font-extrabold uppercase tracking-[-.04em]">Avaliação<br/>pelo WhatsApp</div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Envie fotos do conjunto óptico para uma orientação inicial antes de combinar o atendimento.</p>
            <a className="mt-8 inline-block text-xs font-bold uppercase tracking-[.12em] text-amber underline decoration-amber/40 underline-offset-8" href={getWhatsAppUrl()}>Enviar foto agora</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
