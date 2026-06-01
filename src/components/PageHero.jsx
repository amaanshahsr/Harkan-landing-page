import { Link } from 'react-router-dom'

/** Consistent page banner used at the top of sub-pages. */
export default function PageHero({ eyebrow, title, sub, crumb }) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[680px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #e75125 0%, transparent 60%)' }}
      />
      <div className="container-x relative">
        <nav className="reveal flex items-center justify-center gap-2 text-sm text-mute">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-soft">{crumb || title}</span>
        </nav>
        <div className="mx-auto mt-6 max-w-3xl text-center">
          {eyebrow && (
            <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</span>
          )}
          <h1 className="reveal mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: '60ms' }}>
            {title}
          </h1>
          {sub && (
            <p className="reveal mx-auto mt-5 max-w-2xl text-base text-soft sm:text-lg" style={{ animationDelay: '120ms' }}>
              {sub}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
