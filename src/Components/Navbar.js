import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ReactBlog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Create">Create</Link>
            </div>
        </div>
    );
}
 
export default Navbar;