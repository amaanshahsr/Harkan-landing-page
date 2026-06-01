import { useState } from 'react'
import { COMPANY, PRODUCTS, CONTACT_CONFIG } from '../data'
import { IconPhone, IconMail, IconPin, IconArrowRight, IconCheck } from './icons'

const PLACEHOLDER_KEY = 'YOUR_ACCESS_KEY_HERE'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Demo mode: no access key configured yet → don't hit the network.
    if (!CONTACT_CONFIG.web3formsKey || CONTACT_CONFIG.web3formsKey === PLACEHOLDER_KEY) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setError('')
    data.append('access_key', CONTACT_CONFIG.web3formsKey)
    data.append('subject', 'New enquiry from harkanrobotics.com')
    data.append('from_name', 'Harkan Robotics website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please check your connection and try again.')
    }
  }

  const submitting = status === 'submitting'

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #e75125, transparent 65%)' }}
      />
      <div className="container-x relative">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface/60">
          <div className="grid lg:grid-cols-5">
            {/* Left: pitch + contact details */}
            <div className="reveal relative lg:col-span-2 lg:border-r lg:border-line">
              <div className="flex h-full flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Get in touch</span>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                    Bring autonomy to your facility
                  </h2>
                  <p className="mt-4 text-soft">
                    Tell us about your space and what you need to keep clean.
                    We&apos;ll help you find the right machine — and arrange a demo.
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a href={COMPANY.phoneHref} className="group flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <IconPhone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-mute">Call us</span>
                        <span className="font-medium text-white">{COMPANY.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={COMPANY.emailHref} className="group flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <IconMail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-mute">Email</span>
                        <span className="font-medium break-all text-white">{COMPANY.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand">
                      <IconPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-mute">Studio</span>
                      <span className="font-medium text-white">{COMPANY.location}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal p-8 md:p-10 lg:col-span-3" style={{ animationDelay: '120ms' }}>
              {status === 'success' ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <IconCheck className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-soft">
                    {CONTACT_CONFIG.web3formsKey === PLACEHOLDER_KEY ? (
                      <>
                        Your message is ready. To start delivering enquiries by email,
                        add a free Web3Forms access key (see <code className="text-brand-bright">src/data.js</code>).
                        For now, reach us at{' '}
                        <a href={COMPANY.emailHref} className="text-brand-bright underline">{COMPANY.email}</a>.
                      </>
                    ) : (
                      <>We&apos;ve received your message and will be in touch shortly.</>
                    )}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-brand-bright underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required placeholder="Your name" />
                  <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                  <Field label="Phone" name="phone" type="tel" required placeholder="+91 …" />
                  <Field label="Company" name="company" placeholder="Company name" />

                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-sm font-medium text-soft">Interested in</span>
                    <select
                      name="product"
                      defaultValue=""
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand"
                    >
                      <option value="" disabled>Select a product</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="not-sure">Not sure yet — advise me</option>
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-sm font-medium text-soft">Message</span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your facility and cleaning needs…"
                      className="w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-mute/70 focus:border-brand"
                    />
                  </label>

                  {/* Honeypot anti-spam field (hidden from users) */}
                  <input type="checkbox" name="botcheck" tabIndex="-1" className="hidden" aria-hidden />

                  <label className="flex items-start gap-3 text-sm text-mute sm:col-span-2">
                    <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#e75125]" />
                    <span>I agree to be contacted by Harkan Robotics about my enquiry.</span>
                  </label>

                  {status === 'error' && (
                    <p className="sm:col-span-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-soft">
        {label}{required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-mute/70 focus:border-brand"
      />
    </label>
  )
}
