import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import { MagnifyingGlass } from "react-loader-spinner";
function News(props) {
  const { data } = useContext(NewsContext);
  return (
    <div className="main-blog">
      <div className="main-blog__main">
        {data ? (
          data.results.map((news) => <NewsArticle data={news} key={news.url} />)
        ) : (
          <>
            <MagnifyingGlass
              visible={true}
              height="120"
              width="120"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default News;
