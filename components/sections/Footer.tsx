import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#050608] pb-24 pt-16 md:pb-8">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div><div className="text-3xl font-extrabold tracking-[.16em]">REVIFAR</div><div className="mt-4 max-w-md text-sm leading-6 text-muted">Revitalização de Faróis<br/>Caldas Novas - GO<br/>Atendimento a domicílio</div></div>
          <div className="flex gap-6 text-xs font-semibold uppercase tracking-[.14em] text-muted"><a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-paper">Instagram</a><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-paper">WhatsApp</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[11px] uppercase tracking-[.14em] text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© REVIFAR</span>
          <span>Página de Exemplo</span>
          <span>Desenvolvida por <a href={siteConfig.developerInstagram} target="_blank" rel="noreferrer" className="text-white/70 hover:text-amber">{siteConfig.developerLabel}</a></span>
        </div>
      </div>
    </footer>
  );
}
