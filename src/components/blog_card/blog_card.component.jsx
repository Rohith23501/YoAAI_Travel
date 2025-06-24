import './blog_card.styles.scss';
import {useState} from 'react';


const BlogCard = ({sample_card}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        
        <div className="blog-card" 
            style={{'--background-url':sample_card.url ? `url(${sample_card.url})`: `url('https://i.imgur.com/lz2WJjU.jpeg')`} }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            
           
            <>
                { (isHovered) ? 
                    (<p className="blog-card-description"> {sample_card.description}</p>):
                    (<p className="blog-card-title">{sample_card.title} </p>)
                }
            </>
           
           

            
            
        </div>
    );
}

export default BlogCard;