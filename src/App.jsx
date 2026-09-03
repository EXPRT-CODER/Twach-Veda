import { useEffect, useState } from 'react'
import logoImage from './assets/Hero.jpeg'
import soapImage from './assets/IMG_3460.PNG'
import ingredientsImage from './assets/IMG_3621.PNG'
import ritualImage from './assets/IMG_3381.PNG'

const Arrow = () => <span aria-hidden="true">→</span>

const reasons = [
  ['A daily ritual, made easy', 'Mask-inspired ingredients in a soap that fits naturally into every day.'],
  ['Traditional care, thoughtfully chosen', 'Inspired by ingredients long-loved in skin-care rituals, selected with modern routines in mind.'],
  ['Small batches, gentle intention', 'We focus on considered preparation and uncomplicated care for your everyday cleanse.'],
]

const steps = [
  ['01', 'Daily care', 'Twachveda Soap', 'A simple cleansing ritual, made for the everyday.'],
  ['02', 'Weekly care', 'Twachveda Face Mask', 'Deeper moments of care, coming as our range grows.'],
  ['03', 'Targeted care', 'Twachveda Face Serum', 'A future complement for your individual skin-care needs.'],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <div className="announcement"><span>Ancient-inspired care for everyday skin</span><span>Small-batch preparation</span><span>Made with intention</span></div>
      <header className="header">
        <a className="brand" href="#about" aria-label="Twachveda home">
          <img src={logoImage} alt="Twachveda" />
          <span><b>Twachveda</b><small>Ancient wisdom · everyday care</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i></button>
        <nav className={menuOpen ? 'navigation open' : 'navigation'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#why" onClick={() => setMenuOpen(false)}>Why Twachveda</a><a href="#journey" onClick={() => setMenuOpen(false)}>Our journey</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-link" href="#contact">Let’s connect <Arrow /></a>
      </header>

      <main>
        <section id="about" className="about-hero">
          <div className="about-copy reveal">
            <p className="eyebrow">About Twachveda <i>✦</i></p>
            <h1>Ancient wisdom.<br /><em>Everyday skin care.</em></h1>
            <p className="lead">Twachveda brings the quiet wisdom of traditional skin care into modern, everyday routines.</p>
            <p>“Twach” speaks to the skin; “Veda” represents traditional knowledge. Together, they guide our belief that skin care can be thoughtful, natural and easy to return to.</p>
            <a className="quiet-button" href="#why">Discover our approach <Arrow /></a>
          </div>
          <div className="about-visual reveal">
            <div className="image-frame"><img src={soapImage} alt="Twachveda handmade Ayurvedic soaps" /></div>
            <div className="visual-note"><span>Our thought</span><strong>Care that belongs<br />in your every day.</strong></div>
            <div className="leaf-ring">TWACHVEDA · ROOTED IN NATURE ·</div>
          </div>
        </section>

        <section className="meaning-strip" aria-label="Twachveda principles"><div className="meaning-track"><span>Skin</span><i>✦</i><span>Traditional knowledge</span><i>✦</i><span>Thoughtful daily care</span><i>✦</i><span>Skin</span><i>✦</i><span>Traditional knowledge</span><i>✦</i><span>Thoughtful daily care</span><i>✦</i></div></section>

        <section id="why" className="why-section section-space">
          <div className="section-intro reveal"><p className="eyebrow">Why Twachveda <i>✦</i></p><h2>THE GOODNESS OF A MASK,<br /><em>MADE FOR EVERY DAY.</em></h2></div>
          <div className="why-layout">
            <div className="why-image reveal"><img src={ingredientsImage} alt="Botanical ingredients used in traditional skin care" /><p>Ingredients inspired by traditional skin-care practices.</p></div>
            <div className="reason-list">
              {reasons.map(([title, text], index) => <article className="reason reveal" style={{ transitionDelay: `${index * 110}ms` }} key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
          <aside className="important-note reveal"><span>Important to know</span><p>Twachveda is designed to make everyday cleansing more mindful and skin-focused. It is a thoughtful part of a routine—not a replacement for your complete skin-care routine.</p></aside>
        </section>

        <section id="journey" className="journey-section">
          <div className="journey-photo"><img src={ritualImage} alt="Twachveda herbal soap collection" /></div>
          <div className="journey-content section-space">
            <p className="eyebrow reveal">More than just soap <i>✦</i></p>
            <h2 className="reveal">A SIMPLE PATH<br />TO <em>CONSIDERED CARE.</em></h2>
            <p className="journey-intro reveal">Twachveda is growing beyond handmade soaps. Our vision is a gentle, uncomplicated journey that supports your skin throughout the week.</p>
            <div className="steps">
              {steps.map(([number, label, title, text], index) => <article className="step reveal" style={{ transitionDelay: `${index * 110}ms` }} key={number}><span>{number}</span><div><small>{label}</small><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="promise section-space">
          <p className="eyebrow reveal">Our philosophy <i>✦</i></p>
          <h2 className="reveal">SKIN CARE DOESN’T HAVE<br />TO BE <em>COMPLICATED.</em></h2>
          <div className="promise-grid">
            <p className="reveal">We keep modern lives in mind while looking to traditional skin-care practices for inspiration. The result is a calm, considered ritual that is easy to make your own.</p>
            <div className="promise-points reveal"><span>Thoughtfully selected ingredients</span><span>Small-batch preparation</span><span>Inspired by traditional care</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-copy"><p className="eyebrow reveal">Connect with us <i>✦</i></p><h2 className="reveal">LET’S MAKE<br />CARE <em>PERSONAL.</em></h2><p className="reveal">Have a question about Twachveda or want to know what is coming next? We would love to hear from you.</p><a className="email-link reveal" href="mailto:hello@twachveda.com">hello@twachveda.com <Arrow /></a></div>
          <form className="contact-form reveal" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <label>Your name<input required name="name" placeholder="Enter your name" /></label>
            <label>Email address<input required type="email" name="email" placeholder="Enter your email" /></label>
            <label>Your message<textarea required name="message" placeholder="How can we help?"></textarea></label>
            <button type="submit">{sent ? 'Thank you — we’ll be in touch' : 'Send your message'} <Arrow /></button>
          </form>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><img src={logoImage} alt="" /><span>Twachveda<small>Ancient wisdom · everyday skin care</small></span></div><p>Twachveda — bringing ancient-inspired skin care into your everyday routine.</p><div className="footer-links"><a href="#about">About</a><a href="#contact">Contact</a><a href="mailto:hello@twachveda.com">Email us</a></div><small>© 2026 Twachveda. Made with care.</small></footer>
    </div>
  )
}
