import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './NewsItem.css'; 

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="card mb-4 shadow-sm h-100">
      <div className="position-relative">
        <img src={imageUrl || "https://via.placeholder.com/400x200?text=No+Image+Available"} 
             className="card-img-top" alt={title} style={{height: '200px', objectFit: 'cover'}} />
        <span className="position-absolute top-0 start-0 badge bg-danger m-2">
          {source}
        </span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="mt-auto">
          <p className="card-text">
            <small className="text-muted">
              <FontAwesomeIcon icon={faUser} className="me-1" />
              {author || "Unknown"}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
              {new Date(date).toLocaleDateString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            Read More <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
