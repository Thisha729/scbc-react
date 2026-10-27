import { useEffect, useRef, useState } from 'react'
import './Services.css'

const services = [
  { icon: 'fa-file-invoice-dollar', title: 'Tax Consultancy',       color: '#4da6ff', bg: 'rgba(77,166,255,0.12)',
    desc: 'Expert tax planning, compliance advisory, and financial structuring to optimise your tax position.',
    points: ['Tax Planning','Compliance Filing','Regulatory Advisory','Financial Structuring'] },
  { icon: 'fa-calculator',          title: 'Accounting & Finance',  color: '#00d4ff', bg: 'rgba(0,212,255,0.10)',
    desc: 'Full-service accounting, bookkeeping, and financial reporting to keep your business performance on track.',
    points: ['Bookkeeping','Financial Reporting','Business Analysis','Payroll'] },
  { icon: 'fa-building',            title: 'Business Registration', color: '#7dc8ff', bg: 'rgba(125,200,255,0.10)',
    desc: 'End-to-end business registration and incorporation services with full legal compliance.',
    points: ['Company Incorporation','Business Licensing','Legal Compliance','Documentation'] },
  { icon: 'fa-hard-hat',            title: 'Contracting Services',  color: '#4da6ff', bg: 'rgba(77,166,255,0.12)',
    desc: 'Quality construction and project management — from planning to execution.',
    points: ['Project Planning','Construction Management','Infrastructure','Quality Assurance'] },
  { icon: 'fa-chalkboard-teacher',  title: 'Training & Education',  color: '#00d4ff', bg: 'rgba(0,212,255,0.10)',
    desc: 'Professional training in taxation and accounting through Cathay Academy.',
    points: ['Tax & Accounting Courses','Business Training','Certification','Workshops'] },
  { icon: 'fa-handshake',           title: 'Business Consulting',   color: '#7dc8ff', bg: 'rgba(125,200,255,0.10)',
    desc: 'Strategic advisory, feasibility studies, and growth strategy for sustainable success.',
    points: ['Strategy Development','Market Analysis','Feasibility Studies','Growth Planning'] },
]

export default function Services() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.sv-card').forEach((el, i) => {
          setTimeout(() => el.classList.add('sv-visible'), i * 100)
        })
        obs.unobserve(e.target)
      })
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sv-section" id="services" ref={ref}>
      {/* Section header */}
      <div className="sv-header">
        <div className="sv-tag">
          <span className="sv-tag-line" /><span>WHAT WE DO</span>
        </div>
        <h2 className="sv-title">Our <span className="sv-hl">Services</span></h2>
        <p className="sv-sub">
          Comprehensive professional services — tax, accounting, contracting, education and consulting
        </p>
      </div>

      {/* Cards grid */}
      <div className="sv-grid">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`sv-card ${active === i ? 'sv-active' : ''}`}
            onClick={() => setActive(active === i ? null : i)}
            style={{ '--c': s.color, '--bg': s.bg }}
          >
            {/* Glow accent top bar */}
            <div className="sv-bar" />

            {/* Card header */}
            <div className="sv-card-head">
              <div className="sv-icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <span className="sv-index">0{i + 1}</span>
            </div>

            <h3 className="sv-name">{s.title}</h3>
            <p className="sv-desc-short">{s.desc}</p>

            {/* Expand toggle */}
            <div className={`sv-toggle ${active === i ? 'sv-open' : ''}`}>
              <i className="fas fa-plus" />
            </div>

            {/* Expanded details */}
            <div className={`sv-expand ${active === i ? 'sv-show' : ''}`}>
              <div className="sv-divider" />
              <ul className="sv-pts">
                {s.points.map(p => (
                  <li key={p}>
                    <i className="fas fa-check" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="sv-btn"
                onClick={e => e.stopPropagation()}
              >
                Learn More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="sv-cta-row">
        <p>Need a custom solution? Let's discuss your requirements.</p>
        <a href="#contact" className="sv-cta-btn">
          <i className="fas fa-envelope" /> Get In Touch
        </a>
      </div>
    </section>
  )
}
