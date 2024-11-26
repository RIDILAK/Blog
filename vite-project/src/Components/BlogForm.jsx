import React, { useState, useEffect } from 'react';

function BlogForm({ saveBlog, currentBlog }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentBlog) {
            setTitle(currentBlog.title);
            setContent(currentBlog.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [currentBlog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return alert('Please enter title and content!');
        saveBlog({ id: currentBlog?.id, title, content }); 
        setTitle(''); 
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h2>{currentBlog ? 'Edit Blog' : 'Add Blog'}</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: '10px', display: 'block', width: '100%' }}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: '100%', height: '100px', marginBottom: '10px' }}
            />
            <button type="submit">{currentBlog ? 'Update Blog' : 'Add Blog'}</button>
        </form>
    );
}

export default BlogForm;
