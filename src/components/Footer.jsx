import { business } from '../config/business';

export default function Footer() {
  const { footer, nav } = business;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div>
            <h3 className="footer-brand-title">{footer.name}</h3>
            <p className="footer-brand-desc">{footer.tagline}</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
              {footer.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">{footer.quickLinksTitle}</h4>
            <ul className="footer-links-list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">{footer.contactTitle}</h4>
            <ul className="footer-links-list">
              <li>
                <a href={footer.phoneTel} className="footer-link">
                  {footer.phone}
                </a>
              </li>
              <li>
                <a href={footer.emailMailto} className="footer-link">
                  {footer.email}
                </a>
              </li>
              {footer.whatsAppUrl && (
                <li>
                  <a
                    href={footer.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    WhatsApp Message
                  </a>
                </li>
              )}
              <li style={{ marginTop: '8px', fontSize: '0.85rem', color: '#64748b' }}>
                {footer.hoursTitle}: {footer.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>{business.city}, {business.country}</span>
        </div>
      </div>
    </footer>
  );
}
