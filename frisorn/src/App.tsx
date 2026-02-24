import AboutUs from './pages/aboutUs/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/pageSections/Footer'
import Header from './components/pageSections/Header'
import Button from './components/elements/Button'

const routes = {
  '/': HomePage,
  '/om-oss': AboutUs,
  '/kontakt': ContactPage,
}

//404-page
function NotFound() {
  return (
    <div className="w-full rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface p-8 text-text shadow-elevated">
      <p className="text-lg uppercase tracking-[0.3em] text-accent-dark">404</p>
      <h1 className="mt-2 font-secondarytext-3xl">Fant ikke siden</h1>
      <Button href="/" className="mt-5">
        Gå til startsiden
      </Button>
    </div>
  )
}

function App() {
  //Vis 404-siden hvis path ikke matcher noen av de definerte rutene
  const path = typeof window === 'undefined' ? '/' : window.location.pathname || '/'
  const Page = routes[path as keyof typeof routes] ?? NotFound

  return (
  <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] bg-background bg-page text-text">
    <Header />

    <main className="min-w-0 px-7 pt-10 pb-16 sm:px-10 lg:px-14">
      <Page />
    </main>

    <Footer />
  </div>
)
}

export default App
