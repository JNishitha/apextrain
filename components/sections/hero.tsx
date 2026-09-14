import Link from 'next/link'
import { CalendarCheck, ClipboardCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid-teal opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            Teacher · Student · Corporate Training
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance text-foreground sm:text-5xl lg:text-6xl">
            Training that changes how people{' '}
            <span className="text-primary">think, feel, and grow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Apex Training delivers storytelling-based programs and institutional audits that build
            resilience, emotional intelligence, and stronger learning and working environments for
            schools, students, educators, and organizations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
              render={
                <Link href="/book">
                  <CalendarCheck /> Schedule a Conversation
                </Link>
              }
            />
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="h-12 border-primary/30 px-6 text-base text-primary hover:bg-primary/5"
              render={
                <Link href="/book?type=school-audit">
                  <ClipboardCheck /> Book a School Audit
                </Link>
              }
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ArrowRight className="size-4 text-turquoise" /> Storytelling-based, not lecture-based
            </span>
            <span className="flex items-center gap-2">
              <ArrowRight className="size-4 text-turquoise" /> Built around real challenges
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sessions/kashmir-harvard-group.jpeg"
              alt="Apex Training team with students and staff after a school program"
              className="aspect-4/3 w-full bg-secondary object-contain"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:block">
            <p className="text-2xl font-bold text-primary">100+ teachers</p>
            <p className="text-xs text-muted-foreground">&amp; 300+ students per program</p>
          </div>
        </div>
      </div>
    </section>
  )
}
