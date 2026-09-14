import Link from 'next/link'
import { ClipboardCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const auditPoints = [
  'Operational assessment of systems and processes',
  'Cultural assessment of environment and morale',
  'Instructional assessment of teaching and learning',
  'Actionable improvement pathways you can implement',
]

export function AuditCta() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                <ClipboardCheck className="size-4" /> Institutional Audits
              </span>
              <h2 className="mt-5 text-3xl font-bold text-balance text-foreground sm:text-4xl">
                See your school clearly, then move it forward
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Our audits help schools identify operational, cultural, and instructional gaps and
                develop practical improvement pathways.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {auditPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-turquoise" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                nativeButton={false}
                className="mt-8 h-12 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
                render={
                  <Link href="/book?type=school-audit">
                    <ClipboardCheck /> Book a School Audit
                  </Link>
                }
              />
            </div>
            <div className="relative flex min-h-64 items-center justify-center bg-secondary lg:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sessions/hidden-crisis-talk.jpeg"
                alt="Apex Training presenting institutional findings to school stakeholders"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
