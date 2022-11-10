import React, { useState } from "react";

function NewsArticle({ data }) {
  return (
    <div className="main-blog__main__item">
      {data.image_url ? (
        <img src={data.image_url} />
      ) : (
        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
      )}
      <h3 className="news__title">{data.title}</h3>
      <span className="news__published">{data.pubDate}</span>
      <p className="news__desc">{data.description}</p>
      <a href={data.link} target={"_blank"}>
        Learn More
      </a>
    </div>
  );
}

export default NewsArticle;
