'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactInfo, services } from '@/lib/apex-data'
import { enquiryMailto } from '@/lib/booking'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/15'

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = enquiryMailto(form)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
              Let&apos;s build something stronger together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Tell us about your school, students, or team and we&apos;ll recommend the right
              program. Prefer to pick a time? Schedule a conversation directly.
            </p>

            <ul className="mt-8 flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:text-primary">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <a href={`tel:${contactInfo.phone}`} className="text-foreground hover:text-primary">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span className="text-foreground">{contactInfo.location}</span>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-foreground">Ready to talk specifics?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a time and get a calendar invite instantly.
              </p>
              <Button
                size="lg"
                nativeButton={false}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                render={
                  <Link href="/book">
                    <CalendarCheck /> Schedule a Conversation
                  </Link>
                }
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-name" className="text-sm font-medium text-foreground">
                  Full name
                </label>
                <input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-org" className="text-sm font-medium text-foreground">
                  Organization / School
                </label>
                <input
                  id="c-org"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className={fieldClass}
                  placeholder="Optional"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="c-phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={fieldClass}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="c-service" className="text-sm font-medium text-foreground">
                Interested in
              </label>
              <select
                id="c-service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={fieldClass}
              >
                <option value="">Select a program</option>
                {services.map((s) => (
                  <option key={s.id} value={s.label}>
                    {s.label}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="c-message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="c-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder="Tell us a little about what you're looking for."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 h-12 w-full bg-primary text-base text-primary-foreground hover:bg-primary/90"
            >
              <Send /> Send Message
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              This opens your email app with the details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
