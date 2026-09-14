import { audiences } from '@/lib/apex-data'
import { ApexBackdrop } from '@/components/apex-mark'

export function WhoWeWorkWith() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-primary py-20 text-primary-foreground lg:py-24">
      <ApexBackdrop className="absolute -right-10 top-0 h-full w-[420px] text-primary-foreground/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-turquoise uppercase">
            Who we work with
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Partners across education and industry
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
