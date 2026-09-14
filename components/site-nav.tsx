'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ApexLogo } from '@/components/apex-logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/#top' },
  { label: 'What We Do', href: '/#what-we-do' },
  { label: 'Our Method', href: '/#method' },
  { label: 'Our Impact', href: '/#impact' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background/70 backdrop-blur-sm',
      )}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <ApexLogo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="border-primary/30 text-primary hover:bg-primary/5"
            render={<Link href="/book?type=school-audit">Book a School Audit</Link>}
          />
          <Button
            size="lg"
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            render={
              <Link href="/book">
                <CalendarCheck /> Schedule a Conversation
              </Link>
            }
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                className="w-full border-primary/30 text-primary"
                render={
                  <Link href="/book?type=school-audit" onClick={() => setOpen(false)}>
                    Book a School Audit
                  </Link>
                }
              />
              <Button
                size="lg"
                nativeButton={false}
                className="w-full bg-primary text-primary-foreground"
                render={
                  <Link href="/book" onClick={() => setOpen(false)}>
                    <CalendarCheck /> Schedule a Conversation
                  </Link>
                }
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
