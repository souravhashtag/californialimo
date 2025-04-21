import React from 'react';
import { useParams } from 'react-router-dom';
import blog from '../assets/Data/blog.json';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blog.find(post => post.id === Number(id)); // Convert id to number

  const { title, date, image, description } = post;
  const [mainDesc] = description;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
<section className="blog-details">
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </header>
      <div className="content-section container">
        <div className="row">
          <div className="col-sm-12">
            <img src={image} alt={title} className="img-responsive" />
            <div className="blog-details-content">
              <span>{date}</span>
              
              <h1>{mainDesc.maintitle}</h1>
              <div className="blog-footer">
                <b>by Steak House</b>
              </div>
              <p>{mainDesc.mainintroduction}</p>
              {mainDesc.sections.map((section, index) => (
                <div key={index}>
                  <h2>{section.subtitle}</h2>
                  <p>{section.subcontent}</p>
                </div>
              ))}
    

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
