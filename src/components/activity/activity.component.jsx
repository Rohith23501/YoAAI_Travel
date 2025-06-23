import './activity.styles.scss';

const Activity = ({url, title, rank, onClick }) => {
 

    return (
        <div className="activity-block-container" onClick = {onClick}>

            <div className="activity-image-sub-container">
                <div className="activity-image-wrapper">
                    <img className="activity-display-image" src={url} alt="Activity Logo" />
                </div>
            </div>

            <div className="activity-title-block">
                <p className="activity-title">{title}</p>
            </div>
            { rank===0 ? null: <div className="activity-rank-badge"> {rank} </div>} 
           
        </div>
    );
}

export default Activity;