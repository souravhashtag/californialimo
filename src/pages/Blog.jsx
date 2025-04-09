import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPost from '../assets/Data/blog.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPost);
  }, []);

  return (
    <section className="blog">
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </header>
      <div className="content-section container">
        <div className="row">
          {posts.map(post => (
            <div key={post.id} className="col-sm-4 blog-list">
              <img src={post.image} alt={post.title} className="img-responsive"  />
              <div className="blog-list-content">
                <span>{post.date}</span>
                <div className="title rainbow">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </div>
                <div className="blog-footer">
                  <b> by Steak House</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
