import type { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  href?: string
  onClick?:
  | MouseEventHandler<HTMLAnchorElement>
  | MouseEventHandler<HTMLButtonElement>
  className?: string
  children: ReactNode
}

// Standard class: kolliderende klasser i className vinner siden de kommer sist
const baseClass =
  'bg-button border-[var(--border-width)] border-border text-button-text inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-2.5 font-semibold '

const hoverAnimClass = "hover:ring-2 hover:ring-accent"
const fullClass = `${baseClass} ${hoverAnimClass}`
function Button({ href, onClick, className, children }: ButtonProps) {
  const classes = [fullClass, className].filter(Boolean).join(' ')


  if (href) {
    return (
      <a href={href} onClick={onClick as MouseEventHandler<HTMLAnchorElement>} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
