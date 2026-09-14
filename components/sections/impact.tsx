import { CheckCircle2 } from 'lucide-react'
import { engagements, stats } from '@/lib/apex-data'
import { StatCounter } from '@/components/stat-counter'

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 border-t border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Our impact</p>
          <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Trusted by schools to train at scale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We have delivered large-scale teacher and student programs and full institutional audits
            across a growing network of schools.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <StatCounter
                  value={stat.value}
                  suffix={'suffix' in stat ? stat.suffix : ''}
                  display={'display' in stat ? stat.display : undefined}
                />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-foreground">Selected engagements</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((item) => (
              <article
                key={item.school}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                {item.image ? (
                  <div className="flex aspect-video items-center justify-center overflow-hidden bg-secondary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.imageAlt ?? item.school}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-primary/5">
                    <span className="font-display text-2xl font-bold text-primary/30">
                      {item.school}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-base font-semibold text-foreground">{item.school}</h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {item.work.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-turquoise" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
