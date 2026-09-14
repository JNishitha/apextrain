const beliefs = [
  {
    title: 'Real challenges first',
    description:
      'We build every program around the actual emotional, academic, and workplace challenges people face.',
  },
  {
    title: 'Feeling drives change',
    description:
      'When learning is felt through story and experience, it turns into lasting behavior, not forgotten slides.',
  },
  {
    title: 'Practical and applied',
    description:
      'We focus on tools and habits people can use the very next day, in class, on campus, or at work.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">About Apex</p>
            <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl">
              We help people become more resilient, aware, and capable
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Apex Training is a training and development partner for schools, students, educators,
              and organizations. Through storytelling-based programs and honest institutional audits,
              we strengthen emotional intelligence, wellbeing, leadership, and everyday performance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Our work spans classrooms and boardrooms, but the goal is always the same: healthier
              environments and people equipped to handle real life.
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">Meet the partners</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      NB
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Nafisa Barodawala</h3>
                      <p className="mt-1 text-sm font-medium text-primary">Partner, Apex Training</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Nafisa brings together Apex Training&apos;s work across student development,
                    educator wellbeing, leadership, and institutional improvement—turning real
                    challenges into practical, people-centred learning experiences.
                  </p>
                </article>

                <article className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      SS
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Sita Srinivas</h3>
                      <p className="mt-1 text-sm font-medium text-primary">Story Ma&apos;am · Partner</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    An educator, storyteller, voice artist, and teacher trainer with nearly 20 years
                    of experience. Sita creates memorable learning through stories, voice, and
                    creative pedagogy, empowering children and educators with practical strategies.
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {beliefs.map((belief) => (
                <div key={belief.title} className="border-l-2 border-turquoise pl-4">
                  <h3 className="text-base font-semibold text-foreground">{belief.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <figure className="overflow-hidden rounded-2xl border border-border bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sessions/award-ies.jpeg"
                alt="Apex Training founder receiving the Distinguished Educator and Professional Trainer Award at the Indian Education Summit"
                className="aspect-4/3 w-full object-contain"
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground text-pretty">
                Recognized with the{' '}
                <span className="font-medium text-foreground">
                  Distinguished Educator &amp; Professional Trainer Award
                </span>{' '}
                at the Indian Education Summit (IES).
              </figcaption>
            </figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sessions/kashmir-harvard-group.jpeg"
              alt="Apex Training with students and staff after a school program"
              className="aspect-video w-full rounded-2xl border border-border bg-secondary object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
