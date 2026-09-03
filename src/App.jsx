import Nav from './components/Nav'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Lab from './components/Lab'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Lab />
        <Catalog />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
