/**
 * SectionHeading Component
 * Implements strict typographic hierarchy:
 * - Eyebrow in uppercase accent color with 0.12em letter spacing
 * - H2 title with clamped scaling
 * - Calm, readable max-65ch descriptive copy
 */

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = ''
}) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
