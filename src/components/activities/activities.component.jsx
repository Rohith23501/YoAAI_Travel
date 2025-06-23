import './activities.styles.scss';
import Activity from '../activity/activity.component.jsx'
import React, { useState } from 'react';

const Activities = () => {
    const [activities, setActivities] = useState([
        {
            id : 1,
            url:"https://i.imgur.com/wJWBc2H.jpeg",
            title:"fun activities",
            rank: 0
        },
        {
            id : 2,  
            url: "https://i.imgur.com/FcDmzqc.png", 
            title: "night-life",
            rank: 0
        }, 
        {
            id : 3,
            url: "https://i.imgur.com/PsKqQL8.png", 
            title: "beach",
            rank: 0
        }, 
        {
            id : 4,
            url: "https://i.imgur.com/tTKpvMV.png", 
            title: "culture&heritage",
            rank: 0
        }, 
        {   id : 5,
            url: "https://i.imgur.com/FTtOtGX.jpeg", 
            title: "nature",
            rank: 0
        },
        {
            id : 6, 
            url : "https://i.imgur.com/jUt6stm.png",
            title : "shopping",
            rank: 0
        }
    ]);

   const handleCardClick = (activity_id) =>{
    setActivities( (prevActivities) => {
        const updatedActivities = prevActivities.map(button=> ({ ...button}) );
        const clickedActivity = updatedActivities.find( b => b.id === activity_id);

        if (clickedActivity.rank === 0){
            const currentMaxRank = Math.max(0, ...updatedActivities.map(b => b.rank));
            clickedActivity.rank = currentMaxRank + 1;
        }
        else {
            const oldRankClickedActivity = clickedActivity.rank;

            clickedActivity.rank = 0;

            updatedActivities.forEach(ActivityItem => {
                if (ActivityItem !== clickedActivity && ActivityItem.rank > oldRankClickedActivity){
                    ActivityItem.rank --;
                }
            });
        }

        return updatedActivities
    });


   };
 
    return (
        <div className="activity-blocks-container">
           
                 {activities.map((activity) => (
                    <Activity className="activity-items" 
                    onClick= {() => handleCardClick(activity.id)}
                    key= {activity.id} 
                    url={activity.url} 
                    title={activity.title} 
                    rank={activity.rank}/>))}
           
           
        </div>
    );
}

export default Activities;