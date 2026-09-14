import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { WhatWeDo } from '@/components/sections/what-we-do'
import { WhoWeWorkWith } from '@/components/sections/who-we-work-with'
import { Method } from '@/components/sections/method'
import { Impact } from '@/components/sections/impact'
import { AuditCta } from '@/components/sections/audit-cta'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <WhoWeWorkWith />
        <Method />
        <Impact />
        <AuditCta />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
