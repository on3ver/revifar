import Image from "next/image";
import { MapPin, MoveUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";
import { Button } from "@/components/ui/Button";

const heroImage = "https://images.pexels.com/photos/30991492/pexels-photo-30991492.jpeg?auto=compress&cs=tinysrgb&w=2200";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-white/8 pt-[76px]">
      <div className="ambient-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-y-0 right-0 w-[64%] max-lg:w-full">
        <div className="image-vignette relative h-full w-full">
          <Image src={heroImage} alt="Close de farol automotivo em acabamento premium" fill priority sizes="(max-width: 1024px) 100vw, 64vw" className="object-cover object-center" />
        </div>
      </div>
      <div className="container-shell relative z-10 flex min-h-[calc(100svh-76px)] items-end pb-14 pt-24 md:items-center md:pb-0">
        <div className="max-w-[860px]">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-amberSoft">
            <span className="h-px w-10 bg-amber" />
            Revitalização automotiva • Caldas Novas - GO
          </div>
          <h1 className="max-w-5xl text-balance text-[clamp(3.25rem,8vw,7.5rem)] font-extrabold uppercase leading-[.86] tracking-[-.065em]">
            Seu farol não precisa <span className="text-amber">parecer velho.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#c1c6cd] md:text-lg">Revitalização profissional para recuperar a aparência do conjunto óptico e devolver ao veículo uma apresentação muito mais bem cuidada.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={getWhatsAppUrl()} icon="whatsapp">Solicitar orçamento</Button>
            <a href="#resultados" className="inline-flex min-h-12 items-center gap-3 border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-[.08em] transition hover:border-white/40">
              Ver resultado <MoveUpRight size={17} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[.12em] text-muted">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-amber" /> Atendimento a domicílio</span>
            <span>Caldas Novas • GO</span>
            <span>Envie uma foto pelo WhatsApp</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-7 z-20 hidden gap-10 lg:flex">
        {["Surface", "Clarity", "Finish"].map((x, i) => <div key={x} className="text-right"><div className="text-[9px] uppercase tracking-[.2em] text-technical">0{i+1}</div><div className="mt-1 text-[11px] font-semibold uppercase tracking-[.16em]">{x}</div></div>)}
      </div>
    </section>
  );
}
