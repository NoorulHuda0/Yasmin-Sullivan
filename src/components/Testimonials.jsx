import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Testimonials() {
  const { testimonials } = business;

  // Strict requirement: Rendered ONLY if real testimonials exist.
  // If none provided, omit this section entirely — never fabricate filler.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Client Experiences"
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="card" style={{ padding: '32px' }}>
              <blockquote style={{ fontStyle: 'italic', marginBottom: '16px', color: 'var(--color-ink)' }}>
                "{t.quote}"
              </blockquote>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                {t.author}
              </div>
              {t.company && (
                <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-subtle)' }}>
                  {t.company}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
