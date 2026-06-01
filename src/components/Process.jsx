import { PROCESS, COMPANY } from '../data'

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: intro + image */}
          <div>
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">How we build</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                From civic problem to working machine
              </h2>
              <p className="mt-4 text-base text-soft sm:text-lg">
                Founded in Kochi by {COMPANY.founders.slice(0, -1).join(', ')} and{' '}
                {COMPANY.founders.at(-1)}, Harkan turns hard real-world problems into
                robots that ship — designed, manufactured and assembled in-house.
              </p>
            </div>
            <div className="reveal mt-8 overflow-hidden rounded-2xl border border-line" style={{ animationDelay: '120ms' }}>
              <img
                src="/img/scenes/about-tech.webp"
                alt="Harkan engineering and robotics technology"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Right: steps */}
          <ol className="relative space-y-4">
            <span
              aria-hidden
              className="absolute left-7 top-4 bottom-4 hidden w-px bg-gradient-to-b from-brand/60 via-line to-transparent sm:block"
            />
            {PROCESS.map((s, i) => (
              <li
                key={s.step}
                className="reveal relative flex gap-5 rounded-2xl border border-line bg-surface/50 p-6"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-ink font-display text-sm font-bold text-brand">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
