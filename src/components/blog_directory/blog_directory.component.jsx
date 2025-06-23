import BlogCard from '../blog_card/blog_card.component.jsx';
import './blog_directory.styles.scss';

const BlogDirectory = () => {
    const sample_cards = [
        {
            title: "Exploring the Wonders of AI in Travel",
            description: `Discover how AI is revolutionizing the travel industry,
                          from personalized itineraries to real-time recommendations.`,
            image: "https://ai4trips.com/blog/wp-content/uploads/2024/06/10-Best-AI-Travel-Planner-Tools-for-Your-Next-Trip.webp",
        },
        {
            title: "Top 10 Destinations for 2024",
            description: `Uncover the most exciting travel destinations for 2024,
                          featuring hidden gems and popular hotspots.`,
            image: "https://ai4trips.com/blog/wp-content/uploads/2024/06/The-Ultimate-Trip-to-Australia.webp",
        },
        {
            title: "Sustainable Travel Tips",
            description: `Learn how to travel responsibly and sustainably,
                          minimizing your carbon footprint while exploring the world.`,
            image: "https://ai4trips.com/blog/wp-content/uploads/2024/06/Travel-AI-Revolutionizing-Your-Journey-with-ai4trips.webp",
        },
        {
            title: "Cultural Etiquette Around the World",
            description: `A guide to understanding and respecting cultural differences
                          while traveling, ensuring a more enriching experience.`,
            image: "https://ai4trips.com/blog/wp-content/uploads/2024/06/10-Best-AI-Travel-Planner-Tools-for-Your-Next-Trip.webp",
        },
        {
            title: "The Future of AI in Travel",
            description: `Exploring the potential advancements in AI technology
                          and how they will shape the future of travel.`,
            image: "https://ai4trips.com/blog/wp-content/uploads/2024/06/The-Ultimate-Trip-to-Australia.webp",
        },
        
        
    ];

    return (
        <div className="blog-container">
            {sample_cards.map((card, index) => (
                <BlogCard className="blog-container-element"
                    key={index}
                    sample_card = {card}
                />
            ))}
            
            
        </div>
    );
}

export default BlogDirectory;