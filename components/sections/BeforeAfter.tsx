"use client";
import Image from "next/image";
import { useId, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

const source = "https://images.pexels.com/photos/20220302/pexels-photo-20220302.jpeg?auto=compress&cs=tinysrgb&w=1800";

export function BeforeAfter() {
  const [value, setValue] = useState(50);
  const id = useId();
  return (
    <section id="resultados" className="section-space border-b border-white/8">
      <div className="container-shell">
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Comparativo visual</SectionLabel>
              <h2 className="max-w-xl text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold uppercase leading-[.9] tracking-[-.055em]">Não é trocar.<br/><span className="text-amber">É recuperar.</span></h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-2xl text-base leading-7 text-muted">Quando o desgaste é superficial, um processo bem executado pode devolver transparência visual e acabamento ao conjunto óptico. O comparador abaixo usa a mesma imagem nos dois lados para demonstrar a lógica de transformação, sem simular veículos diferentes.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.08} className="mt-12">
          <div className="relative aspect-[16/9] min-h-[420px] overflow-hidden border border-white/10 bg-steel max-md:aspect-[4/5] max-md:min-h-0">
            <Image src={source} alt="Farol automotivo usado em comparação visual" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-value}% 0 0)` }}>
              <Image src={source} alt="Simulação de farol com desgaste superficial" fill sizes="100vw" className="object-cover sepia-[.45] saturate-[.55] contrast-[.78] brightness-[.72] blur-[.3px]" />
              <div className="absolute inset-0 bg-[#8b6d2f]/12 mix-blend-color" />
            </div>
            <div className="absolute inset-y-0 z-20 w-px bg-white" style={{ left: `${value}%` }}>
              <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-ink/85 shadow-2xl backdrop-blur"><MoveHorizontal size={22} /></div>
            </div>
            <div className="absolute left-4 top-4 z-20 bg-ink/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] backdrop-blur">Antes</div>
            <div className="absolute right-4 top-4 z-20 bg-amber px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-ink">Depois</div>
            <label htmlFor={id} className="sr-only">Ajustar comparativo antes e depois</label>
            <input id={id} aria-label="Ajustar comparativo antes e depois" type="range" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0" />
            <div className="absolute bottom-5 left-5 z-20 text-[10px] uppercase tracking-[.18em] text-white/65">Arraste para comparar</div>
          </div>
          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="max-w-2xl text-xs leading-5 text-technical">Comparativo visual ilustrativo criado a partir do mesmo enquadramento. A condição e o resultado real variam conforme o estado de cada farol.</p>
            <Button href={getWhatsAppUrl("Olá! Vi o comparativo no site da REVIFAR e quero saber se meus faróis podem ser revitalizados.")} icon="whatsapp">Quero esse resultado</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
