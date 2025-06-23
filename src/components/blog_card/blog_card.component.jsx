import './blog_card.styles.scss';
import {useState} from 'react';


const BlogCard = ({sample_card}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        
        <div className="blog-card"  onMouseEnter={() => setIsHovered(true)}
        
                                    onMouseLeave={() => setIsHovered(false)}>

            
            <img src={sample_card.image} alt="Blog Post" className="blog-card-image" />
            <div className="blog-card-content">
                { (isHovered) ? 
                    (<p className="blog-card-description"> {sample_card.description}</p>):
                    (<p className="blog-card-title">{sample_card.title} </p>)
                }
            </div>
           

            
            
        </div>
    );
}

export default BlogCard;