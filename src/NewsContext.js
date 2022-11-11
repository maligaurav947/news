import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
const apikey = process.env.REACT_APP_API_KEY;
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
console.log("====================================");
console.log(data);
console.log("====================================");
useEffect(() => {
  axios
    .get(
      `https://newsdata.io/api/1/news?apikey=${apikey}&country=in,au&category=technology&language=en`
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
