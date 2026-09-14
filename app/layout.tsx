import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apex Training | Teacher, Student & Corporate Training',
  description:
    'Apex Training delivers storytelling-based teacher, student and corporate training along with institutional audits designed to build resilience, emotional intelligence, and stronger learning and working environments.',
  generator: 'v0.app',
  keywords: [
    'teacher training',
    'student training',
    'corporate training',
    'emotional intelligence training',
    'stress management training',
    'school institutional audit',
    'resilience training',
    'soft skills training',
    'teacher wellbeing',
    'leadership training',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#006368',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
