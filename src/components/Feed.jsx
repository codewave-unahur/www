import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = ({ token, limit }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getInstagramPosts = async () => {
            try {
                const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,media_type,permalink&access_token=${token}&limit=${limit}`);
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error al obtener los posts de Instagram:', error);
            }
        };

        getInstagramPosts();
    }, [token, limit]);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                        <img src={post.media_url} alt={post.caption} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default InstagramFeed;
