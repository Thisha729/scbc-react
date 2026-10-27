import { useEffect, useRef } from 'react'
import './WhyUs.css'

const reasons = [
  { icon: 'fa-award',           title: 'Expert Professionals',    desc: 'Our team holds advanced qualifications in taxation, accounting, and business management with 8+ years of hands-on industry experience.' },
  { icon: 'fa-shield-halved',   title: 'Compliance Guaranteed',   desc: 'We ensure full regulatory compliance for every client, reducing risk and keeping your business protected at all times.' },
  { icon: 'fa-chart-line',      title: 'Results-Driven Approach', desc: 'We focus on measurable outcomes — optimising your tax position, growing your business, and maximising your financial success.' },
  { icon: 'fa-handshake',       title: 'Client-First Service',    desc: 'Every solution is tailored to your specific needs. We listen first, then deliver strategies that align with your goals.' },
  { icon: 'fa-clock',           title: 'Timely & Reliable',       desc: 'We understand deadlines matter. Our team delivers accurate, on-time results without compromising quality or compliance.' },
  { icon: 'fa-globe',           title: 'Multi-Sector Experience',  desc: 'From trading and contracting to education and SMEs — we bring cross-industry expertise to every engagement.' },
]

const stats = [
  { num: '8+',   label: 'Years Experience' },
  { num: '500+', label: 'Happy Clients' },
  { num: '98%',  label: 'Success Rate' },
  { num: '3',    label: 'Business Ventures' },
]

export default function WhyUs() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.wy-card, .wy-stat, .wy-header').forEach((el, i) => {
          setTimeout(() => el.classList.add('wy-show'), i * 90)
        })
        obs.unobserve(e.target)
      })
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="whyus" id="whyus" ref={ref}>
      <div className="wy-container">

        {/* Header */}
        <div className="wy-header">
          <div className="wy-tag">
            <span className="wy-tag-line" /><span>WHY CHOOSE US</span>
          </div>
          <h2 className="wy-title">
            Why <span className="wy-hl">Clients Trust</span> SCBC
          </h2>
          <p className="wy-sub">
            We combine expertise, integrity and personalised service to deliver
            exceptional results for every client we serve.
          </p>
        </div>

        {/* Stats bar */}
        <div className="wy-stats">
          {stats.map(s => (
            <div className="wy-stat" key={s.label}>
              <span className="wy-stat-num">{s.num}</span>
              <span className="wy-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="wy-grid">
          {reasons.map((r, i) => (
            <div className="wy-card" key={r.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="wy-card-ico">
                <i className={`fas ${r.icon}`} />
              </div>
              <div className="wy-card-body">
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
              <div className="wy-card-arrow">
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="wy-cta">
          <p>Ready to experience the SCBC difference?</p>
          <a href="#contact" className="wy-cta-btn">
            <i className="fas fa-envelope" /> Get Started Today
          </a>
        </div>

      </div>
    </section>
  )
}
