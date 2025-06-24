import './compdes_button.styles.scss';
import Dropdown from '../dropdown/dropdown.component.jsx';
import Activities from '../activities/activities.component.jsx'

const CompDesButtonContent = () => {


  const dropdowns = [
    {
      label: 'Traveler Type?',
      options: ['Solo', 'Couple', 'Family', 'Friends'],
      placeholder: "Any",
    },
    {
      label: 'Destination 1',
      options: ['New York', 'Delhi', 'Tokyo', "Beijing", "California", "Preston", "London", "Paris"],
      placeholder: "Select an option",
    },
    {
      label: 'Dropdown 3',
      options: ['New York', 'Delhi', 'Tokyo', "Beijing", "California", "Preston", "London", "Paris"],
      placeholder: "Select an option",
    },
    {
      label: 'Budget ?',
      options: ['Mid-Budget', 'Luxury', 'Budget'], 
      placeholder: "Any"
    },
    { label: "Purspose",
      options: ["Trip", "Business", "Vaction"],
      placeholder: "Any"
    }

  ]

  const onSelect = () => {console.log("Option selected")};



  return (
    <div className= "drec-total-container">
        <div className="drec-text">
        <p className="drec-text-element">Choose from the dropdowns below to explore different options.</p>
        </div>
        <div className="dropdowns-container">
            {dropdowns.map((dropdown, index) => (
            <Dropdown
                key={index}
                label={dropdown.label}
                options={dropdown.options}
                onSelect={onSelect}
                placeholder={dropdown.placeholder || `Select from ${dropdown.label}`}
            />    
            ))}
        </div>
                <div className="activities-title"> 
            <p className="activities-title-text">Choose the Activities you would like to Explore</p>
        </div>
        <div className="activities-container"><Activities/></div>
        <button className="submit-button"> Submit</button>
    </div>
  );

  
}

export default CompDesButtonContent;

