import React from "react";
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { useNavigate  } from 'react-router-dom'

const BlogDetails = () => {
    const {id} = useParams();
    const { data, isLoading, error } = useFetch(`http://localhost:8080/blogs/${id}`);
    const navigateTo = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:8080/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            // window.location = '/';
            navigateTo('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isLoading && <h2>Loading...</h2>}
            { error && <h2>{error}</h2>}
            { data && (
                <article className="blog-detail">
                    <h2 className="blogDetail-title">{data.title}</h2>
                    <p className="blogDetail-author">Written by {data.author}</p>
                    <div className="blogDetail">{data.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div> );
}
 
export default BlogDetails;