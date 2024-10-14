import React, { useEffect, useState, useCallback, useRef } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import './News.css'; 

const News = (props) => {
  const { country, category, apiKey, pageSize, setProgress } = props;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = useCallback(async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=en`;

    setLoading(true);
    
    try {
      let response = await fetch(url);
      setProgress(30);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let parsedData = await response.json();
      setProgress(70);

      if (parsedData.articles && parsedData.articles.length > 0) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults || 0);
      } else {
        console.warn("No articles received from the API");
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      setProgress(100);
    }
  }, [country, category, apiKey, pageSize, page, setProgress]);

  useEffect(() => {
    mountedRef.current = true;
    document.title = `${capitalizeFirstLetter(category)} - NewsHuB`;
    updateNews();
    return () => {
      mountedRef.current = false;
    };
  }, [category, updateNews]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}&language=en`;
    
    try {
      let data = await fetch(url);
      
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      let parsedData = await data.json();
      if (mountedRef.current) {
        setArticles(prevArticles => [...prevArticles, ...(parsedData.articles || [])]);
        setTotalResults(parsedData.totalResults || 0);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error fetching more articles:", error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        NewsDuniya- Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading more articles...</h4>}
        endMessage={<p style={{ textAlign: 'center' }}><b>You have seen it all!</b></p>}
      >
        <div className="container">
          {loading && articles.length === 0 && <h4 className="text-center">Loading...</h4>}

          {!loading && articles.length === 0 && (
            <div className="text-center">
              <h4>No articles found</h4>
            </div>
          )}

          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={element.url + index}>
                <NewsItem 
                  title={element.title ? element.title : ""} 
                  description={element.description ? element.description : ""} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                  author={element.author} 
                  date={element.publishedAt} 
                  source={element.source.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
