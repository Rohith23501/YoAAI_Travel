import {Outlet} from 'react-router-dom';
import BlogDirectory from '../../components/blog_directory/blog_directory.component.jsx';
import './blog.styles.scss';
const Blog = () => {
    return (
        <div className="blog-container">
           
            <BlogDirectory />
            <Outlet/>
        </div>
    );
}

export default Blog;