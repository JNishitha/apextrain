import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/apex-data'

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Four ways we help people and institutions grow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every program is practical, interactive, and grounded in the real challenges people face
            in classrooms, campuses, and workplaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative h-56 overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.imageAlt}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-background/90 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
                      {service.short}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-foreground">{service.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex-1" />
                  <Button
                    variant="ghost"
                    nativeButton={false}
                    className="w-fit px-0 text-primary hover:bg-transparent hover:text-primary/80"
                    render={
                      <Link href={`/book?service=${service.id}`}>
                        {service.cta} <ArrowUpRight />
                      </Link>
                    }
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
