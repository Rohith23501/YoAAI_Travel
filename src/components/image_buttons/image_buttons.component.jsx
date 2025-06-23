// ImageWithButtons.jsx
import {useState, useEffect} from 'react';
import './image_buttons.styles.scss'; // Import the SCSS file
import button_image from './image_component_1.png'; // Ensure this image is in the correct path
import CompDesButtonContent from '../compdes_button/compdes_button.component.jsx';
import DrecButtonContent from '../drec_button/drec_button.component.jsx';


function ImageWithButtons() {
  const [Button, setButton] = useState("first");
  

    const buttons = [{"type": "button", 
        "text": "Destination Recommendation", 
        "onClick": () => {setButton("first");}, 
        "className": "primary-button"},
        {"type": "button",
        "text": "Compare Destinations", 
        "onClick": () => {setButton("second");},
        "className": "secondary-button"},
    
    ]
    console.log("image button once")
    return (

    <div className="image-with-buttons-container">
      <div className="image-sub-container">
          <div className="image-wrapper">
            <img src="https://i.imgur.com/xmNLigZ.jpeg" alt="Image encapsulating our goal" className="display-image" />
          </div>
          <div className="buttons-wrapper">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    type={button.type || 'button'}
                    onClick={button.onClick}
                    className={`action-button ${button.className || ''}`}
                >
                  {button.text}
                </button>  ))
            }
            
        
          </div>
      </div>
      <div className="image-buttons-container">
            
                      {Button === "first" ? (
                                              <DrecButtonContent className="image-button" />
                                            ) : Button === "second" ? (
                                              <CompDesButtonContent className="image-button"/>
                                            ) : null}
            
           
        <div>

        </div>
        
      </div>

    
      
    </div>
  );
}

export default ImageWithButtons;