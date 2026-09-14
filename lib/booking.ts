import { contactInfo } from './apex-data'

export type BookingDetails = {
  typeLabel: string
  date: string // yyyy-mm-dd
  time: string // HH:mm (24h)
  fullName: string
  organization: string
  email: string
  phone: string
  role: string
  service: string
  message: string
}

const SLOT_MINUTES = 45

/** Available working-hour slots (IST). Adjustable by the admin. */
export const timeSlots = [
  '09:30',
  '10:30',
  '11:30',
  '12:30',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

export function formatDateLong(date: string) {
  const d = new Date(`${date}T00:00:00`)
  return d.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatTime12(time: string) {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

function toUtcStamp(date: string, time: string) {
  // Treat the chosen wall-clock time as IST (UTC+5:30) and convert to UTC.
  const [y, mo, d] = date.split('-').map(Number)
  const [h, mi] = time.split(':').map(Number)
  const istMs = Date.UTC(y, mo - 1, d, h, mi) - (5 * 60 + 30) * 60 * 1000
  const start = new Date(istMs)
  const end = new Date(istMs + SLOT_MINUTES * 60 * 1000)
  const fmt = (dt: Date) =>
    dt.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  return { start: fmt(start), end: fmt(end) }
}

export function eventTitle(b: BookingDetails) {
  return `Apex Training: ${b.typeLabel}`
}

export function eventDescription(b: BookingDetails) {
  return [
    `Appointment type: ${b.typeLabel}`,
    b.service ? `Service of interest: ${b.service}` : '',
    `Name: ${b.fullName}`,
    b.organization ? `Organization: ${b.organization}` : '',
    `Email: ${b.email}`,
    `Phone: ${b.phone}`,
    b.role ? `Role: ${b.role}` : '',
    b.message ? `Message: ${b.message}` : '',
    `Timezone: ${contactInfo.timezone} (IST)`,
  ]
    .filter(Boolean)
    .join('\\n')
}

/** Build a downloadable .ics calendar invite. */
export function buildIcs(b: BookingDetails) {
  const { start, end } = toUtcStamp(b.date, b.time)
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@apextraining`
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Apex Training//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${eventTitle(b)}`,
    `DESCRIPTION:${eventDescription(b)}`,
    `ORGANIZER;CN=Apex Training:mailto:${contactInfo.email}`,
    `ATTENDEE;CN=${b.fullName};RSVP=TRUE:mailto:${b.email}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.join('\r\n')
}

export function icsDataUri(b: BookingDetails) {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs(b))}`
}

/** Google Calendar "add event" template link. */
export function googleCalendarUrl(b: BookingDetails) {
  const { start, end } = toUtcStamp(b.date, b.time)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: eventTitle(b),
    dates: `${start}/${end}`,
    details: eventDescription(b).replace(/\\n/g, '\n'),
    ctz: contactInfo.timezone,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

/** Pre-filled email to the Apex team (no backend required). */
export function teamMailto(b: BookingDetails) {
  const subject = `New Apex Training Booking: ${b.fullName}`
  const body = [
    `New booking request via the website.`,
    ``,
    `Appointment type: ${b.typeLabel}`,
    `Date: ${formatDateLong(b.date)}`,
    `Time: ${formatTime12(b.time)} (IST)`,
    ``,
    `Name: ${b.fullName}`,
    `Organization: ${b.organization || 'Not provided'}`,
    `Email: ${b.email}`,
    `Phone: ${b.phone}`,
    `Role: ${b.role || 'Not provided'}`,
    `Service of interest: ${b.service || 'Not provided'}`,
    `Message: ${b.message || 'Not provided'}`,
  ].join('\n')
  // The visitor's email is added as CC so their mail client can send the same
  // booking request to Nafisa and back to the person who submitted it.
  const cc = b.email ? `&cc=${encodeURIComponent(b.email)}` : ''
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}${cc}`
}

export function enquiryMailto(fields: {
  name: string
  organization: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const subject = `Website Enquiry: ${fields.name}`
  const body = [
    `Name: ${fields.name}`,
    `Organization: ${fields.organization || 'Not provided'}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || 'Not provided'}`,
    `Service interested in: ${fields.service || 'Not provided'}`,
    ``,
    `Message:`,
    fields.message || 'Not provided',
  ].join('\n')
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}
