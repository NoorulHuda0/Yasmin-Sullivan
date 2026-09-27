import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Wordmark */}
        <a href="#" className="navbar-brand" aria-label={business.name}>
          <span className="navbar-logo-text">{business.name}</span>
          <span className="navbar-tagline">{business.businessType}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation">
          <ul className="navbar-nav">
            {business.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <Button
            href={business.nav.cta.href}
            isExternal={business.nav.cta.isExternal}
            size="sm"
            variant="primary"
            className="btn-nav"
            icon={MessageSquare}
          >
            {business.nav.cta.label}
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav aria-label="Mobile Navigation">
            {business.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: '16px' }}>
            <Button
              href={business.nav.cta.href}
              isExternal={business.nav.cta.isExternal}
              variant="primary"
              icon={MessageSquare}
              onClick={closeMobileMenu}
              style={{ width: '100%' }}
            >
              {business.nav.cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
