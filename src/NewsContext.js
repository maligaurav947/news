import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
const apikey = process.env.REACT_APP_API_KEY;
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=${apikey}&country=in,au&category=technology,science`
      )
      .then((response) => setData(response.data))
      .catch((error) => error);
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
