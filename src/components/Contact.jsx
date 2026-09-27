import { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ExternalLink, CheckCircle } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact() {
  const { contact } = business;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: contact.form.serviceOptions[0] || '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only submission simulation
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormState({
      name: '',
      email: '',
      phone: '',
      service: contact.form.serviceOptions[0] || '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="contact-layout">
          {/* Contact Details & Direct Actions */}
          <div className="contact-info-card">
            {/* Address */}
            <div className="contact-detail-block">
              <div className="contact-detail-label">{contact.addressLabel}</div>
              <div className="contact-detail-value" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span>{contact.address}</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="contact-detail-block">
              <div className="contact-detail-label">{contact.hoursLabel}</div>
              <div className="contact-detail-value" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Clock size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <div>
                  <div>{contact.hours}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginTop: '2px' }}>
                    {contact.weekendLabel}: {contact.weekend}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="contact-detail-block">
              <div className="contact-detail-label">{contact.phoneLabel}</div>
              <div className="contact-detail-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={18} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                <a href={contact.phoneTel}>{contact.phone}</a>
              </div>
            </div>

            <div className="contact-detail-block">
              <div className="contact-detail-label">{contact.emailLabel}</div>
              <div className="contact-detail-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={18} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                <a href={contact.emailMailto}>{contact.email}</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="contact-action-buttons">
              {contact.whatsAppUrl && (
                <Button
                  href={contact.whatsAppUrl}
                  isExternal
                  variant="primary"
                  icon={MessageSquare}
                >
                  {contact.whatsAppButtonText}
                </Button>
              )}

              {contact.directionsUrl && (
                <Button
                  href={contact.directionsUrl}
                  isExternal
                  variant="secondary"
                  icon={ExternalLink}
                >
                  {contact.directionsLabel}
                </Button>
              )}
            </div>
          </div>

          {/* Styled Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">{contact.form.title}</h3>

            {isSubmitted ? (
              <div>
                <div className="form-success-alert">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={22} style={{ color: '#15803d' }} aria-hidden="true" />
                    <h4>{contact.form.successTitle}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#166534' }}>
                    {contact.form.successMessage}
                  </p>
                </div>
                <Button variant="secondary" onClick={handleReset} size="sm">
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {contact.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    className="form-input"
                    placeholder={contact.form.namePlaceholder}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    {contact.form.emailLabel} *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    className="form-input"
                    placeholder={contact.form.emailPlaceholder}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    {contact.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className="form-input"
                    placeholder={contact.form.phonePlaceholder}
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">
                    {contact.form.serviceLabel}
                  </label>
                  <select
                    id="contact-service"
                    className="form-select"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    {contact.form.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    {contact.form.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    className="form-textarea"
                    placeholder={contact.form.messagePlaceholder}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="primary" style={{ width: '100%' }}>
                  {contact.form.submitButtonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
