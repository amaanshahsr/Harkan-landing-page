import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data'
import {
  IconArrowRight, IconRoute, IconWater, IconClock, IconWeight,
} from './icons'

const specIcon = {
  route: IconRoute,
  water: IconWater,
  clock: IconClock,
  weight: IconWeight,
}

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-soft sm:text-lg">{sub}</p>}
    </div>
  )
}

function AvailableCard({ p, flip }) {
  return (
    <article className="reveal group grid items-center gap-6 overflow-hidden rounded-3xl border border-line bg-surface/50 p-6 md:grid-cols-2 md:gap-10 md:p-8">
      {/* Image */}
      <div className={`relative ${flip ? 'md:order-2' : ''}`}>
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl opacity-50 blur-2xl"
          style={{ background: 'radial-gradient(circle at 50% 60%, rgba(231,81,37,.35), transparent 65%)' }}
        />
        <img
          src={p.image}
          alt={`${p.name} — ${p.category}`}
          loading="lazy"
          className="relative mx-auto w-full max-w-sm object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Details */}
      <div className={flip ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" /> Available now
          </span>
          <span className="text-xs uppercase tracking-wide text-mute">{p.category}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">{p.name}</h3>
        <p className="mt-3 max-w-md text-soft">{p.blurb}</p>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          {p.highlights.map((h) => {
            const Ico = specIcon[h.icon]
            return (
              <div key={h.label} className="rounded-xl border border-line bg-ink/60 p-3.5">
                <dt className="flex items-center gap-2 text-xs text-mute">
                  {Ico && <Ico className="h-4 w-4 text-brand" />} {h.label}
                </dt>
                <dd className="mt-1 font-display text-base font-semibold text-white">{h.value}</dd>
              </div>
            )
          })}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to={`/products/${p.id}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            View details
            <IconArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand/60"
          >
            Request a quote
          </a>
        </div>
        <p className="mt-3 text-xs text-mute">{p.for}</p>
      </div>
    </article>
  )
}

function ComingCard({ p }) {
  return (
    <article className="reveal group relative overflow-hidden rounded-3xl border border-line bg-surface/40 p-6">
      <span className="absolute right-5 top-5 rounded-full border border-line bg-ink/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-mute">
        Coming soon
      </span>
      <div className="relative flex h-44 items-center justify-center">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(231,81,37,.25), transparent 70%)' }}
        />
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="relative max-h-44 w-auto object-contain opacity-90 grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{p.name}</h3>
      <p className="mt-1.5 text-sm text-mute">{p.blurb}</p>
    </article>
  )
}

export default function Products() {
  const available = PRODUCTS.filter((p) => p.status === 'available')
  const coming = PRODUCTS.filter((p) => p.status === 'coming')

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Robots"
          title="A growing community of thinking machines"
          sub="Purpose-built autonomous scrubbers that clean intelligently, run for hours, and integrate quietly into your facility."
        />

        <div className="mt-14 space-y-8">
          {available.map((p, i) => (
            <AvailableCard key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {coming.map((p) => (
            <ComingCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
