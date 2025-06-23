
import intro_image from './gemini_generated_traveller_page.png'; // Ensure this image is in the correct path

import './intro.scss'; // <-- Import your SCSS file

const IntroSection = () => {
  return (
    <section className="intro-section-container">
      <div className="intro-image-wrapper">
        <img
          src={intro_image}
          alt="Introduction to AI Journey"
        />
      </div>
      <div className="intro-content-wrapper">
        
        <h1 className="intro-title">Welcome to your Adventure with AI</h1>
        <p className="intro-description">
          We will enrich your travelling experience with the power of AI.
          Welcome to the future of travel planning, where your adventures are tailored just for you.
          Discover personalized itineraries, real-time recommendations, and seamless travel experiences.
        </p>
        <button className="intro-button">Start Your Journey</button>
      </div>
    </section>
  );
};

export default IntroSection;
// import React from 'react';
// import './intro.scss';
// import intro_image from './gemini_generated_traveller_page.png'; // Ensure this image is in the correct path
// const Introduction = () => {
//   return (
//     <div >
//     <div className="intro-image">
//       <img src={intro_image} alt="Introduction to AI Journey" />
//     </div>
//     <div className="intro-container">
//       <h1 className="intro-title">Welcome to your journey with AI</h1>
//       <p className="intro-description">
//         We will enrich your travelling experience with the power of AI.
//         Welcome to the future of travel planning, where your adventures are tailored just for you.
//         Discover personalized itineraries, real-time recommendations, and seamless travel experiences.
//       </p>
//       <button className="intro-button">Get Started</button>
//     </div>
//     </div>
    
//   );
// }

// export default Introduction;