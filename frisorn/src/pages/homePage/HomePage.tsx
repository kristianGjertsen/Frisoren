import Box from '../../components/elements/Box'
import Button from '../../components/elements/Button'
import AboutUsInfo from '../aboutUs/AboutInfoBox'

import entryImage from '../../assets/SaloonImages/inngang.jpg'



function HomePage() {
    return (
        <>
            <section>
                <Box className="w-full bg-hero p-8 sm:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                                    Velkommen til oss!
                                </p>
                                <h1 className="mt-3 font-['Playfair_Display'] text-3xl text-accent sm:text-4xl lg:text-5xl">
                                    Personlig frisør
                                </h1>
                                <h1 className="mt-3 font-['Playfair_Display'] pl-20 text-3xl text-accent-dark sm:text-4xl lg:text-5xl">
                                    Presist håndtverkt
                                </h1>
                                <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">
                                    Vi er tilbake i nyoppusset lokale i Dybdahls vei 3-5. Bestill
                                    time, len deg tilbake og la oss ta oss av stilen.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button href="/kontakt">
                                    Bestill time
                                </Button>
                                <Button href="/produkter">
                                    Se produkter
                                </Button>
                            </div>
                        </div>
                        <div className="w-full">
                            <img
                                src={entryImage}
                                alt="bilde_av_inngang"
                                className="rounded-[var(--radius-image)] border-[var(--border-width)] border-border"
                            />
                        </div>
                    </div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
                        <div className="rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5">
                            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent-dark">
                                Åpningstider
                            </p>
                            <div className="mt-3 grid gap-1 text-xs font-semibold text-text sm:grid-cols-2 sm:text-sm">
                                <p>Mandag: 09:00 - 17:00</p>
                                <p>Tirsdag: 09:00 - 16:00</p>
                                <p>Onsdag: 09:00 - 16:00</p>
                                <p>Torsdag: 09:00 - 17:00</p>
                                <p>Fredag: 09:00 - 16:00</p>
                                <p>Lørdag: Etter avtale</p>
                                <p>Søndag: Stengt</p>
                            </div>
                        </div>
                        <div className="rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5">
                            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent-dark">
                                Telefon
                            </p>
                            <p className="mt-3 text-lg font-semibold text-text">918 32 002</p>
                        </div>
                        <div className="rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-5">
                            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent-dark">
                                Adresse
                            </p>
                            <p className="mt-3 text-lg font-semibold text-text">Dybdahls vei 3-5</p>
                            <p className="text-sm text-muted">7051 Trondheim</p>
                        </div>
                    </div>
                </Box>
            </section >

            <AboutUsInfo />


        </>
    )
}

export default HomePage
