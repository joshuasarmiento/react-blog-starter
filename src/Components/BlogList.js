import React from 'react';
import { Link } from 'react-router-dom';


const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <div className="blog-title-btn">
                                <span>
                                    <h2>{blog.title}</h2>
                                    <p className="blog-author">Written by {blog.author}</p>
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            })}
    </div>
    );
}
 
export default BlogList;