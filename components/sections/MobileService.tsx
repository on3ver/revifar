import { MapPin, Navigation } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

export function MobileService() {
  return (
    <section id="atendimento" className="section-space border-b border-white/8">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <Reveal>
          <SectionLabel>Atendimento a domicílio</SectionLabel>
          <h2 className="text-[clamp(3.2rem,7vw,7.2rem)] font-extrabold uppercase leading-[.86] tracking-[-.065em]">Nós vamos<br/><span className="text-amber">até você.</span></h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted">Atendimento em Caldas Novas - GO com a praticidade de realizar o serviço no local combinado.</p>
          <div className="mt-8"><Button href={getWhatsAppUrl("Olá! Gostaria de consultar o atendimento a domicílio da REVIFAR em Caldas Novas.")} icon="whatsapp">Consultar atendimento</Button></div>
        </Reveal>
        <Reveal delay={.08}>
          <div className="relative min-h-[500px] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_40%,rgba(240,163,26,.15),transparent_32%),linear-gradient(135deg,#101419,#07090c)] p-8">
            <div className="ambient-grid absolute inset-0 opacity-60" />
            <div className="relative flex h-full min-h-[430px] flex-col justify-between">
              <div className="flex items-center justify-between"><span className="tech-label">Service area / GO</span><Navigation className="text-amber" /></div>
              <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border border-amber/30 bg-amber/5 shadow-amber">
                <span className="absolute h-32 w-32 rounded-full border border-white/10" />
                <span className="absolute h-20 w-20 rounded-full border border-white/10" />
                <MapPin size={42} className="text-amber" />
              </div>
              <div>
                <div className="text-5xl font-extrabold uppercase tracking-[-.05em]">Caldas Novas</div>
                <div className="mt-2 text-sm uppercase tracking-[.24em] text-muted">Goiás • Brasil</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
