// src/components/FAQPage/FAQPage.jsx
import React, { useState } from 'react';
import './faq.styles.scss'; // Import the dedicated SCSS file

/**
 * FAQPage Component
 * Displays a list of frequently asked questions with interactive
 * expandable/collapsible answers.
 */
function FAQ() {
  // Sample FAQ data. You can replace this with data fetched from an API or a JSON file.
  const faqs = [
    {
      id: 1,
      question: 'How do I book a flight?',
      answer: 'You can book a flight directly through our "Flight Bookings" service by contacting us via email. Provide your travel dates, destination, and any preferences, and our team will handle the rest.',
    },
    {
      id: 2,
      question: 'What types of accommodations do you offer?',
      answer: 'We offer a wide range of accommodations including luxury resorts, boutique hotels, budget-friendly inns, and unique vacation rentals. We tailor options to your specific needs and preferences.',
    },
    {
      id: 3,
      question: 'Can you help with local transportation?',
      answer: 'Yes, absolutely! We assist with airport transfers, local car rentals, and arrangements for public transportation or private drivers to ensure smooth local travel.',
    },
    {
      id: 4,
      question: 'Do you provide travel insurance advice?',
      answer: 'While we do not sell insurance directly, our expert travel advisors can provide comprehensive advice on various travel insurance options to help you choose the best coverage for your trip.',
    },
    {
      id: 5,
      question: 'How far in advance should I contact you for planning?',
      answer: 'We recommend contacting us as early as possible, especially for complex itineraries or during peak travel seasons. For best results, 3-6 months in advance is ideal, but we can accommodate urgent requests as well.',
    },
    {
      id: 6,
      question: 'Is your service free?',
      answer: 'Our initial consultation and basic advice are complimentary. For detailed planning, customized itineraries, and booking services, a service fee may apply, which will always be communicated transparently upfront.',
    },
  ];

  // State to manage which FAQ item is currently open.
  // Stores the ID of the open item, or null if none are open.
  const [openFAQId, setOpenFAQId] = useState(null);

  /**
   * Toggles the open/close state of an FAQ item.
   * If the clicked item is already open, it closes it. Otherwise, it opens it.
   * @param {number} id - The ID of the FAQ item being clicked.
   */
  const handleToggle = (id) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <div className="faq-page-container">
      <div className="faq-content-wrapper">
        <h1 className="faq-main-title">Frequently Asked Questions</h1>
        <p className="faq-intro-text">
          Find answers to common questions about our travel assistance services.
          If you can't find what you're looking for, feel free to contact us!
        </p>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openFAQId === faq.id ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => handleToggle(faq.id)}>
                {faq.question}
                <span className="faq-toggle-icon">
                  {openFAQId === faq.id ? '−' : '+'} {/* Change icon based on state */}
                </span>
              </button>
              {/* Conditionally render the answer based on the openFAQId state */}
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;