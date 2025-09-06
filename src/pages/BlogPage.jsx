import React from 'react';
import PostList from '../components/PostList/PostList';

const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>Explora nuestros artículos, guías y tutoriales.</p>
            <PostList />
        </div>
    );
};

export default BlogPage;