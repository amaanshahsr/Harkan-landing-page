import { SECTORS } from '../data'

export default function Marquee() {
  const items = [...SECTORS, ...SECTORS] // duplicated for seamless loop
  return (
    <section className="border-y border-line bg-surface/30 py-6" aria-label="Where Harkan robots work">
      <p className="container-x mb-5 text-center text-xs uppercase tracking-[0.2em] text-mute">
        Trusted to keep demanding spaces spotless
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((s, i) => (
            <li key={i} className="flex shrink-0 items-center gap-10">
              <span className="font-display text-lg font-medium text-soft md:text-xl">{s}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand/70" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
