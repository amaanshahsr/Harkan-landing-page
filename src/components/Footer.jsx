import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS, PRODUCTS } from '../data'
import { social } from './socialIcons'

const socials = [
  { key: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
  { key: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
  { key: 'twitter', href: 'https://twitter.com', label: 'X / Twitter' },
  { key: 'youtube', href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-30"
        style={{
          backgroundImage: 'url(/img/scenes/footer-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(180deg, transparent, #000)',
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src="/img/brand/harkan-logo.svg" alt="Harkan Robotics" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-mute">
              {COMPANY.tagline}. Autonomous cleaning robots, designed and built in
              {' '}{COMPANY.location}.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Glyph = social[s.key]
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-brand hover:text-brand"
                  >
                    <Glyph />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-mute transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    to={p.status === 'available' ? `/products/${p.id}` : '/#products'}
                    className="text-sm text-mute transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              <li><a href={COMPANY.phoneHref} className="transition-colors hover:text-white">{COMPANY.phone}</a></li>
              <li><a href={COMPANY.emailHref} className="break-all transition-colors hover:text-white">{COMPANY.email}</a></li>
              <li>{COMPANY.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-xs text-mute sm:flex-row">
          <p>© {2026} {COMPANY.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & built in Kochi
            <span className="text-brand">●</span>
            Made in India
          </p>
        </div>
      </div>
    </footer>
  )
}
