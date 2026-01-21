# Frisørn - nettside

Statisk nettsted for Frisør'n i Dybdahls veg 3-5. Prosjektet driftes gjennom mitt enkeltpersonforetak, kunden faktureres månedlig, og e-postdomene ligger hos Hostinger, håndtert av meg. Domenehåndtering (DNS/SSL/pekere) ligger hos meg.

## Prosjektoversikt
- Enkle sider for start, kontakt og om oss (`/`, `/kontakt`, `/om-oss`) med fokus på åpningstider, kontakt og lokasjonskart.
- Designet med skreddersydde Tailwind-variabler for et varmt, håndverksinspirert uttrykk.

## Teknologi
- Vite + React + TypeScript.
- Tailwind CSS 

## Kjør lokalt
```bash
cd frisorn
npm install
npm run dev
```
Åpne dev-serverens URL i nettleseren.



## Drift og ansvar
- Domene og DNS/SSL håndteres av meg; maildomene er hos Hostinger og håndteres også av meg.
- Kunden faktureres månedlig via enkeltpersonforetaket.


## Innhold og justeringer
- Startside: `src/pages/homePage/HomePage.tsx` (hero, åpningstider, kontaktinfo).
- Kontakt: `src/pages/contact/ContactPage.tsx` (kontakt- og åpningstider).
- Om oss: `src/pages/aboutUs/*` (profiltekst og Google Maps-iframe).
- Metadata/SEO: `index.html` (tittel, beskrivelser, favicons, Open Graph).
