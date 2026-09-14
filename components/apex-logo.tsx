import Link from 'next/link'
import { cn } from '@/lib/utils'

export function ApexLogo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
        className,
      )}
      aria-label="Apex Training home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/apex-training-logo.jpeg"
        alt="Apex Training logo"
        className="h-16 w-auto sm:h-18"
      />
    </Link>
  )
}
