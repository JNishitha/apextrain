import { cn } from '@/lib/utils'

/**
 * Decorative geometric motif echoing the Apex logo's ascending triangle.
 * Purely decorative — hidden from assistive tech.
 */
export function ApexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={cn('text-turquoise', className)}
    >
      <path d="M60 8 L112 100 L86 100 L60 54 L34 100 L8 100 Z" fill="currentColor" opacity="0.9" />
      <path d="M60 40 L88 100 L68 100 L60 84 L52 100 L32 100 Z" fill="var(--teal)" />
    </svg>
  )
}

/** Faint layered ascending triangles for section backgrounds. */
export function ApexBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={cn('text-turquoise', className)}
    >
      <path d="M200 20 L360 280 L280 280 L200 140 L120 280 L40 280 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.35" fill="none" />
      <path d="M200 80 L300 280 L250 280 L200 180 L150 280 L100 280 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="none" />
    </svg>
  )
}
