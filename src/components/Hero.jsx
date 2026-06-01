import { COMPANY, STATS } from '../data'
import { IconArrowRight } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #e75125 0%, transparent 60%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-soft">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            {COMPANY.tagline}
          </span>

          <h1 className="reveal mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: '60ms' }}>
            Robots that <span className="text-gradient">think,</span>
            <br className="hidden sm:block" /> clean and assist.
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-soft sm:text-lg" style={{ animationDelay: '120ms' }}>
            Harkan Robotics designs and manufactures autonomous cleaning systems
            that work seamlessly alongside people — engineered to make everyday
            spaces cleaner, smarter and effortlessly maintained.
          </p>

          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '180ms' }}>
            <a
              href="#products"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:bg-brand-bright hover:shadow-brand/40 sm:w-auto"
            >
              Explore our robots
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand/60 sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="reveal relative mx-auto mt-14 max-w-5xl" style={{ animationDelay: '240ms' }}>
          <div className="absolute -inset-px rounded-[1.6rem] bg-gradient-to-b from-brand/40 to-transparent opacity-60 blur-sm" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-line shadow-2xl shadow-black/60">
            <img
              src="/img/scenes/hero-home.webp"
              alt="Harkan autonomous scrubber operating in a modern transit hub"
              className="aspect-[16/9] w-full object-cover"
              width="1200"
              height="675"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
          </div>
        </div>

        {/* Stats strip */}
        <dl className="reveal mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4" style={{ animationDelay: '300ms' }}>
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink px-5 py-7 text-center">
              <dd className="font-display text-3xl font-bold text-white md:text-4xl">
                {s.value}
                {s.unit && <span className="ml-1 text-lg text-brand">{s.unit}</span>}
              </dd>
              <dt className="mt-2 text-xs text-mute md:text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
