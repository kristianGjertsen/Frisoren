import { useEffect, useState } from 'react'
import Button from '../elements/Button'

const navItems = [
  { label: 'Hjem', href: '/' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Om oss', href: '/om-oss' },
]

function Header() {
  const [isCompact, setIsCompact] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setIsCompact((prev) => {
        if (scrollY > 64) {
          return true
        }
        if (scrollY < 32) {
          return false
        }
        return prev
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50 px-7 pt-2 sm:px-10 lg:px-14">
      <header
        className={`flex w-full items-center justify-between gap-4 rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface px-6 shadow-elevated transition-all duration-200 sm:px-7 ${
          isCompact ? 'py-2' : 'py-3'
        }`}
      >
        <div className="flex flex-col gap-1">
          <h1 className="font-['Playfair_Display'] text-[clamp(1.6rem,2.6vw,2.2rem)] tracking-[0.06em]">
            Frisør'n
          </h1>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            Dybdahls veg 3-5
          </span>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-4 text-[0.65rem] uppercase tracking-[0.14em] text-text md:flex lg:gap-6 lg:text-[0.8rem] lg:tracking-[0.18em]">
          {/*Loop gjennom navItems og lag lenker*/}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm hover:text-accent-dark lg:text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            href="/kontakt"
            className="shrink-0 px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base"
          >
            Bestill time
          </Button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Åpne meny"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center rounded-[var(--radius-pill)] border-[var(--border-width)] border-border bg-surface px-3 py-2 text-text transition hover:-translate-y-0.5 md:hidden"
          >
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className="h-0.5 w-full rounded-full bg-text" />
              <span className="h-0.5 w-full rounded-full bg-text" />
              <span className="h-0.5 w-full rounded-full bg-text" />
            </span>
          </button>
        </div>
      </header>
      {isMenuOpen ? (
        <div className="mt-3 w-full rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface px-6 py-5 shadow-elevated md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-text">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-accent-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}

export default Header
