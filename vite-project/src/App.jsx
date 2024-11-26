import React, { useState } from 'react';
import BlogForm from './Components/BlogForm';
import BlogList from './Components/BlogList';

function App() {
    const [blogs, setBlogs] = useState([]); 
    const [currentBlog, setCurrentBlog] = useState(null); 

    const saveBlog = (blog) => {
        if (blog.id) {
            setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b))); 
        } else {
            setBlogs([...blogs, { ...blog, id: Date.now() }]); 
        }
        setCurrentBlog(null); 
    };

    const deleteBlog = (id) => {
        const index = blogs.findIndex((blog) => blog.id === id); 
        if (index !== -1) {
            blogs.splice(index, 1); 
            setBlogs([...blogs]); 
        }
    };

    const editBlog = (blog) => setCurrentBlog(blog);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Simple Blog</h1>
            <BlogForm saveBlog={saveBlog} currentBlog={currentBlog} />
            <BlogList blogs={blogs} deleteBlog={deleteBlog} editBlog={editBlog} />
        </div>
    );
}

export default App;
