import React from 'react';
import BlogList from "../Components/BlogList";
import useFetch from "../utils/useFetch";

const Homepage = () => {
    const { data: blogs, isLoading, error } = useFetch("https://project-apis.onrender.com/blogs");

    return (    
        <div className="home">
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Homepage;