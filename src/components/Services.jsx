import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services() {
  const { services } = business;

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="services-grid">
          {services.items.map((item) => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
