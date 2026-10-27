import './Hero.css'

const quickStats = [
  { icon: 'fa-file-invoice-dollar', title: 'Tax Advisory',         desc: 'Expert guidance for better financial decisions.' },
  { icon: 'fa-building',            title: 'Business Registration', desc: 'Start your business with confidence.' },
  { icon: 'fa-shield-halved',       title: 'Compliance & Filing',   desc: 'Stay compliant, avoid penalties.' },
  { icon: 'fa-users',               title: 'Training & Education',  desc: 'Build knowledge, build your future.' },
  { icon: 'fa-headset',             title: 'Ongoing Support',       desc: "We're with you at every step." },
]

export default function Hero() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero" id="home">

        {/* Right: person photo full bleed */}
        <div className="hero-photo-bg">
          <img
            src="./hero-bg.jpg"
            alt="Shalashian — S&C Business Consultants"
            onError={e => { e.target.src = './sco.jpg' }}
          />
          {/* Left fade overlay so text is readable */}
          <div className="hero-fade" />
        </div>

        {/* Left: text content */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-bar" />
            <span>YOUR TRUSTED TAX PARTNER</span>
          </div>

          <h1 className="hero-heading">
            Expert Tax Solutions<br />
            for a <span className="hero-accent">Stronger Tomorrow</span>
          </h1>

          <p className="hero-body">
            S &amp; C Business Consultants (PVT) LTD provides professional
            tax consultancy services to help individuals and businesses
            achieve financial compliance and sustainable growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">
              Get Consultation <i className="fas fa-arrow-right" />
            </a>
            <a href="#services" className="hero-btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-watermark">
            <span className="wm-name">Cathay Academy</span>
            <span className="wm-role">LECTURER</span>
          </div>

        </div>
      </section>

      {/* ══ SERVICE QUICK BAR ══ */}
      <div className="quick-bar" id="quick-bar">
        {quickStats.map((s, i) => (
          <a href="#services" className="qb-card" key={s.title}
             style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="qb-icon">
              <i className={`fas ${s.icon}`} />
            </div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </a>
        ))}
      </div>
    </>
  )
}
