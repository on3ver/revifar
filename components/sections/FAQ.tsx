"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className="section-space border-b border-white/8">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div><SectionLabel>Dúvidas</SectionLabel><h2 className="text-[clamp(3rem,6vw,6rem)] font-extrabold uppercase leading-[.88] tracking-[-.06em]">Sem enrolação.<br/><span className="text-amber">Só o que importa.</span></h2></div>
        <div className="border-t border-white/10">
          {faqs.map((item, i) => {
            const active = open === i;
            return <div key={item.q} className="border-b border-white/10"><button className="flex w-full items-center justify-between gap-5 py-6 text-left" onClick={() => setOpen(active ? -1 : i)} aria-expanded={active}><span className="text-base font-semibold md:text-lg">{item.q}</span><Plus className={`shrink-0 transition-transform ${active ? "rotate-45 text-amber" : "text-muted"}`} /></button>{active && <p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{item.a}</p>}</div>
          })}
        </div>
      </div>
    </section>
  );
}
