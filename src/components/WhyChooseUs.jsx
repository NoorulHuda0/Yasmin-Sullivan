import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section className="section" id="why-choose-us">
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
        />

        <div className="why-grid">
          {whyChooseUs.items.map((item, idx) => (
            <div key={idx} className="why-card">
              <span className="why-number">{item.number}</span>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
