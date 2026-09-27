import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default for intuitive discovery

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
          centered
        />

        <div className="faq-list">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className="faq-icon"
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-body"
                    role="region"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
