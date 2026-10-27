import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About Us',   href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Why Us',     href: '#whyus' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand / Logo */}
      <div className="nav-brand">
        <div className="nav-logo">
          <span className="logo-sc">SC</span>
          <span className="logo-bc">BC</span>
        </div>
        <div className="nav-brand-text">
          <span className="nb-main">S & C BUSINESS</span>
          <span className="nb-main">CONSULTANTS (PVT) LTD</span>
          <span className="nb-sub">STRATEGY · SOLUTIONS · SUCCESS</span>
        </div>
      </div>

      {/* Links */}
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a
              href={l.href}
              className={active === l.href.replace('#','') ? 'nav-active' : ''}
              onClick={() => { setOpen(false); setActive(l.href.replace('#','')) }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="btn-letstalk">
        <i className="fas fa-envelope"></i> Let's Talk
      </a>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
      </button>
    </nav>
  )
}
