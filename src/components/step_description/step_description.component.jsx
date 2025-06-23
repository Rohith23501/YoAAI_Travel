import './step_description.styles.scss';

const StepInfo = ({ stepNumber, title, description, url }) => {
    return (
        <div className="step-info-container" style={{'--background-url':url ? `url(${url})`: 'none'} }>
            <h2 className="step-title">{stepNumber}</h2>
            <h3 className ="step-subtitle">{title}</h3>
            <p className="step-description">{description}</p>
        </div>
    );
}

export default StepInfo;