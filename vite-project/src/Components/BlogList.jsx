import React from 'react';

function BlogList({ blogs, deleteBlog, editBlog }) {
    if (blogs.length === 0) return <p>No blogs to show. Add one!</p>; 

    return (
        <div>
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                    }}
                >
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button onClick={() => editBlog(blog)} style={{ marginRight: '10px' }}>
                        Edit
                    </button>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
