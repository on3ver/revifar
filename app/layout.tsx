import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revitalização de Faróis em Caldas Novas | REVIFAR",
  description:
    "Revitalização profissional de faróis em Caldas Novas - GO. Atendimento a domicílio e orçamento pelo WhatsApp.",
  openGraph: {
    title: "REVIFAR | Revitalização de Faróis em Caldas Novas",
    description:
      "Atendimento a domicílio e avaliação inicial pelo WhatsApp em Caldas Novas - GO.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
