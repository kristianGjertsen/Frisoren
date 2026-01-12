import Box from '../../components/elements/Box'

function ContactPage() {
  return (
    <section>
      <Box className="w-full p-8 sm:p-10">
        <div className="space-y-3">
          <div>
            <p className="text-[0.9rem] uppercase tracking-[0.3em] text-accent-dark">
              Kontakt
            </p>
            <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
              Kontakt oss
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted">
            Ta kontakt for timebestilling eller spørsmål. Vi svarer raskt og
            finner riktig behandling for deg.
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:items-stretch">
          <div className="grid gap-5 md:grid-rows-2">
            <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5 text-base">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text">
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
                </span>
                <h3 className="font-['Playfair_Display'] text-lg text-text">
                  Telefon og e-post
                </h3>
              </div>
              <div className="mt-2 space-y-1 text-muted">
                <p>918 32 002</p>
                <a
                  className="inline-flex text-muted hover:text-accent-dark"
                  href="mailto:dybdahlsvei@xn--frisrn-eya.no"
                >
                  dybdahlsvei@xn--frisrn-eya.no
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5 text-base">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text">
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
                </span>
                <h3 className="font-['Playfair_Display'] text-lg text-text">Besøk oss</h3>
              </div>
              <div className="mt-2 space-y-1 text-muted">
                <p>Dybdahls veg 3-5</p>
                <p>7051 Trondheim</p>
              </div>
            </div>
          </div>

          <div className="h-full rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5 text-base">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text">
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </span>
              <h3 className="font-['Playfair_Display'] text-lg text-text">Åpningstider</h3>
            </div>
            <ul className="mt-2 space-y-1 text-muted">
              <li>Mandag: 09:00 - 17:00</li>
              <li>Tirsdag: 09:00 - 16:00</li>
              <li>Onsdag: 09:00 - 16:00</li>
              <li>Torsdag: 09:00 - 17:00</li>
              <li>Fredag: 09:00 - 16:00</li>
              <li>Lørdag: Etter avtale</li>
              <li>Søndag: Stengt</li>
            </ul>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default ContactPage
