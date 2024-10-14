import React, { Component } from 'react';
import defaultImage from '../asset/image.png';

export default class NewsItem extends Component {
  render() {
    const { title, description, imgurl, newsUrl, author, publishedAt } = this.props;
    const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';

    return (
      <div className="my-4">
        <div className="card" style={{ width: '18rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', height: '100%' }}>
          <img
            className="card-img-top"
            src={imgurl || defaultImage}
            alt="News"
            style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
          />
          <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
            <h5 className="card-title" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
              {title ? title.slice(0, 60) : ""}...
            </h5>
            <p className="card-text" style={{ fontSize: '0.9rem', color: '#555', flexGrow: 1 }}>
              {description ? description.slice(0, 100) : ""}...
            </p>
            <p className="card-text" style={{ fontSize: '0.8rem', color: '#777' }}>
              <small>
                <strong>By:</strong> {author || "Unknown"} <br />
                <strong>Published:</strong> {formattedDate || "N/A"}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
              style={{
                backgroundColor: '#007BFF',
                borderColor: '#007BFF',
                borderRadius: '20px',
                padding: '0.3rem 1rem',
                transition: 'background-color 0.3s',
                marginTop: 'auto' // Push the button to the bottom of the card
              }}
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
