import { methodSteps } from '@/lib/apex-data'

export function Method() {
  return (
    <section id="method" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Our method
            </p>
            <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
              We teach through storytelling, not lectures
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              People remember stories, not slides. Our approach turns concepts into relatable
              situations so learning becomes something people feel, and actually apply.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sessions/breathing-reset.jpeg"
                alt="Facilitator guiding participants through a practical reset exercise"
                className="aspect-4/3 w-full bg-secondary object-contain"
              />
            </div>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {methodSteps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-4xl font-bold text-turquoise/40">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
