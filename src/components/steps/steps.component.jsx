import './steps.styles.scss';
import {useEffect} from 'react';
import StepInfo from '../step_description/step_description.component.jsx';

const Steps = () => {
    useEffect( () => {}, []);
    const steps = [{
        stepNumber: "1",
        title: "How to use this website",
        description: "This website is designed to help you plan your next trip by providing destination recommendations and comparisons. Follow these steps to get started:",
        url: "https://i.imgur.com/lz2WJjU.jpeg"  //town-dusk
    },
    {
        stepNumber: "2",
        title: "Destination Recommendation",
        description: "Click on the 'Destination Recommendation' button to get personalized travel suggestions based on your preferences.",
        url: "https://i.imgur.com/x9UMAHW.jpeg" //effiel-tower
    },
    {
        stepNumber: "3",
        title: "Compare Destinations",
        description: "Use the 'Compare Destinations' button to see side-by-side comparisons of different travel options.",
        url: "https://i.imgur.com/l8sfNlT.png"
    },
    {
        stepNumber: "4",
        title: "Explore More",
        description: "Feel free to explore other features and tools available on the site to enhance your travel planning experience.",
        url: "https://i.imgur.com/K2ZRqTM.jpeg"
    }];

    return (
        <div className="trip-instructions">
            <div className="trip-title-container"> <p className="trip-title">How to plan your trip</p></div>
        <div className="steps-container">

            {steps.map((step, index) => (
                <StepInfo  className="steps-item"
                    key={index}
                    stepNumber={step.stepNumber}
                    title={step.title}
                    description={step.description}
                    url = {step.url}
                />
            ))}
            
            </div>
        </div>
    )
}

export default Steps;