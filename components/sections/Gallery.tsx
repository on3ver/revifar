import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  ["https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=1600", "PROCESSO", "Farol durante processo de detalhamento"],
  ["https://images.pexels.com/photos/30991492/pexels-photo-30991492.jpeg?auto=compress&cs=tinysrgb&w=1600", "DETALHE", "Close de farol moderno"],
  ["https://images.pexels.com/photos/20220302/pexels-photo-20220302.jpeg?auto=compress&cs=tinysrgb&w=1600", "RESULTADO", "Farol automotivo com acabamento brilhante"],
  ["https://images.pexels.com/photos/17216294/pexels-photo-17216294.jpeg?auto=compress&cs=tinysrgb&w=1600", "SUPERFÍCIE", "Superfície de farol em close"],
] as const;

export function Gallery() {
  return (
    <section className="section-space border-b border-white/8">
      <div className="container-shell">
        <Reveal><SectionLabel>Prova visual</SectionLabel><h2 className="text-[clamp(3rem,6vw,6.2rem)] font-extrabold uppercase leading-[.88] tracking-[-.06em]">Resultado que<br/><span className="text-amber">você enxerga.</span></h2></Reveal>
        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[320px]">
          {items.map(([src, label, alt], i) => (
            <Reveal key={src} delay={i*.04} className={`${i === 0 ? "md:col-span-7 md:row-span-2" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-12"} group relative overflow-hidden border border-white/10`}>
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-ink/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] backdrop-blur">{label}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-technical">Imagens de apoio editorial/licenciadas para uso livre; não são fotos do perfil apresentado como referência.</p>
      </div>
    </section>
  );
}
