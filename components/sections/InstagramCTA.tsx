import { Instagram } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";

export function InstagramCTA() {
  return (
    <section className="border-b border-white/8 py-20">
      <div className="container-shell grid gap-6 md:grid-cols-2">
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="group flex min-h-[260px] flex-col justify-between border border-white/10 bg-steel/45 p-8 transition hover:border-amber/50">
          <div className="flex items-center justify-between"><span className="tech-label">Social proof / real work</span><Instagram className="text-amber" /></div>
          <div><div className="text-4xl font-extrabold uppercase tracking-[-.04em] md:text-5xl">Veja o trabalho<br/>antes de decidir.</div><div className="mt-4 text-sm text-muted">Abrir {siteConfig.instagramLabel}</div></div>
        </a>
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="group flex min-h-[260px] flex-col justify-between border border-amber/35 bg-amber/[.06] p-8 transition hover:bg-amber/[.10]">
          <div className="flex items-center justify-between"><span className="tech-label text-amberSoft">Next step / WhatsApp</span><span className="text-amber">↗</span></div>
          <div><div className="text-4xl font-extrabold uppercase tracking-[-.04em] md:text-5xl">Envie a foto.<br/>Comece por aqui.</div><div className="mt-4 text-sm text-muted">Solicitar avaliação inicial</div></div>
        </a>
      </div>
    </section>
  );
}
