import type { HTMLAttributes, ReactNode } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  className?: string
  children?: ReactNode
}

const baseClasses =
  'rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface p-6 shadow-elevated'

function Box({ className, children }: BoxProps) {
  const classes = [baseClasses, className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Box
