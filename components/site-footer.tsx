import Link from 'next/link'
import { Mail, Phone, MapPin, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ApexLogo } from '@/components/apex-logo'
import { contactInfo, services } from '@/lib/apex-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <ApexLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Storytelling-based training and institutional audits that build stronger people,
              schools, and organizations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Programs</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/#service-${s.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/#impact" className="text-muted-foreground hover:text-primary">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#method" className="text-muted-foreground hover:text-primary">
                  Our Method
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
            <Button
              size="lg"
              nativeButton={false}
              className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90"
              render={
                <Link href="/book">
                  <CalendarCheck /> Schedule a Conversation
                </Link>
              }
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Apex Training. All rights reserved.</p>
          <p>Contact details shown are placeholders until confirmed.</p>
        </div>
      </div>
    </footer>
  )
}
