import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { BookingFlow } from '@/components/booking/booking-flow'

export const metadata: Metadata = {
  title: 'Book a Conversation | Apex Training',
  description:
    'Schedule a training consultation or school audit discussion with Apex Training. Pick a time and get a calendar invite instantly, no account required.',
}

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border bg-secondary">
          <div className="absolute inset-0 bg-grid-teal opacity-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Schedule a conversation
            </span>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s find the right program for your people
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Choose what you&apos;d like to discuss, pick a time that works, and share a few
              details. You&apos;ll get a calendar invite instantly and we&apos;ll confirm by email.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="text-muted-foreground">Loading booking…</div>}>
              <BookingFlow />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
