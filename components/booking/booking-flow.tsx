'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  CalendarDays,
  Clock,
  Check,
  Download,
  CalendarPlus,
  Mail,
  ArrowRight,
  CircleCheckBig,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { bookingTypes, roleOptions, services } from '@/lib/apex-data'
import {
  timeSlots,
  formatDateLong,
  formatTime12,
  icsDataUri,
  googleCalendarUrl,
  teamMailto,
  type BookingDetails,
} from '@/lib/booking'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/15'

/** Build a rolling list of the next 24 selectable weekdays. */
function upcomingWeekdays(count: number) {
  const days: Date[] = []
  const cursor = new Date()
  cursor.setHours(0, 0, 0, 0)
  cursor.setDate(cursor.getDate() + 1)
  while (days.length < count) {
    const day = cursor.getDay()
    if (day !== 0 && day !== 6) days.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

export function BookingFlow() {
  const params = useSearchParams()
  const initialType = params.get('type')
  const initialService = params.get('service')

  const dates = useMemo(() => upcomingWeekdays(24), [])

  const [typeId, setTypeId] = useState(
    bookingTypes.find((t) => t.id === initialType)?.id ?? bookingTypes[0].id,
  )
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    role: '',
    service: services.find((s) => s.id === initialService)?.label ?? '',
    message: '',
  })
  const [submitted, setSubmitted] = useState<BookingDetails | null>(null)
  const [error, setError] = useState('')

  const selectedType = bookingTypes.find((t) => t.id === typeId) ?? bookingTypes[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !time) {
      setError('Please choose a date and a time slot.')
      return
    }
    setError('')
    const details: BookingDetails = {
      typeLabel: selectedType.label,
      date,
      time,
      fullName: form.fullName,
      organization: form.organization,
      email: form.email,
      phone: form.phone,
      role: form.role,
      service: form.service,
      message: form.message,
    }
    setSubmitted(details)
    // Notify the Apex team (opens the user's email client, no backend required).
    window.location.href = teamMailto(details)
  }

  if (submitted) {
    return <Confirmation details={submitted} onReset={() => setSubmitted(null)} />
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="flex flex-col gap-8">
        {/* Step 1 — appointment type */}
        <fieldset className="rounded-2xl border border-border bg-card p-6">
          <Legend step={1} title="What would you like to discuss?" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {bookingTypes.map((t) => {
              const active = t.id === typeId
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setTypeId(t.id)}
                  className={cn(
                    'flex flex-col items-start rounded-xl border p-4 text-left transition-colors',
                    active
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                      : 'border-border bg-background hover:border-primary/40',
                  )}
                  aria-pressed={active}
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">{t.label}</span>
                    {active && <Check className="size-4 text-primary" />}
                  </span>
                  <span className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t.description}
                  </span>
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Step 2 — date */}
        <fieldset className="rounded-2xl border border-border bg-card p-6">
          <Legend step={2} title="Pick a date" icon={<CalendarDays className="size-4" />} />
          <div className="mt-5 flex flex-wrap gap-2">
            {dates.map((d) => {
              const iso = toISODate(d)
              const active = iso === date
              return (
                <button
                  type="button"
                  key={iso}
                  onClick={() => setDate(iso)}
                  className={cn(
                    'flex min-w-16 flex-col items-center rounded-xl border px-3 py-2 transition-colors',
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground hover:border-primary/40',
                  )}
                  aria-pressed={active}
                >
                  <span
                    className={cn(
                      'text-[11px] font-medium uppercase',
                      active ? 'text-primary-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {d.toLocaleDateString('en-IN', { weekday: 'short' })}
                  </span>
                  <span className="text-lg font-bold leading-tight">{d.getDate()}</span>
                  <span
                    className={cn(
                      'text-[11px]',
                      active ? 'text-primary-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {d.toLocaleDateString('en-IN', { month: 'short' })}
                  </span>
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Step 3 — time */}
        <fieldset className="rounded-2xl border border-border bg-card p-6">
          <Legend step={3} title="Choose a time" icon={<Clock className="size-4" />} />
          <p className="mt-1 text-xs text-muted-foreground">
            All times shown in India Standard Time (IST). Each slot is 45 minutes.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {timeSlots.map((slot) => {
              const active = slot === time
              return (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={cn(
                    'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground hover:border-primary/40',
                  )}
                  aria-pressed={active}
                >
                  {formatTime12(slot)}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Step 4 — details */}
        <fieldset className="rounded-2xl border border-border bg-card p-6">
          <Legend step={4} title="Your details" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" htmlFor="b-name">
              <input
                id="b-name"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className={fieldClass}
                placeholder="Your name"
              />
            </Field>
            <Field label="Organization / School" htmlFor="b-org">
              <input
                id="b-org"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className={fieldClass}
                placeholder="Optional"
              />
            </Field>
            <Field label="Email" htmlFor="b-email">
              <input
                id="b-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Phone" htmlFor="b-phone">
              <input
                id="b-phone"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={fieldClass}
                placeholder="+91 ..."
              />
            </Field>
            <Field label="Your role" htmlFor="b-role">
              <select
                id="b-role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className={fieldClass}
              >
                <option value="">Select a role</option>
                {roleOptions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Service of interest" htmlFor="b-service">
              <select
                id="b-service"
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
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Anything we should know?" htmlFor="b-message">
              <textarea
                id="b-message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder="Share context about your goals, group size, or timelines."
              />
            </Field>
          </div>
        </fieldset>
      </div>

      {/* Summary rail */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Booking summary</h2>
          <dl className="mt-4 flex flex-col gap-3 text-sm">
            <SummaryRow label="Type" value={selectedType.label} />
            <SummaryRow label="Date" value={date ? formatDateLong(date) : 'Not selected'} muted={!date} />
            <SummaryRow label="Time" value={time ? `${formatTime12(time)} IST` : 'Not selected'} muted={!time} />
            <SummaryRow label="Name" value={form.fullName || 'Not provided'} muted={!form.fullName} />
          </dl>

          {error && (
            <p className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="mt-6 h-12 w-full bg-primary text-base text-primary-foreground hover:bg-primary/90"
          >
            Confirm Booking <ArrowRight />
          </Button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Your email app will open a pre-filled message addressed to Nafisa and copied to you.
        Press Send to deliver the booking request and keep a copy for your records.
      </p>
        </div>
      </aside>
    </form>
  )
}

function Confirmation({
  details,
  onReset,
}: {
  details: BookingDetails
  onReset: () => void
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CircleCheckBig className="size-7" />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-foreground">Your request is ready to send</h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ve opened a pre-filled email to our team to confirm your slot. Add the meeting to
          your calendar below so you don&apos;t forget.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-secondary p-5 text-left">
          <dl className="flex flex-col gap-2 text-sm">
            <SummaryRow label="Type" value={details.typeLabel} />
            <SummaryRow label="Date" value={formatDateLong(details.date)} />
            <SummaryRow label="Time" value={`${formatTime12(details.time)} IST`} />
            <SummaryRow label="Name" value={details.fullName} />
            {details.organization && <SummaryRow label="Organization" value={details.organization} />}
          </dl>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <a href={icsDataUri(details)} download="apex-training-meeting.ics">
                <Download /> Download invite (.ics)
              </a>
            }
          />
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/5"
            render={
              <a href={googleCalendarUrl(details)} target="_blank" rel="noopener noreferrer">
                <CalendarPlus /> Add to Google Calendar
              </a>
            }
          />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-border pt-6">
          <a
            href={teamMailto(details)}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="size-4" /> Didn&apos;t see the email? Resend to our team
          </a>
          <div className="flex gap-4 text-sm">
            <button type="button" onClick={onReset} className="text-muted-foreground hover:text-foreground">
              Make another booking
            </button>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Legend({
  step,
  title,
  icon,
}: {
  step: number
  title: string
  icon?: React.ReactNode
}) {
  return (
    <legend className="flex items-center gap-3">
      <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        {step}
      </span>
      <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
        {icon}
        {title}
      </span>
    </legend>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}

function SummaryRow({
  label,
  value,
  muted,
}: {
  label: string
  value: string
  muted?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={cn('text-right font-medium', muted ? 'text-muted-foreground' : 'text-foreground')}>
        {value}
      </dd>
    </div>
  )
}
