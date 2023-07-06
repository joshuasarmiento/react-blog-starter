import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ReactBlog</h1>
            <div className="links">
                <Link to="/react-blog-starter">Home</Link>
                <Link to="/react-blog-starter/about">About</Link>
                <Link to="/react-blog-starter/create">Create</Link>
            </div>
        </div>
    );
}
 
export default Navbar;