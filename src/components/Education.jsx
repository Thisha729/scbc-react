import { useEffect, useRef } from 'react'
import './Education.css'

const edu = [
  { icon: 'fa-university',   title: 'Professional Qualification in Taxation',  inst: 'Institute of Taxation — Sri Lanka / Tamil Nadu', year: 'Advanced Professional Certification', badge: 'TAX' },
  { icon: 'fa-book-open',    title: 'Bachelor of Commerce',                      inst: 'University — Accounting & Finance',                year: 'Undergraduate Degree',                badge: 'BCom' },
  { icon: 'fa-award',        title: 'Business Management & Leadership',           inst: 'Professional Development Programme',               year: 'Executive Certification',             badge: 'BML' },
  { icon: 'fa-certificate',  title: 'Trading & Contracting Certification',        inst: 'SCO Industry Training & Certification Body',       year: 'Professional Licence',                badge: 'SCO' },
]

export default function Education() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })
    ref.current?.querySelectorAll('.edu-item').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="education" id="education" ref={ref}>
      <div className="container">
        <p className="sec-tag">QUALIFICATIONS</p>
        <h2 className="sec-title">My <span className="hl">Education</span></h2>
        <div className="edu-list">
          {edu.map((e, i) => (
            <div className="edu-item" key={e.title} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="edu-ico"><i className={`fas ${e.icon}`}></i></div>
              <div className="edu-info">
                <h4>{e.title}</h4>
                <p>{e.inst}</p>
                <span>{e.year}</span>
              </div>
              <div className="edu-badge">{e.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
