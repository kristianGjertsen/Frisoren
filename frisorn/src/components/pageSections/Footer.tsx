function Footer() {
  return (
    <footer className="px-7 pb-6 sm:px-10 lg:px-14">
      <div className="w-full rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface shadow-elevated">
        <div className="flex flex-col gap-5 px-7 py-8 md:hidden">
          <div>
            <span className="block font-['Playfair_Display'] text-2xl tracking-[0.06em]">
              Frisor'n
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              Dybdahls vei 3-5
            </span>
          </div>
          <p className="text-sm text-muted">
            Se åpningstider og kontaktinformasjon samlet på én side.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border-[var(--border-width)] border-border bg-button px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-button-text hover:ring-2 hover:ring-accent"
          >
            Se åpningstider / Kontakt oss
          </a>
        </div>

        <div className="hidden gap-8 px-7 py-8 md:grid md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <div>
              <span className="block font-['Playfair_Display'] text-2xl tracking-[0.06em]">
                Frisor'n
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted">
                Dybdahls vei 3-5
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-['Playfair_Display'] text-lg">Kontakt</h3>
            <div className="flex items-center gap-2 text-muted">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.06a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54a2 2 0 0 1 1.72 2z" />
              </svg>
              <span>918 32 002</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a
                className="text-muted hover:text-accent-dark"
                href="mailto:dybdahlsvei@xn--frisrn-eya.no"
              >
                dybdahlsvei@xn--frisrn-eya.no
              </a>
            </div>
            <a
              className="flex items-center gap-2 text-muted hover:text-accent-dark"
              href="https://www.google.com/maps/place/Fris%C3%B8r%C2%B4n+AS/@63.413451,10.4086649,16z/data=!3m1!4b1!4m6!3m5!1s0x466d31c0b03da235:0x7ba615ff0f17f11c!8m2!3d63.4134489!4d10.4130853!16s%2Fg%2F12mkw7681?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Dybdahls vei 3-5
            </a>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="font-['Playfair_Display'] text-lg">Apningstider</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-muted">
                <p>Mandag: 09:00 - 17:00</p>
                <p>Tirsdag: 09:00 - 16:00</p>
                <p>Onsdag: 09:00 - 16:00</p>
                <p>Torsdag: 09:00 - 17:00</p>
              </div>
              <div className="space-y-1 text-muted">
                <p>Fredag: 09:00 - 16:00</p>
                <p>Lørdag: Etter avtale</p>
                <p>Søndag: Stengt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-border px-7 py-1 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <a
            href="https://kristiangjertsen.no"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-accent-dark"
          >
            Utviklet av kristiangjertsen.no
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
