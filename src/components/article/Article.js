import React from 'react';
import './article.css';

export default function Article({ imgURL, date, title }) {
  return (
    <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-image">
          <img src={imgURL} alt="article" />
        </div>
        <div className="gpt3__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>Read Full Article</p>
          </div>
        </div>
    </div>
  );
}
