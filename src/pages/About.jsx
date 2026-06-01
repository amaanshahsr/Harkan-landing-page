import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { STORY, VALUES, COMPANY } from '../data'
import PageHero from '../components/PageHero'
import Process from '../components/Process'
import { IconCpu, IconScan, IconHand, IconFactory, IconArrowRight } from '../components/icons'

const icons = { cpu: IconCpu, scan: IconScan, hand: IconHand, factory: IconFactory }

export default function About() {
  useReveal()
  useEffect(() => {
    document.title = 'About — Harkan Robotics'
    return () => { document.title = 'Harkan Robotics — A Studio for Thinking Machines' }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A studio for thinking machines"
        sub={STORY.intro}
        crumb="About"
      />

      {/* Story + image */}
      <section className="py-16 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal overflow-hidden rounded-2xl border border-line">
            <img
              src="/img/scenes/about-tech.webp"
              alt="Harkan robotics engineering"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="reveal" style={{ animationDelay: '100ms' }}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Our story</h2>
            <p className="mt-4 text-soft sm:text-lg">{STORY.body}</p>
            <p className="mt-4 text-soft">
              Today we serve shopping malls, hospitals, factories, warehouses and
              airports — places where consistent cleanliness and hygiene simply
              cannot slip.
            </p>
            <Link
              to="/#products"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-bright"
            >
              See our robots
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-surface/30 py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">What guides us</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Our principles</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Ico = icons[v.icon]
              return (
                <div
                  key={v.title}
                  className="reveal rounded-2xl border border-line bg-ink p-6"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand">
                    {Ico && <Ico className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-mute">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">The team</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Founded in Kochi</h2>
            <p className="mt-4 text-soft">
              Three engineers who turned a shared question about intelligent
              machines into a company that builds them.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
            {COMPANY.founders.map((name, i) => (
              <div
                key={name}
                className="reveal rounded-2xl border border-line bg-surface/50 p-6 text-center"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 font-display text-2xl font-bold text-brand">
                  {name[0]}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{name}</h3>
                <p className="text-sm text-mute">Co-founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse the build process section */}
      <Process />
    </>
  )
}
