import { useEffect, useState } from 'react'
import AboutUs from './pages/aboutUs/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/homePage/HomePage'
import ProductsPage from './pages/productPage/ProductsPage'
import Footer from './components/pageSections/Footer'
import Header from './components/pageSections/Header'
import { palettes } from './styles/palettes'

const routes = {
  '/': HomePage,
  '/om-oss': AboutUs,
  '/kontakt': ContactPage,
  '/produkter': ProductsPage,
}


function NotFound() {
  return (
    <div className="w-full rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface p-8 text-text shadow-elevated">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">404</p>
      <h1 className="mt-2 font-['Playfair_Display'] text-3xl">Fant ikke siden</h1>
      <p className="mt-3 text-sm text-muted">Gå tilbake til startsiden.</p>
    </div>
  )
}

function App() {
  const [paletteIndex, setPaletteIndex] = useState(() => {
    if (typeof window === 'undefined') {
      return 0
    }

    const storedIndex = window.localStorage.getItem('paletteIndex')
    const parsedIndex = storedIndex ? Number.parseInt(storedIndex, 10) : 0

    if (Number.isNaN(parsedIndex)) {
      return 0
    }

    return Math.min(Math.max(parsedIndex, 0), palettes.length - 1)
  })

  useEffect(() => {
    const palette = palettes[paletteIndex]
    if (!palette) {
      return
    }

    const root = document.documentElement
    Object.entries(palette.values).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('paletteIndex', String(paletteIndex))
    }
  }, [paletteIndex])

  const cyclePalette = () => {
    setPaletteIndex((current) => (current + 1) % palettes.length)
  }
  const path = typeof window === 'undefined' ? '/' : window.location.pathname || '/'
  const Page = routes[path as keyof typeof routes] ?? NotFound

  return (
    <div className="bg-background bg-page text-text">
      <Header />

      <main className="flex flex-col gap-10 px-7 pb-16 pt-10 sm:px-10 lg:px-14">
        <Page />
      </main>
      <Footer />
      <button
        type="button"
        onClick={cyclePalette}
        className="fixed bottom-6 right-6 z-50 rounded-[var(--radius-pill)] border-[var(--border-width)] border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text shadow-md transition hover:-translate-y-0.5"
      >
        Fargetema: {palettes[paletteIndex]?.name ?? 'Default'}
      </button>
    </div>
  )
}

export default App
