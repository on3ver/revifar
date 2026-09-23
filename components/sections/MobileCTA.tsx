"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/90 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"><a href={getWhatsAppUrl()} className="flex min-h-12 items-center justify-center gap-2 bg-amber px-5 text-sm font-extrabold uppercase tracking-[.08em] text-ink"><MessageCircle size={18}/> WhatsApp • Solicitar orçamento</a></div>;
}
