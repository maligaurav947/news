import React, { useState } from "react";

function NewsArticle({ data }) {
  const [img, setImg] = useState();

  return (
    <div className="main-blog__main__item">
      {data.urlToImage ? (
        <img src={data.urlToImage} />
      ) : (
        <img
          src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          style={{}}
        />
      )}
      <h3 className="news__title">{data.title}</h3>
      <span className="news__published">{data.publishedAt}</span>
      <p className="news__desc">{data.description}</p>
      <a href={data.url} target={"_blank"}>
        Learn More
      </a>
    </div>
  );
}

export default NewsArticle;
