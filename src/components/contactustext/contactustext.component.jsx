// src/components/ContactUsPage/ContactUsPage.jsx
import React from 'react';
import './contactustext.styles.scss'; // Import the dedicated SCSS file
import {Link} from 'react-router-dom';
/**
 * ContactUsPage Component
 * Renders the content for the "Contact Us" page, detailing services
 * and providing contact information.
 */
function ContactUsText() {
  return (
    <div className="contact-page-container">
      <div className="contact-content-wrapper">
        <h1 className="main-title">Your Adventure Awaits! </h1>

        <p className="intro-paragraph">
          Planning your dream getaway or a crucial business trip? We're here to make every step of your journey seamless and enjoyable. At Your Adventure Helper, we specialize in providing personalized, expert assistance for all your travel needs.
        </p>
        <p className="intro-paragraph">
          Whether you're embarking on a solo expedition, a romantic escape, a family vacation, or a group adventure, our dedicated team is ready to assist you.
        </p>

        <h3 className="section-title">Our Comprehensive Services Include:</h3>
        <ul className="services-list">
          <li>
            <strong>Flight Bookings:</strong> From finding the best deals on international flights to arranging domestic travel, we handle all your airfare needs, ensuring comfortable and convenient travel options.
          </li>
          <li>
            <strong>Hotel Accommodations:</strong> Discover the perfect stay, whether you're seeking luxurious resorts, cozy boutique hotels, budget-friendly inns, or unique vacation rentals. We match your preferences and budget to ensure a comfortable base for your adventures.
          </li>
          <li>
            <strong>Restaurant Reservations:</strong> Looking for the best local cuisine or a fine dining experience? Let us guide you to the culinary highlights of your destination and secure your reservations.
          </li>
          <li>
            <strong>Local Travel Services:</strong> Navigate your destination with ease! We can arrange reliable airport transfers, local transportation, car rentals, and specialized tours to enhance your experience.
          </li>
          <li>
            <strong>Expert Travel Advice:</strong> Have questions about visas, travel insurance, packing tips, or cultural etiquette? Need insights into off-the-beaten-path destinations or the best time to visit a specific region? Our experienced advisors provide tailored recommendations and essential tips to ensure you're well-prepared for your journey.
          </li>
        </ul>

        <p className="call-to-action-paragraph">
          **Ready to start planning, or simply have a question?**<br />
          Our team is eager to help you craft unforgettable memories. Don't hesitate to reach out!
        </p>

        <Link to="/contact"> <h2 className="contact-heading">Contact Us:</h2></Link>
        <p className="contact-email-text">
          For inquiries, personalized planning, or any travel assistance, feel free to drop us an email:
        </p>
        <p className="email-address">
          <a href="mailto:youraventurehelper@gmail.com">youraventurehelper@gmail.com</a>
        </p>

        <p className="closing-paragraph">
          We look forward to helping you make your next adventure extraordinary!
        </p>
      </div>
    </div>
  );
}

export default ContactUsText;