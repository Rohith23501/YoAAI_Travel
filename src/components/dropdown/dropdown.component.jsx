import './dropdown.styles.scss'

const Dropdown = ({label, options, onSelect, placeholder}) => {
    return (
        <div className="dropdown-container">
            <label className="dropdown-label"> {label}</label>
            <select className="dropdown-select" >
                <input/>
                <option className="place-holder" >{placeholder}</option>
                
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option} 
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;

