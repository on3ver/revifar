"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

const links = [
  ["Serviço", "#servico"],
  ["Resultados", "#resultados"],
  ["Processo", "#processo"],
  ["Atendimento", "#atendimento"],
  ["Dúvidas", "#duvidas"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="REVIFAR - início">
          <span className="grid h-9 w-9 place-items-center border border-amber/60 bg-amber/10 text-[11px] font-extrabold tracking-[.14em] text-amber">RV</span>
          <div>
            <div className="text-[15px] font-extrabold tracking-[.18em]">REVIFAR</div>
            <div className="text-[9px] uppercase tracking-[.22em] text-muted">Optical restoration</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs font-semibold uppercase tracking-[.1em] text-muted transition hover:text-paper">{label}</a>)}
        </nav>
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="hidden border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[.12em] transition hover:border-amber hover:text-amber lg:block">Orçamento</a>
        <button onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center border border-white/10 lg:hidden" aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-6 lg:hidden">
          <nav className="flex flex-col">
            {links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="border-b border-white/8 py-4 text-sm uppercase tracking-[.12em] text-muted">{label}</a>)}
            <a href={getWhatsAppUrl()} className="mt-5 bg-amber px-5 py-4 text-center text-sm font-bold uppercase tracking-[.08em] text-ink">Solicitar orçamento</a>
          </nav>
        </div>
      )}
    </header>
  );
}
