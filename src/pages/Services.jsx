import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SERVICES } from '../data'
import PageHero from '../components/PageHero'
import {
  IconWater, IconCpu, IconShield, IconScan, IconHand, IconFactory, IconArrowRight,
} from '../components/icons'

const icons = {
  water: IconWater,
  cpu: IconCpu,
  shield: IconShield,
  scan: IconScan,
  hand: IconHand,
  factory: IconFactory,
}

export default function Services() {
  useReveal()
  useEffect(() => {
    document.title = 'Services — Harkan Robotics'
    return () => { document.title = 'Harkan Robotics — A Studio for Thinking Machines' }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From spotless floors to full automation"
        sub="We help facilities of every size adopt intelligent robotics — starting with autonomous cleaning and extending to custom systems built around how you work."
        crumb="Services"
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Ico = icons[s.icon]
              return (
                <div
                  key={s.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 transition-colors hover:border-brand/50"
                  style={{ animationDelay: `${(i % 3) * 80}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {Ico && <Ico className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{s.body}</p>
                </div>
              )
            })}
          </div>

          {/* CTA band */}
          <div className="reveal mt-12 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-surface p-8 text-center md:p-12">
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Have a process you&apos;d like to automate?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-soft">
              Tell us about your facility and operations — we&apos;ll recommend the
              right mix of robots and software, or design something bespoke.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-bright"
            >
              Start a conversation
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
