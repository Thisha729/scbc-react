import './Footer.css'

const navLinks = ['Home','About Us','Services','Why Us','Experience','Contact']

export default function Footer() {
  const hrefs = { 'Home':'#home','About Us':'#about','Services':'#services','Why Us':'#whyus','Experience':'#experience','Contact':'#contact' }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="ft-brand">
          <div className="ft-logo">
            <span className="ft-sc">SC</span><span className="ft-bc">BC</span>
          </div>
          <div>
            <p className="ft-name">S &amp; C Business Consultants (PVT) LTD</p>
            <p className="ft-tagline">STRATEGY · SOLUTIONS · SUCCESS</p>
          </div>
        </div>

        <div className="ft-desc">
          <p>Professional tax consultancy, accounting, contracting and education services. Your trusted partner for financial compliance and sustainable growth.</p>
          <p className="ft-tamil">சலேஷியன் சந்தியா ஆரோக்கியமேரி</p>
        </div>

        <div className="ft-links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map(l => (
              <li key={l}><a href={hrefs[l]}><i className="fas fa-chevron-right" />{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="ft-contact">
          <h4>Contact</h4>
          <div className="ft-ci">
            <i className="fab fa-facebook-f" />
            <a href="https://web.facebook.com/Irabelsaveme" target="_blank" rel="noreferrer">facebook.com/Irabelsaveme</a>
          </div>
          <div className="ft-ci">
            <i className="fas fa-map-marker-alt" />
            <span>Tamil Nadu, India</span>
          </div>
          <div className="ft-ci">
            <i className="fas fa-briefcase" />
            <span>SCO Trading &amp; Contracting</span>
          </div>
          <div className="ft-socials">
            <a href="https://web.facebook.com/Irabelsaveme" target="_blank" rel="noreferrer" className="ft-s"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="ft-s"><i className="fab fa-linkedin-in" /></a>
            <a href="#" className="ft-s"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 · S &amp; C Business Consultants (PVT) LTD · All Rights Reserved</p>
        <p className="ft-quote"><i className="fas fa-quote-left" /> தர்மம் மறுபடியும் வெல்லும்</p>
      </div>
    </footer>
  )
}
