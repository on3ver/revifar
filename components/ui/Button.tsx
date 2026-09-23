import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export function Button({ href, children, icon = "arrow", className = "" }: { href: string; children: ReactNode; icon?: "arrow" | "whatsapp"; className?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border border-amber bg-amber px-6 py-3 text-sm font-bold uppercase tracking-[.08em] text-ink transition duration-300 hover:bg-amberHot focus:outline-none focus:ring-2 focus:ring-amberSoft ${className}`}
    >
      {icon === "whatsapp" && <MessageCircle size={18} strokeWidth={2.1} />}
      <span>{children}</span>
      {icon === "arrow" && <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
    </a>
  );
}
