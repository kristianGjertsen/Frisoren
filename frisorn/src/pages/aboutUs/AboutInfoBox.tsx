import inngang2 from '../../assets/SaloonImages/inngang_2.jpg'
import galleri5 from '../../assets/SaloonImages/galleri_bilde_5.jpg'
import galleri6 from '../../assets/SaloonImages/galleri_bilde_6.jpg'
import galleri7 from '../../assets/SaloonImages/galleri_bilde_7.jpg'

import Button from '../../components/elements/Button'
import Box from '../../components/elements/Box'

const aboutImages = [
    { src: inngang2, alt: 'Salong inngang' },
    { src: galleri5, alt: 'Salong bilde 1' },
    { src: galleri6, alt: 'Salong bilde 2' },
    { src: galleri7, alt: 'Salong bilde 3' },
]

function AboutUsInfo() {
    return (
        <Box className="w-full p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                        Om oss
                    </p>
                    <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
                        Lokal frisør med fokus på kvalitet.
                    </h2>
                    <p className="mt-3 text-sm text-muted sm:text-base">
                        Hos Frisør’n møter du en frisør som lytter til deg og dine ønsker,
                        setter av tid til grundig konsultasjon, fargevalg og styling,
                        og jobber med kvalitetsprodukter.

                    </p>
                    <p className="mt-3 text-sm text-muted sm:text-base">
                        Vi tilbyr klipp for dame, herre og barn, samt farge, toner og
                        oppsett til spesielle anledninger
                        <br/> Vi tilbyr også studentrabatt
                    </p>
                </div>
                <div className="rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-6">
                    <h3 className="font-['Playfair_Display'] text-lg text-text">
                        Det vi lover
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text marker:text-accent-dark">
                        <li>God tid i stolen og en tydelig plan.</li>
                        <li>Skreddersydd klipp.</li>
                    </ul>
                    <div className="mt-5">
                        <Button
                            href="/kontakt"
                        >
                            Sporsmal? Ta kontakt
                        </Button>
                    </div>
                </div>
            </div>
            {/* Bilder på forsiden*/}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aboutImages.map((image) => (
                    <div
                        key={image.src}
                        className="overflow-hidden rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-soft"
                    >
                        <img src={image.src} alt={image.alt} className="h-40 w-full object-cover" />
                    </div>
                ))}
            </div>
        </Box>
    )
}

export default AboutUsInfo
