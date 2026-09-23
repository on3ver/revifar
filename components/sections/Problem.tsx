import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const image = "https://images.pexels.com/photos/17216294/pexels-photo-17216294.jpeg?auto=compress&cs=tinysrgb&w=1600";
const issues = ["Opacidade", "Amarelamento", "Desgaste superficial", "Perda de aparência"];

export function Problem() {
  return (
    <section className="section-space border-b border-white/8">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <Reveal className="relative min-h-[560px] overflow-hidden border border-white/10">
          <Image src={image} alt="Macro de superfície de farol automotivo" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 tech-label">DETAIL / SURFACE / UV</div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>O problema</SectionLabel>
            <h2 className="text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold uppercase leading-[.92] tracking-[-.05em]">O tempo aparece primeiro <span className="text-amber">nos faróis.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">Sol, chuva, contaminação e o desgaste natural da superfície podem deixar o conjunto óptico opaco e visualmente envelhecido.</p>
          </Reveal>
          <div className="mt-10 border-t border-white/10">
            {issues.map((issue, i) => (
              <Reveal key={issue} delay={i*.05} className="grid grid-cols-[70px_1fr] border-b border-white/10 py-5">
                <span className="text-xs font-semibold tracking-[.18em] text-technical">0{i+1}</span>
                <span className="text-lg font-semibold uppercase tracking-[-.02em]">{issue}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
