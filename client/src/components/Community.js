// src/components/Community.js
import React, { useEffect, useState } from 'react';
import communityService from '../services/communityService';

function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await communityService.getPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="community-container">
      <h2>Community Forum</h2>
      {posts.map((post) => (
        <div key={post.id} className="forum-post">
          <h3>{post.username}</h3>
          <p>{post.comment}</p>
          <button>Reply</button>
        </div>
      ))}
    </div>
  );
}

export default Community;
