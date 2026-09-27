/**
 * ServiceCard Component
 * Elevated card layout: image filling the top with tonal zoom, clean typography and description below.
 */

export default function ServiceCard({ title, description, image, id }) {
  return (
    <article className="service-card" id={id}>
      <div className="service-card-media">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>
      </div>
    </article>
  );
}
