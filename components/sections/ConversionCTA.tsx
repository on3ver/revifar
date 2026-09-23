import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

const image = "https://images.pexels.com/photos/30991492/pexels-photo-30991492.jpeg?auto=compress&cs=tinysrgb&w=1800";

export function ConversionCTA() {
  return (
    <section className="relative overflow-hidden border-b border-white/8 py-24 md:py-36">
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]"><Image src={image} alt="Farol automotivo restaurado" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover opacity-55" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" /></div>
      <div className="container-shell relative z-10">
        <div className="max-w-4xl">
          <div className="tech-label mb-5 text-amberSoft">CONTACT / QUICK EVALUATION</div>
          <h2 className="text-[clamp(3rem,6.5vw,7rem)] font-extrabold uppercase leading-[.86] tracking-[-.06em]">Se o farol do seu carro está assim, <span className="text-amber">mande uma foto.</span></h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#c1c6cd]">Você não precisa saber exatamente qual procedimento precisa. Envie imagens do farol pelo WhatsApp para solicitar uma avaliação inicial.</p>
          <div className="mt-9"><Button href={getWhatsAppUrl()} icon="whatsapp">Enviar foto pelo WhatsApp</Button></div>
          <div className="mt-5 text-xs uppercase tracking-[.14em] text-muted">Atendimento em Caldas Novas - GO</div>
        </div>
      </div>
    </section>
  );
}
