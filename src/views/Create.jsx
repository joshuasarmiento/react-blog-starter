import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Joshua')
    const [isLoading, setIsLoading] = useState(false);
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsLoading(true);

        fetch('https://project-apis.onrender.com/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsLoading(false);
            // window.location = '/';
            navigateTo('/');
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    type="text" 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select 
                    name="" 
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Joshua">Joshua</option>
                    <option value="Biboy">Biboy</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding blog..</button> }
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default CreateBlog;