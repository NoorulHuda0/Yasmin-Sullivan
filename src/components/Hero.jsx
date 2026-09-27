import { MessageSquare, ArrowDown, MapPin } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  const { hero } = business;

  return (
    <section className="hero-section" id="hero">
      <img
        src={hero.backgroundImage}
        alt=""
        aria-hidden="true"
        className="hero-bg"
        loading="eager"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <span className="hero-eyebrow">{hero.eyebrow}</span>
          <h1 className="hero-title">{hero.headline}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <Button
              href={hero.primaryCta.href}
              isExternal={hero.primaryCta.isExternal}
              variant="primary"
              icon={MessageSquare}
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              isExternal={hero.secondaryCta.isExternal}
              variant="outline-white"
              icon={ArrowDown}
              iconPosition="right"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {hero.trustLine && (
            <div className="hero-trust-line">
              <MapPin size={16} aria-hidden="true" style={{ color: '#93c5fd' }} />
              <span>{hero.trustLine}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
