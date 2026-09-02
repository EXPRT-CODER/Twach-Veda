import { useEffect, useState } from 'react'
import heroImage from './assets/Hero.jpeg'
import soapsImage from './assets/Soaps.jpeg'
import ubtanImage from './assets/Soap2.jpeg'
import trioImage from './assets/Soaps3.jpeg'

const products = [
  { number: '01', name: 'Ubtan Glow Bar', note: 'Turmeric · saffron · almond', price: '₹249', image: ubtanImage, tone: 'sun' },
  { number: '02', name: 'Neem Reset Bar', note: 'Neem · tulsi · green clay', price: '₹229', image: soapsImage, tone: 'moss' },
  { number: '03', name: 'The Ritual Trio', note: 'A complete botanical ritual', price: '₹649', image: trioImage, tone: 'clay' },
]

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-wrap">
      <div className="topline"><span>Made slowly. Used daily.</span><span>Free shipping over ₹999</span><span>India</span></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Twach Veda home"><i>TV</i><span>Twach<br />Veda</span></a>
        <button className="mobile-toggle" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><b></b><b></b></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#shop" onClick={closeMenu}>Shop</a><a href="#philosophy" onClick={closeMenu}>Philosophy</a><a href="#ritual" onClick={closeMenu}>Ritual</a><a href="#journal" onClick={closeMenu}>Journal</a>
        </nav>
        <a href="#shop" className="bag">Bag <span>{String(cartCount).padStart(2, '0')}</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-gridline line-a"></div><div className="hero-gridline line-b"></div>
          <div className="hero-copy reveal">
            <p className="micro">Botanical skincare, unfiltered <span>✦</span></p>
            <h1>SKINCARE<br />WITH A <em>WILD</em><br />POINT OF VIEW.</h1>
            <p className="hero-intro">Ancient plant intelligence, remixed for the way your skin lives now.</p>
            <a href="#shop" className="round-link">Discover the bars <Arrow /></a>
          </div>
          <div className="hero-art reveal">
            <div className="art-sun"></div>
            <div className="hero-image"><img src={heroImage} alt="Twach Veda botanical skincare" /></div>
            <div className="orbit">AYURVEDIC · BOTANICAL · UNCOMPLICATED ·</div>
            <div className="hero-card"><b>01</b><span>Skin feels<br /><strong>alive here.</strong></span></div>
            <div className="hero-star">✦</div>
          </div>
          <a className="scroll-cue" href="#philosophy"><small>SCROLL TO UNFOLD</small><i>↓</i></a>
        </section>

        <Marquee />

        <section id="philosophy" className="statement section-pad">
          <p className="micro reveal">No filler. No folklore. Just plants that work.</p>
          <h2 className="reveal">THE DAILY RITUAL,<br /><em>TURNED ALL THE WAY UP.</em></h2>
          <div className="statement-bottom reveal"><p>We take timeless Ayurvedic ingredients out of the past and put them into your every day. Consider this your invitation to make a little more of your routine.</p><a href="#ritual" className="text-arrow">Our philosophy <Arrow /></a></div>
        </section>

        <section id="shop" className="products section-pad">
          <div className="section-top reveal"><div><p className="micro">The everyday edit</p><h2>MEET THE<br /><em>GOOD STUFF.</em></h2></div><p className="section-note">Small-batch bars, made with big feeling.<br />Pick your ritual.</p></div>
          <div className="product-grid">
            {products.map((product, index) => <article className={`product ${product.tone} reveal`} style={{ transitionDelay: `${index * 90}ms` }} key={product.name}>
              <div className="product-number">{product.number}<span>✦</span></div>
              <div className="product-image"><img src={product.image} alt={product.name} /></div>
              <div className="product-details"><p>{product.note}</p><h3>{product.name}</h3><div><strong>{product.price}</strong><button onClick={() => setCartCount((count) => count + 1)} aria-label={`Add ${product.name} to bag`}>ADD <Arrow /></button></div></div>
            </article>)}
          </div>
        </section>

        <section id="ritual" className="ritual">
          <div className="ritual-image"><img src={trioImage} alt="Twach Veda soap collection" /></div>
          <div className="ritual-copy section-pad">
            <p className="micro reveal">The Twach Veda method</p>
            <h2 className="reveal">OLD ROOTS.<br /><em>NEW ENERGY.</em></h2>
            <p className="ritual-text reveal">Every bar begins with ingredients your skin already understands. We make them fresh, keep the formulas intentional, and leave out everything that gets in the way.</p>
            <div className="method-list reveal"><div><b>01</b><span><strong>Start with plants</strong>Neem, turmeric, saffron and more.</span></div><div><b>02</b><span><strong>Make it with care</strong>Small batches, never rushed.</span></div><div><b>03</b><span><strong>Make it yours</strong>A moment that belongs to you.</span></div></div>
          </div>
        </section>

        <section className="numbers"><div className="number-item reveal"><b>100%</b><span>plant-led formulas</span></div><div className="number-item reveal"><b>0</b><span>unnecessary extras</span></div><div className="number-item reveal"><b>1</b><span>better kind of daily care</span></div></section>

        <section id="journal" className="join section-pad">
          <div className="join-scribble">✦</div><p className="micro reveal">Get closer to the good stuff</p><h2 className="reveal">A LITTLE WILDNESS<br />FOR YOUR <em>INBOX.</em></h2><p className="join-copy reveal">Stories from the garden, skincare worth knowing, and 10% off your first ritual.</p>
          <form className="reveal" onSubmit={(event) => { event.preventDefault(); setJoined(true) }}><input type="email" required aria-label="Email address" placeholder="YOUR EMAIL ADDRESS" /><button type="submit">{joined ? 'YOU’RE IN ✦' : 'JOIN THE RITUAL ↗'}</button></form>
        </section>
      </main>

      <footer><a className="wordmark" href="#top"><i>TV</i><span>Twach<br />Veda</span></a><p>© 2026 TWACH VEDA. MADE WITH INTENTION.</p><div><a href="#top">Instagram</a><a href="#top">Contact</a><a href="#top">Privacy</a></div></footer>
    </div>
  )
}

function Marquee() {
  const line = <><span>NEEM</span><b>✦</b><span>TURMERIC</span><b>✦</b><span>SAFFRON</span><b>✦</b><span>SANDALWOOD</span><b>✦</b><span>ALMOND OIL</span><b>✦</b></>
  return <section className="marquee" aria-label="Key ingredients"><div className="marquee-track">{line}{line}</div></section>
}
