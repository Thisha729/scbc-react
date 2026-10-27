import { useEffect, useRef } from 'react'
import './About.css'

const features = [
  { icon: 'fa-bullseye',      title: 'Strategic Approach',  desc: 'Tailored solutions for your needs.' },
  { icon: 'fa-shield-halved', title: 'Trusted & Reliable',  desc: 'Your compliance, our priority.' },
  { icon: 'fa-users',         title: 'Experienced Team',    desc: '8+ years of industry expertise.' },
  { icon: 'fa-chart-line',    title: 'Proven Results',      desc: 'Helping you grow, sustainably.' },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ab-visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.ab-anim').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about-sec" id="about" ref={ref}>
      <div className="ab-inner">

        {/* LEFT */}
        <div className="ab-left ab-anim">
          <div className="ab-eyebrow">
            <span className="ab-line" /><span>ABOUT SCBC</span>
          </div>
          <h2 className="ab-title">
            S &amp; C Business<br />
            Consultants <span className="ab-hl">(PVT) LTD</span>
          </h2>
          <p className="ab-desc">
            We are a team of experienced tax professionals dedicated to
            providing reliable, transparent and result-driven consultancy
            services. Our mission is to empower individuals and businesses
            with the right financial strategies for long-term success.
          </p>
          <p className="ab-desc ab-tamil">
            சலேஷியன் சந்தியா ஆரோக்கியமேரி — Founder &amp; Director,
            Senior Lecturer at Cathay Academy, Tax Professional at SCBC.
          </p>
          <a href="#contact" className="ab-btn">
            Learn More <i className="fas fa-arrow-right" />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="ab-divider ab-anim" />

        {/* MIDDLE */}
        <div className="ab-mid ab-anim">
          {features.map(f => (
            <div className="ab-feat" key={f.title}>
              <div className="ab-feat-ico">
                <i className={`fas ${f.icon}`} />
              </div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="ab-divider ab-anim" />

        {/* RIGHT */}
        <div className="ab-right ab-anim">
          <p className="ab-over">OVER</p>
          <div className="ab-num">8<span>+</span></div>
          <p className="ab-years">YEARS OF<br />EXPERIENCE</p>
          <div className="ab-hr" />
          <p className="ab-script"><em>Your Success<br />is Our Mission</em></p>
        </div>

      </div>
    </section>
  )
}
