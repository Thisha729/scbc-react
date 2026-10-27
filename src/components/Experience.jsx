import { useEffect, useRef } from 'react'
import './Experience.css'

const jobs = [
  {
    role: 'Founder & Director',
    org:  'SCO Trading & Contracting',
    icon: 'fa-building',
    period: '2016 — Present',
    color: '#1a6fcc',
    desc: 'Founded and leading SCO Trading & Contracting — delivering trading, contracting, and financial services. Driving strategic direction, client relations, and business growth.',
    tags: ['Trading','Contracting','Strategy','Leadership'],
  },
  {
    role: 'Tax Professional & Consultant',
    org:  'SCBC — S&C Business Consultants',
    icon: 'fa-landmark',
    period: '2018 — Present',
    color: '#00aaff',
    desc: 'Expert tax consulting for businesses and individuals — tax planning, compliance, regulatory advisory, and financial structuring to minimise liabilities.',
    tags: ['Taxation','Compliance','Advisory','Finance'],
  },
  {
    role: 'Senior Lecturer',
    org:  'Cathay Academy',
    icon: 'fa-graduation-cap',
    period: '2019 — Present',
    color: '#1a6fcc',
    desc: 'Teaching taxation, accounting, and business management. Mentoring students with practical industry knowledge for real-world professional success.',
    tags: ['Teaching','Accounting','Mentoring','Education'],
  },
  {
    role: 'Financial Consultant',
    org:  'Independent Practice',
    icon: 'fa-chart-bar',
    period: '2015 — 2018',
    color: '#00aaff',
    desc: 'Independent financial consulting for SMEs — accounting, tax planning, and business advisory for financial clarity and strategic growth.',
    tags: ['SME Advisory','Accounting','Financial Planning'],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.exp-item').forEach((el, i) => {
          setTimeout(() => el.classList.add('exp-show'), i * 120)
        })
        obs.unobserve(e.target)
      })
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="experience-sec" id="experience" ref={ref}>
      <div className="exp-container">

        <div className="exp-header">
          <div className="exp-tag">
            <span className="exp-tag-line" /><span>TRACK RECORD</span>
          </div>
          <h2 className="exp-title">
            Professional <span className="exp-hl">Experience</span>
          </h2>
          <p className="exp-sub">
            8+ years of expertise across tax consultancy, business leadership, and education
          </p>
        </div>

        <div className="exp-layout">
          {/* Timeline */}
          <div className="exp-timeline">
            {jobs.map((j, i) => (
              <div className="exp-item" key={j.role}>
                <div className="exp-dot" style={{ background: j.color, boxShadow: `0 0 12px ${j.color}80` }} />
                <div className="exp-card">
                  <div className="exp-card-top">
                    <div className="exp-icon" style={{ background: `${j.color}18`, borderColor: `${j.color}33` }}>
                      <i className={`fas ${j.icon}`} style={{ color: j.color }} />
                    </div>
                    <div className="exp-info">
                      <h4>{j.role}</h4>
                      <p className="exp-org">{j.org}</p>
                    </div>
                    <span className="exp-period">{j.period}</span>
                  </div>
                  <p className="exp-desc">{j.desc}</p>
                  <div className="exp-tags">
                    {j.tags.map(t => (
                      <span key={t} style={{ borderColor: `${j.color}33`, color: j.color, background: `${j.color}10` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side summary */}
          <div className="exp-summary">
            <div className="exp-sum-box">
              <div className="exp-sum-ico"><i className="fas fa-trophy" /></div>
              <h3>8+ Years of Excellence</h3>
              <p>Consistently delivering top-tier financial and business services across multiple sectors in Sri Lanka and Tamil Nadu.</p>
            </div>
            <div className="exp-sum-stats">
              <div className="exp-ss">
                <span className="exp-ss-n">4+</span>
                <span className="exp-ss-l">Active Roles</span>
              </div>
              <div className="exp-ss">
                <span className="exp-ss-n">500+</span>
                <span className="exp-ss-l">Clients</span>
              </div>
              <div className="exp-ss">
                <span className="exp-ss-n">3</span>
                <span className="exp-ss-l">Ventures</span>
              </div>
            </div>
            <a href="#contact" className="exp-cta">
              Work With Me <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
