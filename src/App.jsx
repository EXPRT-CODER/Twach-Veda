import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import BrandStory from './components/BrandStory'
import Rituals from './components/Rituals'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const addToCart = () => setCartCount((count) => count + 1)

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#263a22]">
      <Header cartCount={cartCount} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main><Hero /><FeaturedProducts onAddToCart={addToCart} /><BrandStory /><Rituals /><Newsletter /></main>
      <Footer />
    </div>
  )
}

export default App
