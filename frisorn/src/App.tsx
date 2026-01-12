import AboutUs from './pages/aboutUs/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/pageSections/Footer'
import Header from './components/pageSections/Header'

const routes = {
  '/': HomePage,
  '/om-oss': AboutUs,
  '/kontakt': ContactPage,
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
  const path = typeof window === 'undefined' ? '/' : window.location.pathname || '/'
  const Page = routes[path as keyof typeof routes] ?? NotFound

  return (
    <div className="bg-background bg-page text-text">
      <Header />

      <main className="flex flex-col gap-10 px-7 pb-16 pt-10 sm:px-10 lg:px-14">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
