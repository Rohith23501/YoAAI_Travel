import BlogCard from '../blog_card/blog_card.component.jsx';
import './blog_directory.styles.scss';
import {useState, useEffect} from 'react';
const BlogDirectory = () => {
    const [sample_cards, setSampleCards] = useState([]);
    useEffect(() => 
        {
            fetch("https://raw.githubusercontent.com/Rohith23501/FoodVisionMini/refs/heads/main/travel_destinations_clean.json")
            .then((response) => response.json())
            .then((blogs) => setSampleCards(blogs));
        }
            , []);


    return (
        <div className="blog-component-container"> 
            <h className="blog-container-title"> Explore </h>
            <div className="blog-container">
                {sample_cards.map((card, index) => (
                    <BlogCard className="blog-container-element"
                        key={index}
                        sample_card = {card}
                    
                    />
                ))}
            
            
            </div>
        </div>
    );
}

export default BlogDirectory;