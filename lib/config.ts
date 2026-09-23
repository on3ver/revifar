export const siteConfig = {
  businessName: "REVIFAR",
  city: "Caldas Novas",
  state: "GO",
  serviceArea: "Caldas Novas - GO",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5564999999999",
  instagram: "https://instagram.com/revifar_cn.go",
  instagramLabel: "@revifar_cn.go",
  developerInstagram: "https://instagram.com/_omaxdigital",
  developerLabel: "@_omaxdigital",
  businessHours: "Atendimento sob consulta",
  defaultWhatsappMessage:
    "Olá! Vi o site da REVIFAR e gostaria de solicitar uma avaliação dos faróis do meu veículo."
};

export function getWhatsAppUrl(message = siteConfig.defaultWhatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
