import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { PRODUCTS, COMPANY } from '../data'
import { useReveal } from '../hooks/useReveal'
import {
  IconArrowRight, IconCheck, IconPhone, IconRoute, IconWater, IconClock, IconWeight,
} from '../components/icons'

const specIcon = { route: IconRoute, water: IconWater, clock: IconClock, weight: IconWeight }

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id)
  useReveal()

  useEffect(() => {
    if (product) document.title = `${product.name} — Harkan Robotics`
    return () => { document.title = 'Harkan Robotics — A Studio for Thinking Machines' }
  }, [product])

  if (!product) return <Navigate to="/" replace />

  const others = PRODUCTS.filter((p) => p.id !== product.id && p.status === 'available')

  return (
    <article className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #e75125, transparent 60%)' }}
        />
        <div className="container-x relative">
          <nav className="reveal mb-8 flex items-center gap-2 text-sm text-mute">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/#products" className="transition-colors hover:text-white">Products</Link>
            <span>/</span>
            <span className="text-soft">{product.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal relative order-2 lg:order-1">
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl opacity-60 blur-3xl"
                style={{ background: 'radial-gradient(circle at 50% 60%, rgba(231,81,37,.35), transparent 65%)' }}
              />
              <img
                src={product.image}
                alt={`${product.name} — ${product.category}`}
                className="relative mx-auto w-full max-w-md object-contain"
                fetchPriority="high"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="reveal inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" /> {product.category}
              </span>
              <h1 className="reveal mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl" style={{ animationDelay: '60ms' }}>
                {product.name}
              </h1>
              <p className="reveal mt-4 max-w-lg text-soft sm:text-lg" style={{ animationDelay: '120ms' }}>
                {product.overview}
              </p>

              <dl className="reveal mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: '180ms' }}>
                {product.highlights.map((h) => {
                  const Ico = specIcon[h.icon]
                  return (
                    <div key={h.label} className="rounded-xl border border-line bg-surface/60 p-3">
                      {Ico && <Ico className="h-4 w-4 text-brand" />}
                      <dd className="mt-2 font-display text-sm font-semibold text-white">{h.value}</dd>
                      <dt className="text-[11px] text-mute">{h.label}</dt>
                    </div>
                  )
                })}
              </dl>

              <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-bright"
                >
                  Request a quote
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand/60"
                >
                  <IconPhone className="h-4 w-4" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Technical specifications</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Engineered down to the detail
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {product.specGroups.map((g) => (
              <div key={g.group} className="reveal rounded-2xl border border-line bg-surface/50 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{g.group}</h3>
                <dl className="mt-4 divide-y divide-line">
                  {g.rows.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-4 py-2.5">
                      <dt className="text-sm text-mute">{k}</dt>
                      <dd className="text-right text-sm font-medium text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + applications */}
      <section className="border-y border-line bg-surface/30 py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Key capabilities</h2>
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-soft">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ animationDelay: '120ms' }}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Built for</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full border border-line bg-ink px-4 py-2 text-sm text-soft">
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-ink p-6">
              <p className="text-soft">
                Not sure which machine fits your space? Tell us about your
                facility and we&apos;ll recommend the right configuration.
              </p>
              <Link
                to="/#contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-bright"
              >
                Talk to our team
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other products */}
      {others.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="container-x">
            <h2 className="reveal font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Explore other machines
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="reveal group flex items-center gap-5 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:-translate-y-0.5 hover:border-brand/50"
                >
                  <img src={p.image} alt={p.name} className="h-24 w-24 shrink-0 object-contain" loading="lazy" />
                  <div>
                    <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-mute">{p.category}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright">
                      View details
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
