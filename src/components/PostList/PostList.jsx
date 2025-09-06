import React, { useState, useEffect } from 'react';
import './PostList.css'; // Crearemos este archivo ahora

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://dev-infinitamente-matematico-cms.pantheonsite.io/wp-json/wp/v2/posts');
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue OK');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <div>Cargando posts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="post-list-container">
            <h2>Últimas Entradas del Blog</h2>
            <div className="post-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <div
                            className="post-excerpt"
                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                        />
                        <a href={`/blog/${post.slug}`} className="read-more">Leer más...</a>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default PostList;