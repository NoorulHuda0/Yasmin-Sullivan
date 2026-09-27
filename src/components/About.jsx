import { MessageSquare } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function About() {
  const { about } = business;

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Media Column */}
          <div className="about-image-wrapper">
            <img
              src={about.image}
              alt={about.title}
              loading="lazy"
            />
          </div>

          {/* Copy Column */}
          <div className="about-content">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
            />

            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  marginBottom: index === about.paragraphs.length - 1 ? '24px' : '16px',
                  fontSize: '1.05rem',
                  lineHeight: '1.7'
                }}
              >
                {paragraph}
              </p>
            ))}

            {about.details && (
              <div className="about-details-list">
                {about.details.map((detail, idx) => (
                  <div key={idx} className="about-detail-item">
                    <span className="about-detail-label">{detail.label}</span>
                    <span className="about-detail-val">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}

            <Button
              href={about.cta.href}
              isExternal={about.cta.isExternal}
              variant="primary"
              icon={MessageSquare}
            >
              {about.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
