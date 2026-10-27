import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const socials = [
  { href: 'https://web.facebook.com/Irabelsaveme', icon: 'fa-facebook-f',                label: 'Facebook'  },
  { href: '#',                                      icon: 'fa-linkedin-in',               label: 'LinkedIn'  },
  { href: '#',                                      icon: 'fa-whatsapp',                  label: 'WhatsApp'  },
]

const details = [
  { icon: 'fa-facebook-f',      text: 'facebook.com/Irabelsaveme', href: 'https://web.facebook.com/Irabelsaveme', fab: true },
  { icon: 'fa-map-marker-alt',  text: 'Tamil Nadu, India',          href: '#' },
  { icon: 'fa-briefcase',       text: 'SCO Trading & Contracting',  href: '#' },
  { icon: 'fa-envelope',        text: 'shalashian@scbc.com',        href: 'mailto:shalashian@scbc.com' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoad]  = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.c-anim').forEach((el, i) => {
            setTimeout(() => el.classList.add('c-visible'), i * 120)
          })
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoad(true)
    setTimeout(() => {
      setLoad(false); setSent(true); setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1200)
  }

  return (
    <section className="contact-section" id="contact" ref={ref}>
      {/* BG photo */}
      <div className="ct-photo-bg">
        <img src="/sco.jpg" alt="" onError={e => e.target.style.display='none'} />
        <div className="ct-overlay" />
      </div>

      <div className="ct-inner">

        {/* LEFT — Form card */}
        <div className="ct-form-wrap c-anim">
          <div className="ct-form-header">
            <div className="ct-form-icon"><i className="fas fa-paper-plane" /></div>
            <h3>Have a project in mind?</h3>
            <p>Fill out the form and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="ct-form">
            <div className="cf-row">
              <div className="cf-group">
                <label>Your Name <span className="req">*</span></label>
                <div className="cf-input-wrap">
                  <i className="fas fa-user cf-input-icon" />
                  <input
                    name="name" value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>
              <div className="cf-group">
                <label>Email Address <span className="req">*</span></label>
                <div className="cf-input-wrap">
                  <i className="fas fa-envelope cf-input-icon" />
                  <input
                    name="email" type="email" value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="cf-group">
              <label>Message <span className="req">*</span></label>
              <div className="cf-input-wrap">
                <i className="fas fa-comment cf-input-icon cf-ta-icon" />
                <textarea
                  name="message" rows={4} value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
            </div>
            <button type="submit" className="ct-submit" disabled={loading}>
              {loading ? (
                <><i className="fas fa-spinner fa-spin" /> Sending...</>
              ) : sent ? (
                <><i className="fas fa-check" /> Message Sent!</>
              ) : (
                <><i className="fas fa-paper-plane" /> Send Message</>
              )}
            </button>
            {sent && (
              <div className="ct-success">
                <i className="fas fa-check-circle" />
                <span>Your message has been sent successfully!</span>
              </div>
            )}
          </form>
        </div>

        {/* RIGHT — Info */}
        <div className="ct-info-wrap">
          <div className="ct-info-inner c-anim">
            <p className="ct-eyebrow"><span className="eline" />GET IN TOUCH</p>
            <h2 className="ct-big-title">
              Get In<br />
              <span className="ct-hl">Touch</span>
            </h2>

            <p className="ct-tagline">
              Ready to build your financial future?<br />
              Let's connect and make it happen.
            </p>

            {/* Contact details */}
            <div className="ct-details c-anim">
              {details.map(d => (
                <a
                  key={d.text}
                  href={d.href}
                  target={d.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="ct-detail"
                >
                  <div className="ct-det-ico">
                    <i className={`${d.fab ? 'fab' : 'fas'} ${d.icon}`} />
                  </div>
                  <span>{d.text}</span>
                  <i className="fas fa-arrow-right ct-det-arrow" />
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="ct-socials c-anim">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-link"
                >
                  <span className="ct-sl-left">
                    <i className={`fab ${s.icon}`} />
                    {s.label}
                  </span>
                  <i className="fas fa-arrow-up-right-from-square ct-sl-arrow" />
                </a>
              ))}
            </div>

            {/* Tamil quote */}
            <div className="ct-quote c-anim">
              <div className="ct-quote-mark"><i className="fas fa-quote-left" /></div>
              <span>தர்மம் மறுபடியும் வெல்லும்</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
