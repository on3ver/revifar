import Image from "next/image";

const image = "https://images.pexels.com/photos/19343473/pexels-photo-19343473.jpeg?auto=compress&cs=tinysrgb&w=2200";

export function Immersive() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden border-b border-white/8">
      <Image src={image} alt="Farol automotivo em close dramático" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/15" />
      <div className="container-shell relative flex min-h-[86svh] items-end pb-16 md:pb-24">
        <div>
          <div className="tech-label mb-4 text-amberSoft">RESULT / CLEAR / DETAIL 001</div>
          <h2 className="text-[clamp(3.6rem,9vw,9.5rem)] font-extrabold uppercase leading-[.82] tracking-[-.07em]">Transparência<br/><span className="text-amber">muda tudo.</span></h2>
        </div>
      </div>
    </section>
  );
}
