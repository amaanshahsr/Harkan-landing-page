import { INDUSTRIES } from '../data'
import { IconArrowRight } from './icons'

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Industries</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for the places that can&apos;t slow down
            </h2>
          </div>
          <p className="reveal text-soft md:pb-2">
            From bustling airport concourses to hospital corridors, our robots
            deliver consistent, around-the-clock cleanliness exactly where
            hygiene matters most.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className="reveal group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface-2 to-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/50"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="font-display text-5xl font-bold text-line transition-colors group-hover:text-brand/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{ind.name}</h3>
                <p className="mt-2 text-sm text-mute">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand/60"
          >
            Discuss your facility
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
