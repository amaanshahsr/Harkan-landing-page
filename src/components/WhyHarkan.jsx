import { WHY } from '../data'
import {
  IconCpu, IconScan, IconHand, IconBattery, IconFactory, IconShield,
} from './icons'

const icons = {
  cpu: IconCpu,
  scan: IconScan,
  hand: IconHand,
  battery: IconBattery,
  factory: IconFactory,
  shield: IconShield,
}

export default function WhyHarkan() {
  return (
    <section id="why" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #e75125, transparent 60%)' }}
      />
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Why Harkan</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Engineering robots that earn their place
          </h2>
          <p className="mt-4 text-base text-soft sm:text-lg">
            We build machines that are visible, approachable, useful and human —
            designed to be trusted in the spaces people use every day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => {
            const Ico = icons[w.icon]
            return (
              <div
                key={w.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 transition-colors hover:border-brand/50"
                style={{ animationDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Ico className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{w.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
