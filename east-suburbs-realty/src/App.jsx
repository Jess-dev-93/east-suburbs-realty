import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'
import Sold from './pages/Sold'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-luxury-navy/95 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <NavLink to="/" className="text-3xl md:text-4xl font-bold text-luxury-gold font-serif">
          Eastern Suburbs Realty
        </NavLink>

        {/* Desktop */}
        <div className="hidden lg:flex space-x-10 text-lg font-medium items-center">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/listings" className="nav-link">Listings</NavLink>
          <NavLink to="/sold" className="nav-link">Sold</NavLink>
          <NavLink to="/testimonials" className="nav-link">Testimonials</NavLink>
          <NavLink to="/contact" className="bg-luxury-gold text-luxury-navy px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-bold">
            Valuation
          </NavLink>
        </div>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-cream text-4xl">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-luxury-navy/98 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-4">
            <NavLink to="/" className="block text-luxury-gold text-xl py-3 border-b border-luxury-gold/30 font-semibold" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="block text-cream text-xl py-3 border-b border-white/20 hover:text-luxury-gold" onClick={() => setMobileOpen(false)}>About</NavLink>
            <NavLink to="/listings" className="block text-cream text-xl py-3 border-b border-white/20 hover:text-luxury-gold" onClick={() => setMobileOpen(false)}>Listings</NavLink>
            <NavLink to="/sold" className="block text-cream text-xl py-3 border-b border-white/20 hover:text-luxury-gold" onClick={() => setMobileOpen(false)}>Sold</NavLink>
            <NavLink to="/testimonials" className="block text-cream text-xl py-3 border-b border-white/20 hover:text-luxury-gold" onClick={() => setMobileOpen(false)}>Testimonials</NavLink>
            <NavLink to="/contact" className="block bg-luxury-gold text-luxury-navy text-xl font-bold py-4 px-6 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
              Free Valuation
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-luxury-navy text-cream py-12 text-center">
      <p className="text-4xl font-bold mb-4">Eastern Suburbs Realty</p>
      <p>© 2025 | Licensed Real Estate Agent NSW</p>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/sold" element={<Sold />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}