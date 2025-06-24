import './drec_button.styles.scss';
import Dropdown from '../dropdown/dropdown.component.jsx';
import Activities from '../activities/activities.component.jsx';
import React, {useState} from 'react';

const DrecButtonContent = () => {

  const [submitClicked, setSubmit] = useState(false);
  const dropdowns = [
    {
      label: 'Traveler Type?',
      options: ['Couple', 'Solo', 'Family', "Friends"],
      placeholder: "Any",
    },
    {
      label: 'Budget ?',
      options: ['Budget', 'Mid-range', 'Luxury'],
      placeholder: "Any",
    },
    {
      label: 'When ?',
      options: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      placeholder: "Select an option",
    },
    {
      label: 'Regional Preference ?',
      options: ['Asia', "Europe", "Australia", "North-America", "South-America", "Africa"], 
      placeholder: "Any"
    },
    {
      label: 'Departure City ?',
      options: [],
      placeholder: "Enter the Value",
    },  
    {label: 'Activity Level ?',
      options: ['Low Intensity', "High Intensity"],
      placeholder: "Any",
    },
    {label: "Events", 
    options: ["Sports", "Hiking", "Business"], 
    placeholder: "Select an option"},
  ]

  const onSelect = () => {console.log("Option selected")};
  
  const handleSubmitClick = () => {
     setSubmit(true);
    
  };

  const onClickWork = () => {
    
    setSubmit(false);
  }

  return (
    <>
        { submitClicked ? (
          <div className="result-container" onClick = {onClickWork}>
        <p  className="result"> Work in progress </p>  </div> ): 
        (<div className="drec-total-container">
          <div className="drec-text">
            <p className="drec-text-element">Choose from the dropdowns below to explore different options.</p>
          </div><div className="dropdowns-container">
              {dropdowns.map((dropdown, index) => (
                <Dropdown className="dropdown-element"
                  key={index}
                  label={dropdown.label}
                  options={dropdown.options}
                  onSelect={onSelect}
                  placeholder={dropdown.placeholder || `Select from ${dropdown.label}`} />
              ))}
            </div><div className="activities-title">
              <p className="activities-title-text">Choose the Activities you would like to Explore</p>
            </div>
            <Activities className="activities-container" />
            <button onClick={handleSubmitClick}className="submit-button"> Submit</button>
          </div>)} </>
    
  );

  
};

export default DrecButtonContent;

